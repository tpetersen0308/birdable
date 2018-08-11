function loadingReducer(state = null, action) {
  switch (action.type) {
    case 'LOADING_BIRDS':
      return true
    default:
      return state
  }
}

export default loadingReducer