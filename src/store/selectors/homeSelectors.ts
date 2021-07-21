import { ApplicationState } from '@/reducers';
import { createSelector, OutputSelector } from 'reselect';
import { homeStateType, initialState } from '../reducers/homeReducer';
const selectHomeDomain = (state: ApplicationState) => state.home || initialState;

const makeSelectHome = (): unknown => createSelector(selectHomeDomain, (substate) => substate);
export const selectSample = (): OutputSelector<
    ApplicationState,
    string,
    (res: homeStateType) => string
> => createSelector(selectHomeDomain, (substate) => substate.smaple);
export { makeSelectHome };
