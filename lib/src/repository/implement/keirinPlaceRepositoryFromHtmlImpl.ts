import 'reflect-metadata';

import * as cheerio from 'cheerio';
import { formatDate } from 'date-fns';
import { inject, injectable } from 'tsyringe';

import { KeirinPlaceData } from '../../domain/keirinPlaceData';
import { IKeirinPlaceDataHtmlGateway } from '../../gateway/interface/iKeirinPlaceDataHtmlGateway';
import {
    KeirinGradeType,
    KeirinRaceCourse,
    keirinRaceCourseList,
} from '../../utility/data/raceSpecific';
import { Logger } from '../../utility/logger';
import { IPlaceRepository } from '../interface/IPlaceRepository';
import { FetchPlaceListRequest } from '../request/fetchPlaceListRequest';
import { RegisterPlaceListRequest } from '../request/registerPlaceListRequest';
import { FetchPlaceListResponse } from '../response/fetchPlaceListResponse';
import { RegisterPlaceListResponse } from '../response/registerPlaceListResponse';

/**
 * 競馬場データリポジトリの実装
 */
@injectable()
export class KeirinPlaceRepositoryFromHtmlImpl
    implements IPlaceRepository<KeirinPlaceData>
{
    constructor(
        @inject('KeirinPlaceDataHtmlGateway')
        private readonly keirinPlaceDataHtmlGateway: IKeirinPlaceDataHtmlGateway,
    ) {}

    /**
     * 競馬場開催データを取得する
     *
     * このメソッドで日付の範囲を指定して競馬場開催データを取得する
     *
     * @param request - 開催データ取得リクエスト
     * @returns Promise<FetchPlaceListResponse<KeirinPlaceData>> - 開催データ取得レスポンス
     */
    @Logger
    async fetchPlaceList(
        request: FetchPlaceListRequest,
    ): Promise<FetchPlaceListResponse<KeirinPlaceData>> {
        const months: Date[] = await this.generateMonths(
            request.startDate,
            request.finishDate,
        );
        const promises = months.map(async (month) =>
            this.fetchMonthPlaceDataList(month).then((childPlaceDataList) =>
                childPlaceDataList.filter(
                    (placeData) =>
                        placeData.dateTime >= request.startDate &&
                        placeData.dateTime <= request.finishDate,
                ),
            ),
        );
        const placeDataLists = await Promise.all(promises);
        const placeDataList = placeDataLists.flat();
        console.log(placeDataList);
        return new FetchPlaceListResponse(placeDataList);
    }

    /**
     * ターゲットの月リストを生成する
     *
     * startDateからfinishDateまでの月のリストを生成する
     *
     * @param startDate
     * @param finishDate
     * @returns
     */
    @Logger
    private generateMonths(startDate: Date, finishDate: Date): Promise<Date[]> {
        console.log('startDate', startDate);
        console.log('finishDate', finishDate);
        const months: Date[] = [];
        let currentDate = new Date(startDate);

        while (currentDate <= finishDate) {
            const year = currentDate.getFullYear();
            const month = currentDate.getXDigitMonth(2);
            const date = new Date(year, Number(month) - 1, 1);
            months.push(date);

            // 次の月の1日を取得
            currentDate = new Date(year, currentDate.getMonth() + 1, 1);
        }
        console.log(
            `月リストを生成しました: ${months.map((month) => formatDate(month, 'yyyy-MM-dd'))}`,
        );
        return Promise.resolve(months);
    }

    /**
     * S3から競馬場開催データを取得する
     *
     * ファイル名を利用してS3から競馬場開催データを取得する
     * placeDataが存在しない場合はundefinedを返すので、filterで除外する
     *
     * @param date
     * @returns
     */
    @Logger
    private async fetchMonthPlaceDataList(
        date: Date,
    ): Promise<KeirinPlaceData[]> {
        const keirinPlaceDataList: KeirinPlaceData[] = [];
        console.log(`HTMLから${formatDate(date, 'yyyy-MM')}を取得します`);
        // レース情報を取得
        const htmlText: string =
            await this.keirinPlaceDataHtmlGateway.getPlaceDataHtml(date);

        const $ = cheerio.load(htmlText);

        const chartWrapprer = $('#content');

        // tableタグが複数あるので、全て取得
        const tables = chartWrapprer.find('table');

        tables.each((index: number, element: cheerio.Element) => {
            // その中のtbodyを取得
            const tbody = $(element).find('tbody');
            // tr class="ref_sche"を取得
            const trs = tbody.find('tr');
            trs.each((index: number, element: cheerio.Element) => {
                // thを取得
                const th = $(element).find('th');
                // thのテキストが KeirinRaceCourseに含まれているか
                if (
                    !keirinRaceCourseList.includes(
                        th.text() as KeirinRaceCourse,
                    )
                ) {
                    return;
                }
                const place: KeirinRaceCourse = th.text() as KeirinRaceCourse;

                const tds = $(element).find('td');
                tds.each((index: number, element: cheerio.Element) => {
                    const imgs = $(element).find('img');
                    let grade: KeirinGradeType | undefined;

                    imgs.each((_, img) => {
                        const alt = $(img).attr('alt');
                        if (alt) {
                            grade = alt
                                .replace('1', 'I')
                                .replace('2', 'Ⅱ')
                                .replace('3', 'Ⅲ') as KeirinGradeType;
                        }
                    });

                    // alt属性を出力
                    if (grade) {
                        keirinPlaceDataList.push(
                            new KeirinPlaceData(
                                new Date(
                                    date.getFullYear(),
                                    date.getMonth(),
                                    index + 1,
                                ),
                                place,
                                grade,
                            ),
                        );
                    }
                });
            });
        });
        return keirinPlaceDataList;
    }

    /**
     * 競馬場開催データを登録する
     * HTMLにはデータを登録しない
     * @param request
     */
    @Logger
    registerPlaceList(
        request: RegisterPlaceListRequest<KeirinPlaceData>,
    ): Promise<RegisterPlaceListResponse> {
        console.debug(request);
        throw new Error('HTMLにはデータを登録しません');
    }
}
