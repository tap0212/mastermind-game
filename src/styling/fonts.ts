/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { css } from 'styled-components';

const regular = () => css`
    font-size: 1rem;
`;

const xRegular = () => css`
    font-size: 1.125rem;
`;
const small = () => css`
    font-size: 0.875rem;
`;
const big = () => css`
    font-size: 1.25rem;
`;
const large = () => css`
    font-size: 1.5rem;
`;
const extraLarge = () => css`
    font-size: 2rem;
`;

export const FONT_SIZE = {
    regular,
    xRegular,
    small,
    large,
    big,
    extraLarge,
};
