import React from 'react';
import { Thumbnail } from 'react-bootstrap';

export const Bird = (props) => {
  return (
    <div>
      <Thumbnail src={props.bird.image} alt={props.bird.common_name}>
        <h3>{props.bird.common_name}</h3>
        <p>{props.bird.scientific_name}</p>
        <p>
          <audio
            id={props.bird.id}
            controls
            src={props.bird.song}>
            Your browser does not support the <code>audio</code> element.
        </audio></p>
      </Thumbnail>
    </div>
  )
}
