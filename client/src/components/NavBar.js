/*
    NavBar is a stateless presentational component that renders the app's
    navigation menu.
*/

import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
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
    </div>
  );
}

export default NavBar;