/* 
    birdsReducer() returns the action's payload of an array of bird
    objects from GET request to Rails API to be added to state.
*/

function birdsReducer(state = [], action) {
  switch (action.type) {
    case "FETCH_BIRDS":
      return action.payload
    default:
      return state
  }
}

export default birdsReducer