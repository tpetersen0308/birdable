function exerciseReducer(state = {
  type: '',
  birds: [],
  correctAnswerKey: null,
}, action) {
  switch (action.type) {
    case "NEW_EXERCISE":
      return action.payload;
    default:
      return state;
  }
}