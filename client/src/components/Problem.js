import React from 'react';
import { Bird } from './Bird.js';

const Problem = (props) => {
  let birds = props.problem.birds.map(bird => <Bird bird={bird} exerciseType="SONG" />)
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
      {birds}
      {songAudio}
    </div>
  )
}

export default Problem;