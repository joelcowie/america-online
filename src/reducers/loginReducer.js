export default (state=false, action) => {
  switch (action.type) {
    case "LOGIN_RENDER":
      return action.payload
    default:
      return state
    }
}
