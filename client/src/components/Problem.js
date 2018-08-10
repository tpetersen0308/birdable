import React from 'react';
import { Bird } from './Bird.js';
import { Grid, Row, Col } from 'react-bootstrap';

const Problem = (props) => {
  let birds = props.problem.birds.map(bird => <Col xs={6} md={4}><Bird bird={bird} exerciseType="SONG" /></Col>)
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
      <Grid>
        <Row>
          {birds}
        </Row>
      </Grid>
      {songAudio}
    </div>
  )
}

export default Problem;