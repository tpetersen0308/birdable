import fetch from 'isomorphic-fetch';

/* 
    fetchBirds() fires GET request to the Rails API for the bird collection
    and dispatches an action to add the collection to state.
*/
export function fetchBirds(filterParams = { families: [], regions: [], favorites: [] }, actionType) {
  let url = '/api/v1/birds/' + JSON.stringify(filterParams);
  return (dispatch) => {
    dispatch({ type: 'LOADING_BIRDS' });
    return fetch(url)
      .then(response => response.json())
      .then(birds => {
        dispatch({ type: actionType, payload: birds })
        dispatch({ type: 'DONE_LOADING' })
      });
  };
}

export function fetchBird() {
  let url = '/api/v1/birds/';
  return (dispatch) => {
    dispatch({ type: 'LOADING_BIRDS' });
    return fetch(url)
      .then(response => response.json())
      .then(bird => {
        dispatch({ type: 'FETCH_BIRD', payload: bird })
        dispatch({ type: 'DONE_LOADING' })
      });
  };
}
