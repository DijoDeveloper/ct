/**
 * index.js
 *
 * This is the entry file for the application, only setup and boilerplate
 * code.
 */

import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

import * as React from 'react';
import * as ReactDOM from 'react-dom';

import  App  from '../src/app/App';
import { HelmetProvider } from 'react-helmet-async';
import { Provider } from 'react-redux';
import { createStore } from 'redux'
import reducer from './redux/store'

// const store = createStore(reducer)

// import { configureAppStore } from 'store/configureStore';

// import './locales/i18n';



// Initialize languages
  
//  const store = configureAppStore();
 const MOUNT_NODE = document.getElementById('root');
 
 ReactDOM.render(
   <Provider store={reducer}>
     <HelmetProvider>
       <React.StrictMode>
         <App />
       </React.StrictMode>
     </HelmetProvider>
   </Provider>,
   MOUNT_NODE,
 );
 
 // Hot reloadable translation json files
//  if (module.hot) {
//    module.hot.accept(['./locales/i18n'], () => {
//      // No need to render the App again because i18next works with the hooks
//    });
//  }
 
