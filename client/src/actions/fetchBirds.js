import fetch from 'isomorphic-fetch';

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