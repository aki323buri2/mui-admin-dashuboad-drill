import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Link } from '@material-ui/core';
const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4), 
  }, 
}));

const Footer = props => {
  const { className, ...rest } = props; 
  const classes = useStyles(); 

  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >
      <Typography variant="body1">
        &copy;{' '}
        <Link 
          component="a"
          href="https://divias.io/"
          target="_blank"
        >
          Devias IO
        </Link>
        . 2019
      </Typography>
      <Typography variant="caption">
        Created with love for the environment. By designers and developers 
        who love to work together in offices!
      </Typography>
    </div>
  )
}

export default Footer
