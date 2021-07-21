/*
 *
 * Home reducer
 *
 */
import { ChooseColorPayload, SetResultPayload } from '@/types/types';
import { gameInitator, GameStep } from '@/utils/GameInitiator';
import { PayloadAction } from '@reduxjs/toolkit';
import produce from 'immer';
import { createActions } from 'reduxsauce';

export const { Types: HomeTypes, Creators: HomeCreators } = createActions({
    setColor: ['payload'],
    submitColor: ['payload'],
    checkResult: ['payload'],
    reset: [],
});

export type homeStateType = {
    color: string;
    gameMap: GameStep[];
};
export const initialState: homeStateType = {
    color: '',
    gameMap: gameInitator(),
};

export const homeContainerReducer = (
    state: homeStateType = initialState,
    action: PayloadAction,
): homeStateType =>
    produce(state, (draft) => {
        switch (action.type) {
            case HomeTypes.SET_COLOR:
                draft.color = action.payload as unknown as string;
                state;
                break;
            case HomeTypes.RESET:
                draft.gameMap = gameInitator();
                draft.color = '';
                state;
                break;
            case HomeTypes.SUBMIT_COLOR:
                const { rowId, color, columnId } = action.payload as unknown as ChooseColorPayload;
                const copyGameMap = [...draft.gameMap];
                const rowToBeChanged = copyGameMap.find((e) => e.id === rowId);
                if (rowToBeChanged) {
                    rowToBeChanged.choosenColors.splice(columnId, 1, color);
                }
                draft.gameMap = copyGameMap;
                state;
                break;
            case HomeTypes.CHECK_RESULT:
                const { rowId: id, results } = action.payload as unknown as SetResultPayload;
                const copyOfGameMap = [...draft.gameMap];
                const rowBeChanged = copyOfGameMap.find((e) => e.id === id);
                if (rowBeChanged) {
                    rowBeChanged.scores = results;
                    rowBeChanged.resultChecked = true;
                }
                draft.gameMap = copyOfGameMap;
                state;
                break;
        }
    });

export default homeContainerReducer;
