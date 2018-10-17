import fetch from 'isomorphic-fetch';

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
        //dispatch action to add user to store
      })
      .catch(error => {
        console.log(error);
      })
  }
}