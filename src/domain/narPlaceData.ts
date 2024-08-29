import { NarRaceCourse } from '../utility/raceSpecificData';

/**
 * NARのレース開催場所データ
 */
export class NarPlaceData {
    /**
     * コンストラクタ
     *
     * @remarks
     * NARのレース開催場所データを生成する
     * 開催場所の型はNarRaceCourseを使用しているのでValidationは現時点で不要
     * @param dateTime - 開催日時
     * @param location - 開催場所
     */
    constructor(
        public readonly dateTime: Date,
        public readonly location: NarRaceCourse,
    ) { }
}
