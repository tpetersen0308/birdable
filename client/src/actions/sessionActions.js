export function postUser(data) {
  return fetch("/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Authorization": data.tokenObj.id_token,
    },
    body: JSON.stringify(data),
  })
    .then(response => response.JSON())
    .then(user => {
      debugger;
    })
}