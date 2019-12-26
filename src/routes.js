import {
  Home as HomeIcon,
  DataUsage as DataUsageIcon,
} from '@material-ui/icons'

import Home from './components/Home';
import Data from './components/Data';

const routes = [
  {
    name: 'home', 
    Icon: HomeIcon, 
    title: 'ホーム',  
    to: '/home', 
    component: Home, 
  },
  {
    name: 'data', 
    Icon: DataUsageIcon, 
    title: 'データ' , 
    to: '/data', 
    component: Data, 
  }, 
]

export default routes
