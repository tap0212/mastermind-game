/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers, Reducer } from 'redux';
import App, { appStateType, initialState as AppInitialState } from 'store/reducers/appReducer';
import home, { homeStateType, initialState as homeInitialState } from './store/reducers/homeReducer';

export interface ApplicationState {
    App: appStateType;
    home: homeStateType;
}
export const ApplicationInitialState = {
    App: AppInitialState,
    home: homeInitialState,
};
/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */
export const reducers: Reducer<ApplicationState> = combineReducers<ApplicationState>({
    App,
    home,
});
