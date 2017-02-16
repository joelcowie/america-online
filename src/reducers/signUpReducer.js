export default (state=false, action) => {
  switch (action.type) {
    case "SIGN_UP_RENDER":
      return action.payload
    default:
      return state
    }
}
