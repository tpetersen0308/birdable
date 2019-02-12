import fetch from 'isomorphic-fetch';

export function updateFavorites(user_id, data) {
  return (dispatch) => {
    return fetch(`/users/${user_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .then(user => {
        dispatch(updateCurrentUser(user));
        console.log(`${user.first_name}'s favorites successfully updated.`)
      })
  }
}

export function fetchTopBirds(user_id) {
  return (dispatch) => {
    dispatch({ type: 'LOADING_BIRDS' });
    return fetch(`/api/v1/users/${user_id}/birds/top-birds`)
      .then(response => response.json())
      .then(birds => {
        dispatch({ type: "ADD_TOP_BIRDS", payload: birds })
        dispatch({ type: 'DONE_LOADING' })
      });
  };
}

function updateCurrentUser(user) {
  return { type: "UPDATE_CURRENT_USER", payload: user }
}