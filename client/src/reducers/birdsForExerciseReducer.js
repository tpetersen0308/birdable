/* 
    birdsForExerciseReducer() returns the action's payload of an array of bird
    objects from user's exercise selections to be added to state.
*/

function birdsForExerciseReducer(state = [], action) {
  switch (action.type) {
    case "SELECT_BIRDS_FOR_EXERCISE":
      return action.payload;
    default:
      return state;
  }
}

export default birdsForExerciseReducer;