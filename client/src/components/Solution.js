import React, { Component } from 'react';
import { Bird } from './Bird.js';

const Solution = (props) => {
  let correct = props.correct(props.userAnswer, props.problem.correctAnswerKey);
  let birds = props.problem.birds.map(bird => <Bird
    bird={bird}
    id={correct ? (bird.id === props.userAnswer ? 'correct-answer' : '')
      : (bird.id === props.userAnswer ? 'incorrect-answer'
        : (bird.id === props.problem.correctAnswerKey ? 'correct-answer'
          : ''))}
  />)

  return (
    <div>
      <h4>{correct ? "Correct!" : "Incorrect"}</h4>
      <div className="bird-cards">
        {birds}
      </div>
    </div>
  )
}

export default Solution;