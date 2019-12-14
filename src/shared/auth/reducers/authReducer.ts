import * as actionType from '../actions/actions';
import { UserState } from '../types';
import { getType } from 'typesafe-actions';
// import { fetchLoginAsync } from '../actions/actions';

const intialState: UserState = {
    isLoggedIn: false,
    name: 'Jeeva',
};

const reducer = (state = intialState, action: actionType.authActionTypes): UserState => {
    switch (action.type) {
        case getType(actionType.fetchLoginAsync.success):
            return action.payload;
        case getType(actionType.fetchLogoutAsync.success):
            return { ...state, isLoggedIn: false, name: '' };
        default:
            return state;
    }
};

/*
 *  CHECK THE FOLLOWING CODE AFTER RELEASING THE DOC FOR V5
 */
// export const reducer = createReducer(intialState).handleAction(
//     fetchLoginAsync.success,
//     // eslint-disable-next-line @typescript-eslint/no-explicit-any
//     (state: any, action: any) => {
//         debugger;
//         return action.payload;
//     },
// );

export default reducer;
