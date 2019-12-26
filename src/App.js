import React from 'react';
import clsx from 'clsx'; 
import { makeStyles, useTheme } from '@material-ui/core/styles'
import {} from '@material-ui/icons'
import { useMediaQuery } from '@material-ui/core'
import Topbar from './components/Topbar'; 
import Sidebar from './components/Sidebar'; 
import Footer from './components/Footer'; 
const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: 56, 
    height: '100%', 
    [theme.breakpoints.up('sm')]: {
      paddingTop: 64, 
    }, 
  }, 
  shiftContent: {
    paddingLeft: 240, 
  }, 
  content: {
    height: '100%', 
  }, 
}));
const App = () => {
  const classes = useStyles();
  const theme = useTheme(); 

  const [openSidebar, setOpenSidebar] = React.useState(false);

  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'), {
    defaultMatches: true, 
  });
  
  const shouldOpenSidebar = isDesktop ? true : openSidebar;

  const handleSidebarOpen = () => {
    setOpenSidebar(true);
  }
  const handleSidebarClose = () => {
    setOpenSidebar(false);
  }

  return (
    <div 
      className={clsx(classes.root, {
        [classes.shiftContent]: isDesktop, 
      })}
    >
      <Topbar 
        onSidebarOpen={handleSidebarOpen}
      />
      <Sidebar 
        onClose={handleSidebarClose}
        open={shouldOpenSidebar} 
        variant={isDesktop ? 'persistent' : 'temporary'}
      />
      <main className={classes.content}>
        test

        <Footer />
      </main>
    </div>
  )
}

export default App
