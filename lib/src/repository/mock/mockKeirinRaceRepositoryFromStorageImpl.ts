import type { KeirinPlaceData } from '../../domain/keirinPlaceData';
import { KeirinRaceData } from '../../domain/keirinRaceData';
import type { IRaceRepository } from '../interface/IRaceRepository';
import type { FetchRaceListRequest } from '../request/fetchRaceListRequest';
import type { RegisterRaceListRequest } from '../request/registerRaceListRequest';
import { FetchRaceListResponse } from '../response/fetchRaceListResponse';
import { RegisterRaceListResponse } from '../response/registerRaceListResponse';

// KeirinRaceRepositoryFromStorageImplのモックを作成
export class MockKeirinRaceRepositoryFromStorageImpl
    implements IRaceRepository<KeirinRaceData, KeirinPlaceData>
{
    fetchRaceList(
        request: FetchRaceListRequest<KeirinPlaceData>,
    ): Promise<FetchRaceListResponse<KeirinRaceData>> {
        console.debug(request);
        return Promise.resolve(
            new FetchRaceListResponse([
                new KeirinRaceData(
                    '競輪祭',
                    '決勝',
                    new Date('2024-09-01'),
                    '立川',
                    'GⅠ',
                    12,
                ),
            ]),
        );
    }

    registerRaceList(
        request: RegisterRaceListRequest<KeirinRaceData>,
    ): Promise<RegisterRaceListResponse> {
        console.debug(request);
        return Promise.resolve(new RegisterRaceListResponse(200));
    }
}
