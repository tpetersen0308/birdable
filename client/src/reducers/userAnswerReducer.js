// userAnswerReducer() adds the user's answer to the current problem to state.

function userAnswerReducer(state = null, action) {
  switch (action.type) {
    case "ADD_USER_ANSWER":
      return action.payload;
    default:
      return state;
  }
}

export default userAnswerReducer;