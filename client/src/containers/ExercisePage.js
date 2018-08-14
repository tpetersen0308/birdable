import React, { Component } from 'react';
import { connect } from 'react-redux';
import BirdsFilter from './BirdsFilter';
import { selectBirdsForExercise } from '../actions/exerciseActions.js';

class ExercisePage extends Component {

  submitForExercise = () => {
    this.props.history.push('/practice/exercise');
  }
  render() {
    return (
      <div>
        <br />
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