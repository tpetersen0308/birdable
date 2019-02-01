/* 
    birdsReducer() returns the action's payload of an array of bird
    objects from GET request to Rails API to be added to state.
*/

function birdsReducer(state = {
  birds: [],
  randomBird: []
}, action) {
  switch (action.type) {
    case "FETCH_BIRDS":
      return { ...state, birds: action.payload }
    case "UPDATE_BIRD_STATS":
      let bird = state.birds.find(b => b.id === action.payload.bird_id);
      let index = state.birds.indexOf(bird);
      bird.stats.push(action.payload);
      state.birds.splice(index, 1, bird);
      return state;
    case "FETCH_RANDOM_BIRD":
      return { ...state, randomBird: action.payload }
    default:
      return state
  }
}

export default birdsReducer