import 'reflect-metadata'; // reflect-metadataをインポート

import { container } from 'tsyringe';

import { CalendarData } from '../../../../lib/src/domain/calendarData';
import type { JraPlaceData } from '../../../../lib/src/domain/jraPlaceData';
import { JraRaceData } from '../../../../lib/src/domain/jraRaceData';
import type { IRaceRepository } from '../../../../lib/src/repository/interface/IRaceRepository';
import type { ICalendarService } from '../../../../lib/src/service/interface/ICalendarService';
import { JraRaceCalendarUseCase } from '../../../../lib/src/usecase/implement/jraRaceCalendarUseCase';
import type { JraGradeType } from '../../../../lib/src/utility/data/raceSpecific';
import { JRA_SPECIFIED_GRADE_LIST } from '../../../../lib/src/utility/data/raceSpecific';
import { mockJraRaceRepositoryFromS3Impl } from '../../mock/repository/jraRaceRepositoryFromS3Impl';
import { JraCalendarServiceMock } from '../../mock/service/calendarServiceMock';

describe('JraRaceCalendarUseCase', () => {
    let calendarServiceMock: jest.Mocked<ICalendarService<JraRaceData>>;
    let jraRaceRepositoryFromS3Impl: jest.Mocked<
        IRaceRepository<JraRaceData, JraPlaceData>
    >;
    let useCase: JraRaceCalendarUseCase;

    beforeEach(() => {
        // ICalendarServiceインターフェースの依存関係を登録
        calendarServiceMock = JraCalendarServiceMock();
        container.register<ICalendarService<JraRaceData>>(
            'JraCalendarService',
            {
                useValue: calendarServiceMock,
            },
        );

        // IRaceRepositoryインターフェースの依存関係を登録
        jraRaceRepositoryFromS3Impl = mockJraRaceRepositoryFromS3Impl();
        container.register<IRaceRepository<JraRaceData, JraPlaceData>>(
            'JraRaceRepositoryFromS3',
            {
                useValue: jraRaceRepositoryFromS3Impl,
            },
        );

        // JraRaceCalendarUseCaseをコンテナから取得
        useCase = container.resolve(JraRaceCalendarUseCase);
    });

    const baseCalendarData = new CalendarData(
        'test202408014411',
        '東京大賞典',
        new Date('2023-08-01T10:00:00Z'),
        new Date('2023-08-01T10:10:00Z'),
        '大井競馬場',
        'テスト',
    );

    describe('getRacesFromCalendar', () => {
        it('CalendarDataのリストが正常に返ってくること', async () => {
            const mockCalendarData: CalendarData[] = [baseCalendarData];

            // モックの戻り値を設定
            calendarServiceMock.getEvents.mockResolvedValue(mockCalendarData);

            const startDate = new Date('2023-08-01');
            const finishDate = new Date('2023-08-31');

            const result = await useCase.getRacesFromCalendar(
                startDate,
                finishDate,
            );

            expect(calendarServiceMock.getEvents).toHaveBeenCalledWith(
                startDate,
                finishDate,
            );
            expect(result).toEqual(mockCalendarData);
        });

        it('エラーが発生した場合、空の配列が返ってくること', async () => {
            // モックがエラーをスローするよう設定
            calendarServiceMock.getEvents.mockRejectedValue(
                new Error('Google Calendar API error'),
            );

            const startDate = new Date('2023-08-01');
            const finishDate = new Date('2023-08-31');

            const result = await useCase.getRacesFromCalendar(
                startDate,
                finishDate,
            );

            // モックが呼び出されたことを確認
            expect(calendarServiceMock.getEvents).toHaveBeenCalledWith(
                startDate,
                finishDate,
            );
            // モックからエラーが返ってくることを確認
            expect(result).toEqual([]);
        });
    });

    describe('updateRacesToCalendar', () => {
        const baseJraCalendarData = new JraRaceData(
            `東京優駿`,
            new Date('2023-08-01'),
            '東京',
            '芝',
            1600,
            'GⅠ',
            11,
            1,
            2,
        );

        it('正常に更新できること', async () => {
            const mockRaceDataList: JraRaceData[] = [];
            const expectedRaceDataList: JraRaceData[] = [];

            const grades: JraGradeType[] = [
                'GⅠ',
                'Listed',
                '未勝利',
            ] as JraGradeType[];
            const months = [1 - 1, 2 - 1, 3 - 1]; // 1月、2月、3月を0ベースで表現
            const days = [1, 2, 3];

            grades.forEach((grade) => {
                months.forEach((month) => {
                    days.forEach((day) => {
                        // モック用のデータを作成
                        mockRaceDataList.push(
                            baseJraCalendarData.copy({
                                name: `testRace${(month + 1).toString().padStart(2, '0')}${day.toString().padStart(2, '0')}`,
                                dateTime: new Date(2024, month, day),
                                grade: grade,
                            }),
                        );
                        if (JRA_SPECIFIED_GRADE_LIST.includes(grade)) {
                            // 期待するデータを作成
                            expectedRaceDataList.push(
                                baseJraCalendarData.copy({
                                    name: `testRace${(month + 1).toString().padStart(2, '0')}${day.toString().padStart(2, '0')}`,
                                    dateTime: new Date(2024, month, day),
                                    grade: grade,
                                }),
                            );
                        }
                    });
                });
            });

            // モックが値を返すよう設定
            jraRaceRepositoryFromS3Impl.fetchRaceList.mockResolvedValue({
                raceDataList: mockRaceDataList,
            });

            const startDate = new Date('2024-01-01');
            const finishDate = new Date('2024-03-31');

            await useCase.updateRacesToCalendar(
                startDate,
                finishDate,
                JRA_SPECIFIED_GRADE_LIST,
            );

            // モックが呼び出されたことを確認
            expect(
                jraRaceRepositoryFromS3Impl.fetchRaceList,
            ).toHaveBeenCalled();

            // updateEventsが呼び出された回数を確認
            expect(calendarServiceMock.upsertEvents).toHaveBeenCalledTimes(1);
            expect(calendarServiceMock.upsertEvents).toHaveBeenCalledWith(
                expectedRaceDataList,
            );
        });

        it('fetchRaceListがエラーをスローした場合、エラーメッセージがコンソールに表示されること', async () => {
            const consoleErrorSpy = jest
                .spyOn(console, 'error')
                .mockImplementation(() => {});

            // fetchRaceListがエラーをスローするようにモック
            jraRaceRepositoryFromS3Impl.fetchRaceList.mockRejectedValue(
                new Error('Fetch Error'),
            );

            const startDate = new Date('2023-08-01');
            const finishDate = new Date('2023-08-31');

            await useCase.updateRacesToCalendar(
                startDate,
                finishDate,
                JRA_SPECIFIED_GRADE_LIST,
            );

            // コンソールエラーメッセージが出力されることを確認
            expect(consoleErrorSpy).toHaveBeenCalledWith(
                'Google Calendar APIへのイベント登録に失敗しました',
                expect.any(Error),
            );

            // エラーがスローされた場合に呼び出されるため、upsertEventsは呼び出されていないことを確認
            consoleErrorSpy.mockRestore();
        });

        it('updateEventsがエラーをスローした場合、エラーメッセージがコンソールに表示されること', async () => {
            const consoleErrorSpy = jest
                .spyOn(console, 'error')
                .mockImplementation(() => {});

            // fetchRaceListは正常に動作するように設定
            const mockRaceDataList: JraRaceData[] = [baseJraCalendarData];
            jraRaceRepositoryFromS3Impl.fetchRaceList.mockResolvedValue({
                raceDataList: mockRaceDataList,
            });

            // updateEventsがエラーをスローするようにモック
            calendarServiceMock.upsertEvents.mockRejectedValue(
                new Error('Update Error'),
            );

            const startDate = new Date('2023-08-01');
            const finishDate = new Date('2023-08-31');

            await useCase.updateRacesToCalendar(
                startDate,
                finishDate,
                JRA_SPECIFIED_GRADE_LIST,
            );

            // コンソールエラーメッセージが出力されることを確認
            expect(consoleErrorSpy).toHaveBeenCalledWith(
                'Google Calendar APIへのイベント登録に失敗しました',
                expect.any(Error),
            );

            consoleErrorSpy.mockRestore();
        });
    });

    describe('cleansingRacesFromCalendar', () => {
        it('カレンダーのイベントが正常にクレンジングされること', async () => {
            const startDate = new Date('2023-08-01');
            const finishDate = new Date('2023-08-31');

            await useCase.cleansingRacesFromCalendar(startDate, finishDate);

            // cleansingEventsが正しく呼び出されたことを確認
            expect(calendarServiceMock.cleansingEvents).toHaveBeenCalledWith(
                startDate,
                finishDate,
            );
        });

        it('クレンジング中にエラーが発生した場合、エラーメッセージがコンソールに表示されること', async () => {
            const consoleErrorSpy = jest
                .spyOn(console, 'error')
                .mockImplementation(() => {});

            // モックがエラーをスローするよう設定
            calendarServiceMock.cleansingEvents.mockRejectedValue(
                new Error('Cleansing Error'),
            );

            const startDate = new Date('2023-08-01');
            const finishDate = new Date('2023-08-31');

            await useCase.cleansingRacesFromCalendar(startDate, finishDate);

            // コンソールエラーメッセージが出力されることを確認
            expect(consoleErrorSpy).toHaveBeenCalledWith(
                'Google Calendar APIからのイベントクレンジングに失敗しました',
                expect.any(Error),
            );

            consoleErrorSpy.mockRestore();
        });
    });
});
