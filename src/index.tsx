import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import configureStore from './shared/config/configureStore';
import { createBrowserHistory } from 'history';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import rootTheme from './shared/config/theme';
import { HashRouter } from 'react-router-dom';

const history = createBrowserHistory();
const store = configureStore(history);
const apptheme = createMuiTheme(rootTheme);

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <MuiThemeProvider theme={apptheme}>
                <HashRouter>
                    <App />
                </HashRouter>
            </MuiThemeProvider>
            {/* <BrowserRouter>
                <App />
            </BrowserRouter> */}
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
