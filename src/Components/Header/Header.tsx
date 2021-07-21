import { COLORS } from '@/styling/colors';
import { configureFelx } from '@/styling/styles';
import React from 'react';
import styled from 'styled-components';
type Props = {
    title: string;
};

const Wrapper = styled.div`
    width: 100vw;
    height: 4rem;
    background-color: ${COLORS.PRIMARY};
    ${configureFelx({ direction: 'row', alignItems: 'center', justify: 'center' })}
`;
const Header = ({ title }: Props) => {
    return (
        <Wrapper>
            <h3>{title}</h3>
        </Wrapper>
    );
};

export default React.memo(Header);
