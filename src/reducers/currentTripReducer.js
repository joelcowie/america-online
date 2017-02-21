export default (state={}, action) => {
  switch (action.type) {
    case 'CREATE_TRIP':
      return {trip: action.payload.trip, parks: action.payload.parks}
    case 'ADD_PARK_TO_TRIP':
      console.log(state.parks)
      return {trip: action.payload.trip, parks: action.payload.parks}
    case 'REMOVE_PARK_FROM_TRIP':
      console.log(state.parks)
      return {trip: action.payload.trip, parks: action.payload.parks}
    case 'FETCH_TRIP':
      return {trip: action.payload.trip, parks: action.payload.parks}
    case 'LOG_IN_USER':
      return {trip: action.payload.data.trip, parks: action.payload.data.parks}
    case 'LOG_OUT_USER':
      return {trip: null, parks: null}
    default:
      return state
    }
}
