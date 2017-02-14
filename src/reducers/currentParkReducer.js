export default function currentParkReducer(currentPark='', action){
  switch (action.type) {
    case 'UPDATE_CURRENT_PARK':
      return action.payload
    default:
      return currentPark
    }
}
