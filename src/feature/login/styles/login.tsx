import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
    loginpanelWrapper: {
        backgroundColor: 'rgba(221, 221, 221, 0.6)',
        color: '#444',
        maxWidth: 504,
        borderRadius: 4,
        '& input': {
            color: '#555',
            textShadow: '0 1px #FFF',
            border: '2px solid transparent',
            borderRadius: '4px',
            outline: 'none',
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
        },
    },
    paper: {
        marginTop: theme.spacing(1),
        padding: theme.spacing(4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));
