function birdReducer(state = null, action) {
  switch (action.type) {
    case "FETCH_BIRD":
      return action.payload;
    default:
      return state;
  }
}

export default birdReducer;