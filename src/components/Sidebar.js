import React from 'react';
import clsx from 'clsx'; 
import { makeStyles } from '@material-ui/core/styles'; 
import { Drawer, Divider } from '@material-ui/core'; 
import Profile from './Profile'; 
import SidebarNav from './SidebarNav'; 
import UpgradePlan from './UpgradePlan'; 
import sidebarPages from '../sidebarPages'; 
const useStyles = makeStyles(theme => ({
  drawer: {
    width: 240, 
    [theme.breakpoints.up('lg')]: {
      marginTop: 64, 
      height: 'calc(100% - 64px)', 
    }, 
  }, 
  root: {
    backbroundColor: theme.palette.white, 
    display: 'flex', 
    flexDirection: 'column', 
    height: '100%', 
    padding: theme.spacing(2)
  }, 
  divider: {
    margin: theme.spacing(2, 0), 
  }, 
  nav: {}, 
}));

const Sidebar = props => {
  const { open, variant, onClose, className, ...rest } = props;
  const classes = useStyles();

  return (
    <Drawer
      anchor="left"
      classes={{ paper: classes.drawer }}
      open={open}
      variant={variant}
      onClose={onClose}
    >
      <div 
        {...rest}
        className={clsx(classes.root, className)}
      >
        <Profile />
        <Divider className={classes.divider} />
        <SidebarNav
          className={classes.nav}
          pages={sidebarPages}
        />
        <UpgradePlan />
      </div>
    </Drawer>
  )
}

export default Sidebar
