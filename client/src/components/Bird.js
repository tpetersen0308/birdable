import React from 'react';
import { Thumbnail } from 'react-bootstrap';
import { toTitleCase } from '../index.js';

export const Bird = (props) => {
  let nameInfo = <p className="bird-name-info">
    <strong>{toTitleCase(props.bird.common_name)}</strong>
    <p><i>{toTitleCase(props.bird.scientific_name)}</i></p>
  </p>

  let songInfo = <audio
    id={props.bird.id}
    className="audio-small"
    controls
    src={props.bird.song}>
    Your browser does not support the <code>audio</code> element.
  </audio>


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
          <p className="bird-description">
            {nameInfo}{songInfo}
            <a href={props.bird.url} target='_blank'>View on Audubon</a>
          </p>
        </Thumbnail>
    }
  }

  return (
    birdInfo(props.exerciseType)
  )
}
