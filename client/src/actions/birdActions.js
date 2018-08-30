import fetch from 'isomorphic-fetch';
import { toTitleCase } from '../index.js';

/* 
    fetchBirds() fires GET request to the Rails API for the bird collection
    and dispatches an action to add the collection to state.
*/
export function fetchBirds() {
  return (dispatch) => {
    dispatch({ type: 'LOADING_BIRDS' });
    return fetch('/api/v1/birds')
      .then(response => response.json())
      .then(birds => {
        dispatch({ type: 'FETCH_BIRDS', payload: birds })
        dispatch({ type: 'DONE_LOADING' })
      });
  };
}

/*
    updateBirdStats() fires a PUT request to the Rails API to update answer 
    stats for a given bird.
*/
export function updateBirdStats(bird_id, data) {
  return fetch(`/api/v1/birds/${bird_id}`, {
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