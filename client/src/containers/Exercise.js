/* 
    Exercise component handles program flow for exercises, conditionally rendering
    Problem and Solution components depending on exercise state. It checks the 
    results of individual exercises and maintains state such that the proper 
    components are rendered and proper feedback is displayed to the user.
*/

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

  // calling resetExercise() on initial mount prepares a new exercise for the user
  componentDidMount() {
    this.resetExercise();
  }

  /* 
      submitAnswer() function takes an answerKey (integer) as an argument, calls
      correct() to determine if the argument correllates with a correct answer, 
      adds the answer to state with addUserAnswer(), and makes a PUT request to 
      the Rails API with updateBirdStats().
  */
  submitAnswer = (answerKey) => {
    let correctAnswerKey = this.props.exercise.problem.correctAnswerKey
    let correct = this.correct(correctAnswerKey, answerKey);
    this.props.addUserAnswer(answerKey);
    // updateBirdStats(correctAnswerKey, { correct: correct });
    // if (this.props.loggedIn) {
    //   updateUserStats(this.props.user.id, { correct: correct });
    // }
    this.props.postStat(this.props.loggedIn ? this.props.user.id : null, correctAnswerKey, { correct: correct });
  }

  /* 
      correct() function compares the user's answer with the correct answer
      and returns a true or false value based on correctness.
  */
  correct = (answer, userAnswer) => {
    return answer === userAnswer;
  }

  /*
      resetProblem() function takes an array of bird objects as an argument
      and dispatches an action to add a new problem to the store.
  */
  resetProblem = (birds) => {
    this.props.addProblem({
      type: this.props.exercise.type,
      birds: birds, //assign birds from argument
      correctAnswerKey: birds[Math.floor(Math.random() * birds.length)].id, //randomly select bird for correct answer
    })
  }

  /* 
      resetExercise() function calls getBirdsForProblem(), passes the return value
      to resetProblem(), and sets userAnswer in state to null to create a new 
      exercise environment.
  */
  resetExercise = () => {
    let birds = this.getBirdsForProblem(this.props.exercise.birdSelection);
    this.resetProblem(birds);
    this.props.addUserAnswer(null);
  }

  // quit() function pushes the home route to history to exit exercise mode.
  quit = () => {
    this.props.history.push('/practice');
  }

  /*
      getBirdsForProblem() function takes an array of bird objects as an argument and 
      returns 4 randomly selected birds (provided birdSelection is at least 5 birds).
  */
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
          {/* render a Solution if a userAnswer has been added to state, else render a Problem */}
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