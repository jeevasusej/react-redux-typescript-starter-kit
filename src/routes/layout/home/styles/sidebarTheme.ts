import { createMuiTheme } from '@material-ui/core';
import * as Colors from '@material-ui/core/colors';
import rootTheme from '../../../../shared/config/theme';

export const sidebarTheme = createMuiTheme({
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
    props: {
        MuiListItem: {
            className: 'sidebar-list-item',
        },
        MuiListItemText: {
            className: 'sidebar-list-item-text',
        },
        MuiListItemIcon: {
            className: 'sidebar-list-item-icon',
        },
    },
    overrides: {
        MuiListItemIcon: {
            root: {
                color: Colors.orange[500],
            },
        },
        MuiListItem: {
            root: {
                '&$selected': {
                    backgroundColor: Colors.grey[800],
                },
                '&$selected .sidebar-list-item-text': {
                    color: Colors.orange[500],
                },
                '&.sidebar-list-item:hover': {
                    color: Colors.orange[500],
                },
                // '&.sidebar-list-item-icon:hover': {
                //     color: Colors.orange[500],
                // },
            },
        },
    },
});
