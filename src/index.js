import React from 'react';
import ReactDOM from 'react-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
    domain={process.env.REACT_APP_AUTH_DOMAIN}
    clientId={process.env.REACT_APP_AUTH_CLIENT_ID}
    authorizationParams={{
      redirect_uri: window.location.origin
    }}>
      <App />
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
