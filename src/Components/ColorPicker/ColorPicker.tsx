import { configureFelx } from '@/styling/styles';
import React from 'react';
import styled from 'styled-components';
type Props = {
    colors: string[];
    setSelectedColor: (e: string) => void;
    selectedColor: string;
};

const Wrapper = styled.div`
    width: 6rem;
    height: 20rem;
    margin-right: 2rem;
    ${configureFelx({ direction: 'column', alignItems: 'center', justify: 'center' })};
`;
const Circle = styled.div`
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    margin: 0.5rem 0;
    cursor: pointer;
    ${(props) => props.color && `background-color: ${props.color};`}
`;

const ColorPicker = ({ selectedColor, colors, setSelectedColor }: Props) => {
    return (
        <Wrapper>
            {colors.map((c) => (
                <Circle
                    style={c === selectedColor ? { border: '4px solid black' } : { border: '0px' }}
                    onClick={() => {
                        setSelectedColor(c);
                    }}
                    key={c}
                    color={c}
                />
            ))}
        </Wrapper>
    );
};

export default React.memo(ColorPicker);
