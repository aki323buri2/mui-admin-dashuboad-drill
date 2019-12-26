import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { AppBar, Toolbar, Badge, Hidden, IconButton } from '@material-ui/core';
import clsx from 'clsx'; 
import { Link as RouterLink } from 'react-router-dom'; 
import MenuIcon from '@material-ui/icons/Menu'; 
import NotificationsIcon from '@material-ui/icons/Notifications'; 
import InputIcon from '@material-ui/icons/Input'; 

const useStyles = makeStyles(theme => ({
  root: {
    boxShadow: 'none', 
  }, 
  flexGrow: {
    flexGrow: 1, 
  }, 
  signOutButton: {
    marginLeft: theme.spacing(1), 
  }, 
}));

const Topbar = props => {
  const theme = useTheme();
  const classes = useStyles();
  const [notifications] = React.useState([0,0]);
  const { className, onSidebarOpen, ...rest } = props; 

  return (
    <AppBar 
      {...rest}
      className={clsx(classes.root, className)} 
    >
      <Toolbar>
        <RouterLink to="/">
          <img 
            style={{ width: theme.spacing(4) }}
            alt="Logo"
            src="/logo192.png" 
          />
        </RouterLink>
        <div className={classes.flexGrow} />
        <Hidden mdDown>
          <IconButton color="inherit">
            <Badge
              badgeContent={notifications.length}
              color="primary"
              variant="dot"
            >
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <IconButton color="inherit" className={classes.signOutButton}>
            <InputIcon />
          </IconButton>
        </Hidden>
        <Hidden lgUp>
          <IconButton color="inherit" onClick={onSidebarOpen}>
            <MenuIcon />
          </IconButton>
        </Hidden>

      </Toolbar>
    </AppBar>
  )
}

export default Topbar
