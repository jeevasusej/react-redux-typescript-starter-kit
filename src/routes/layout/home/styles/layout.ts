import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import bg from './../../../../assets/bg-tweed-pattern.png';

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
        },
        appBar: {
            zIndex: theme.zIndex.drawer + 1,
            transition: theme.transitions.create(['width', 'margin'], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
        },
        appBarShift: {
            marginLeft: theme.appDrawer.width,
            width: `calc(100% - ${theme.appDrawer.width}px)`,
            transition: theme.transitions.create(['width', 'margin'], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
        },
        menuButton: {
            marginRight: 36,
        },
        hide: {
            display: 'none',
        },
        drawer: {
            width: theme.appDrawer.width,
            flexShrink: 0,
            whiteSpace: 'nowrap',
            backgroundImage: `url(${bg})`,
        },
        drawerOpen: {
            width: theme.appDrawer.width,
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
        },
        drawerClose: {
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
            overflowX: 'hidden',
            width: 0,
            [theme.breakpoints.up('sm')]: {
                width: theme.spacing(9) + 1,
            },
        },
        toolbar: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            padding: theme.spacing(0, 1),
            height: theme.appDrawer.height,
        },
        content: {
            flexGrow: 1,
            [theme.breakpoints.only('xs')]: {
                padding: theme.spacing(1),
            },
            [theme.breakpoints.up('sm')]: {
                padding: theme.spacing(3, 3, 1, 3),
            },
            minHeight: '100vh',
        },
        container: {
            minHeight: '82vh',
        },
        title: {
            flexGrow: 1,
        },
        brand: {},
    }),
);
