import { inject, injectable } from 'tsyringe';

import { JraPlaceData } from '../../domain/jraPlaceData';
import { IPlaceRepository } from '../../repository/interface/IPlaceRepository';
import { FetchPlaceListRequest } from '../../repository/request/fetchPlaceListRequest';
import { RegisterPlaceListRequest } from '../../repository/request/registerPlaceListRequest';
import { FetchPlaceListResponse } from '../../repository/response/fetchPlaceListResponse';
import { Logger } from '../../utility/logger';
import { IPlaceDataUseCase } from '../interface/IPlaceDataUseCase';

@injectable()
export class JraPlaceDataUseCase implements IPlaceDataUseCase<JraPlaceData> {
    constructor(
        @inject('JraPlaceRepositoryFromS3')
        private readonly jraPlaceRepositoryFromS3: IPlaceRepository<JraPlaceData>,
        @inject('JraPlaceRepositoryFromHtml')
        private readonly jraPlaceRepositoryFromHtml: IPlaceRepository<JraPlaceData>,
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
    ): Promise<JraPlaceData[]> {
        const request: FetchPlaceListRequest = new FetchPlaceListRequest(
            startDate,
            finishDate,
        );
        const response: FetchPlaceListResponse<JraPlaceData> =
            await this.jraPlaceRepositoryFromS3.fetchPlaceList(request);
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
        // startDateは年の1日に設定する
        const modifyStartDate = new Date(startDate.getFullYear(), 0, 1);
        // finishDateは年の最終日に設定する
        const modifyFinishDate = new Date(finishDate.getFullYear() + 1, 0, 0);
        // HTMLからデータを取得する
        const fetchPlaceListRequest: FetchPlaceListRequest =
            new FetchPlaceListRequest(modifyStartDate, modifyFinishDate);
        const fetchPlaceListResponse: FetchPlaceListResponse<JraPlaceData> =
            await this.jraPlaceRepositoryFromHtml.fetchPlaceList(
                fetchPlaceListRequest,
            );
        // S3にデータを保存する
        const registerPlaceListRequest =
            new RegisterPlaceListRequest<JraPlaceData>(
                fetchPlaceListResponse.placeDataList,
            );
        await this.jraPlaceRepositoryFromS3.registerPlaceList(
            registerPlaceListRequest,
        );
    }
}
