import { Route, withRouter } from 'react-router-dom';

import ManageProfiles from '../containers/ManageProfiles/ManageProfiles.container';
import React from 'react';

const routes = [
  {
    component: ManageProfiles,
    path: '/',
  },
  {
    component: ManageProfiles,
    path: '/manageProfiles',
  },
];
const Routes = withRouter(({ location }) => {
  return (
    <>
      {routes.map(route => {
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
