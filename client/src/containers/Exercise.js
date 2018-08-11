import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addProblem, addUserAnswer } from '../actions/exerciseActions.js';
import Problem from '../components/Problem.js';
import Solution from '../components/Solution.js';

class Exercise extends Component {

  componentDidMount() {
    this.resetExercise();
  }

  submitAnswer = (answerKey) => {
    this.props.addUserAnswer(answerKey);
  }

  correct = (answer, userAnswer) => {
    return answer === userAnswer;
  }

  resetProblem = (birds) => {
    this.props.addProblem({
      type: 'SONG',
      birds: birds,
      correctAnswerKey: birds[Math.floor(Math.random() * 4)].id,
    })
  }

  // resetExercise is passed as props to solution and called when next exercise button is clicked
  resetExercise = () => {
    let birds = this.getBirdsForProblem(this.props.exercise.birdSelection);
    this.resetProblem(birds);
    this.props.addUserAnswer(null);
  }

  quit = () => {
    this.props.history.push('/');
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
      <div>
        {this.props.exercise.userAnswer ?
          <Solution
            problem={this.props.exercise.problem}
            userAnswer={this.props.exercise.userAnswer}
            correct={this.correct}
            resetExercise={this.resetExercise}
            quit={this.quit}
          /> :
          <Problem
            problem={this.props.exercise.problem}
            submitAnswer={this.submitAnswer}
          />}
      </div>
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