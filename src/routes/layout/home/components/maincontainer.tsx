import React from 'react';
import { Container, Box } from '@material-ui/core';
import { useStyles } from '../styles/layout';
import { Copyright } from '../../common/copyright';

export function MainContainer(props: React.PropsWithChildren<{}>) {
    const classes = useStyles();
    return (
        <React.Fragment>
            <main className={classes.content}>
                <div className={classes.toolbar} />
                <Container maxWidth="xl" className={classes.container}>
                    {props.children}
                </Container>
                <Box pt={1}>
                    <Copyright />
                </Box>
            </main>
        </React.Fragment>
    );
}
