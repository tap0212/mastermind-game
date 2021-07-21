import styled from 'styled-components';
import { configureFelx } from '@/styling/styles';
import { COLORS } from '@/styling/colors';

export const Circle = styled.div`
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    margin: 0 0.5rem;
    border: 1px solid black;
    cursor: pointer;
    ${(props) => props.color && `background-color: ${props.color};`}
`;
export const Wrapper = styled.div`
    margin: 1rem 0;
    padding: 0.5rem;
    border: 1px solid black;
    ${configureFelx({ direction: 'row', alignItems: 'center', justify: 'center' })};
`;
export const ScoreBox = styled.div`
    padding: 0.5rem;
    border: 1px solid black;
    display: grid;
    grid-template-columns: 1rem 1rem;
    grid-row: auto auto;
    grid-column-gap: 0.375rem;
    grid-row-gap: 0.1rem;
`;
export const Dot = styled.div`
    width: 0.875rem;
    height: 0.875rem;
    border-radius: 50%;
    border: 1px solid black;
    ${(props) => props.color && `background-color: ${props.color};`}
`;
export const PinWrapper = styled.div`
    margin: 1rem 0;
    padding: 0.5rem;
    ${configureFelx({ direction: 'row', alignItems: 'center', justify: 'center' })};
`;
export const CheckBtn = styled.button`
    background-color: ${COLORS.GREEN};
    color: ${COLORS.PRIMARY};
    border: none;
    margin: 0 0.5rem;
    &:focus {
        outline: none;
    }
    cursor: pointer;
`;
