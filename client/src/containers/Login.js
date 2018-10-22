import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Panel, Form, FormGroup, ControlLabel, FormControl, Button, Col } from 'react-bootstrap';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    }
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.dispatch(postUser('/login', {
      user: this.state,
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
            <Panel.Title componentClass="h3">Enter your e-mail and password below to log in:</Panel.Title>
          </Panel.Heading>
          <Panel.Body>
            <Form onSubmit={this.handleSubmit}>
              <FormGroup controlId="formHorizontalEmail">
                <FormControl type="email" placeholder="Email" onChange={this.handleEmailChange} />
              </FormGroup>

              <FormGroup controlId="formHorizontalPassword">
                <FormControl type="password" placeholder="Password" onChange={this.handlePasswordChange} />
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
}

export default Login;