/*
  The Bird component is a stateless presentational component that renders a thumbnail
  with content determined conditionally based on props.
*/

import React from 'react';
import { Thumbnail } from 'react-bootstrap';
import { toTitleCase } from '../index.js';

export const Bird = (props) => {

  // nameInfo div displays common name and scientific name
  let nameInfo = <div className="bird-name-info">
    <strong>{toTitleCase(props.bird.common_name)}</strong>
    <p><i>{toTitleCase(props.bird.scientific_name)}</i></p>
  </div>

  // songInfo audio element allows user to play bird's song sample
  let songInfo = <audio
    id={props.bird.id}
    className="audio-small"
    controls
    src={props.bird.song}>
    Your browser does not support the <code>audio</code> element.
  </audio>

  /* 
    birdInfo() function combines name and song info conditionally based on exercise
    type. If the exercise is for matching a song to a bird, the song info is omitted
    If the exercise is for matching a name to a bird, the name info is omitted. If
    no exercise type is provided, all information is displayed in the thumbnail.
  */
  let birdInfo = exerciseType => {
    switch (exerciseType) {
      case "NAME":
        return <Thumbnail
          src={props.bird.image}
          alt={props.bird.common_name}>
          <p>
            {songInfo}
          </p>
        </Thumbnail>
      case "SONG":
        return <Thumbnail
          src={props.bird.image}
          alt={props.bird.common_name}>
          <p>
            {nameInfo}
          </p>
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
