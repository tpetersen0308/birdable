import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';
import { connect } from 'react-redux';
import { secrets } from '../conf/secrets.js';
import { postUser } from '../actions/sessionActions.js';

class GoogleAuth extends Component {

  render() {

    const responseGoogle = (response) => {
      // dispatch action to post user to backend API
      this.props.postUser(response);
    }

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

function mapDispatchToProps(dispatch) {
  return {
    postUser: (user) => dispatch(postUser(user)),
  }
}

export default connect(null, mapDispatchToProps)(GoogleAuth);