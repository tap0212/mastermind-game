export enum COLORS {
    PRIMARY = '#ffffff',
    SECONDARY = '#f0f0f0',
    BLACK = '#000000',
}

export const THEME = {
    LIGHT_MODE: {
        PRIMARY: COLORS.PRIMARY,
        SECONDARY: COLORS.SECONDARY,
    },
    DARK_MODE: {
        PRIMARY: COLORS.SECONDARY,
        SECONDARY: COLORS.PRIMARY,
    },
};
