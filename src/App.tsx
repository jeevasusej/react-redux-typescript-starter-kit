import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import { HomeContainer } from './routes/home';
import { LandingContainer } from './routes/landing';

const App: React.FC = () => {
    return (
        <>
            <Switch>
                <Route path="/home" render={() => <HomeContainer />}></Route>
                <Route path="/" render={() => <LandingContainer />}></Route>
            </Switch>
        </>
    );
};

export default App;
