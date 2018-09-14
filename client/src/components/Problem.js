/*
    Problem is a stateless presentational component that renders the content
    for the problem portion of an exercise: a song sample, and four options
    of birds to match the song to.
*/

import React from 'react';
import '../index.css';
import { Bird } from './Bird.js';

const Problem = (props) => {
  // map Bird components from the collection passed in as props.
  let birds = props.problem.birds.map(bird => <a onClick={() => props.submitAnswer(bird.id)} key={bird.id}><Bird bird={bird} key={bird.id} exerciseType="SONG" /></a>)

  // the correct bird is the one with an id matching the problem's correctAnswerKey.
  let correctBird = props.problem.birds.find(bird => bird.id === props.problem.correctAnswerKey);

  // create div with the audio element corresponding to the correct answer.
  let clue = ''
  if (correctBird) {

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