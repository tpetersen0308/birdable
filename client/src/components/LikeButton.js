import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Tooltip, OverlayTrigger, Button } from 'react-bootstrap';

class LikeButton extends Component {
  render() {

    const tooltip = (
      <Tooltip id="tooltip">
        You must be logged in to add favorites.
      </Tooltip>
    );

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
        <OverlayTrigger placement="bottom" overlay={tooltip}>
          <i class="far fa-heart"></i>
        </OverlayTrigger>
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