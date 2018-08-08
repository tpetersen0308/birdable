import React, { Component } from 'react';
import { connect } from 'react-redux';

class ExercisePage extends Component {

  render() {
    return (
      <div></div>
    )
  }
}

function mapStateToProps(state) {
  return { birds: state.birds }
}

export default connect(mapStateToProps)(ExercisePage)