function birdsReducer(state = { birds: [] }, action) {
  switch (action.type) {
    case "FETCH_BIRDS":
      return { birds: action.payload }
    default:
      return state
  }
}

export default birdsReducer