import { call, put, takeLatest, all, fork } from 'redux-saga/effects';
import * as actionTypes from '../actions/actions';
import * as api from '../api/authapi';

function* loginRequest(action: ReturnType<typeof actionTypes.fetchLoginAsync.request>): Generator {
    try {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const response: any = yield call(api.login);
        if (response) yield put(actionTypes.fetchLoginAsync.success(response.data));
    } catch (error) {
        yield put(actionTypes.fetchLoginAsync.failure(error));
    }
}

function* logoutRequest() {
    try {
        yield call(api.logout);
        yield put(actionTypes.fetchLogoutAsync.success(true));
    } catch (e) {
        yield put(actionTypes.fetchLogoutAsync.failure(e));
    }
}

function* login() {
    yield takeLatest(actionTypes.fetchLoginAsync.request, loginRequest);
}
function* logout() {
    yield takeLatest(actionTypes.fetchLogoutAsync.request, logoutRequest);
}

export default function* authsaga() {
    yield all([fork(login), fork(logout)]);
}
