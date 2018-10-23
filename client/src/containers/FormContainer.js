import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Register } from '../components/Register.js';
import Login from '../components/Login.js';
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
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.dispatch(postUser('/api/v1/users', {
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

  render() {
    return (
      <div>
        {this.props.history.location.pathname === "/register" ?
          <Register
            handleSubmit={this.handleSubmit}
            handleEmailChange={this.handleEmailChange}
            handlePasswordChange={this.handlePasswordChange}
            handlePasswordConfirmChange={this.handlePasswordConfirmChange}
          /> :
          <Login />
        }
      </div>
    )
  }
}

export default connect()(FormContainer);