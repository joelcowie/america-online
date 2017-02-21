export default (state={}, action) => {
  switch (action.type) {
    case "FETCH_USER":
      return action.payload
    case "LOG_IN_USER":
      return action.payload.data
    case "CREATE_USER":
      return action.payload.data
    case "LOG_OUT_USER":
      return action.payload
    default:
      return state
    }
}
