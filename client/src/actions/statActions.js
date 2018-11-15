import fetch from 'isomorphic-fetch';

export function postStat(user_id, bird_id, data) {
  let url = `/stats/birds/${bird_id}`.concat(user_id ? `/users/${user_id}` : "");
  return (dispatch) => {
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
        dispatch(updateBirdStats(stat));
        if (user_id) {
          dispatch(updateUserStats(stat));
        }
      })
  }
}

function updateUserStats(stat) {
  return { type: "UPDATE_USER_STATS", payload: stat }
}

function updateBirdStats(stat) {
  return { type: "UPDATE_BIRD_STATS", payload: stat }
}