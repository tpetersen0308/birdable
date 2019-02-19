import React, { Component } from 'react';
import { connect } from 'react-redux';
import BirdsFilter from './BirdsFilter';
import { selectBirdsForBrowse } from '../actions/browseActions.js';
import { BirdsList } from '../components/BirdsList.js';

class BirdsPage extends Component {

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