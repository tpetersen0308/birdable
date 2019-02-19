function exerciseTypeReducer(state = null, action) {
  switch (action.type) {
    case "ADD_EXERCISE_TYPE":
      return action.payload;
    default:
      return state;
  }
}

export default exerciseTypeReducer;