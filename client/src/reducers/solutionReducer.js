function solutionReducer(state = {
  type: '',
  birds: [],
  correctAnswerKey: null,
}, action) {
  switch (action.type) {
    case "ADD_SOLUTION":
      return action.payload;
    default:
      return state;
  }
}

export default solutionReducer;