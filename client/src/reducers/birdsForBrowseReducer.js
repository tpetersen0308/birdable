function birdsForBrowseReducer(state = [], action) {
  switch (action.type) {
    case "SELECT_BIRDS_FOR_BROWSE":
      return action.payload;
    default:
      return state;
  }
}

export default birdsForBrowseReducer;