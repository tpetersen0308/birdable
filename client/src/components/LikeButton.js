import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Tooltip, OverlayTrigger } from 'react-bootstrap';
import { addBirdToFavorites } from '../actions/userActions.js';

class LikeButton extends Component {

  favorite = () => {
    this.props.addBirdToFavorites(this.props.user.id, { bird_id: this.props.birdId, add: true });
  }

  render() {

    const tooltip = (
      <Tooltip id="tooltip">
        You must be logged in to add favorites.
      </Tooltip>
    );

    if (this.props.loggedIn) {
      if (this.props.user.bird_ids.includes(this.props.birdId)) {
        return (
          <i class="fas fa-heart"></i>
        )
      } else {
        return (
          <i class="far fa-heart" onClick={this.favorite}></i>
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

function mapDispatchToProps(dispatch) {
  return {
    addBirdToFavorites: (userId, data) => dispatch(addBirdToFavorites(userId, data)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LikeButton);