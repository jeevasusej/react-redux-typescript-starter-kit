import { createAction, ActionType } from 'typesafe-actions';

export const toggleSidebar = createAction('@LAYOUT/TOGGLE_SIDEBAR')();
// export const toggleSidebar = createAction('@LAYOUT/TOGGLE_SIDEBAR', (sidbarOpened: boolean) => sidbarOpened)<boolean>();
export type layoutTypes = ActionType<typeof toggleSidebar>;
