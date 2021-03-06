import React from 'react';
import { NavLink } from 'react-router-dom';
import GoogleAuth from './GoogleAuth';

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
      <GoogleAuth />
    </div>
  );
}

export default NavBar;