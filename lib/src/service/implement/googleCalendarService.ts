import 'reflect-metadata';
import '../../utility/format';

import { JWT } from 'google-auth-library';
import { calendar_v3, google } from 'googleapis';
import { injectable } from 'tsyringe';

import { CalendarData } from '../../domain/calendarData';
import {
    CHIHO_KEIBA_LIVE_URL,
    CHIHO_KEIBA_YOUTUBE_USER_ID,
    getYoutubeLiveUrl,
} from '../../utility/data/movie';
import { NAR_BABACODE } from '../../utility/data/nar';
import { NETKEIBA_BABACODE } from '../../utility/data/netkeiba';
import { createAnchorTag, formatDate } from '../../utility/format';
import { Logger } from '../../utility/logger';
import { ICalendarService } from '../interface/ICalendarService';

export type RaceType = 'jra' | 'nar' | 'keirin';
@injectable()
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export class GoogleCalendarService<R extends Record<string, any>>
    implements ICalendarService<R>
{
    private readonly credentials: JWT;
    private readonly calendar: calendar_v3.Calendar;
    private readonly raceType: RaceType;
    private readonly calendarId: string;

    constructor(raceType: RaceType, calendarId: string) {
        this.raceType = raceType;
        this.credentials = new google.auth.JWT(
            // client_emailは環境変数から取得
            process.env.GOOGLE_CLIENT_EMAIL,
            undefined,
            // private_keyは環境変数から取得
            process.env.GOOGLE_PRIVATE_KEY,
            ['https://www.googleapis.com/auth/calendar'],
        );
        this.calendar = google.calendar({
            version: 'v3',
            auth: this.credentials,
        });
        this.calendarId = calendarId;
    }

    /**
     * カレンダーのイベントの取得を行う
     * @param startDate
     * @param finishDate
     * @returns
     */
    @Logger
    async getEvents(
        startDate: Date,
        finishDate: Date,
    ): Promise<CalendarData[]> {
        // GoogleカレンダーAPIからイベントを取得
        const calendarList = await this.getEventsWithinDateRange(
            startDate,
            finishDate,
        );
        // イベントデータをCalendarData型に変換
        return this.convertToCalendarData(calendarList);
    }

    /**
     * 期間内のイベントを取得する
     * @param startDate
     * @param finishDate
     * @returns
     */
    @Logger
    private async getEventsWithinDateRange(
        startDate: Date,
        finishDate: Date,
    ): Promise<calendar_v3.Schema$Event[]> {
        // orderBy: 'startTime'で開始時刻順に取得
        const response = await this.calendar.events.list({
            calendarId: this.calendarId,
            timeMin: startDate.toISOString(),
            timeMax: finishDate.toISOString(),
            singleEvents: true,
            orderBy: 'startTime',
            timeZone: 'Asia/Tokyo',
        });
        return response.data.items ?? [];
    }

    /**
     * イベントデータをCalendarData型に変換
     * @param events
     * @returns
     */
    @Logger
    private convertToCalendarData(
        events: calendar_v3.Schema$Event[],
    ): CalendarData[] {
        return events.map(
            (event) =>
                new CalendarData(
                    event.id ?? '',
                    event.summary ?? '',
                    new Date(event.start?.dateTime ?? ''),
                    new Date(event.end?.dateTime ?? ''),
                    event.location ?? '',
                    event.description ?? '',
                ),
        );
    }

    /**
     * カレンダーのイベントの更新を行う
     * @param raceList
     */
    @Logger
    async upsertEvents(raceList: R[]): Promise<void> {
        await Promise.all(
            raceList.map(async (raceData) => {
                // イベントIDを生成
                const eventId = this.generateEventId(raceData);
                try {
                    // イベントを取得
                    const event = await this.calendar.events.get({
                        calendarId: this.calendarId,
                        eventId: eventId,
                    });
                    // イベントが見つかった場合は更新
                    if (event.data.id) {
                        console.log(
                            `Google Calendar APIにイベントが見つかりました。更新を行います。レース名: ${raceData.name}`,
                        );
                        await this.updateEvent(raceData, eventId);
                    } else {
                        // イベントが見つからなかった場合は新規登録
                        console.log(
                            `Google Calendar APIにイベントが見つからなかったため、新規登録します。レース名: ${raceData.name}`,
                        );
                        await this.createEvent(
                            this.translateToCalendarEvent(raceData),
                        );
                    }
                } catch (error) {
                    console.debug(error);
                    try {
                        // イベントが見つからなかった場合は新規登録
                        console.log(
                            `Google Calendar APIにイベントが見つからなかったため、新規登録します。レース名: ${raceData.name}`,
                        );
                        await this.createEvent(
                            this.translateToCalendarEvent(raceData),
                        );
                    } catch (_error) {
                        console.error(
                            'Google Calendar APIへのイベント新規登録に失敗しました',
                            _error,
                        );
                    }
                }
            }),
        );
    }

    /**
     * イベントを新規登録する
     * @param event
     * @returns
     */
    @Logger
    private async createEvent(event: calendar_v3.Schema$Event): Promise<void> {
        try {
            await this.calendar.events.insert({
                calendarId: this.calendarId,
                requestBody: event,
            });
            console.debug(
                `Google Calendar APIにレースを登録しました: ${event.summary}`,
            );
        } catch (error) {
            console.debug(error);
            throw new Error(
                `Google Calendar APIへのレース登録に失敗しました: ${event.summary}`,
            );
        }
    }

    /**
     * カレンダーのクレンジングを行う
     * @param startDate
     * @param finishDate
     */
    @Logger
    async cleansingEvents(startDate: Date, finishDate: Date): Promise<void> {
        await this.deleteEvents(startDate, finishDate);
    }

    /**
     * イベントを削除する（期間内のイベントを取得して削除）
     * @param startDate
     * @param finishDate
     * @returns
     */
    @Logger
    private async deleteEvents(
        startDate: Date,
        finishDate: Date,
    ): Promise<void> {
        const events = (
            await this.getEventsWithinDateRange(startDate, finishDate)
        ).filter((event) => {
            // trueの場合は削除対象
            // イベントIDが指定したレースタイプで始まっていない場合は削除対象
            return !event.id?.startsWith(this.raceType);
        });
        if (events.length === 0) {
            console.debug('指定された期間にイベントが見つかりませんでした。');
            return;
        }
        await this.processEvents(events, this.deleteEvent.bind(this), '削除');
    }

    /**
     * イベントを削除する（単体）
     * @param event
     * @returns
     */
    @Logger
    private async deleteEvent(event: calendar_v3.Schema$Event): Promise<void> {
        try {
            if (event.id) {
                await this.calendar.events.delete({
                    calendarId: this.calendarId,
                    eventId: event.id,
                });
                console.debug(
                    `Google Calendar APIからレースを削除しました: ${event.summary}`,
                );
            }
        } catch (error) {
            console.debug(error);
            throw new Error(
                `Google Calendar APIからのレース削除に失敗しました: ${event.summary}`,
            );
        }
    }

    /**
     * イベントを一括処理する
     * @param events
     * @param action
     * @param actionName
     * @returns
     */
    private async processEvents(
        events: calendar_v3.Schema$Event[],
        action: (
            event: calendar_v3.Schema$Event,
            calendarId: string,
        ) => Promise<void>,
        actionName: string,
    ): Promise<void> {
        try {
            await Promise.all(
                events.map(async (event) => action(event, this.calendarId)),
            );
            console.log(
                `Google Calendar APIにレースを${actionName}しました（processEvents）`,
            );
        } catch (error) {
            console.error(
                `Google Calendar APIへのレース${actionName}に失敗しました（processEvents）`,
                error,
            );
        }
    }

    /**
     * イベントIDを生成する
     * netkeibaのレースIDを元に生成
     * @param raceData
     * @returns
     */
    private generateEventId(raceData: R): string {
        return `${this.raceType}${raceData.dateTime.getFullYear()}${raceData.dateTime.getXDigitMonth(2)}${raceData.dateTime.getXDigitDays(2)}${NETKEIBA_BABACODE[raceData.location]}${raceData.number.toXDigits(2)}`;
    }

    /**
     * イベントを更新する
     * @param raceData
     * @param eventId
     * @returns
     */
    @Logger
    private async updateEvent(raceData: R, eventId: string): Promise<void> {
        try {
            await this.calendar.events.update({
                calendarId: this.calendarId,
                eventId: eventId,
                requestBody: this.translateToCalendarEvent(raceData),
            });
            console.debug(
                `Google Calendar APIにレースを更新しました: ${raceData.name}`,
            );
        } catch (error) {
            console.debug(error);
            throw new Error(
                `Google Calendar APIへのレース更新に失敗しました: ${raceData.name}`,
            );
        }
    }

    /**
     * raceDataをGoogleカレンダーのイベントに変換する
     * @param raceData
     * @returns
     */
    private translateToCalendarEvent(raceData: R): calendar_v3.Schema$Event {
        switch (this.raceType) {
            case 'jra':
                return this.translateToCalendarEventForJra(raceData);
            case 'nar':
                return this.translateToCalendarEventForNar(raceData);
            case 'keirin':
                return this.translateToCalendarEventForKeirin(raceData);
        }
    }

    /**
     * レースデータをGoogleカレンダーのイベントに変換する（JRA）
     * @param raceData
     * @returns
     */
    private translateToCalendarEventForJra(
        raceData: R,
    ): calendar_v3.Schema$Event {
        const data = raceData;
        return {
            id: this.generateEventId(data),
            summary: data.name,
            location: `${data.location}競馬場`,
            start: {
                dateTime: formatDate(data.dateTime),
                timeZone: 'Asia/Tokyo',
            },
            end: {
                // 終了時刻は発走時刻から10分後とする
                dateTime: formatDate(
                    new Date(data.dateTime.getTime() + 10 * 60 * 1000),
                ),
                timeZone: 'Asia/Tokyo',
            },
            colorId: this.getColorId(data.grade),
            description: `距離: ${data.surfaceType}${data.distance}m
            発走: ${data.dateTime.getXDigitHours(2)}:${data.dateTime.getXDigitMinutes(2)}
            ${createAnchorTag('レース情報', `https://netkeiba.page.link/?link=https%3A%2F%2Frace.sp.netkeiba.com%2Frace%2Fshutuba.html%3Frace_id%3D${data.dateTime.getFullYear()}${NETKEIBA_BABACODE[data.location]}${data.heldTimes.toXDigits(2)}${data.heldDayTimes.toXDigits(2)}${data.number.toXDigits(2)}`)}
        `.replace(/\n\s+/g, '\n'),
        };
    }

    /**
     * レースデータをGoogleカレンダーのイベントに変換する（NAR）
     * @param raceData
     * @returns
     */
    private translateToCalendarEventForNar(
        raceData: R,
    ): calendar_v3.Schema$Event {
        const data = raceData;
        return {
            id: this.generateEventId(data),
            summary: data.name,
            location: `${data.location}競馬場`,
            start: {
                dateTime: formatDate(data.dateTime),
                timeZone: 'Asia/Tokyo',
            },
            end: {
                // 終了時刻は発走時刻から10分後とする
                dateTime: formatDate(
                    new Date(data.dateTime.getTime() + 10 * 60 * 1000),
                ),
                timeZone: 'Asia/Tokyo',
            },
            colorId: this.getColorId(data.grade),
            description: `距離: ${data.surfaceType}${data.distance}m
            発走: ${data.dateTime.getXDigitHours(2)}:${data.dateTime.getXDigitMinutes(2)}
            ${createAnchorTag('レース映像（地方競馬LIVE）', CHIHO_KEIBA_LIVE_URL)}
            ${createAnchorTag('レース映像（YouTube）', getYoutubeLiveUrl(CHIHO_KEIBA_YOUTUBE_USER_ID[data.location]))}
            ${createAnchorTag('レース情報（netkeiba）', `https://netkeiba.page.link/?link=https%3A%2F%2Fnar.sp.netkeiba.com%2Frace%2Fshutuba.html%3Frace_id%3D${data.dateTime.getFullYear()}${NETKEIBA_BABACODE[data.location]}${(raceData.dateTime.getMonth() + 1).toXDigits(2)}${raceData.dateTime.getDate().toXDigits(2)}${raceData.number.toXDigits(2)}`)}
            ${createAnchorTag('レース情報（NAR）', `https://www2.keiba.go.jp/KeibaWeb/TodayRaceInfo/DebaTable?k_raceDate=${data.dateTime.getFullYear()}%2f${(raceData.dateTime.getMonth() + 1).toXDigits(2)}%2f${raceData.dateTime.getDate().toXDigits(2)}&k_raceNo=${data.number.toXDigits(2)}&k_babaCode=${NAR_BABACODE[data.location]}`)}
        `.replace(/\n\s+/g, '\n'),
        };
    }

    /**
     * レースデータをGoogleカレンダーのイベントに変換する（競輪）
     * @param raceData
     * @returns
     */
    private translateToCalendarEventForKeirin(
        raceData: R,
    ): calendar_v3.Schema$Event {
        const data = raceData;
        return {
            id: this.generateEventId(data),
            summary: data.name,
            location: `${data.location}競輪場`,
            start: {
                dateTime: formatDate(data.dateTime),
                timeZone: 'Asia/Tokyo',
            },
            end: {
                // 終了時刻は発走時刻から10分後とする
                dateTime: formatDate(
                    new Date(data.dateTime.getTime() + 10 * 60 * 1000),
                ),
                timeZone: 'Asia/Tokyo',
            },
            colorId: this.getColorId(data.grade),
            description:
                `発走: ${data.dateTime.getXDigitHours(2)}:${data.dateTime.getXDigitMinutes(2)}
        `.replace(/\n\s+/g, '\n'),
        };
    }

    /**
     * Googleカレンダーのイベントの色IDを取得する
     * @param raceGrade
     * @returns
     */
    private getColorId(raceGrade: string): string {
        const gradeColorMap: Record<string, string> = {
            'GⅠ': '9',
            'J.GⅠ': '9',
            'GⅡ': '11',
            'J.GⅡ': '11',
            'GⅢ': '10',
            'J.GⅢ': '10',
            'JpnⅠ': '1',
            'JpnⅡ': '4',
            'JpnⅢ': '2',
            'Listed': '5',
            'オープン': '6',
            'オープン特別': '6',
            '地方重賞': '3',
        };
        return gradeColorMap[raceGrade] || '8';
    }
}
