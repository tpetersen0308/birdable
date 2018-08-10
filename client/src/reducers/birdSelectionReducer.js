function birdSelectionReducer(state = [], action) {
  switch (action.type) {
    case "SELECT_BIRDS":
      return action.payload;
    default:
      return state;
  }
}

export default birdSelectionReducer;