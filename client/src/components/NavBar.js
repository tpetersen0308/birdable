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
        to="/exercises"
      >
        Practice
      </NavLink>
      <NavLink
        style={{ marginRight: '10px', color: 'white' }}
        to="/birds"
      >
        Browse Birds
      </NavLink>
    </div>
  );
}

export default NavBar;