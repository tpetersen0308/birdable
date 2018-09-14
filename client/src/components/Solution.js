/*
    Solution is a stateless presentational component that renders the content
    for the solution portion of an exercise: all of the birds that were answer
    options, with all name and song information displayed for the user to review
    after submitting an answer, including feedback on the exercise's results.
*/

import React from 'react';
import { Bird } from './Bird.js';
import { toTitleCase } from '../index.js';
import { Button } from 'react-bootstrap';

const Solution = (props) => {
  // determine if the answer was correct using function passed in as props.
  let correct = props.correct(props.userAnswer, props.problem.correctAnswerKey);

  // the correct bird is the one with an id matching the problem's correctAnswerKey.
  let correctBird = props.problem.birds.find(bird => bird.id === props.problem.correctAnswerKey);

  /* 
      map Bird components from the collection passed in as props, with id's
      determined conditionally for the correct and, if applicable, incorrect
      answer(s), so the results can be properly styled.
  */
  let birds = props.problem.birds.map(bird => <Bird
    bird={bird}
    key={bird.id}
    id={correct ? (bird === correctBird ? 'correct-answer' : '')
      : (bird === correctBird ? 'correct-answer'
        : (bird.id === props.userAnswer ? 'incorrect-answer'
          : ''))}
  />)

  /*
      displayFeedback displays the feeback based on exercise type
      and whether or not the user's answer was correct.
  */
  const displayFeedback = (correct) => {
    if (correct) {
      return "Correct!";
    } else if (props.type === "SONG") {
      return "Sorry, the correct answer was " + toTitleCase(correctBird.common_name) + '.';
    } else {
      return "Incorrect. Keep practicing!"
    }
  }

  return (
    <div>
      <br />
      <br />
      <h4>{displayFeedback(correct)}</h4>
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