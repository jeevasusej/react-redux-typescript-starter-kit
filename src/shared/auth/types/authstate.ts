import { UserState } from './userState';
import { RootState } from '../../config/types';

export interface AuthState {
    authState: UserState;
}

export type AuthMainStateType = AuthState & RootState;
