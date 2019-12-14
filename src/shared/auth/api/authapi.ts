import axios, { AxiosResponse } from 'axios';
import mockAdapter from 'axios-mock-adapter';
import * as dataTypes from '../types';

// MOCKING SHOULD BE REMOVED AFTER API IMPLEMENTATION
// This sets the mock adapter on the default instance
const mock = new mockAdapter(axios);

mock.onPost('/login').reply(200, {
    name: 'Jeeva',
    isLoggedIn: true,
});

mock.onPost('/logout').reply(200, {
    isLoggedOut: true,
});

// Mocking ends here
// userdetail: dataTypes.LoginDetails
export function login() {
    const userdetail: dataTypes.LoginDetails = {
        username: 'jeeva',
        password: 'pwd',
    };
    return axios.post('/login', {
        username: userdetail.username,
        password: userdetail.password,
    });
}

export function logout() {
    return axios.post('/logout');
}
