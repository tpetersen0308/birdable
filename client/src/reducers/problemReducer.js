function problemReducer(state = {
  type: '',
  birds: [],
  correctAnswerKey: null,
}, action) {
  switch (action.type) {
    case "ADD_PROBLEM":
      return action.payload;
    default:
      return state;
  }
}

export default problemReducer;