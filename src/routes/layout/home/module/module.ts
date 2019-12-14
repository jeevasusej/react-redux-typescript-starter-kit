import reducer from '../reducers/layoutReducer';
import { IModule } from 'redux-dynamic-modules';
import { LayoutRootState } from '../types';

export const LayoutModule: IModule<LayoutRootState> = {
    // Unique id of the module
    id: 'layout_module',
    // Maps the Store key to the reducer
    reducerMap: {
        layoutState: reducer,

        // Open issue https://github.com/reduxjs/redux/issues/2709
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } as any,
};
