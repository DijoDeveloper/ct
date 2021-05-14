import React, { useState } from 'react';

//material ui
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Grid from '@material-ui/core/Grid';
import { Helmet } from 'react-helmet-async';
import Link from '@material-ui/core/Link';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Styles from './Styles'
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

// export default class LoginPage extends React.Component {
export default function LoginPage(props) {
    const classes = Styles();
    //save and modify mobile
    const [mobile, setMobile] = useState('');
    //save and modify passwrod
    const [password, setPassword] = useState('');
    //save and modify email
    const [email, setEmail] = useState('');
    //save and modify formtype
    const [formType, setFormType] = useState('login');
    //Default display text based on form type
    const viewInfo = {
        login: {
            button: 'Sign In',
            linkText: "Don't have an account? Sign Up"
        },
        register: {
            button: 'Sign Up',
            linkText: "Already have an account? Sign In"
        }
    }
    /**
     * @desc: To submit the form based on form type
     */
    function submitData() {
        //update user details to props
        props.authActions({
            action: 'UserInfo',
            data: {
                mobile,
                email
            },
            type: 'UPDATE_USER_DETAILS'
        })
        //make login by updating the props
        props.authActions({
            action: 'LoginDetails',
            data: {
                loginStatus: true
            },
            type: 'UPDATE_LOGIN_STATUS'
        })
    }
    return (
        <>
            <Helmet>
                <title>Login</title>
                <meta name="description" content="Description of Login" />
            </Helmet>
            <div>
                <Grid container>
                    <Grid item xs={7}></Grid>
                    <Grid item xs={5}>
                        <Container component="main" maxWidth="xs">
                            <CssBaseline />
                            <div className={classes.paper}>
                                <Avatar className={classes.avatar}>
                                    <LockOutlinedIcon />
                                </Avatar>
                                <Typography component="h1" variant="h5">
                                    {viewInfo[formType].button}
                                </Typography>
                                <form onSubmit={() => submitData()} className={classes.form} noValidate>
                                    <TextField
                                        value={mobile}
                                        variant="outlined"
                                        margin="normal"
                                        required
                                        fullWidth
                                        id="mobile"
                                        label="Mobile number"
                                        name="mobile"
                                        autoFocus
                                        color="primary"
                                        onChange={(event) => { setMobile(event.target.value) }}
                                    />
                                    {
                                        formType == 'register' &&
                                        <TextField
                                            value={email}
                                            variant="outlined"
                                            margin="normal"
                                            required
                                            fullWidth
                                            id="email"
                                            label="Email"
                                            name="email"
                                            color="primary"
                                            onChange={(event) => { setEmail(event.target.value) }}
                                        />
                                    }
                                    <TextField
                                        variant="outlined"
                                        margin="normal"
                                        required
                                        fullWidth
                                        name="password"
                                        label="Password"
                                        type="password"
                                        id="password"
                                        autoComplete="password"
                                        onChange={(event) => { setPassword(event.target.value) }}
                                    />
                                    <Button
                                        type="submit"
                                        fullWidth
                                        variant="contained"
                                        color="primary"
                                        className={classes.submit}
                                    >
                                        Submit
                                    </Button>
                                    <Grid container>
                                        <Grid item xs>
                                            {/* <Link href="#" variant="body2">
                                                Forgot password?
                                            </Link> */}
                                        </Grid>
                                        <Grid item>
                                            <Link onClick={() => setFormType(formType == 'register' ? 'login' : 'register')} href="javascript:;" variant="body2">
                                                {viewInfo[formType].linkText}
                                            </Link>
                                        </Grid>
                                    </Grid>
                                </form>
                            </div>
                        </Container>
                    </Grid>
                </Grid>
            </div>
        </>
    );
}
