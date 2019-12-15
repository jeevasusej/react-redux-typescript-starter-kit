import React from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../shared/auth/actions/actions';
import { AuthState } from '../shared/auth/types';
import { CssBaseline, makeStyles } from '@material-ui/core';
import bg from './../assets/bg-tweed-pattern.png';
import { LoginContainer } from '../feature/login/containers/loginContainer';
import { useRouteMatch, Switch, Route, Redirect } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
    container: {
        backgroundImage: `url(${bg})`,
        width: '100%',
        minHeight: '100vh',
        display: 'grid',
        margin: 0,
        placeItems: 'center center',
    },
}));
type Props = {
    isLoggedIn: boolean;
    name: string;
    login: typeof actionTypes.fetchLoginAsync.request;
};

const Landing = (props: Props) => {
    const { isLoggedIn } = props;
    const match = useRouteMatch();
    const classes = useStyles();

    return !isLoggedIn ? (
        <div className={classes.container}>
            <CssBaseline />
            <Switch>
                <Redirect exact from="/" to="login" />
                <Route exact path={`${match.url}login`} render={() => <LoginContainer />} />
            </Switch>
        </div>
    ) : (
        <Redirect to={{ pathname: '/home' }} />
    );
};

const mapStateToProps = (state: AuthState) => {
    return {
        isLoggedIn: state.authState.isLoggedIn,
        name: state.authState.name,
    };
};

const dispatchToProps = {
    login: actionTypes.fetchLoginAsync.request,
};

export const LandingContainer = connect(mapStateToProps, dispatchToProps)(Landing);
