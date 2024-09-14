import 'reflect-metadata';
import express from 'express';
import serverlessExpress from '@codegenie/serverless-express';
import { container } from 'tsyringe';
import { NarRaceController } from './controller/narRaceController';
import { NarPlaceData } from './domain/narPlaceData';
import { NarRaceData } from './domain/narRaceData';
import { S3Gateway } from './gateway/implement/s3Gateway';
import { IS3Gateway } from './gateway/interface/iS3Gateway';
import { MockS3Gateway } from './gateway/mock/mockS3Gateway';
import { NarRaceRepositoryFromS3Impl } from './repository/implement/narRaceRepositoryFromS3Impl';
import { IRaceRepository } from './repository/interface/IRaceRepository';
import { GoogleCalendarService } from './service/implement/googleCalendarService';
import { ICalendarService } from './service/interface/ICalendarService';
import { MockGoogleCalendarService } from './service/mock/mockGoogleCalendarService';
import { NarRaceCalendarUseCase } from './usecase/implement/narRaceCalendarUseCase';
import { IRaceCalendarUseCase } from './usecase/interface/IRaceCalendarUseCase';
import { IRaceDataUseCase } from './usecase/interface/IRaceDataUseCase';
import { NarRaceDataUseCase } from './usecase/implement/narRaceDataUseCase';
import { NarPlaceRepositoryFromS3Impl } from './repository/implement/narPlaceRepositoryFromS3Impl';
import { IPlaceRepository } from './repository/interface/IPlaceRepository';
import { NarRaceRepositoryFromHtmlImpl } from './repository/implement/narRaceRepositoryFromHtmlImpl';
import { INarRaceDataHtmlGateway } from './gateway/interface/iNarRaceDataHtmlGateway';
import { IPlaceDataUseCase } from './usecase/interface/IPlaceDataUseCase';
import { NarPlaceDataUseCase } from './usecase/implement/narPlaceDataUseCase';
import { INarPlaceDataHtmlGateway } from './gateway/interface/iNarPlaceDataHtmlGateway';
import { NarPlaceRepositoryFromHtmlImpl } from './repository/implement/narPlaceRepositoryFromHtmlImpl';
import { NarRaceDataHtmlGateway } from './gateway/implement/narRaceDataHtmlGateway';
import { NarPlaceDataHtmlGateway } from './gateway/implement/narPlaceDataHtmlGateway';

// Expressアプリケーションの設定
const app = express();

console.log('express app created');
// DIコンテナの初期化
// s3Gatewayの実装クラスをDIコンテナに登錄する
container.register<IS3Gateway<NarRaceData>>('IS3GatewayForNarRace', {
    useFactory: () => {
        switch (process.env.ENV) {
            case 'production':
                // ENV が production の場合、S3Gateway を使用
                return new S3Gateway<NarRaceData>(
                    'race-schedule-bucket',
                    'nar/race/',
                );
            case 'local':
                // ENV が local の場合、MockS3Gateway を使用
                return new MockS3Gateway<NarRaceData>(
                    'race-schedule-bucket',
                    'nar/race/',
                );
            default:
                // ENV が ない場合、MockS3Gateway を使用
                return new MockS3Gateway<NarRaceData>(
                    'race-schedule-bucket',
                    'nar/race/',
                );
        }
    },
});
// IS3GatewayForNarPlace
container.register<IS3Gateway<NarPlaceData>>('IS3GatewayForNarPlace', {
    useFactory: () => {
        console.log(`IS3GatewayForNarPlace ${process.env.ENV}`);
        switch (process.env.ENV) {
            case 'production':
                return new S3Gateway<NarPlaceData>(
                    'race-schedule-bucket',
                    'nar/place/',
                );
            case 'local':
                return new MockS3Gateway<NarPlaceData>(
                    'race-schedule-bucket',
                    'nar/place/',
                );
            default:
                return new MockS3Gateway<NarPlaceData>(
                    'race-schedule-bucket',
                    'nar/place/',
                );
        }
    },
});
// INarRaceDataHtmlGateway
container.register<INarRaceDataHtmlGateway>('INarRaceDataHtmlGateway', {
    useFactory: () => {
        switch (process.env.ENV) {
            case 'production':
                console.log('NarRaceDataHtmlGateway');
                return new NarRaceDataHtmlGateway();
            default:
                return new NarRaceDataHtmlGateway();
        }
    },
});
container.register<INarPlaceDataHtmlGateway>('INarPlaceDataHtmlGateway', {
    useFactory: () => {
        switch (process.env.ENV) {
            case 'production':
                return new NarPlaceDataHtmlGateway();
            default:
                return new NarPlaceDataHtmlGateway();
        }
    },
});

// ICalendarServiceの実装クラスをDIコンテナに登錄する
container.register<ICalendarService<NarRaceData>>('ICalendarService', {
    useFactory: () => {
        switch (process.env.ENV) {
            case 'production':
                // ENV が production の場合、GoogleCalendarService を使用
                return new GoogleCalendarService<NarRaceData>(
                    'nar',
                    process.env.NAR_CALENDAR_ID || '',
                );
            case 'local':
                // ENV が local の場合、MockGoogleCalendarService を使用
                return new MockGoogleCalendarService();
            default:
                // ENV が指定されていない場合も MockGoogleCalendarService を使用
                return new MockGoogleCalendarService();
        }
    },
});

// Repositoryの実装クラスをDIコンテナに登錄する
container.register<IRaceRepository<NarRaceData, NarPlaceData>>(
    'IRaceRepositoryFromS3',
    { useClass: NarRaceRepositoryFromS3Impl },
);
container.register<IPlaceRepository<NarPlaceData>>('IPlaceRepositoryFromS3', {
    useClass: NarPlaceRepositoryFromS3Impl,
});
container.register<IRaceRepository<NarRaceData, NarPlaceData>>(
    'IRaceRepositoryFromHtml',
    { useClass: NarRaceRepositoryFromHtmlImpl },
);
container.register<IPlaceRepository<NarPlaceData>>('IPlaceRepositoryFromHtml', {
    useClass: NarPlaceRepositoryFromHtmlImpl,
});

// Usecaseの実装クラスをDIコンテナに登錄する
container.register<IRaceCalendarUseCase>('IRaceCalendarUseCase', {
    useClass: NarRaceCalendarUseCase,
});
container.register<IRaceDataUseCase<NarRaceData>>('IRaceDataUseCase', {
    useClass: NarRaceDataUseCase,
});
container.register<IPlaceDataUseCase<NarPlaceData>>('IPlaceDataUseCase', {
    useClass: NarPlaceDataUseCase,
});

const narRaceController = container.resolve(NarRaceController);

app.use(express.json());
app.use('/api/races', narRaceController.router);

// Lambda用のハンドラーをエクスポート
export const handler = serverlessExpress({ app });

// アプリケーションの起動
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

export default app;
