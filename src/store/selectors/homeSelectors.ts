import { ApplicationState } from '@/reducers';
import { GameStep } from '@/utils/GameInitiator';
import { createSelector, OutputSelector } from 'reselect';
import { homeStateType, initialState } from '../reducers/homeReducer';
const selectHomeDomain = (state: ApplicationState) => state.home || initialState;

const makeSelectHome = (): unknown => createSelector(selectHomeDomain, (substate) => substate);
export const selectColor = (): OutputSelector<
    ApplicationState,
    string,
    (res: homeStateType) => string
> => createSelector(selectHomeDomain, (substate) => substate.color);
export const selectGameMap = (): OutputSelector<
    ApplicationState,
    GameStep[],
    (res: homeStateType) => GameStep[]
> => createSelector(selectHomeDomain, (substate) => substate.gameMap);
export { makeSelectHome };
