import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import GoogleAuth from './GoogleAuth.js';

const NavMenu = () => {
  return (
    <div style={{ borderTop: '1px solid white', paddingTop: '10px', marginBottom: '12px' }}>
      <Navbar>
        <Navbar.Header>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem>
              <NavLink to="/">
                <strong>Home</strong>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/practice">
                Practice
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/browse">
                Browse Birds
              </NavLink>
            </NavItem>
          </Nav>
          <Nav pullRight>
            <NavItem>
              <GoogleAuth />
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default NavMenu;