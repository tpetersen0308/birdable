function birdsReducer(state = { loading: false, birds: [] }, action) {
  switch (action.type) {
    case 'LOADING_BIRDS':
      return Object.assign({}, state, { loading: true })
    case "FETCH_BIRDS":
      return { loading: false, birds: action.payload }
    default:
      return state
  }
}

export default birdsReducer