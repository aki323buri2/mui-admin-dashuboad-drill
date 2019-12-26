import React from 'react';
import { Route, Switch } from 'react-router-dom'
import routes from '../routes'; 

const RouteComponents = () => {
  return (
    <Switch>
      {routes.map(({ name, title, to, component }) => (
        <Route path={to}>{React.createElement(component)}</Route>
      ))}
    </Switch>
  )
}

export default RouteComponents
