import fetch from 'isomorphic-fetch';

export function postUser(data) {
  return (dispatch) => {
    return fetch("/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .then(user => {
        dispatch(addCurrentUser(user));
      });
  }
}

export function endSession() {
  return (dispatch) => {
    return fetch("/sessions", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
    }).then(() => {
      dispatch(clearCurrentUser());
    })
  }
}

function addCurrentUser(data) {
  return {
    type: "ADD_CURRENT_USER", payload: data
  }
}

function clearCurrentUser() {
  return {
    type: "CLEAR_CURRENT_USER", payload: { currentUser: null, loggedIn: false }
  }
}

