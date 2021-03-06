import React from 'react';
import clsx from 'clsx'; 
import { NavLink as RouterLink } from 'react-router-dom'; 
import { makeStyles } from '@material-ui/core/styles'; 
import { List, ListItem, Button, colors } from '@material-ui/core';
const useStyles = makeStyles(theme => ({
  root: {}, 
  item: {
    display: 'flex', 
    paddingTop: 0, 
    paddingBottom: 0, 
  }, 
  button: {
    color: colors.blueGrey[800], 
    padding: '10px 8ps', 
    justifyContent: 'flex-start', 
    textTransform: 'none', 
    letterSpacing: 0, 
    width: '100%', 
    fontWeight: theme.typography.fontWeightMedium, 
  }, 
  icon: {
    color: theme.palette.icon, 
    width: 24, 
    height: 24, 
    display: 'flex', 
    allItems: 'center', 
    marginRight: theme.spacing(1), 
  }, 
  active: {
    color: theme.palette.primary.media, 
    fontWeight: theme.typography.fontWeightMedium, 
    '& $icon': {
      color: theme.palette.primary.main, 
    }, 
  }, 
}));

const CustomRouterLink = React.forwardRef((props, ref) => (
  <div 
    ref={ref}
    style={{ flexGrow: 1 }}
  >
    <RouterLink {...props} />
  </div>
));

const SidebarNav = props => {
  const { pages, className, ...rest } = props;
  const classes = useStyles();

  return (
    <List
      {...rest}
      className={clsx(classes.root, className)}
    >
      {pages.map(page => (
        <ListItem 
          className={classes.item}
          disableGutters 
          key={page.title}
        >
          <Button 
            activeClassName={classes.active}
            className={classes.button}
            component={CustomRouterLink}
            to={page.href}
          >
            <div className={classes.icon}>{page.icon}</div>
            {page.title}
          </Button>
        </ListItem>
      ))}
    </List>
  )
}

export default SidebarNav
