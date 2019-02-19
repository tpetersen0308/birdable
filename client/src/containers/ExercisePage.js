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

  handleTypeSelection = event => {
    this.setState({
      exerciseType: event.target.value,
    }, () => console.log(`Exercise type has been set to ${this.state.exerciseType}.`));
  }

  submitForExercise = () => {
    this.props.addExerciseType(this.state.exerciseType);
    this.props.history.push('/practice/exercise');
  }
  render() {
    return (
      <div>
        <br />
        <h4>What would you like to practice?</h4>
        <br />
        <Radio checked={this.state.exerciseType === "SONG" ? true : false} value="SONG" onChange={this.handleTypeSelection} inline>Identifying birds by their song</Radio>
        {" "}
        <Radio checked={this.state.exerciseType === "NAME" ? true : false} value="NAME" onChange={this.handleTypeSelection} inline>Identifying birds by their name</Radio>
        <br />
        <br />
        <h4>Select families and regions to practice identifying:</h4>
        <br />
        <BirdsFilter handleSubmitRoute={this.submitForExercise} actionType="SELECT_BIRDS_FOR_EXERCISE" />
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    selectBirdsForExercise: (birds) => dispatch(selectBirdsForExercise(birds)),
    addExerciseType: (exerciseType) => dispatch(addExerciseType(exerciseType)),
  }
}

export default connect(null, mapDispatchToProps)(ExercisePage);