export default (state=false, action) => {
  switch (action.type) {
    case "TRIP_FORM_RENDER":
      return action.payload
    case 'TRIP_NAME_SUBMIT':
      return action.payload
    default:
      return state
    }
}
