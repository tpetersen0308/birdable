import React from 'react';
import { Bird } from './Bird.js';

export const Home = (props) => {
  return (
    <div>
      <br />
      <br />
      <h4>Here is a random bird! Look at it, it's cool!</h4>
      <br />
      <br />
      <Bird bird={props.bird} />
    </div>
  )
}