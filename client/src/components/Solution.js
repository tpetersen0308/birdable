import React, { Component } from 'react';
import { Bird } from './Bird.js';

const Solution = (props) => {
  let birds = props.problem.birds.map(bird => <Bird bird={bird} />)

  return (
    <div>
      <div className="bird-cards">
        {birds}
      </div>
    </div>
  )
}

export default Solution;