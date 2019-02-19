import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Bird } from '../components/Bird.js';
import UserProfile from '../components/UserProfile.js';

class HomePage extends Component {
  render() {
    if (this.props.loading) {
      return (
        <h4>loading...</h4>
      )
    } else if (this.props.loggedIn) {
      return (
        <UserProfile />
      )
    } else {
      return (
        <div>
          <br />
          <h3>Look at this cool bird!</h3>
          <br />
          <Bird id='home-bird' bird={this.props.bird} />
        </div>
      )
    }
  }
}

function mapStateToProps(state) {
  return {
    bird: state.randomBird,
    loading: state.loading,
    loggedIn: state.user.loggedIn,
  }
}

export default connect(mapStateToProps)(HomePage);