import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';
import GoogleLogout from 'react-google-login';
import { connect } from 'react-redux';
import { secrets } from '../conf/secrets.js';
import { postUser } from '../actions/sessionActions.js';

class GoogleAuth extends Component {

  render() {

    const responseGoogle = (response) => {
      // dispatch action to post user to backend API
      this.props.postUser(response);
    }

    const logout = () => {
      // dispatch action to clear session id in backend API
    }

    if (this.props.loggedIn) {
      return (
        <span>
          <GoogleLogout
            buttonText="Logout"
            onLogoutSuccess={logout}
          >
          </GoogleLogout>
        </span>
      )
    } else {
      return (
        <span>
          {/* dynamically display login/logout button based on login status */}
          <GoogleLogin
            clientId={secrets.GOOGLE_CLIENT_ID}
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            className="btn btn-xs btn-primary"
          />
        </span>
      )
    }
  }
}

function mapStateToProps(state) {
  return {
    loggedIn: state.user.loggedIn,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    postUser: (user) => dispatch(postUser(user)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GoogleAuth);