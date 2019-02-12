function usersReducer(state = {
  currentUser: null,
  topBirds: [],
  loggedIn: false,
}, action) {
  switch (action.type) {
    case "ADD_CURRENT_USER":
      return { currentUser: action.payload, loggedIn: true }
    case "CLEAR_CURRENT_USER":
      return action.payload;
    case "UPDATE_CURRENT_USER":
      return { ...state, currentUser: action.payload }
    case "UPDATE_USER_STATS":
      return { ...state, currentUser: { ...state.currentUser, stats: state.currentUser.stats.concat(action.payload) } }
    case "ADD_TOP_BIRDS":
      return { ...state, topBirds: action.payload }
    default:
      return state;
  }
}

export default usersReducer;