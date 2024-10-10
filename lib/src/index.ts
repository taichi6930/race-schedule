import 'reflect-metadata';
import './container'; // DIコンテナの設定をインポート

import serverlessExpress from '@codegenie/serverless-express';
import express, { Application } from 'express';
import swaggerUi from 'swagger-ui-express';
import { container } from 'tsyringe';

import { JraRaceController } from './controller/jraRaceController';
import { KeirinRaceController } from './controller/keirinRaceController';
import { NarRaceController } from './controller/narRaceController';
import swaggerSpec from './swagger/swaggerConfig';

// Expressアプリケーションの設定
const app: Application = express();

// DIコンテナからControllerを取得
const narRaceController = container.resolve(NarRaceController);
const jraRaceController = container.resolve(JraRaceController);
const keirinRaceController = container.resolve(KeirinRaceController);

// Expressの設定
app.use(express.json());

// ルーティングの設定
app.use('/api/races/nar', narRaceController.router);
app.use('/api/races/jra', jraRaceController.router);
app.use('/api/races/keirin', keirinRaceController.router);

// Swaggerの設定
app.use('/api-docs', swaggerUi.serve);
app.get('/api-docs', swaggerUi.setup(swaggerSpec, { explorer: true }));

// Lambda用のハンドラーをエクスポート
export const handler = serverlessExpress({ app });

// アプリケーションの起動
const PORT = process.env.PORT ?? 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

export default app;
