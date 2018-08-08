function loadingReducer(state = false, action) {
  switch (action.type) {
    case 'LOADING_BIRDS':
      return true
    default:
      return state
  }
}

export default loadingReducer