import React from 'react';
import '../index.css';
import { toTitleCase } from '../index.js';
import { Bird } from './Bird.js';

const Problem = (props) => {

  let birds = props.problem.birds.map(bird => <a onClick={() => props.submitAnswer(bird.id)} key={bird.id}><Bird bird={bird} key={bird.id} exerciseType={props.type} /></a>)

  let correctBird = props.problem.birds.find(bird => bird.id === props.problem.correctAnswerKey);

  let clue = ''
  if (correctBird) {
    switch (props.type) {
      case "NAME":
        clue = <div>
          <h4>Select the bird that matches the name below:</h4>
          <br />
          <h2>{toTitleCase(correctBird.common_name)}</h2>
          <h3><i>{toTitleCase(correctBird.scientific_name)}</i></h3>
        </div>
        break;
      default:
        clue = <div>
          <h4>Listen to the song sample and select the matching bird below:</h4>
          <br />
          <br />
          <audio
            id={props.problem.correctAnswerKey}
            controls
            src={correctBird.song}>
            Your browser does not support the <code>audio</code> element.
          </audio>
        </div>
        break;
    }
  }

  return (
    <div>
      <br />
      <br />
      {clue}
      <br />
      <br />
      <div className="bird-cards">
        {birds.slice(0, 2)}
      </div>
      <div className="bird-cards">
        {birds.slice(2, 4)}
      </div>
      <br />
    </div>
  )
}

export default Problem;