import React, { useState } from 'react';

import { Helmet } from 'react-helmet-async';
import Navbar from '../../components/Navbar/Navbar';
import { makeStyles } from '@material-ui/core/styles';

//material ui
// export default class LoginPage extends React.Component {
export default function LoginPage(props) {
    const classes = useStyles();
    return (
        <>
            <Helmet>
                <title>Home</title>
                <meta name="description" content="Description of Home" />
            </Helmet>
            <div>
                <Navbar authActions={props.authActions} />
            </div>
        </>
    );
}
const useStyles = makeStyles(theme => ({
    paper: {
        marginTop: theme.spacing(12),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));
