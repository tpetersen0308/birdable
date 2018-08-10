import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addProblem, addUserAnswer } from '../actions/exerciseActions.js';
import Problem from '../components/Problem.js';
import Solution from '../components/Solution.js';

class Exercise extends Component {

  componentDidMount() {
    this.resetExercise(this.props.exercise.birdSelection);
  }

  resetProblem = (birds) => {
    this.props.addProblem({
      type: 'SONG',
      birds: birds,
      correctAnswerKey: birds[Math.floor(Math.random() * 4)].id,
    })
  }

  // resetExercise is passed as props to solution and called when next exercise button is clicked
  resetExercise = (birdSelection) => {
    let birds = this.getBirdsForProblem(birdSelection);
    this.resetProblem(birds);
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
      <div>{this.props.exercise.userAnswer ? <Solution problem={this.props.exercise.problem} resetExercise={this.resetExercise} /> : <Problem problem={this.props.exercise.problem} />}</div>
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
    addUserAnswer: (userAnswer) => dispatch(addUserAnswer(userAnswer)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Exercise);