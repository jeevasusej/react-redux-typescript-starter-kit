import { ThemeOptions, Theme } from '@material-ui/core/styles/createMuiTheme';
import * as Colors from '@material-ui/core/colors';
import { Breakpoint } from '@material-ui/core/styles/createBreakpoints';

// Reference : https://material-ui.com/guides/typescript/#customization-of-theme
declare module '@material-ui/core/styles/createMuiTheme' {
    interface Theme {
        appDrawer: {
            width: React.CSSProperties['width'];
            height: React.CSSProperties['height'];
            breakpoint: Breakpoint;
        };
    }
    // allow configuration using `createMuiTheme`
    interface ThemeOptions {
        appDrawer?: {
            width?: React.CSSProperties['width'];
            height?: React.CSSProperties['height'];
            breakpoint?: Breakpoint;
        };
    }
}

const rootTheme: ThemeOptions = {
    props: {
        MuiButton: {
            size: 'small',
        },
        MuiFilledInput: {
            margin: 'dense',
        },
        MuiFormControl: {
            margin: 'dense',
        },
        MuiFormHelperText: {
            margin: 'dense',
        },
        MuiIconButton: {
            size: 'small',
        },
        MuiInputBase: {
            margin: 'dense',
        },
        MuiInputLabel: {
            margin: 'dense',
        },
        MuiListItem: {
            dense: true,
        },
        MuiOutlinedInput: {
            margin: 'dense',
        },
        MuiFab: {
            size: 'small',
        },
        MuiTable: {
            size: 'small',
        },
        MuiTextField: {
            margin: 'dense',
        },
        MuiToolbar: {
            variant: 'dense',
        },
    },
    palette: {
        background: { paper: 'rgba(229, 229, 229, 1)', default: '#fafafa' },
        primary: {
            light: Colors.green[300],
            main: Colors.green[600],
            dark: Colors.green[800],
            contrastText: Colors.green[50],
        },
        secondary: {
            light: 'rgba(119, 116, 118, 1)',
            main: 'rgba(97, 93, 95, 1)',
            dark: 'rgba(29, 28, 28, 1)',
            contrastText: '#fff',
        },
        error: { light: '#e57373', main: '#f44336', dark: '#d32f2f', contrastText: '#fff' },
        text: {
            primary: 'rgba(0, 0, 0, 0.87)',
            secondary: 'rgba(0, 0, 0, 0.54)',
            disabled: 'rgba(0, 0, 0, 0.38)',
            hint: 'rgba(0, 0, 0, 0.38)',
        },
    },
    appDrawer: {
        width: 240,
        breakpoint: 'lg',
        height: 48,
    },
    typography: {
        // Tell Material-UI what the font-size on the html element is.
        htmlFontSize: 17,
    },
    overrides: {
        MuiIconButton: {
            sizeSmall: {
                // Adjust spacing to reach minimal touch target hitbox
                marginLeft: 4,
                marginRight: 4,
                padding: 12,
            },
        },
    },
};

export default rootTheme;
