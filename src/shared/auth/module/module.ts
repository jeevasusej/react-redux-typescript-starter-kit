import reducer from '../reducers/authReducer';
import authsaga from '../saga/authsaga';
import * as types from '../types';
import { ISagaModule } from 'redux-dynamic-modules-saga';

export const AuthModule: ISagaModule<types.AuthState> = {
    // Unique id of the module
    id: 'auth',
    // Maps the Store key to the reducer
    reducerMap: {
        authState: reducer,
    },
    // This module uses redux-saga middleware
    // This property will be be used by the SagaExtension
    // to run sagas for the moduleD
    sagas: [authsaga],
};
