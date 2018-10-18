import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Login extends Component {
  render() {
    return (
      <div>
        Don't have an account? {" "}
        <Link
          to="/register"
        >
          Sign up!
        </Link>
      </div>
    )
  }
}

export default Login;