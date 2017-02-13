export default (state=[], action) => {
  switch (action.type) {
    case "CREATE_USER":
      return action.payload.data.name
    default:
      return state
    }
}
