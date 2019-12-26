import React from 'react';
import {
  CssBaseline, 
  Container, 
  Paper, 
} from '@material-ui/core';
import {
  makeStyles, 
} from '@material-ui/core/styles'
import Navbar from './components/Navbar';
import NavLinks from './components/NavLinks';
import RouteComponents from './components/RouteComponents';

const useStyles = makeStyles(theme => ({
  root: {}, 
  paper: {
    margin: theme.spacing(2), 
    padding: theme.spacing(2), 
  }, 
}))
const App = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />

        <Container>
          <Navbar title="株式会社ショクリュー">
            <NavLinks />
          </Navbar>

          <Paper className={classes.paper}>
            <RouteComponents />
          </Paper>
        </Container>
      
    </React.Fragment>
  )
}

export default App