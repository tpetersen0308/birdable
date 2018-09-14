/*
    ExercisePage component renders a BirdsFilter component, passing in the 
    appropriate action and function as props for maintaining state and handling
    routing for exercises.
*/

import React, { Component } from 'react';
import { connect } from 'react-redux';
import BirdsFilter from './BirdsFilter';
import { selectBirdsForExercise, addExerciseType } from '../actions/exerciseActions.js';
import { Radio } from 'react-bootstrap';

class ExercisePage extends Component {
  constructor() {
    super();
    this.state = {
      exerciseType: "SONG",
    }
  }

  /* 
      handleTypeSelection sets the exerciseType in state based on the
      user's exercise type selection.
  */
  handleTypeSelection = event => {
    this.setState({
      exerciseType: event.target.value,
    }, () => console.log(`Exercise type has been set to ${this.state.exerciseType}.`));
  }

  /*
      submitForExercise() function pushes the exercise route to re-render
      the ExercisePage component for a new exercise.
  */
  submitForExercise = () => {
    this.props.history.push('/practice/exercise');
  }
  render() {
    return (
      <div>
        <br />
        <h4>What would you like to practice?</h4>

        <Radio checked value="SONG" onChange={this.handleTypeSelection}>Identifying birds by their song</Radio>
        <Radio value="NAME" onChange={this.handleTypeSelection}>Identifying birds by their name</Radio>

        <h4>Select families and regions to practice identifying:</h4>
        <br />
        <BirdsFilter handleSubmitRoute={this.submitForExercise} selectAction={this.props.selectBirdsForExercise} />
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    selectBirdsForExercise: (birds) => dispatch(selectBirdsForExercise(birds)),
  }
}

export default connect(null, mapDispatchToProps)(ExercisePage);