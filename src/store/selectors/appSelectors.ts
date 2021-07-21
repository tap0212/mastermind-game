import { ApplicationState } from '@/reducers';
import { createSelector } from 'reselect';
import { initialState } from '../reducers/appReducer';
const selectAppDomain = (state: ApplicationState) => state.App || initialState;

const makeSelectApp = (): unknown => createSelector(selectAppDomain, (substate) => substate);
export { makeSelectApp };
