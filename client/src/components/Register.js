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
              <FormControl type="email" placeholder="Email" onChange={props.handleEmailChange} />
              <FormControl.Feedback />
            </FormGroup>

            <FormGroup
              controlId="formHorizontalPassword"
              validationState={props.validatePassword()}
            >
              <FormControl type="password" placeholder="Password" onChange={props.handlePasswordChange} />
              {props.validatePassword() === 'error' && <HelpBlock>Passwords must be at least 8 characters.</HelpBlock>}
              <FormControl.Feedback />
            </FormGroup>

            <FormGroup
              controlId="formHorizontalPasswordConfirm"
              validationState={props.validatePasswordConfirm()}
            >
              <FormControl type="password" placeholder="Confirm Password" onChange={props.handlePasswordConfirmChange} />
              <FormControl.Feedback />
            </FormGroup>

            <FormGroup>
              <Button type="submit">Sign up</Button>
            </FormGroup>
          </Form>
        </Panel.Body>
      </Panel>
    </div>
  )
}