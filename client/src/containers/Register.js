import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Panel, Form, FormGroup, ControlLabel, FormControl, Button, Col } from 'react-bootstrap';
import { postUser } from '../actions/userActions.js';

class Register extends Component {

  handleSubmit = event => {
    postUser('/api/v1/users', {
      email: event.currentTarget[0].value,
      password: event.currentTarget[1].value,
      password_confirmation: event.currentTarget[2].value,
    })
  }

  render() {
    const postUser = (route, data) => this.props.dispatch(postUser(route, data))

    return (
      <div>
        <Panel>
          <Panel.Heading>
            <Panel.Title componentClass="h3">Register a new user account below:</Panel.Title>
          </Panel.Heading>
          <Panel.Body>
            <Form onSubmit={this.handleSubmit}>
              <FormGroup controlId="formHorizontalEmail">
                <FormControl type="email" placeholder="Email" />
              </FormGroup>

              <FormGroup controlId="formHorizontalPassword">
                <FormControl type="password" placeholder="Password" />
              </FormGroup>

              <FormGroup controlId="formHorizontalPassword">
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