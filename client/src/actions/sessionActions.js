import fetch from 'isomorphic-fetch';

export function postUser(data) {
  return fetch("/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    body: JSON.stringify(data),
  })
    .then(response => response.json())
    .then(user => {
      addCurrentUser(user);
    })
}

export function addCurrentUser(data) {
  return { type: "ADD_CURRENT_USER", payload: data }
}

export function loginUser() {
  return { type: "LOGIN_USER", payload: true }
}