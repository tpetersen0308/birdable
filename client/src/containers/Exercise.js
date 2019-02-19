import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addProblem, addUserAnswer } from '../actions/exerciseActions.js';
import { postStat } from '../actions/statActions.js';
import Problem from '../components/Problem.js';
import Solution from '../components/Solution.js';

class Exercise extends Component {
  constructor(props) {
    super(props);
    this.submitAnswer = this.submitAnswer.bind(this);
  }

  componentDidMount() {
    this.resetExercise();
  }

  submitAnswer = (answerKey) => {
    let correctAnswerKey = this.props.exercise.problem.correctAnswerKey
    let correct = this.correct(correctAnswerKey, answerKey);
    this.props.addUserAnswer(answerKey);

    this.props.postStat(this.props.loggedIn ? this.props.user.id : null, correctAnswerKey, { correct: correct });
  }

  correct = (answer, userAnswer) => {
    return answer === userAnswer;
  }

  resetProblem = (birds) => {
    this.props.addProblem({
      type: this.props.exercise.type,
      birds: birds,
      correctAnswerKey: birds[Math.floor(Math.random() * birds.length)].id,
    })
  }

  resetExercise = () => {
    let birds = this.getBirdsForProblem(this.props.exercise.birdSelection);
    this.resetProblem(birds);
    this.props.addUserAnswer(null); // because userAnswer state determines whether to render a Problem or Solution
  }

  quit = () => {
    this.props.history.push('/practice');
  }

  getBirdsForProblem = birdSelection => {
    let birds = [];
    let length = birdSelection.length >= 4 ? 4 : birdSelection.length;
    for (let i = 0; i < length; i++) {
      birds.push(birdSelection[Math.floor(Math.random() * birdSelection.length)]);
      birdSelection = birdSelection.filter(bird => bird.common_name !== birds[i].common_name);
    }
    return birds;
  }

  render() {
    if (this.props.loading) {
      return <h4>Loading...</h4>
    }
    else {
      return (
        <div>
          {this.props.exercise.userAnswer ?
            <Solution
              type={this.props.exercise.type}
              problem={this.props.exercise.problem}
              userAnswer={this.props.exercise.userAnswer}
              correct={this.correct}
              resetExercise={this.resetExercise}
              quit={this.quit}
            /> :
            <Problem
              type={this.props.exercise.type}
              problem={this.props.exercise.problem}
              submitAnswer={this.submitAnswer}
            />}
        </div>
      )
    }
  }
}

function mapStateToProps(state) {
  return {
    exercise: state.exercise,
    user: state.user.currentUser,
    loggedIn: state.user.loggedIn,
    loading: state.loading,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addProblem: (problem) => dispatch(addProblem(problem)),
    addUserAnswer: (userAnswer) => dispatch(addUserAnswer(userAnswer)),
    postStat: (userId, birdId, data) => dispatch(postStat(userId, birdId, data)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Exercise);