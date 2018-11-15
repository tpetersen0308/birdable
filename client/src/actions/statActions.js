import fetch from 'isomorphic-fetch';

export function postStat(user_id, bird_id, data) {
  let url = `/stats/birds/${bird_id}`.concat(user_id ? `/users/${user_id}` : "");
  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    body: JSON.stringify(data),
  })
    .then(response => response.json())
    .then(stat => {
      console.log(stat);
    })
}