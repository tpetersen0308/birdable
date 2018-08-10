function solutionReducer(state = {
  type: '',
  birds: [],
  correctAnswerKey: null,
  userAnswerKey: null,
}, action) {
  switch (action.type) {
    case "ADD_SOLUTION":
      return action.payload;
    default:
      return state;
  }
}