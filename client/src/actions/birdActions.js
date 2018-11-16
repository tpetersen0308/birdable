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