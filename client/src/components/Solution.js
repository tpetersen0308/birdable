import React, { Component } from 'react';
import { Bird } from './Bird.js';

const Solution = (props) => {
  let birds = props.problem.birds.map(bird => <Bird bird={bird} />)

  return (
    <div>
      <h4>{props.userAnswer === props.problem.correctAnswerKey ? "Correct!" : "Incorrect"}</h4>
      <div className="bird-cards">
        {birds}
      </div>
    </div>
  )
}

export default Solution;