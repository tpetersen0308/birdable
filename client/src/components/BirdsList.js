import React from 'react';
import { Bird } from './Bird.js';

export const BirdsList = (props) => {
  let birds = props.birds.map(bird => <Bird id='browse-bird' bird={bird} />)
  return (
    <div>{birds}</div>
  )
}