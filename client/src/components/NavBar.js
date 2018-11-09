/*
    NavBar is a stateless presentational component that renders the app's
    navigation menu.
*/

import React from 'react';
import { NavLink } from 'react-router-dom';
import GoogleLogin from 'react-google-login';
import { secrets } from '../conf/secrets.js';

const NavBar = () => {

  const responseGoogle = (response) => {
    // dispatch action to post user to backend API
    // dispatch action to log user in
    console.log(response);
  }

  return (
    <div style={{ borderTop: '1px solid white', paddingTop: '10px', marginBottom: '12px' }}>
      <NavLink
        style={{ marginRight: '10px', color: 'white' }}
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        style={{ marginRight: '10px', color: 'white' }}
        to="/practice"
      >
        Practice
      </NavLink>
      <NavLink
        style={{ marginRight: '10px', color: 'white' }}
        to="/browse"
      >
        Browse Birds
      </NavLink>
      {/* dynamically display login/logout button based on login status */}
      <GoogleLogin
        clientId={secrets.GOOGLE_CLIENT_ID}
        buttonText="Log in with Google"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        className="btn btn-xs btn-primary"
      />
    </div>
  );
}

export default NavBar;