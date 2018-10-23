import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Register } from '../components/Register.js';
import { Login } from '../components/Login.js';
import { postUser } from '../actions/userActions.js';

class FormContainer extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      password_confirmation: '',
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handlePasswordConfirmChange = this.handlePasswordConfirmChange.bind(this);
    this.validateEmail = this.validateEmail.bind(this);
    this.validatePassword = this.validatePassword.bind(this);
  }

  handleSubmit = event => {
    event.preventDefault();
    const route = this.props.history.location.pathname === "/register" ? '/api/v1/users' : '/login'
    this.props.dispatch(postUser(route, {
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

  handlePasswordConfirmChange = event => {
    event.preventDefault();
    this.setState({
      ...this.state,
      password_confirmation: event.target.value,
    });
  }

  validateEmail = () => {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(String(this.state.email).toLowerCase())) return 'success';
    return 'error';
  }

  validatePassword = () => {
    if (this.state.password.length >= 8) return 'success';
    return 'error';
  }

  render() {
    return (
      <div>
        {this.props.history.location.pathname === "/register" ?
          <Register
            handleSubmit={this.handleSubmit}
            handleEmailChange={this.handleEmailChange}
            handlePasswordChange={this.handlePasswordChange}
            handlePasswordConfirmChange={this.handlePasswordConfirmChange}
            validateEmail={this.validateEmail}
            validatePassword={this.validatePassword}
          /> :
          <Login
            handleSubmit={this.handleSubmit}
            handleEmailChange={this.handleEmailChange}
            handlePasswordChange={this.handlePasswordChange}
            validateEmail={this.validateEmail}
            validatePassword={this.validatePassword}
          />
        }
      </div>
    )
  }
}

export default connect()(FormContainer);