import { ConfigureFlexTypes } from '@/types/types';
import { css } from 'styled-components';
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const configureFelx = ({
    direction = 'row',
    alignItems = 'center',
    justify = 'center',
}: ConfigureFlexTypes) => {
    return css`
        display: flex;
        align-items: ${alignItems};
        justify-content: ${justify};
        flex-direction: ${direction};
    `;
};
