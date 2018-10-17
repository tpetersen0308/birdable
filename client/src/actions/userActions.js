import fetch from 'isomorphic-fetch';

/*
    addUser() adds the user to the redux store
*/
export function addUser(user) {
  return { type: "ADD_USER", payload: user }
}

/*
    createUser() fires a POST request to the Rails API to create a new
    user resource.
*/
export function createUser(data) {
  return dispatch => {
    return fetch("/api/v1/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .then(user => {
        dispatch(addUser(user));
      })
      .catch(error => {
        console.log(error);
      })
  }
}

/* 
    loginUser() fires a POST request to the Rails API to create a user session
*/
export function loginUser(data) {
  return dispatch => {
    return fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .then(user => {
        dispatch(addUser(user));
      })
      .catch(error => {
        console.log(error);
      })
  }
}
