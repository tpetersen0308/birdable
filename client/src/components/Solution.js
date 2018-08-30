import React from 'react';
import { Bird } from './Bird.js';
import { toTitleCase } from '../index.js';
import { Button } from 'react-bootstrap';

const Solution = (props) => {
  let correct = props.correct(props.userAnswer, props.problem.correctAnswerKey);
  let correctBird = props.problem.birds.find(bird => bird.id === props.problem.correctAnswerKey);
  let birds = props.problem.birds.map(bird => <Bird
    bird={bird}
    key={bird.id}
    id={correct ? (bird === correctBird ? 'correct-answer' : '')
      : (bird === correctBird ? 'correct-answer'
        : (bird.id === props.userAnswer ? 'incorrect-answer'
          : ''))}
  />)

  return (
    <div>
      <br />
      <br />
      <h4>{correct ? "Correct!" : "Sorry, the correct answer was " + toTitleCase(correctBird.common_name) + ':'}</h4>
      <br />
      <Button onClick={props.resetExercise}>Next Exercise</Button>
      {'  '}
      <Button onClick={props.quit}>Quit</Button>
      <br />
      <br />
      <div className="bird-cards">
        {birds.slice(0, 2)}
      </div>
      <div className="bird-cards">
        {birds.slice(2, 4)}
      </div>
    </div>
  )
}

export default Solution;