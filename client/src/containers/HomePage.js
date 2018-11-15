// HomePage component renders a Bird component randomly selected from state.

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Bird } from '../components/Bird.js';
import { UserProfile } from '../components/UserProfile.js';

class HomePage extends Component {

  // randomBird() function returns a bird object selected at random from the passed-in array
  randomBird = (birds) => {
    return birds[Math.floor(Math.random() * birds.length)];
  }

  render() {
    if (this.props.loading) {
      return (
        <h4>loading...</h4>
      )
    } else if (this.props.loggedIn) {
      return (
        <UserProfile user={this.props.user} birds={this.props.birds} loading={this.props.loading} />
      )
    } else {
      return (
        <div>
          <br />
          <h3>Look at this cool bird!</h3>
          <br />
          <Bird id='home-bird' bird={this.randomBird(this.props.birds)} />
        </div>
      )
    }
  }
}

function mapStateToProps(state) {
  return {
    birds: state.birds,
    loading: state.loading,
    user: state.user.currentUser,
    loggedIn: state.user.loggedIn,
  }
}

export default connect(mapStateToProps)(HomePage);