/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Store, compose, applyMiddleware, combineReducers } from 'redux';
import { IModuleStore, createStore, IModule } from 'redux-dynamic-modules';
import { getSagaExtension } from 'redux-dynamic-modules-saga';
import { History, createBrowserHistory } from 'history';
import { routerMiddleware, connectRouter } from 'connected-react-router';
import { getRootModule } from './rootModule';
import { RootState } from './types';
import { AuthModule } from '../auth/module/module';

export default function configureStore(history: History): Store<any> {
    const store: IModuleStore<RootState> = createStore(
        {
            extensions: [getSagaExtension()],
        },
        getRootModule(history),
        AuthModule,
    );
    return store;
}

// for dynamic module enhancer
// please check : https://github.com/microsoft/redux-dynamic-modules/issues/24
