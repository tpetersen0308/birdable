import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
// import secrets file when working in development
// import { secrets } from '../conf/secrets.js';
import { postUser, endSession } from '../actions/sessionActions.js';

class GoogleAuth extends Component {

  render() {

    const responseGoogle = (response) => {
      // dispatch action to post user to backend API
      this.props.postUser(response);
    }

    const logout = () => {
      this.props.endSession();
    }

    if (this.props.loggedIn) {
      return (
        <span>
          <Button bsSize="xsmall" bsStyle="primary" onClick={logout}>
            Logout
          </Button>
          {" "}
          Logged in as {this.props.user.first_name} {this.props.user.last_name}
        </span>
      )
    } else {
      return (
        <span>
          {/* dynamically display login/logout button based on login status */}
          <GoogleLogin
            clientId={process.env.NODE_ENV === "production" ? process.env.GOOGLE_CLIENT_ID : secrets.GOOGLE_CLIENT_ID}
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            className="btn btn-xs btn-primary"
          /> <span className="login-prompt">to access your user profile</span>
        </span>
      )
    }
  }
}

function mapStateToProps(state) {
  return {
    loggedIn: state.user.loggedIn,
    user: state.user.currentUser,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    postUser: (user) => dispatch(postUser(user)),
    endSession: () => dispatch(endSession()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GoogleAuth);