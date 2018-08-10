import React, { Component } from 'react';
import { Bird } from './Bird.js';

const Problem = (props) => {

  let birds = props.problem.birds.map(bird => <Bird bird={bird} exerciseType="SONG" />)

  return (
    <div>{birds}</div>
  )
}

export default Problem;