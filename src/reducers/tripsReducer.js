export default (state=[], action) => {
  switch (action.type) {
    case "CREATE_TRIP":
      return action.payload
    default:
      return state
    }
}
