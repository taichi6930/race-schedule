import { container } from 'tsyringe';

import { JraPlaceData } from '../domain/jraPlaceData';
import { JraRaceData } from '../domain/jraRaceData';
import { KeirinPlaceData } from '../domain/keirinPlaceData';
import { NarPlaceData } from '../domain/narPlaceData';
import { NarRaceData } from '../domain/narRaceData';
import { JraPlaceDataHtmlGateway } from '../gateway/implement/jraPlaceDataHtmlGateway';
import { JraRaceDataHtmlGateway } from '../gateway/implement/jraRaceDataHtmlGateway';
import { KeirinPlaceDataHtmlGateway } from '../gateway/implement/keirinPlaceDataHtmlGateway';
import { NarPlaceDataHtmlGateway } from '../gateway/implement/narPlaceDataHtmlGateway';
import { NarRaceDataHtmlGateway } from '../gateway/implement/narRaceDataHtmlGateway';
import { S3Gateway } from '../gateway/implement/s3Gateway';
import { IJraPlaceDataHtmlGateway } from '../gateway/interface/iJraPlaceDataHtmlGateway';
import { IJraRaceDataHtmlGateway } from '../gateway/interface/iJraRaceDataHtmlGateway';
import { IKeirinPlaceDataHtmlGateway } from '../gateway/interface/iKeirinPlaceDataHtmlGateway';
import { INarPlaceDataHtmlGateway } from '../gateway/interface/iNarPlaceDataHtmlGateway';
import { INarRaceDataHtmlGateway } from '../gateway/interface/iNarRaceDataHtmlGateway';
import { IS3Gateway } from '../gateway/interface/iS3Gateway';
import { MockKeirinPlaceDataHtmlGateway } from '../gateway/mock/mockKeirinPlaceDataHtmlGateway';
import { MockS3Gateway } from '../gateway/mock/mockS3Gateway';

// s3Gatewayの実装クラスをDIコンテナに登錄する
container.register<IS3Gateway<KeirinPlaceData>>('KeirinPlaceS3Gateway', {
    useFactory: () => {
        console.log(`KeirinPlaceS3Gateway ${process.env.ENV}`);
        switch (process.env.ENV) {
            case 'production':
                return new S3Gateway<KeirinPlaceData>(
                    'race-schedule-bucket',
                    'keirin/place/',
                );
            case 'local':
                return new MockS3Gateway<KeirinPlaceData>(
                    'race-schedule-bucket',
                    'keirin/place/',
                );
            default:
                return new MockS3Gateway<KeirinPlaceData>(
                    'race-schedule-bucket',
                    'keirin/place/',
                );
        }
    },
});
container.register<IS3Gateway<NarRaceData>>('NarRaceS3Gateway', {
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
container.register<IS3Gateway<JraRaceData>>('JraRaceS3Gateway', {
    useFactory: () => {
        switch (process.env.ENV) {
            case 'production':
                // ENV が production の場合、S3Gateway を使用
                return new S3Gateway<JraRaceData>(
                    'race-schedule-bucket',
                    'jra/race/',
                );
            case 'local':
                // ENV が local の場合、MockS3Gateway を使用
                return new MockS3Gateway<JraRaceData>(
                    'race-schedule-bucket',
                    'jra/race/',
                );
            default:
                // ENV が ない場合、MockS3Gateway を使用
                return new MockS3Gateway<JraRaceData>(
                    'race-schedule-bucket',
                    'jra/race/',
                );
        }
    },
});
container.register<IS3Gateway<NarPlaceData>>('NarPlaceS3Gateway', {
    useFactory: () => {
        console.log(`NarPlaceS3Gateway ${process.env.ENV}`);
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
container.register<IS3Gateway<JraPlaceData>>('JraPlaceS3Gateway', {
    useFactory: () => {
        console.log(`JraPlaceS3Gateway ${process.env.ENV}`);
        switch (process.env.ENV) {
            case 'production':
                return new S3Gateway<JraPlaceData>(
                    'race-schedule-bucket',
                    'jra/place/',
                );
            case 'local':
                return new MockS3Gateway<JraPlaceData>(
                    'race-schedule-bucket',
                    'jra/place/',
                );
            default:
                return new MockS3Gateway<JraPlaceData>(
                    'race-schedule-bucket',
                    'jra/place/',
                );
        }
    },
});
container.register<INarRaceDataHtmlGateway>('NarRaceDataHtmlGateway', {
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
container.register<IJraRaceDataHtmlGateway>('JraRaceDataHtmlGateway', {
    useFactory: () => {
        switch (process.env.ENV) {
            case 'production':
                console.log('JraRaceDataHtmlGateway');
                return new JraRaceDataHtmlGateway();
            default:
                return new JraRaceDataHtmlGateway();
        }
    },
});
container.register<INarPlaceDataHtmlGateway>('NarPlaceDataHtmlGateway', {
    useFactory: () => {
        switch (process.env.ENV) {
            case 'production':
                return new NarPlaceDataHtmlGateway();
            default:
                return new NarPlaceDataHtmlGateway();
        }
    },
});
container.register<IJraPlaceDataHtmlGateway>('JraPlaceDataHtmlGateway', {
    useFactory: () => {
        switch (process.env.ENV) {
            case 'production':
                return new JraPlaceDataHtmlGateway();
            default:
                return new JraPlaceDataHtmlGateway();
        }
    },
});

container.register<IKeirinPlaceDataHtmlGateway>('KeirinPlaceDataHtmlGateway', {
    useFactory: () => {
        switch (process.env.ENV) {
            case 'production':
                return new KeirinPlaceDataHtmlGateway();
            default:
                return new MockKeirinPlaceDataHtmlGateway();
        }
    },
});
