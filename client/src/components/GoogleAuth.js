import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';
import { secrets } from '../conf/secrets.js';

class GoogleAuth extends Component {

  render() {

    const responseGoogle = (response) => {
      // dispatch action to post user to backend API
      dispatch(postUser(response));
      // dispatch action to log user in
      console.log(response);
    }

    return (
      <div>
        {/* dynamically display login/logout button based on login status */}
        <GoogleLogin
          clientId={secrets.GOOGLE_CLIENT_ID}
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          className="btn btn-xs btn-primary"
        />
      </div>
    )
  }
}

export default GoogleAuth;