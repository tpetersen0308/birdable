import React from 'react';
import '../index.css';
import { Bird } from './Bird.js';

const Problem = (props) => {
  let birds = props.problem.birds.map(bird => <a onClick={() => props.submitAnswer(bird.id)} key={bird.id}><Bird bird={bird} key={bird.id} exerciseType="SONG" /></a>)
  let correctBird = props.problem.birds.filter(bird => bird.id === props.problem.correctAnswerKey)[0]
  let songAudio = ''
  if (correctBird) {
    songAudio = <div>
      <audio
        id={props.problem.correctAnswerKey}
        controls
        src={correctBird.song}>
        Your browser does not support the <code>audio</code> element.
    </audio>
    </div>
  }

  return (
    <div>
      <br />
      <br />
      <h4>Listen to the song sample and select the matching bird below:</h4>
      <br />
      <br />
      {songAudio}
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