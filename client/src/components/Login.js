import React from 'react';
import { Panel, Form, FormGroup, ControlLabel, FormControl, Button, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const Login = (props) => {

  return (
    <div>
      <Panel>
        <Panel.Heading>
          <Panel.Title componentClass="h3">Enter your e-mail and password below to log in:</Panel.Title>
        </Panel.Heading>
        <Panel.Body>
          <Form onSubmit={props.handleSubmit}>
            <FormGroup controlId="formHorizontalEmail">
              <FormControl type="email" placeholder="Email" onChange={props.handleEmailChange} />
            </FormGroup>

            <FormGroup controlId="formHorizontalPassword">
              <FormControl type="password" placeholder="Password" onChange={props.handlePasswordChange} />
            </FormGroup>

            <FormGroup>
              <Button type="submit">Sign in</Button>
            </FormGroup>
          </Form>
          Don't have an account? {" "}
          <Link
            to="/register"
          >
            Sign up!
            </Link>
        </Panel.Body>
      </Panel>
    </div>
  )
}