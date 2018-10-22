import React, { Component } from 'react';
import Register from './Register.js';
import Login from './Login.js';

class FormContainer extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      password_confirmation: '',
    }
  }

  render() {
    return (
      <div>
        {this.props.history.location.pathname === "/register" ?
          <Register /> :
          <Login />
        }
      </div>
    )
  }
}

export default FormContainer