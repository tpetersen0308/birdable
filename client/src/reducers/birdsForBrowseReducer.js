/* 
    birdsForBrowseReducer() returns the action's payload of an array of bird
    objects from user's browsing selections to be added to state.
*/
function birdsForBrowseReducer(state = [], action) {
  switch (action.type) {
    case "SELECT_BIRDS_FOR_BROWSE":
      return action.payload;
    default:
      return state;
  }
}

export default birdsForBrowseReducer;