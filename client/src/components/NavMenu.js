import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

const NavMenu = () => {
  return (
    <div style={{ borderTop: '1px solid white', paddingTop: '10px', marginBottom: '12px' }}>
      <Navbar>
        <Navbar.Collapse>
          <Nav>
            <NavItem
              style={{ marginRight: '10px', color: 'white' }}
              href="/"
            >
              Home
            </NavItem>
            <NavItem
              style={{ marginRight: '10px', color: 'white' }}
              href="/practice"
            >
              Practice
            </NavItem>
            <NavItem
              style={{ marginRight: '10px', color: 'white' }}
              href="/browse"
            >
              Browse Birds
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default NavMenu;