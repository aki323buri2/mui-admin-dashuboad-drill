import React from 'react';
import {
  AppBar, 
  Toolbar, 
  IconButton, 
  Typography, 
  Button, 
  Tooltip, 
} from '@material-ui/core';
import {
  Menu as MenuIcon, 
  Notifications as NotificationsIcon, 
  AccountCircle as AccountCircleIcon, 
} from '@material-ui/icons'; 
import {
  makeStyles, 
} from '@material-ui/core/styles'; 
import { Link } from 'react-router-dom'; 

const useStyles = makeStyles(theme => ({
  root: {
  }, 
  title: {
    flexGrow: 1, 
  }, 
  titleLink: {
    '&:hover': {
      cursor: 'pointer', 
    }, 
  }, 
  menuIcon: {
    marginRight: theme.spacing(1), 
  }, 
  rightButtons: {
    marginLeft: theme.spacing(2), 
  }
}));

const Navbar = ({
  title = 'タイトル', 
  children = <div>children</div>, 
}) => {
  const classes = useStyles();

  return (
    <AppBar className={classes.root} position="static">
      <Toolbar>
        <IconButton className={classes.menuIcon} edge="start" color="inherit">
          <MenuIcon />
        </IconButton>
        <Typography className={classes.title}>
          <Button className={classes.titleLink} color="inherit" underline="none"
            component={Link}
            to="/"
          >
            {title}
          </Button>
        </Typography>

        {children}

        <div className={classes.rightButtons}>
          {[
            { name: 'notification', Icon: NotificationsIcon, title: '通知', }, 
            { name: 'account', Icon: AccountCircleIcon, title: 'ユーザーアカウント', edge: 'end' }, 
          ].map(({ name, Icon, title, ...props }) => (
            <Tooltip key={name} title={title}>
              <IconButton className={classes.rightButtonItem} color="inherit" {...props}>
                <Icon />
              </IconButton>
            </Tooltip>
          ))}
        </div>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
