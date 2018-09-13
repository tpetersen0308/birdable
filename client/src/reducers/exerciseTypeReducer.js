// exerciseTypeReducer() adds the user's exercise type selection to the exercise in state.

function exerciseTypeReducer(state = null, action) {
  switch (action.type) {
    case "ADD_EXERCISE_TYPE":
      return action.payload;
    default:
      return state;
  }
}

export default exerciseTypeReducer;