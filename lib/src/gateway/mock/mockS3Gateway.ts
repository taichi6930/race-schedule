/* eslint-disable */
import { injectable } from 'tsyringe';
import { IS3Gateway } from '../interface/iS3Gateway';
import { format } from 'date-fns';
import { Logger } from '../../utility/logger';

/**
 * MockS3Gateway
 */
@injectable()
export class MockS3Gateway<T extends object> implements IS3Gateway<T> {
    /**
     * モックデータを保存するためのマップ
     *
     * @private
     * @type {Map<string, string>}
     */
    private mockStorage: Map<string, string>;

    /**
     * バケット名 S3の中にあるデータの保存場所
     *
     * @private
     * @type {string}
     */
    private bucketName: string;
    /**
     * フォルダのパス
     *
     * @private
     * @type {string}
     */
    private folderPath: string;

    /**
     * MockS3Gatewayのコンストラクタ
     * @param {string} bucketName
     * @param {string} folderPath
     */
    constructor(bucketName: string, folderPath: string) {
        this.bucketName = bucketName;
        this.folderPath = folderPath;
        this.mockStorage = new Map<string, string>();
        // 最初にmockStorageに値を入れておく
        switch (folderPath) {
            case 'nar/race/':
                // 2024年のデータ366日分を作成
                for (let i = 0; i < 366; i++) {
                    const date = new Date('2024-01-01');
                    date.setDate(date.getDate() + i);
                    const fileName = `${folderPath}${format(date, 'yyyyMMdd')}.csv`;
                    for (let j = 1; j <= 12; j++) {
                        this.mockStorage.set(
                            fileName,
                            [
                                `name,dateTime,location,surfaceType,distance,grade,number\n`,
                                `NARテストレース,${format(date, 'yyyy-MM-dd')} ${j + 6}:00,高知,ダート,1200,GⅠ,${j}`,
                            ].join(''),
                        );
                    }
                }
                break;
            case 'nar/place/':
                // 2024年のデータ12ヶ月分を作成
                for (let i = 1; i <= 12; i++) {
                    const date = new Date('2024-01-01');
                    date.setDate(date.getMonth() + i);
                    const fileName = `${folderPath}${format(date, 'yyyyMM')}.csv`;
                    // 1ヶ月分のデータ（28~31日）を作成
                    for (let j = 1; j <= 31; j++) {
                        const _date = date;
                        _date.setDate(j);
                        // もし_dateの月とdateの月が違う場合はbreak
                        if (date.getMonth() !== _date.getMonth()) {
                            break;
                        }
                        this.mockStorage.set(
                            fileName,
                            [
                                'dateTime,location\n',
                                `${format(_date, 'yyyy-MM-dd')},高知`,
                            ].join(''),
                        );
                    }
                }
                break;
            case 'jra/race/':
                // 2024年のデータ366日分を作成
                for (let i = 0; i < 366; i++) {
                    const date = new Date('2024-01-01');
                    date.setDate(date.getDate() + i);
                    const fileName = `${folderPath}${format(date, 'yyyyMMdd')}.csv`;
                    for (let j = 1; j <= 12; j++) {
                        this.mockStorage.set(
                            fileName,
                            [
                                `name,dateTime,location,surfaceType,distance,grade,number,heldTimes,heldDayTimes\n`,
                                `JRAテストレース,${format(date, 'yyyy-MM-dd')} ${j + 6}:00,東京,芝,2400,GⅠ,${j}`,
                            ].join(''),
                        );
                    }
                }
                break;
            case 'jra/place/':
                // 2024年のデータ12ヶ月分を作成
                for (let i = 1; i <= 12; i++) {
                    const date = new Date('2024-01-01');
                    date.setDate(date.getMonth() + i);
                    const fileName = `${folderPath}${format(date, 'yyyyMM')}.csv`;
                    // 1ヶ月分のデータ（28~31日）を作成
                    for (let j = 1; j <= 31; j++) {
                        const _date = date;
                        _date.setDate(j);
                        // もし_dateの月とdateの月が違う場合はbreak
                        if (date.getMonth() !== _date.getMonth()) {
                            break;
                        }
                        this.mockStorage.set(
                            fileName,
                            [
                                'dateTime,location\n',
                                `${format(_date, 'yyyy-MM-dd')},東京`,
                            ].join(''),
                        );
                    }
                }
                break;
        }
    }

    /**
     * モックのデータをS3にアップロードする
     *
     * @param data
     * @param fileName
     */
    @Logger
    async uploadDataToS3(data: T[], fileName: string): Promise<void> {
        try {
            const csvContent = this.convertToCsv(data);
            const key = `${this.folderPath}${fileName}`;
            this.mockStorage.set(key, csvContent);
        } catch (error) {
            console.debug(error);
            throw new Error('モックのファイルのアップロードに失敗しました');
        }
    }

    /**
     * モックのデータをS3から取得する
     *
     * @param fileName
     * @returns
     */
    @Logger
    async fetchDataFromS3(fileName: string): Promise<string> {
        const key = `${this.folderPath}${fileName}`;
        const data = this.mockStorage.get(key);
        if (!data) {
            console.warn(`モックのファイルが存在しません: ${key}`);
            return '';
        }
        console.log(`モックのファイルを取得しました: ${key}`);
        return data;
    }

    /**
     * オブジェクトデータをCSV形式に変換する
     *
     * @private
     * @param {T[]} data
     * @returns {string}
     */
    private convertToCsv(data: T[]): string {
        if (data.length === 0) return '';

        const keys = Object.keys(data[0]);
        const csvHeader = keys.join(',') + '\n';
        const csvRows = data
            .map((item) => keys.map((key) => (item as any)[key]).join(','))
            .join('\n');

        return csvHeader + csvRows;
    }
}
