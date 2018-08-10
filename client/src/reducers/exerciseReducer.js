function exerciseReducer(state = {
  type: '',
  birds: [],
  correctAnswerKey: null,
}, action) {
  switch (action.type) {
    case "ADD_EXERCISE":
      return action.payload;
    default:
      return state;
  }
}