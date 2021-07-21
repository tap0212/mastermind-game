import React from 'react';
import { Switch, Route, RouteComponentProps } from 'react-router-dom';
import { withRouter } from 'react-router';
import { ThemeProvider } from 'styled-components';

import { Layout } from 'antd';
import GlobalStyle from '@/globalStyles';
import { makeSelectApp } from '@/store/selectors/appSelectors';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { compose, Action } from 'redux';
import { THEME } from '@/styling/colors';
import Home from '@/Containers/Home';
import NotFoundPage from '@/Containers/NotFoundPage';
import Header from '@/Components/Header';
interface StateProps {}
interface DispatchProps {}
type Props = StateProps & DispatchProps;

const App: React.FC = (props: Props) => {
    return (
        <ThemeProvider theme={THEME}>
            <Layout.Content>
                <Header title="The TypeScript React Template" />
                <Switch>
                    <Route exact={true} path={'/'} component={Home} />
                    <Route path="*" exact={true} component={NotFoundPage} />
                </Switch>
                <GlobalStyle />
            </Layout.Content>
        </ThemeProvider>
    );
};

export type Dispatch = (action: Action) => void;
const mapStateToProps = createStructuredSelector({
    app: makeSelectApp,
});
const mapDispatchToProps = {};
const withConnect = connect<StateProps, DispatchProps>(mapStateToProps, mapDispatchToProps);
export default compose<React.FC<Props>>(withConnect, withRouter)(App);
