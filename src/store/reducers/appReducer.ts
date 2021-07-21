/*
 *
 * App reducer
 *
 */
import { PayloadAction } from '@reduxjs/toolkit';
import produce from 'immer';
import { createActions } from 'reduxsauce';

export const { Types: AppTypes, Creators: AppCreators } = createActions({
    sample: ['payload'],
});
export type appStateType = {};
export const initialState: appStateType = {};

export const homeContainerReducer = (state: appStateType = initialState, action: PayloadAction): appStateType =>
    produce(state, (/* draft */) => {
        switch (action.type) {
            case AppTypes.SAMPLE:
                state;
                break;
        }
    });

export default homeContainerReducer;
