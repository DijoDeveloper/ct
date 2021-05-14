import { Route, withRouter } from 'react-router-dom';

import Login from '../containers/Auth/Auth.container'
import React from 'react';

const routes = [
  {
    component: Login,
    path: '/',
  },
  {
    component: Login,
    path: '/login',
  },
];
const Routes = withRouter(({ location }) => {
  return (
    <>
      {
        routes.map(route => {
          return (
            <Route
              exact
              key={route.path}
              path={route.path}
              component={route.component}
            />
          );
        })}
    </>
  );
});
export default Routes;
