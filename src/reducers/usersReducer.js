export default (state=[], action) => {
  switch (action.type) {
    case "CREATE_USER":
    debugger
      return action.payload.data.name
    default:
      return state
    }
}
