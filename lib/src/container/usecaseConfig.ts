import { container } from 'tsyringe';

import { JraPlaceData } from '../domain/jraPlaceData';
import { JraRaceData } from '../domain/jraRaceData';
import { KeirinPlaceData } from '../domain/keirinPlaceData';
import { KeirinRaceData } from '../domain/keirinRaceData';
import { NarPlaceData } from '../domain/narPlaceData';
import { NarRaceData } from '../domain/narRaceData';
import { JraPlaceDataUseCase } from '../usecase/implement/jraPlaceDataUseCase';
import { JraRaceCalendarUseCase } from '../usecase/implement/jraRaceCalendarUseCase';
import { JraRaceDataUseCase } from '../usecase/implement/jraRaceDataUseCase';
import { KeirinPlaceDataUseCase } from '../usecase/implement/keirinPlaceDataUseCase';
import { KeirinRaceCalendarUseCase } from '../usecase/implement/keirinRaceCalendarUseCase';
import { KeirinRaceDataUseCase } from '../usecase/implement/keirinRaceDataUseCase';
import { NarPlaceDataUseCase } from '../usecase/implement/narPlaceDataUseCase';
import { NarRaceCalendarUseCase } from '../usecase/implement/narRaceCalendarUseCase';
import { NarRaceDataUseCase } from '../usecase/implement/narRaceDataUseCase';
import { IPlaceDataUseCase } from '../usecase/interface/IPlaceDataUseCase';
import { IRaceCalendarUseCase } from '../usecase/interface/IRaceCalendarUseCase';
import { IRaceDataUseCase } from '../usecase/interface/IRaceDataUseCase';

// Usecaseの実装クラスをDIコンテナに登錄する
container.register<IRaceCalendarUseCase>('NarRaceCalendarUseCase', {
    useClass: NarRaceCalendarUseCase,
});
container.register<IRaceCalendarUseCase>('JraRaceCalendarUseCase', {
    useClass: JraRaceCalendarUseCase,
});
container.register<IRaceCalendarUseCase>('KeirinRaceCalendarUseCase', {
    useClass: KeirinRaceCalendarUseCase,
});
container.register<IRaceDataUseCase<NarRaceData>>('NarRaceDataUseCase', {
    useClass: NarRaceDataUseCase,
});
container.register<IRaceDataUseCase<JraRaceData>>('JraRaceDataUseCase', {
    useClass: JraRaceDataUseCase,
});
container.register<IRaceDataUseCase<KeirinRaceData>>('KeirinRaceDataUseCase', {
    useClass: KeirinRaceDataUseCase,
});
container.register<IPlaceDataUseCase<NarPlaceData>>('NarPlaceDataUseCase', {
    useClass: NarPlaceDataUseCase,
});
container.register<IPlaceDataUseCase<JraPlaceData>>('JraPlaceDataUseCase', {
    useClass: JraPlaceDataUseCase,
});
container.register<IPlaceDataUseCase<KeirinPlaceData>>(
    'KeirinPlaceDataUseCase',
    {
        useClass: KeirinPlaceDataUseCase,
    },
);
