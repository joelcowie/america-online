export default (state='', action) => {
  switch (action.type) {
    case 'UPDATE_CURRENT_PARK':
      return action.payload
    default:
      return state
    }
}
