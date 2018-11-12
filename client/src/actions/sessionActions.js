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
      addUser(user);
    })
}

export function addUser(data) {
  return { type: "ADD_USER", payload: data }
}