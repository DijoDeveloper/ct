import { BrowserRouter, Route } from "react-router-dom";

import AuthRoutes from './routes/AuthRoutes';
import { Footer } from './components/Footer/Footer';
import { Helmet } from 'react-helmet-async';
import Home from './containers/Home/Home.container';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from "react-redux";

export default function App() {
  // const { i18n } = useTranslation();
  let loginStatus = localStorage.getItem('loginStatus');
  const isLoggedIn = useSelector(state => state.AuthReducer.LoginDetails.loginStatus);
  console.log(isLoggedIn, "logged")
  const classes = useStyles();
  return (
    <BrowserRouter>
      <Helmet
        titleTemplate="Ospi | %s"
        defaultTitle="Ospi"
      // htmlAttributes={{ lang: i18n.language }}
      >
        <meta name="description" content="A React application" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
      </Helmet>
      {isLoggedIn ? (
        <>
          <div className="container-fluid page-body-wrapper">
            <div className="main-panel">
              <Home />
            </div>
          </div>
        </>
      ) : (
        <div className={classes.root}>
          <AuthRoutes />
          <Footer />
        </div>
      )}
      {/* <GlobalStyle /> */}
    </BrowserRouter>
  );
}
const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    backgroundImage: 'url(https://wallpapercave.com/wp/wp2840666.jpg)',
  },
}));
