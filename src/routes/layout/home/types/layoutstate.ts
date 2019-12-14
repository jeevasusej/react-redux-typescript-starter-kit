import { RootState } from '../../../../shared/config/types';
import { AuthState } from '../../../../shared/auth/types';
import { DeepReadonly } from 'utility-types';

export interface LayoutState {
    sidbarOpened: boolean;
}
export interface LayoutRootState {
    layoutState: LayoutState;
}
export type LayoutStateType = DeepReadonly<LayoutState>;
export type LayoutRootType = LayoutRootState & RootState & AuthState;
