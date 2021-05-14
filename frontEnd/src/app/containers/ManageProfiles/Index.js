import { Helmet } from 'react-helmet-async';
import MPRoutes from './MPRoutes';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
export default function ManageProfiles(props) {
    const classes = useStyles();
    return (
        <>
            <Helmet>
                <title></title>
                <meta name="description" content="Description of " />
            </Helmet>
            <div>
                <MPRoutes />
            </div>
        </>
    );
}
const useStyles = makeStyles(theme => ({
}));
