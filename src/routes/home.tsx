import React from 'react';
import { useRouteMatch, Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { AuthMainStateType } from '../shared/auth/types';
import * as actionTypes from '../shared/auth/actions/actions';
import { NavbarContainer } from './layout/home/containers/navbar';
import { MainContainer } from './layout/home/components/maincontainer';
import { CssBaseline } from '@material-ui/core';
import { useStyles } from './layout/home/styles/layout';
import { SidebarContainer } from './layout/home/containers/sidebar';
import { Dashboard } from '../feature/dashboard/components/dahsboard';

type Props = {
    isLoggedIn: boolean;
    name: string;
    logout: typeof actionTypes.fetchLogoutAsync.request;
};

const Home = (props: Props) => {
    const match = useRouteMatch();
    const classes = useStyles();
    const { isLoggedIn } = props;
    return isLoggedIn ? (
        <div className={classes.root}>
            <CssBaseline />
            <NavbarContainer />
            <SidebarContainer />
            <MainContainer>
                <Switch>
                    <Redirect exact from={`${match.url}`} to={`${match.url}/dashboard`} />
                    <Route exact path={`${match.url}/dashboard`} render={() => <Dashboard />} />
                </Switch>
            </MainContainer>
        </div>
    ) : (
        <Redirect to={{ pathname: '/' }} />
    );
};

const mapStateToProps = (state: AuthMainStateType) => {
    return {
        isLoggedIn: state.authState.isLoggedIn,
        name: state.authState.name,
    };
};

const dispatchToProps = {
    logout: actionTypes.fetchLogoutAsync.request,
};

export const HomeContainer = connect(mapStateToProps, dispatchToProps)(Home);
