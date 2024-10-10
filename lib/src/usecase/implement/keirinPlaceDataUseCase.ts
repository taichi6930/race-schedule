import { inject, injectable } from 'tsyringe';

import { KeirinPlaceData } from '../../domain/keirinPlaceData';
import { IPlaceRepository } from '../../repository/interface/IPlaceRepository';
import { FetchPlaceListRequest } from '../../repository/request/fetchPlaceListRequest';
import { RegisterPlaceListRequest } from '../../repository/request/registerPlaceListRequest';
import { FetchPlaceListResponse } from '../../repository/response/fetchPlaceListResponse';
import { Logger } from '../../utility/logger';
import { IPlaceDataUseCase } from '../interface/IPlaceDataUseCase';

@injectable()
export class KeirinPlaceDataUseCase
    implements IPlaceDataUseCase<KeirinPlaceData>
{
    constructor(
        @inject('KeirinPlaceRepositoryFromStorage')
        private readonly keirinPlaceRepositoryFromStorage: IPlaceRepository<KeirinPlaceData>,
        @inject('KeirinPlaceRepositoryFromHtml')
        private readonly keirinPlaceRepositoryFromHtml: IPlaceRepository<KeirinPlaceData>,
    ) {}
    /**
     * レース開催データを取得する
     *
     * @param startDate
     * @param finishDate
     * @returns
     */
    @Logger
    async fetchPlaceDataList(
        startDate: Date,
        finishDate: Date,
    ): Promise<KeirinPlaceData[]> {
        const request: FetchPlaceListRequest = new FetchPlaceListRequest(
            startDate,
            finishDate,
        );
        const response: FetchPlaceListResponse<KeirinPlaceData> =
            await this.keirinPlaceRepositoryFromStorage.fetchPlaceList(request);
        return response.placeDataList;
    }

    /**
     * レース開催データを更新する
     *
     * @param startDate
     * @param finishDate
     */
    @Logger
    async updatePlaceDataList(
        startDate: Date,
        finishDate: Date,
    ): Promise<void> {
        // startDateは月の1日に設定する
        const modifyStartDate = new Date(
            startDate.getFullYear(),
            startDate.getMonth(),
            1,
        );
        // finishDateは月の最終日に設定する
        const modifyFinishDate = new Date(
            finishDate.getFullYear(),
            finishDate.getMonth() + 1,
            0,
        );
        // HTMLからデータを取得する
        const fetchPlaceListRequest: FetchPlaceListRequest =
            new FetchPlaceListRequest(modifyStartDate, modifyFinishDate);
        const fetchPlaceListResponse: FetchPlaceListResponse<KeirinPlaceData> =
            await this.keirinPlaceRepositoryFromHtml.fetchPlaceList(
                fetchPlaceListRequest,
            );
        // S3にデータを保存する
        const registerPlaceListRequest =
            new RegisterPlaceListRequest<KeirinPlaceData>(
                fetchPlaceListResponse.placeDataList,
            );
        await this.keirinPlaceRepositoryFromStorage.registerPlaceList(
            registerPlaceListRequest,
        );
    }
}
