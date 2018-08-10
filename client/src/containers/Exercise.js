import React, { Component } from 'react';
import { connect } from 'react-redux';

class Exercise extends Component {
  render() {
    return (
      <div>New Problem</div>
    )
  }
}

function mapStateToProps(state) {
  return {
    exercise: state.exercise,
  }
}

export default connect(mapStateToProps)(Exercise);