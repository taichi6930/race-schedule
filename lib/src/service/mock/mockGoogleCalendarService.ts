import { addDays, format } from 'date-fns';

import { CalendarData } from '../../domain/calendarData';
import { Logger } from '../../utility/logger';
import { RaceType } from '../implement/googleCalendarService';
import type { ICalendarService } from '../interface/ICalendarService';

/**
 * Googleカレンダーのモックサービス
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export class MockGoogleCalendarService implements ICalendarService<any> {
    constructor(private readonly raceType: RaceType) {}

    @Logger
    getEvents(startDate: Date, finishDate: Date): Promise<CalendarData[]> {
        const events: CalendarData[] = [];
        for (
            let date = new Date(startDate);
            date <= finishDate;
            date = addDays(date, 1)
        ) {
            events.push(
                new CalendarData(
                    `mock-${this.raceType}-${format(date, 'yyyyMMdd')}-id`,
                    `mock-${this.raceType}-${format(date, 'yyyyMMdd')}-title`,
                    date,
                    date,
                    'testLocation',
                    'testDescription',
                ),
            );
        }
        return Promise.resolve(events);
    }

    @Logger
    async upsertEvents(): Promise<void> {
        // モックの動作を記述
        // console.log('upsertEvents')を出す
        await Promise.resolve(() => {
            console.log('upsertEvents');
        });
    }

    @Logger
    async cleansingEvents(): Promise<void> {
        // モックの動作を記述
    }
}
