import React from 'react';
import { Panel, Form, FormGroup, ControlLabel, FormControl, Button, Col, HelpBlock } from 'react-bootstrap';

export const Register = (props) => {

  return (
    <div>
      <Panel>
        <Panel.Heading>
          <Panel.Title componentClass="h3">Register a new user account below:</Panel.Title>
        </Panel.Heading>
        <Panel.Body>
          <Form onSubmit={props.handleSubmit}>
            <FormGroup
              controlId="formHorizontalEmail"
              validationState={props.validateEmail()}
            >
              <FormControl
                type="email"
                placeholder="Email"
                value={props.email}
                onChange={props.handleEmailChange} />
              <FormControl.Feedback />
              {props.user && props.user.errors &&
                <HelpBlock>{props.user.errors.email[0]}</HelpBlock>
              }
            </FormGroup>

            <FormGroup
              controlId="formHorizontalPassword"
              validationState={props.validatePassword()}
            >
              <FormControl
                type="password"
                placeholder="Password"
                value={props.password}
                onChange={props.handlePasswordChange} />
              {props.validatePassword() === 'error' && <HelpBlock>Passwords must be at least 8 characters.</HelpBlock>}
              <FormControl.Feedback />
            </FormGroup>

            <FormGroup
              controlId="formHorizontalPasswordConfirm"
              validationState={props.validatePasswordConfirm()}
            >
              <FormControl
                type="password"
                placeholder="Confirm Password"
                value={props.password_confirmation}
                onChange={props.handlePasswordConfirmChange} />
              <FormControl.Feedback />
            </FormGroup>

            <FormGroup>
              <Button
                type="submit"
                disabled={props.validateEmail() !== 'success' || props.validatePassword() !== 'success' || props.validatePasswordConfirm() !== 'success'}
              >
                Sign up
              </Button>
            </FormGroup>
          </Form>
        </Panel.Body>
      </Panel>
    </div>
  )
}