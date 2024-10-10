import type {
    KeirinGradeType,
    KeirinRaceCourse,
} from '../utility/data/raceSpecific';

/**
 * 競輪のレース開催場所データ
 */
export class KeirinPlaceData {
    /**
     * コンストラクタ
     *
     * @remarks
     * 競輪のレース開催場所データを生成する
     * 開催場所の型はKeirinRaceCourseを使用しているのでValidationは現時点で不要
     * @param dateTime - 開催日時
     * @param location - 開催場所
     * @param grade - 競輪のグレード
     */
    constructor(
        public readonly dateTime: Date,
        public readonly location: KeirinRaceCourse,
        public readonly grade: KeirinGradeType,
    ) {}

    /**
     * データのコピー
     * @param partial
     * @returns
     */
    copy(partial: Partial<KeirinPlaceData> = {}): KeirinPlaceData {
        return new KeirinPlaceData(
            partial.dateTime ?? this.dateTime,
            partial.location ?? this.location,
            partial.grade ?? this.grade,
        );
    }
}
