import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addProblem, addSolution, addUserAnswer } from '../actions/exerciseActions.js';

class Exercise extends Component {

  getBirdsForProblem = birdSelection => {
    let birds = [];
    for (let i = 0; i < 4; i++) {
      birds.push(birdSelection[Math.floor(Math.random() * birdSelection.length)]);
      birdSelection = birdSelection.filter(bird => bird.common_name !== birds[i].common_name);
    }
    return birds;
  }

  render() {
    debugger
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
    addUserAnswer: (userAnswer) => dispatch(addUserAnswer(userAnswer)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Exercise);