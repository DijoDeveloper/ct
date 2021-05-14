import { Route, withRouter } from 'react-router-dom';

import AddProfile from './AddProfile/AddProfile.container'
import ProfileList from './ProfileList/ProfileList.container'
import React from 'react';

const routes = [
    {
        component: AddProfile,
        path: '/',
    },
    {
        component: ProfileList,
        path: '/profileList',
    },
    {
        component: AddProfile,
        path: '/addProfile',
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
