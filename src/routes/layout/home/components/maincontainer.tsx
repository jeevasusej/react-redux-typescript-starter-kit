import React from 'react';
import { Box } from '@material-ui/core';
import { useStyles } from '../styles/layout';
import { Copyright } from '../../common/copyright';

export function MainContainer(props: React.PropsWithChildren<{}>) {
    const classes = useStyles();
    return (
        <React.Fragment>
            <main className={classes.content}>
                <div className={classes.toolbar} />
                <div className={classes.container}>{props.children}</div>
                <Box pt={1}>
                    <Copyright />
                </Box>
            </main>
        </React.Fragment>
    );
}
