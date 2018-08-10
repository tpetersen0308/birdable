import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addProblem, addSolution } from '../actions/exerciseActions.js';

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

function mapDispatchToProps(dispatch) {
  return {
    addProblem: (problem) => dispatch(addProblem(problem)),
    addSolution: (solution) => dispatch(addSolution(solution)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Exercise);