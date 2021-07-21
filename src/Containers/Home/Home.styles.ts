import { COLORS } from '@/styling/colors';
import { FONT_SIZE } from '@/styling/fonts';
import { configureFelx } from '@/styling/styles';
import styled from 'styled-components';

export const Wrapper = styled.div`
    ${configureFelx({ direction: 'row', alignItems: 'flex-start', justify: 'center' })}
    width: 100vw;
    padding: 2rem;
    min-height: 100vh;
    background-color: ${COLORS.SECONDARY};
    ${FONT_SIZE.large()}
`;

export const GameBoard = styled.div`
    padding: 2rem;
    ${configureFelx({ direction: 'column', alignItems: 'center', justify: 'flex-start' })}
    border: 1px solid ${COLORS.PRIMARY};
`;

export const AccordianWrapper = styled.div``;
