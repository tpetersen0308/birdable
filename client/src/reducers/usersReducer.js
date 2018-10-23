// usersReducer() adds the current user to the redux store

function usersReducer(state = { id: null, email: null, errors: null }, action) {
  switch (action.type) {
    case "ADD_USER":
      return action.payload;
    case "REMOVE_USER":
      return action.payload;
    case "CLEAR_ERRORS":
      return { ...state, errors: null }
    default:
      return state;
  }
}

export default usersReducer;