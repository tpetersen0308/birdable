import React, { Component } from 'react';
import { connect } from 'react-redux';

class LikeButton extends Component {
  render() {
    return (
      <i class="fas fa-heart"></i>
    )
  }
}

function mapStateToProps(state) {
  return {
    loggedIn: state.user.loggedIn,
    user: state.user.currentUser,
  }
}

export default connect(mapStateToProps)(LikeButton);