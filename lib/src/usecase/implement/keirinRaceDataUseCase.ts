import { inject, injectable } from 'tsyringe';

import { KeirinPlaceData } from '../../domain/keirinPlaceData';
import { KeirinRaceData } from '../../domain/keirinRaceData';
import { IPlaceRepository } from '../../repository/interface/IPlaceRepository';
import { IRaceRepository } from '../../repository/interface/IRaceRepository';
import { FetchPlaceListRequest } from '../../repository/request/fetchPlaceListRequest';
import { FetchRaceListRequest } from '../../repository/request/fetchRaceListRequest';
import { RegisterRaceListRequest } from '../../repository/request/registerRaceListRequest';
import { FetchPlaceListResponse } from '../../repository/response/fetchPlaceListResponse';
import { FetchRaceListResponse } from '../../repository/response/fetchRaceListResponse';
import { Logger } from '../../utility/logger';
import { IRaceDataUseCase } from '../interface/IRaceDataUseCase';

/**
 * 競馬場開催データUseCase
 */
@injectable()
export class KeirinRaceDataUseCase implements IRaceDataUseCase<KeirinRaceData> {
    constructor(
        @inject('KeirinPlaceRepositoryFromStorage')
        private readonly keirinPlaceRepositoryFromStorage: IPlaceRepository<KeirinPlaceData>,
        @inject('KeirinRaceRepositoryFromStorage')
        private readonly keirinRaceRepositoryFromStorage: IRaceRepository<
            KeirinRaceData,
            KeirinPlaceData
        >,
        @inject('KeirinRaceRepositoryFromHtml')
        private readonly keirinRaceRepositoryFromHtml: IRaceRepository<
            KeirinRaceData,
            KeirinPlaceData
        >,
    ) {}
    /**
     * レース開催データを取得する
     * @param startDate
     * @param finishDate
     */
    async fetchRaceDataList(
        startDate: Date,
        finishDate: Date,
    ): Promise<KeirinRaceData[]> {
        // 競馬場データを取得する
        const placeList = await this.getPlaceDataList(startDate, finishDate);

        // レースデータを取得する
        return this.getRaceDataList(
            startDate,
            finishDate,
            placeList,
            'storage',
        );
    }

    /**
     * レース開催データを更新する
     *
     * @param startDate
     * @param finishDate
     */
    @Logger
    async updateRaceDataList(startDate: Date, finishDate: Date): Promise<void> {
        try {
            // 競馬場データを取得する
            const placeList = await this.getPlaceDataList(
                startDate,
                finishDate,
            );

            // レースデータを取得する
            const raceList = await this.getRaceDataList(
                startDate,
                finishDate,
                placeList,
                'web',
            );

            // S3にデータを保存する
            await this.registerRaceDataList(raceList);
        } catch (error) {
            console.error('レースデータの更新中にエラーが発生しました:', error);
        }
    }

    /**
     * 競馬場データの取得
     *
     * @param startDate
     * @param finishDate
     */
    @Logger
    private async getPlaceDataList(
        startDate: Date,
        finishDate: Date,
    ): Promise<KeirinPlaceData[]> {
        const fetchPlaceListRequest: FetchPlaceListRequest =
            new FetchPlaceListRequest(startDate, finishDate);
        const fetchPlaceListResponse: FetchPlaceListResponse<KeirinPlaceData> =
            await this.keirinPlaceRepositoryFromStorage.fetchPlaceList(
                fetchPlaceListRequest,
            );
        return fetchPlaceListResponse.placeDataList;
    }

    /**
     * レースデータを取得する
     * S3から取得する場合はstorage、Webから取得する場合はwebを指定する
     *
     * @param startDate
     * @param finishDate
     * @param placeList
     * @param type
     */
    @Logger
    private async getRaceDataList(
        startDate: Date,
        finishDate: Date,
        placeList: KeirinPlaceData[],
        type: 'storage' | 'web',
    ): Promise<KeirinRaceData[]> {
        const fetchRaceListRequest = new FetchRaceListRequest<KeirinPlaceData>(
            startDate,
            finishDate,
            placeList,
        );
        const fetchRaceListResponse: FetchRaceListResponse<KeirinRaceData> =
            type === 'storage'
                ? await this.keirinRaceRepositoryFromStorage.fetchRaceList(
                      fetchRaceListRequest,
                  )
                : await this.keirinRaceRepositoryFromHtml.fetchRaceList(
                      fetchRaceListRequest,
                  );
        return fetchRaceListResponse.raceDataList;
    }

    /**
     * レースデータを登録する
     *
     * @param raceList
     */
    @Logger
    private async registerRaceDataList(
        raceList: KeirinRaceData[],
    ): Promise<void> {
        const registerRaceListRequest =
            new RegisterRaceListRequest<KeirinRaceData>(raceList);
        await this.keirinRaceRepositoryFromStorage.registerRaceList(
            registerRaceListRequest,
        );
    }
}
