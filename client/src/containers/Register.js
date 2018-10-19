import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';

class Register extends Component {
  render() {
    return (
      <div>
        <Panel>
          <Panel.Heading>
            <Panel.Title componentClass="h3">Register a new user account below:</Panel.Title>
          </Panel.Heading>
          <Panel.Body>[registration form]</Panel.Body>
        </Panel>
      </div>
    )
  }
}

export default Register;