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

function updateCurrentUser(user) {
  return { type: "UPDATE_CURRENT_USER", payload: user }
}