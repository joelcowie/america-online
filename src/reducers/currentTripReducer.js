export default (state={}, action) => {
  switch (action.type) {
    case "UPDATE_CURRENT_TRIP":
      return action.payload
    case "ADD_PARK_TO_CURRENT_TRIP":
      return [...state.parks, action.payload]
    default:
      return state
    }
}
