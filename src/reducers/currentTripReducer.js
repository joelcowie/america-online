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
      // var deleteParkIndex = state.park_ids.indexOf(action.payload.park)
      // return {trip: action.payload.trip, park_ids: [...state.park_ids.slice(0, deleteParkIndex), ...state.park_ids.slice((deleteParkIndex + 1), 0)]}
    default:
      return state
    }
}


// @trip_park = TripPark.new(park_id: params[:park][:id], trip_id: params[:trip][:trip][:id])
//   @trip = Trip.find(@trip_park.trip_id)
// if @trip_park.save
//   render json: {parks: @trip.parks, trip: @trip}
// end
