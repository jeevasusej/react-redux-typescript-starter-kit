import React from 'react';
import { IconButton, Divider, Drawer, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import clsx from 'clsx';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import InboxIcon from '@material-ui/icons/Inbox';
import MailIcon from '@material-ui/icons/Mail';
import { useStyles } from '../styles/layout';
import { LayoutModule } from '../module/module';
import { LayoutRootType } from '../types';
import { connect } from 'react-redux';
import { toggleSidebar } from '../actions/actions';
import { DynamicModuleLoader } from 'redux-dynamic-modules';

interface SidebarProps {
    open: boolean;
    toggleOpen: typeof toggleSidebar;
    name: string;
}

function Sidebar(props: SidebarProps) {
    const { open, toggleOpen } = props;
    const classes = useStyles();
    const toggleDrawer = () => {
        toggleOpen();
    };
    return (
        <Drawer
            variant="permanent"
            className={clsx(classes.drawer, {
                [classes.drawerOpen]: open,
                [classes.drawerClose]: !open,
            })}
            classes={{
                paper: clsx({
                    [classes.drawerOpen]: open,
                    [classes.drawerClose]: !open,
                }),
            }}
            open={open}
        >
            <div className={classes.toolbar}>
                <IconButton onClick={toggleDrawer}>
                    <ChevronLeftIcon />
                </IconButton>
            </div>
            <Divider />
            <List>
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
        </Drawer>
    );
}

const mapStateToProps = (state: LayoutRootType) => {
    return {
        name: state.authState.name,
        open: state.layoutState.sidbarOpened,
    };
};

const dispatchToProps = {
    toggleOpen: toggleSidebar,
};

const ConnectedSidebar = connect(mapStateToProps, dispatchToProps)(Sidebar);

export const SidebarContainer = () => (
    <DynamicModuleLoader modules={[LayoutModule]}>
        <ConnectedSidebar></ConnectedSidebar>
    </DynamicModuleLoader>
);
