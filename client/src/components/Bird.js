import React from 'react';
import { Thumbnail } from 'react-bootstrap';
import { toTitleCase } from '../index.js';

export const Bird = (props) => {
  let nameInfo = <div>
    <h3>{toTitleCase(props.bird.common_name)}</h3>
    <p><i>{toTitleCase(props.bird.scientific_name)}</i></p>
  </div>

  let songInfo = <div><audio
    id={props.bird.id}
    controls
    src={props.bird.song}>
    Your browser does not support the <code>audio</code> element.
    </audio>
  </div>

  let birdInfo = exerciseType => {
    switch (exerciseType) {
      case "NAME":
        return <div>{songInfo}</div>
      case "SONG":
        return <div>{nameInfo}</div>
      default:
        return <div>{nameInfo}{songInfo}</div>
    }
  }

  return (
    <div>
      <Thumbnail src={props.bird.image} alt={props.bird.common_name}>
        {birdInfo(props.exerciseType)}
      </Thumbnail>
    </div>
  )
}
