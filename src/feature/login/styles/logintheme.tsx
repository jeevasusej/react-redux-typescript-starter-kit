import { createMuiTheme } from '@material-ui/core';
import * as Colors from '@material-ui/core/colors';
import rootTheme from '../../../shared/config/theme';

export const logintheme = createMuiTheme({
    ...rootTheme,
    palette: {
        primary: {
            light: Colors.green[300],
            main: Colors.green[600],
            dark: Colors.green[900],
            contrastText: Colors.green[50],
        },
        secondary: {
            light: '#fff',
            main: Colors.orange[500],
            dark: 'rgba(29, 28, 28, 1)',
            contrastText: '#fff',
        },
        text: {
            primary: Colors.green[50],
            secondary: Colors.orange[500],
            disabled: Colors.grey[500],
            hint: Colors.orange[500],
        },
    },
    overrides: {
        MuiOutlinedInput: {
            root: {
                '& $notchedOutline': {
                    borderColor: '#fff!important',
                },
                '& $focused': {
                    borderColor: 'red!important',
                },
            },
        },
        MuiFormLabel: {
            root: {
                '&.Mui-focused': {
                    color: Colors.orange[500],
                },
            },
        },
    },
});
