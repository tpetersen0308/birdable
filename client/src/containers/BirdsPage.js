/*
    BirdsPage component renders a BirdsFilter component, passing in the 
    appropriate action and function as props for maintaining state and handling
    routing for browsing, and renders a BirdsList component, passing in the 
    birds collection determined by user selection.
*/

import React, { Component } from 'react';
import { connect } from 'react-redux';
import BirdsFilter from './BirdsFilter';
import { selectBirdsForBrowse } from '../actions/browseActions.js';
import { BirdsList } from '../components/BirdsList.js';

class BirdsPage extends Component {

  /* 
      submitForBrowse() function pushes the route to re-render the component
      so new user selections replace the collection on the page instead of
      merging with the currently displayed collection.
  */
  submitForBrowse = () => {
    this.props.history.push('/browse');
  }

  render() {
    return (
      <div>
        <br />
        <h4>Select families and regions to browse, or hit 'Go!' to see them all!</h4>
        <br />
        <BirdsFilter handleSubmitRoute={this.submitForBrowse} actionType="SELECT_BIRDS_FOR_BROWSE" />
        <br />
        <br />
        <BirdsList birds={this.props.birds} />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { birds: state.browse.birdSelection }
}

function mapDispatchToProps(dispatch) {
  return {
    selectBirdsForBrowse: (birds) => dispatch(selectBirdsForBrowse(birds)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BirdsPage);