import fetch from 'isomorphic-fetch';
import { toTitleCase } from '../index.js';

export function fetchBirds() {
  return (dispatch) => {
    dispatch({ type: 'LOADING_BIRDS' });
    return fetch('http://localhost:3000/api/birds')
      .then(response => response.json())
      .then(birds => {
        dispatch({ type: 'FETCH_BIRDS', payload: birds })
        dispatch({ type: 'DONE_LOADING' })
      });
  };
}

export function updateBirdStats(bird_id, data) {
  return fetch(`/api/birds/${bird_id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    body: JSON.stringify(data),
  })
    .then(response => response.json())
    .then(bird => {
      console.log(`Bird id#${bird.id}, ${toTitleCase(bird.common_name)}'s stats successfully updated.\n  
        Stat: ${data.correct ? "Correct Answers" : "Incorrect Answers"}\n  
        New Value: ${data.correct ? bird.correct_answers : bird.incorrect_answers}`)
    })
}