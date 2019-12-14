import { connectRouter, routerMiddleware } from 'connected-react-router';
import { History } from 'history';
import { IModule } from 'redux-dynamic-modules';
import { RootState } from './types';

export const getRootModule = (history: History): IModule<RootState> => {
    const _rootModule: IModule<RootState> = {
        // Unique id of the module
        id: 'root',
        // Maps the Store key to the reducer
        reducerMap: {
            router: connectRouter(history),
            // Open issue https://github.com/reduxjs/redux/issues/2709
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } as any,
        middlewares: [routerMiddleware(history)],
    };

    return _rootModule;
};
