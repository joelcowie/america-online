export default (state=[], action) => {
  switch (action.type) {
    case "ADD_PARK_TO_TRIP":
      return action.payload
    default:
      return state
    }
}
