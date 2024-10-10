import {
    GetObjectCommand,
    PutObjectCommand,
    S3Client,
} from '@aws-sdk/client-s3';
import { createObjectCsvWriter as createCsvWriter } from 'csv-writer';
import * as fs from 'fs';
import { Readable } from 'stream';
import { injectable } from 'tsyringe';

import { Logger } from '../../utility/logger';
import { IS3Gateway } from '../interface/iS3Gateway';

/**
 * S3Gateway
 */
@injectable()
export class S3Gateway<T extends object> implements IS3Gateway<T> {
    /**
     * AWS SDKのS3Client
     *
     * @private
     * @type {S3Client}
     */
    private readonly s3Client: S3Client;
    /**
     * バケット名 S3の中にあるデータの保存場所
     *
     * @private
     * @type {string}
     */
    private readonly bucketName: string;
    /**
     * フォルダのパス
     *
     * @private
     * @type {string}
     */
    private readonly folderPath: string;

    /**
     * S3Gatewayのコンストラクタ
     * @param {string} bucketName
     * @param {string} folderPath
     */
    constructor(bucketName: string, folderPath: string) {
        // S3Clientの初期化 東京リージョン
        this.s3Client = new S3Client({ region: 'ap-northeast-1' });
        this.bucketName = bucketName;
        this.folderPath = folderPath;
    }

    /**
     * データをS3にアップロードする
     *
     * @param data
     * @param fileName
     */
    @Logger
    async uploadDataToS3(data: T[], fileName: string): Promise<void> {
        try {
            const csvWriter = createCsvWriter({
                path: `/tmp/${fileName}`,
                header: Object.keys(data[0]).map((key) => ({
                    id: key,
                    title: key,
                })),
            });

            await csvWriter.writeRecords(data);

            const fileContent = fs.readFileSync(`/tmp/${fileName}`);
            const params = {
                Bucket: this.bucketName,
                Key: `${this.folderPath}${fileName}`,
                Body: fileContent,
            };

            const command = new PutObjectCommand(params);
            await this.s3Client.send(command);
        } catch (error: unknown) {
            console.debug(error);
            throw new Error('ファイルのアップロードに失敗しました');
        }
    }

    /**
     * データをS3から取得する
     *
     * @param fileName
     * @returns
     */
    @Logger
    async fetchDataFromS3(fileName: string): Promise<string> {
        const params = {
            Bucket: this.bucketName,
            Key: `${this.folderPath}${fileName}`,
        };

        try {
            const command = new GetObjectCommand(params);
            const response = await this.s3Client.send(command);

            const bodyStream = response.Body as Readable;
            let data = '';
            for await (const chunk of bodyStream) {
                data += chunk;
            }
            return data;
        } catch (error) {
            console.debug(error);
            console.warn('ファイルが存在しません');
            return '';
        }
    }
}
