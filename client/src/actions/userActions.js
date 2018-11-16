import fetch from 'isomorphic-fetch';

export function addBirdToFavorites(user_id, data) {
  {
    return fetch(`/users/${user_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .then(user => {
        console.log(`${user.first_name}'s favorites successfully updated.`)
      })
  }
}