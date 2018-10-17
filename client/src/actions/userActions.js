import fetch from 'isomorphic-fetch';

/*
    addUser() adds the user to the redux store.
*/
export function addUser(user) {
  return { type: "ADD_USER", payload: user }
}

/*
    postUser() fires a POST request to the Rails API to either log in 
    or create a new user depending on the route argument. 
*/
export function postUser(route, data) {
  return dispatch => {
    return fetch(route, {
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
