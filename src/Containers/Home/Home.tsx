import { HomeCreators } from '@/store/reducers/homeReducer';
import { makeSelectHome, selectSample } from '@/store/selectors/homeSelectors';
import React, { memo } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { Wrapper } from './Styles';
interface StateProps {
    sample: string;
}
interface DispatchProps {
    dispatchSetSample: () => void;
}
type Props = RouteComponentProps;
export type PropsType = StateProps & DispatchProps & Props;
const Home = (props: PropsType) => {
    return <Wrapper>Hello!</Wrapper>;
};

const mapStateToProps = createStructuredSelector({
    home: makeSelectHome,
    sample: selectSample(),
});
const mapDispatchToProps = {
    dispatchSetSample: () => HomeCreators.sample(),
};

const withConnect = connect<StateProps, DispatchProps, Props>(mapStateToProps, mapDispatchToProps);
export default compose<React.FC<PropsType>>(withConnect, memo)(Home);
