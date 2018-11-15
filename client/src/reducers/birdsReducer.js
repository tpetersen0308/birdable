/* 
    birdsReducer() returns the action's payload of an array of bird
    objects from GET request to Rails API to be added to state.
*/

function birdsReducer(state = [], action) {
  switch (action.type) {
    case "FETCH_BIRDS":
      return action.payload
    case "UPDATE_BIRD_STATS":
      let bird = state.find(b => b.id === action.payload.bird_id);
      let index = state.indexOf(bird);
      bird.stats.push(action.payload);
      state.splice(index, 1, bird);
      return state;
    default:
      return state
  }
}

export default birdsReducer