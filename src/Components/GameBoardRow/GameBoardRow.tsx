import React from 'react';
import { COLORS } from '@/styling/colors';
import { Wrapper, PinWrapper, ScoreBox, CheckBtn, Dot, Circle } from './GameBoardRow.styles';
import { DEFAULT_PLACEHOLDER_COLOR } from '@/utils/GameInitiator';
import 'react-toastify/dist/ReactToastify.css';
import { useMemo } from 'react';
import { message } from 'antd';
type Props = {
    checkResult: (rowId: number) => void;
    rowId: number;
    colors: string[];
    scores: boolean[];
    selectedColor: string;
    resultChecked: boolean;
    isRowEnabled: (rowId: number) => boolean;
    submitColor: (rowId: number, color: string, columnId: number) => void;
};

const GameBoardRow = ({
    checkResult,
    rowId,
    colors,
    scores,
    selectedColor,
    submitColor,
    resultChecked,
    isRowEnabled,
}: Props) => {
    const showCheck = useMemo(() => {
        return !colors.includes(DEFAULT_PLACEHOLDER_COLOR);
    }, [colors]);
    const handleOnClickCheckResult = () => {
        checkResult(rowId);
    };
    const handleClickOnCircle = (c: string, i: number) => {
        if (!selectedColor) {
            message.info('Please select a color to fill first!');
        }
        if (!isRowEnabled(rowId)) {
            message.info('Please choose in sequence');
        }
        if (isRowEnabled(rowId) && selectedColor && c === DEFAULT_PLACEHOLDER_COLOR) {
            submitColor(rowId, selectedColor, i);
        }
    };
    return (
        <Wrapper>
            <PinWrapper>
                {colors.map((c, i) => (
                    <Circle
                        onClick={() => {
                            handleClickOnCircle(c, i);
                        }}
                        key={i}
                        color={c}
                    />
                ))}
            </PinWrapper>
            <ScoreBox>
                {scores.map((s, i) => (
                    <Dot key={i} color={resultChecked && s ? COLORS.BLACK : COLORS.PRIMARY} />
                ))}
            </ScoreBox>

            <CheckBtn
                color={COLORS.GREEN}
                disabled={!(showCheck && !resultChecked)}
                onClick={handleOnClickCheckResult}
            >
                Check
            </CheckBtn>
        </Wrapper>
    );
};

export default React.memo(GameBoardRow);
