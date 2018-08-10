import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addProblem, addSolution, addUserAnswer } from '../actions/exerciseActions.js';
import Problem from '../components/Problem.js';
import Solution from '../components/Solution.js';

class Exercise extends Component {

  componentDidMount() {
    this.resetExercise(this.props.exercise.birdSelection);
  }

  // resetProblem and resetSolution are passed to Solution as props and called when 
  // user clicks "next" on solution component
  resetProblem = (birds) => {
    this.props.addProblem({
      type: 'SONG',
      birds: birds,
    })
  }

  resetSolution = (birds) => {
    this.props.addSolution({
      type: 'SONG',
      birds: birds,
      correctAnswerKey: birds[Math.floor(Math.random() * 4)].id,
    })
  }

  resetExercise = (birdSelection) => {
    let birds = this.getBirdsForProblem(birdSelection);
    this.resetProblem(birds);
    this.resetSolution(birds);
  }

  getBirdsForProblem = birdSelection => {
    let birds = [];
    for (let i = 0; i < 4; i++) {
      birds.push(birdSelection[Math.floor(Math.random() * birdSelection.length)]);
      birdSelection = birdSelection.filter(bird => bird.common_name !== birds[i].common_name);
    }
    return birds;
  }

  render() {
    return (
      <div>{this.props.exercise.userAnswer ? <Solution solution={this.props.exercise.solution} /> : <Problem problem={this.props.exercise.problem} />}</div>
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