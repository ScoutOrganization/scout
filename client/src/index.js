import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// import { createRoot } from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
    domain='dev-zvcfpfh6ktajet02.us.auth0.com'
    clientId='BgrY9VUpZBBCWo7QGbLXWH87zP3oOW5l'
    useRefreshTokens
    cacheLocation='localstorage'
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <App />
  </Auth0Provider>
);
