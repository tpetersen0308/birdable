/*
    BirdsList is a stateless presentational component that renders a div with 
    a list of Bird objects determined by the collection passed in as props.
*/

import React from 'react';
import { Bird } from './Bird.js';

export const BirdsList = (props) => {
  let birds = props.birds.map(bird => <Bird key={bird.id} bird={bird} />)
  return (
    <div className='birds-list'>{birds}</div>
  )
}