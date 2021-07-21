import ColorPicker from '@/components/ColorPicker/ColorPicker';
import GameBoardRow from '@/components/GameBoardRow/GameBoardRow';
import { HomeCreators } from '@/store/reducers/homeReducer';
import { makeSelectHome, selectColor, selectGameMap } from '@/store/selectors/homeSelectors';
import { COLORS } from '@/styling/colors';
import { ChooseColorPayload, SetResultPayload } from '@/types/types';
import { GameStep } from '@/utils/GameInitiator';
import React, { memo, useState } from 'react';
import { useMemo } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { compose } from 'redux';
import { Button, Modal, Collapse } from 'antd';

const { Panel } = Collapse;

import { createStructuredSelector } from 'reselect';
import { AccordianWrapper, GameBoard, Wrapper } from './Home.styles';
import { useCallback } from 'react';
import { useEffect } from 'react';
interface StateProps {
    selectedColor: string;
    gameMap: GameStep[];
}
interface DispatchProps {
    dispatchSetColor: (e: string) => void;
    dispatchSubmitColor: (s: ChooseColorPayload) => void;
    dispatchCheckResult: (s: SetResultPayload) => void;
    dispatchReset: () => void;
}
type Props = RouteComponentProps;
export type PropsType = StateProps & DispatchProps & Props;
const Home = (props: PropsType) => {
    const {
        dispatchSetColor,
        dispatchReset,
        selectedColor,
        gameMap,
        dispatchSubmitColor,
        dispatchCheckResult,
    } = props;
    const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
    useEffect(() => {
        if (!gameMap.filter((e) => e.resultChecked === false).length) {
            setIsModalVisible(true);
        }
    }, [gameMap]);
    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };
    const colors = useMemo(
        () => [
            COLORS.YELLOW,
            COLORS.PINK,
            COLORS.GREEN,
            COLORS.TERQUISH,
            COLORS.OLIVE,
            COLORS.MERGENTA,
        ],
        [],
    );
    const handleChangeColor = (e: string) => {
        dispatchSetColor(e);
    };
    const handleChangeChoosenColor = (rowId: number, color: string, columnId: number) => {
        dispatchSubmitColor({ rowId, color, columnId });
    };
    const checkResult = (rowId: number) => {
        const rowToBeChecked = gameMap.find((e) => e.id === rowId);
        const results: boolean[] = [];
        for (let i = 0; i < 4; i++) {
            results.push(rowToBeChecked?.hiddenColors[i] === rowToBeChecked?.choosenColors[i]);
        }
        dispatchCheckResult({ results, rowId });
    };
    const isRowEnabled = useCallback(
        (rowId: number): boolean => {
            const prevRow = gameMap[rowId - 1];
            if (prevRow) {
                return prevRow.resultChecked;
            }
            return true;
        },
        [gameMap],
    );
    const handleStartOver = () => {
        dispatchReset();
        handleCancel();
    };
    return (
        <>
            <AccordianWrapper>
                <Collapse defaultActiveKey={['1']}>
                    <Panel header="Rules" key="1">
                        <p>
                            Try to guess the pattern, in both order and color, within ten turns.
                            After submitting a row, a small black peg is placed for each code peg
                            from the guess which is correct in both color and position. A white peg
                            indicates the existence of a correct color code peg placed in the wrong
                            position.{' '}
                        </p>
                    </Panel>
                </Collapse>
            </AccordianWrapper>
            <Wrapper>
                <GameBoard>
                    {gameMap.map((e) => (
                        <GameBoardRow
                            key={e.id}
                            rowId={e.id}
                            scores={e.scores}
                            colors={e.choosenColors}
                            submitColor={handleChangeChoosenColor}
                            selectedColor={selectedColor}
                            checkResult={checkResult}
                            resultChecked={e.resultChecked}
                            isRowEnabled={isRowEnabled}
                        />
                    ))}
                </GameBoard>
                <ColorPicker
                    selectedColor={selectedColor}
                    setSelectedColor={handleChangeColor}
                    colors={colors}
                />
                <Modal
                    title={null}
                    footer={null}
                    visible={isModalVisible}
                    onOk={handleOk}
                    onCancel={handleCancel}
                >
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <h1>Game Over</h1>
                        <Button onClick={handleStartOver}>Start Over</Button>
                    </div>
                </Modal>
            </Wrapper>
        </>
    );
};

const mapStateToProps = createStructuredSelector({
    home: makeSelectHome,
    selectedColor: selectColor(),
    gameMap: selectGameMap(),
});
const mapDispatchToProps = {
    dispatchSetColor: (e: string) => HomeCreators.setColor(e),
    dispatchSubmitColor: (e: ChooseColorPayload) => HomeCreators.submitColor(e),
    dispatchCheckResult: (s: SetResultPayload) => HomeCreators.checkResult(s),
    dispatchReset: () => HomeCreators.reset(),
};

const withConnect = connect<StateProps, DispatchProps, Props>(mapStateToProps, mapDispatchToProps);
export default compose<React.FC<PropsType>>(withConnect, memo)(Home);
