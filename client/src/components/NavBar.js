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
    console.log(response);
  }

  return (
    <div style={{ borderTop: '1px solid white', paddingTop: '10px', marginBottom: '12px' }}>
      <GoogleLogin
        clientId={secrets.GOOGLE_CLIENT_ID}
        buttonText="Log in with Google"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        className="btn btn-xs btn-primary"
      />
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
    </div>
  );
}

export default NavBar;