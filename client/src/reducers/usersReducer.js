function usersReducer(state = {
  user: null,
  logged_in: false,
}, action) {
  switch (action.type) {
    case "ADD_CURRENT_USER":
      return { user: action.payload, logged_in: true }
    case "CLEAR_CURRENT_USER":
      return action.payload;
  }
}