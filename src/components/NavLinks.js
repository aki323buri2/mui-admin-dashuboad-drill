import React from 'react';
import {
  Tooltip, 
  IconButton, 
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'; 
import {
  Link, 
} from 'react-router-dom';

import routes from '../routes';

const useStyles = makeStyles(theme => ({
  root: {}, 
  iconButton: {}, 
}))

const NavLinks = () => {
  const classes = useStyles(); 
  return (
    <div className={classes.root}>
      {routes.map(({ name, to, Icon, title }) => (
        <Tooltip key={name} title={title}>
          <IconButton className={classes.iconButton} color="inherit" 
            component={Link}
            to={to}
          >
            <Icon/>
          </IconButton>
        </Tooltip>
      ))}
    </div>
  )
}

export default NavLinks
