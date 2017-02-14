export default function parksReducer(state=[], action){
  switch (action.type) {
    case 'FETCH_PARKS':
      return action.payload
    default:
      return state
    }
}
