import React from 'react';
import { Bird } from './Bird.js';

export const BirdsList = (props) => {
  let birds = props.birds.map(bird => <Bird bird={bird} />)
  return (
    <div className='birds-list'>{birds}</div>
  )
}