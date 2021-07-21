import { COLORS } from '@/styling/colors';
import { FONT_SIZE } from '@/styling/fonts';
import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100vw;
    padding: 2rem;
    min-height: 100vh;
    background-color: ${COLORS.SECONDARY};
    ${FONT_SIZE.large()}
`;
