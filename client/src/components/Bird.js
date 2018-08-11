import React from 'react';
import { Thumbnail } from 'react-bootstrap';
import { toTitleCase } from '../index.js';

export const Bird = (props) => {
  let nameInfo = <div className="bird-name-info">
    <h4>{toTitleCase(props.bird.common_name)}</h4>
    <p><i>{toTitleCase(props.bird.scientific_name)}</i></p>
  </div>

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
        return <Thumbnail src={props.bird.image} alt={props.bird.common_name}><div className="bird-card">{songInfo}</div></Thumbnail>
      case "SONG":
        return <Thumbnail src={props.bird.image} alt={props.bird.common_name}><div className="bird-card">{nameInfo}</div></Thumbnail>
      default:
        return <Thumbnail className="full-content" src={props.bird.image} alt={props.bird.common_name}><div className="bird-card">{nameInfo}{songInfo}</div></Thumbnail>
    }
  }

  return (
    birdInfo(props.exerciseType)
  )
}
