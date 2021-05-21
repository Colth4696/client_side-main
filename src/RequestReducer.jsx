const requestReducer = (state, action) => {
    switch (action.type) {
      case "UPDATE_REQUESTS": 
        return { requests: action.requests }
      case "ADD_REQUESTS":
        return { requests: state.requests.concat(action.requests) }
      default:
        return state
    }
}

export default requestReducer;