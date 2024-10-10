import 'reflect-metadata';
import '../../utility/format';

import { inject, injectable } from 'tsyringe';

import { KeirinPlaceData } from '../../domain/keirinPlaceData';
import { IS3Gateway } from '../../gateway/interface/iS3Gateway';
import {
    KeirinGradeType,
    KeirinRaceCourse,
} from '../../utility/data/raceSpecific';
import { Logger } from '../../utility/logger';
import { IPlaceRepository } from '../interface/IPlaceRepository';
import { FetchPlaceListRequest } from '../request/fetchPlaceListRequest';
import { RegisterPlaceListRequest } from '../request/registerPlaceListRequest';
import { FetchPlaceListResponse } from '../response/fetchPlaceListResponse';
import { RegisterPlaceListResponse } from '../response/registerPlaceListResponse';

/**
 * 競輪場データリポジトリの実装
 */
@injectable()
export class KeirinPlaceRepositoryFromStorageImpl
    implements IPlaceRepository<KeirinPlaceData>
{
    constructor(
        @inject('KeirinPlaceS3Gateway')
        private readonly s3Gateway: IS3Gateway<KeirinPlaceData>,
    ) {}
    /**
     * 競輪場開催データを取得する
     *
     * このメソッドで日付の範囲を指定して競輪場開催データを取得する
     *
     * @param request - 開催データ取得リクエスト
     * @returns Promise<FetchPlaceListResponse<KeirinPlaceData>> - 開催データ取得レスポンス
     */
    @Logger
    async fetchPlaceList(
        request: FetchPlaceListRequest,
    ): Promise<FetchPlaceListResponse<KeirinPlaceData>> {
        const fileNames: string[] = await this.generateFileNames(
            request.startDate,
            request.finishDate,
        );
        console.log(fileNames);
        const promises = fileNames.map(async (fileName) =>
            this.fetchMonthPlaceDataList(fileName).then((childPlaceDataList) =>
                childPlaceDataList.filter(
                    (placeData) =>
                        placeData.dateTime >= request.startDate &&
                        placeData.dateTime <= request.finishDate,
                ),
            ),
        );
        const placeDataLists = await Promise.all(promises);
        const placeDataList = placeDataLists.flat();
        return new FetchPlaceListResponse(placeDataList);
    }

    /**
     * csvのファイル名リストを生成する
     *
     * startDateからfinishDateまでの月ごとのファイル名リストを生成する
     * 月毎のファイル名が欲しいので、複数のファイル名を返す
     *
     * @param startDate
     * @param finishDate
     * @returns
     */
    @Logger
    private async generateFileNames(
        startDate: Date,
        finishDate: Date,
    ): Promise<string[]> {
        const fileNames: string[] = [];
        let currentDate = new Date(startDate);

        while (currentDate <= finishDate) {
            const year = currentDate.getFullYear();
            const month = currentDate.getXDigitMonth(2);
            const fileName = `${year}${month}.csv`;
            fileNames.push(fileName);

            // 次の月の1日を取得
            currentDate = new Date(year, currentDate.getMonth() + 1, 1);
        }
        console.debug(
            `ファイル名リストを生成しました: ${fileNames.join(', ')}`,
        );
        return Promise.resolve(fileNames);
    }

    /**
     * S3から競輪場開催データを取得する
     *
     * ファイル名を利用してS3から競輪場開催データを取得する
     * placeDataが存在しない場合はundefinedを返すので、filterで除外する
     *
     * @param fileName
     * @returns
     */
    @Logger
    private async fetchMonthPlaceDataList(
        fileName: string,
    ): Promise<KeirinPlaceData[]> {
        console.log(`S3から${fileName}を取得します`);
        const csv = await this.s3Gateway.fetchDataFromS3(fileName);
        const placeDataList: KeirinPlaceData[] = csv
            .split('\n')
            .map((line: string) => {
                const [raceDate, place, grade] = line.split(',');
                return new KeirinPlaceData(
                    new Date(raceDate),
                    place as KeirinRaceCourse,
                    grade as KeirinGradeType,
                );
            })
            .filter((placeData) => placeData !== undefined);
        return placeDataList;
    }

    @Logger
    async registerPlaceList(
        request: RegisterPlaceListRequest<KeirinPlaceData>,
    ): Promise<RegisterPlaceListResponse> {
        const placeDataList: KeirinPlaceData[] = request.placeDataList;
        // 得られたplaceを月毎に分ける
        const placeDataDict: Record<string, KeirinPlaceData[]> = {};
        placeDataList.forEach((placeData) => {
            const key = `${placeData.dateTime.getFullYear()}${placeData.dateTime.getXDigitMonth(2)}.csv`;
            if (!placeDataDict[key]) {
                placeDataDict[key] = [];
            }
            placeDataDict[key].push(placeData);
        });

        // 月毎に分けられたplaceをS3にアップロードする
        for (const [fileName, placeData] of Object.entries(placeDataDict)) {
            await this.s3Gateway.uploadDataToS3(placeData, fileName);
        }

        return new RegisterPlaceListResponse(200);
    }
}
