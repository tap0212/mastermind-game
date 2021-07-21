/*
 *
 * Home reducer
 *
 */
import { PayloadAction } from '@reduxjs/toolkit';
import produce from 'immer';
import { createActions } from 'reduxsauce';

export const { Types: HomeTypes, Creators: HomeCreators } = createActions({
    sample: ['payload'],
});
export type homeStateType = {
    smaple: string;
};
export const initialState: homeStateType = {
    smaple: '',
};

export const homeContainerReducer = (state: homeStateType = initialState, action: PayloadAction): homeStateType =>
    produce(state, (draft) => {
        switch (action.type) {
            case HomeTypes.SAMPLE:
                draft.smaple = 'hello';
                state;
                break;
        }
    });

export default homeContainerReducer;
