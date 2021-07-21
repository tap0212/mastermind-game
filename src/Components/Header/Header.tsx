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
const CenterCol = styled.div`
    ${configureFelx({ direction: 'column', alignItems: 'center', justify: 'center' })}
`;
const Header = ({ title }: Props) => {
    return (
        <Wrapper>
            <CenterCol>
                <h3>{title}</h3>
                <a
                    target="_blank"
                    href="https://github.com/tap0212/mastermind-game"
                    rel="noreferrer"
                >
                    <h5>Github</h5>
                </a>
            </CenterCol>
        </Wrapper>
    );
};

export default React.memo(Header);
