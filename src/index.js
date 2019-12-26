import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import {
  ThemeProvider, 
  createMuiTheme, 
} from '@material-ui/core/styles';
import {
  blue, 
} from '@material-ui/core/colors';

import { BrowserRouter as Router, } from 'react-router-dom'; 

const theme = createMuiTheme({
  palette: {
    primary: {
      light: blue[600], 
      main: blue[700], 
      dark: blue[900], 
    }
  }
})
const Root = () => (
  <Router>
    <ThemeProvider theme={theme}>
      <App/>
    </ThemeProvider>
  </Router>
);
ReactDOM.render(<Root />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
