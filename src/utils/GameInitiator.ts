import { COLORS } from '@/styling/colors';

export type GameStep = {
    id: number;
    hiddenColors: string[];
    choosenColors: string[];
    scores: boolean[];
    resultChecked: boolean;
};
// config
const TOTAL_GAME_LEVEL = 10;
const COLORS_LIST = [
    COLORS.YELLOW,
    COLORS.PINK,
    COLORS.GREEN,
    COLORS.TERQUISH,
    COLORS.OLIVE,
    COLORS.MERGENTA,
];
export const DEFAULT_PLACEHOLDER_COLOR = COLORS.WHITE;
export const gameInitator = (): GameStep[] => {
    const initalState: GameStep[] = [];
    for (let step = 0; step < TOTAL_GAME_LEVEL; step++) {
        const shuffled = COLORS_LIST.sort(() => 0.5 - Math.random());
        initalState.push({
            id: step,
            hiddenColors: shuffled.slice(0, 4),
            choosenColors: [
                DEFAULT_PLACEHOLDER_COLOR,
                DEFAULT_PLACEHOLDER_COLOR,
                DEFAULT_PLACEHOLDER_COLOR,
                DEFAULT_PLACEHOLDER_COLOR,
            ],
            resultChecked: false,
            scores: [false, false, false, false],
        });
    }
    return initalState;
};
