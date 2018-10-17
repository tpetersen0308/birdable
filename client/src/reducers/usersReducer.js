// usersReducer() adds the current user to the redux store

function usersReducer(state = null, action) {
  switch (action.type) {
    case "ADD_USER":
      return action.payload;
    case "REMOVE_USER":
      return action.payload;
    default:
      return state;
  }
}

export default usersReducer;