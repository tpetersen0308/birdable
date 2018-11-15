import fetch from 'isomorphic-fetch';

export function updateUserStats(user_id, data) {
  return fetch(`/users/${user_id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    body: JSON.stringify(data),
  })
    .then(response => response.json())
    .then(user => {
      console.log(`${user.first_name}'s stats successfully updated.\n  
        Stat: ${data.correct ? "Correct Answers" : "Incorrect Answers"}\n  
        New Value: ${data.correct ? user.correct_answers : user.incorrect_answers}`)
    })
}