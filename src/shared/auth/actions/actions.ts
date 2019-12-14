import { createAsyncAction, ActionType } from 'typesafe-actions';
import { UserAuthInfo } from '../types/userAuthInfo';

/*
 *  THE FOLLOWING CODES DENOTES TO DO ASYNC ACTIONS
 */
export const fetchLoginAsync = createAsyncAction(
    '@AUTH/LOGIN_REQUEST',
    '@AUTH/LOGIN_SUCCESS',
    '@AUTH/LOGIN_FAILURE',
    '@AUTH/LOGIN_CANCEL',
)<undefined, UserAuthInfo, Error, string>();
// types.LoginDetails

export const fetchLogoutAsync = createAsyncAction(
    '@AUTH/LOGOUT_REQUEST',
    '@AUTH/LOGOUT_SUCCESS',
    '@AUTH/LOGOUT_FAILURE',
    '@AUTH/LOGOUT_CANCEL',
)<undefined, boolean, Error, string>();

export type authActionTypes = ActionType<typeof fetchLoginAsync | typeof fetchLogoutAsync>;
