import AccountCircle from "@material-ui/icons/AccountCircle";
import AccountCircleTwoToneIcon from '@material-ui/icons/AccountCircleTwoTone';
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import ExitToAppTwoToneIcon from '@material-ui/icons/ExitToAppTwoTone';
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Menu from "@material-ui/core/Menu";
import MenuIcon from "@material-ui/icons/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import PropTypes from "prop-types";
import React from "react";
import Routes from '../../routes/routes'
import SupervisorAccountTwoToneIcon from '@material-ui/icons/SupervisorAccountTwoTone';
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import classNames from "classnames";
import styles from "./Styles";
import { withStyles } from "@material-ui/core/styles";
class MiniDrawer extends React.Component {
    state = {
        open: false,
        anchorEl: null
    };
    handleDrawerOpen = () => {
        this.setState({ open: !this.state.open });
    };
    handleDrawerClose = () => {
        this.setState({ open: false });
    };
    handleMenu = event => {
        this.setState({ anchorEl: event.currentTarget });
    };
    handleClose(menuName) {
        this.setState({ anchorEl: null });
        if (menuName == 'logout')
            this.props.authActions({
                action: 'LoginDetails',
                data: {
                    loginStatus: false
                },
                type: 'UPDATE_LOGIN_STATUS'
            })
    };
    render() {
        const { classes, theme } = this.props;
        const { anchorEl } = this.state;
        const open = Boolean(anchorEl);
        return (
            <div className={classes.root}>
                <CssBaseline />
                <AppBar
                    position="fixed"
                    className={classes.appBar}
                    foojon={classNames(classes.appBar, {
                        [classes.appBarShift]: this.state.open
                    })}
                >
                    <Toolbar disableGutters={true}>
                        <IconButton
                            color="inherit"
                            aria-label="Open drawer"
                            onClick={this.handleDrawerOpen}
                            className={classes.menuButton}
                        >
                            <MenuIcon
                                classes={{
                                    root: this.state.open
                                        ? classes.menuButtonIconOpen
                                        : classes.menuButtonIconClosed
                                }}
                            />
                        </IconButton>
                        <Typography
                            variant="h6"
                            color="inherit"
                            className={classes.grow}
                            noWrap
                        >
                            Connect Through
                        </Typography>
                        <div>
                            <IconButton
                                aria-owns={open ? "menu-appbar" : undefined}
                                aria-haspopup="true"
                                onClick={this.handleMenu}
                                color="inherit"
                            >
                                <AccountCircle />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorEl}
                                anchorOrigin={{
                                    vertical: "top",
                                    horizontal: "right"
                                }}
                                transformOrigin={{
                                    vertical: "top",
                                    horizontal: "right"
                                }}
                                open={open}
                                onClose={() => this.handleClose()}
                            >
                                <MenuItem onClick={() => this.handleClose()}>
                                    {/* <AccountCircleTwoToneIcon /> */}
                                     My Account
                                </MenuItem>
                                <MenuItem onClick={() => this.handleClose('logout')}>
                                    {/* <ExitToAppTwoToneIcon /> */}
                                    Logout
                                </MenuItem>
                            </Menu>
                        </div>
                    </Toolbar>
                </AppBar>
                <Drawer
                    variant="permanent"
                    className={classNames(classes.drawer, {
                        [classes.drawerOpen]: this.state.open,
                        [classes.drawerClose]: !this.state.open
                    })}
                    classes={{
                        paper: classNames({
                            [classes.drawerOpen]: this.state.open,
                            [classes.drawerClose]: !this.state.open
                        })
                    }}
                    open={this.state.open}
                >
                    <div className={classes.toolbar} />
                    <List>
                        {["Manage Profiles"].map((text, index) => (
                            <ListItem key={index} button key={text}>
                                <ListItemIcon>
                                    <SupervisorAccountTwoToneIcon />
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItem>
                        ))}
                    </List>
                </Drawer>
                <main className={classes.content}>
                    <div className={classes.toolbar} />
                    <Routes />
                </main>
            </div>
        );
    }
}
MiniDrawer.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired
};
export default withStyles(styles, { withTheme: true })(MiniDrawer);
