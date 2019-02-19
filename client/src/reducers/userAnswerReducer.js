function userAnswerReducer(state = null, action) {
  switch (action.type) {
    case "ADD_USER_ANSWER":
      return action.payload;
    default:
      return state;
  }
}

export default userAnswerReducer;