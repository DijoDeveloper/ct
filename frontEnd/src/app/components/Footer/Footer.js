/**
 *
 * Footer
 *
 */
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
export const Footer = (props) => {
    const classes = useStyles();
    return (
        <>
        <footer className={classes.footer}>
            <Container maxWidth="sm">
                <Typography variant="body2" color="textSecondary" align="center">
                    {'Copyright © '}
                    <Link color="inherit" href="javascript:;">
                        Connect Through
                    </Link>{' '}
                    {new Date().getFullYear()}
                    {'.'}
                </Typography>
            </Container>
        </footer>
        </>
    );
};
const useStyles = makeStyles(theme => ({
    footer: {
        padding: theme.spacing(3, 2),
        marginTop: 'auto',
    },
}));
// const <p>Adadaadasd</p>
