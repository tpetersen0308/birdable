import React from 'react';
import { Thumbnail } from 'react-bootstrap';
import { toTitleCase } from '../index.js';
import LikeButton from './LikeButton.js';

export const Bird = (props) => {

  let nameInfo = <div className="bird-name-info">
    <strong>{toTitleCase(props.bird.common_name)}</strong>
    <p><i>{toTitleCase(props.bird.scientific_name)}</i></p>
  </div>

  let songInfo = <audio
    id={props.bird.id}
    className="audio-small"
    controls
    src={props.bird.song}>
    Your browser does not support the <code>audio</code> element.
  </audio>

  /* 
    birdInfo() function combines name and song info conditionally based on exercise
    type, because different info should be displayed depending on the context.
  */
  let birdInfo = exerciseType => {
    switch (exerciseType) {
      case "NAME":
        return <Thumbnail
          src={props.bird.image}
          alt={props.bird.common_name}>
          <div>
            {songInfo}
          </div>
        </Thumbnail>
      case "SONG":
        return <Thumbnail
          src={props.bird.image}
          alt={props.bird.common_name}>
          <div>
            {nameInfo}
          </div>
        </Thumbnail>
      default:
        return <Thumbnail
          id={props.id}
          className="full-content"
          src={props.bird.image}
          alt={props.bird.common_name}>
          <div className="bird-description">
            {nameInfo}{songInfo}
            <LikeButton birdId={props.bird.id} />
            <a href={props.bird.url} target='_blank'>View on Audubon</a>
          </div>
        </Thumbnail>
    }
  }

  return (
    birdInfo(props.exerciseType)
  )
}
