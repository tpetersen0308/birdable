import React, { Component } from 'react';
import { connect } from 'react-redux';

class LikeButton extends Component {
  render() {
    if (this.props.loggedIn) {
      if (this.props.user.favorites.includes(this.props.birdId)) {
        return (
          <i class="far fa-heart"></i>
        )
      } else {
        return (
          <i class="fas fa-heart"></i>
        )
      }
    } else {
      return (
        <i class="far fa-heart" title="You must be logged in to add favorites."></i>
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

export default connect(mapStateToProps)(LikeButton);