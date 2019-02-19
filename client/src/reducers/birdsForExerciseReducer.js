function birdsForExerciseReducer(state = [], action) {
  switch (action.type) {
    case "SELECT_BIRDS_FOR_EXERCISE":
      return action.payload;
    default:
      return state;
  }
}

export default birdsForExerciseReducer;