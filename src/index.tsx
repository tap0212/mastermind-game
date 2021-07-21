/**
 * index.tsx
 *
 * This is the entry file for the application, only setup and boilerplate
 * code.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import App from '@/containers/App';
import ErrorBoundary from '@/components/ErrorBoundary';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from './configureStore';

import history from './utils/history';
import { ApplicationInitialState } from './reducers';

const { store } = configureStore(history, ApplicationInitialState);
ReactDOM.render(
    <ErrorBoundary>
        <Provider store={store}>
            <Router>
                <App />
            </Router>
        </Provider>
    </ErrorBoundary>,
    document.getElementById('root'),
);
