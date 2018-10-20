import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Panel, Form, FormGroup, ControlLabel, FormControl, Button, Col } from 'react-bootstrap';
import { postUser } from '../actions/userActions.js';

class Register extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      password_confirmation: '',
    }
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.dispatch(postUser('/api/v1/users', {
      user: {
        email: event.currentTarget[0].value,
        password: event.currentTarget[1].value,
        password_confirmation: event.currentTarget[2].value,
      },
    }));
  }

  handleEmailChange = event => {
    event.preventDefault();
    this.setState({
      ...this.state,
      email: event.target.value,
    });
  }

  handlePasswordChange = event => {
    event.preventDefault();
    this.setState({
      ...this.state,
      password: event.target.value,
    });
  }

  render() {
    return (
      <div>
        <Panel>
          <Panel.Heading>
            <Panel.Title componentClass="h3">Register a new user account below:</Panel.Title>
          </Panel.Heading>
          <Panel.Body>
            <Form onSubmit={this.handleSubmit}>
              <FormGroup controlId="formHorizontalEmail">
                <FormControl type="email" placeholder="Email" onChange={this.handleEmailChange} />
              </FormGroup>

              <FormGroup controlId="formHorizontalPassword">
                <FormControl type="password" placeholder="Password" onChange={this.handlePasswordChange} />
              </FormGroup>

              <FormGroup controlId="formHorizontalPasswordConfirm">
                <FormControl type="password" placeholder="Confirm Password" />
              </FormGroup>

              <FormGroup>
                <Button type="submit">Sign in</Button>
              </FormGroup>
            </Form>
          </Panel.Body>
        </Panel>
      </div>
    )
  }
}

export default connect()(Register);