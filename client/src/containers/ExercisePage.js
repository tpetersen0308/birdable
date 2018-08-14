import React, { Component } from 'react';
import BirdsFilter from './BirdsFilter';

class ExercisePage extends Component {

  submitForExercise = () => {
    this.props.history.push('/exercises/problem');
  }
  render() {
    return (
      <div>
        <br />
        <h4>Select families and regions to practice identifying:</h4>
        <br />
        <BirdsFilter handleSubmit={this.submitForExercise} />
      </div>
    )
  }
}

export default ExercisePage;