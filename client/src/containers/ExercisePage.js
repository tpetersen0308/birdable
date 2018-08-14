import React, { Component } from 'react';
import BirdsFilter from './BirdsFilter';

class ExercisePage extends Component {
  render() {
    return (
      <div>
        <br />
        <h4>Select families and regions to practice identifying:</h4>
        <br />
        <BirdsFilter />
      </div>
    )
  }
}

export default ExercisePage;