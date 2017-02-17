import { combineReducers } from 'redux'
import parksReducer from './parksReducer'
import usersReducer from './usersReducer'
import currentParkReducer from './currentParkReducer'
import currentUserReducer from './currentUserReducer'
import tripsReducer from './tripsReducer'
import tripParksReducer from './tripParksReducer'



export default combineReducers({
    parks: parksReducer,
    currentPark: currentParkReducer,
    user: usersReducer,
    trips: tripsReducer,
    currentUser: currentUserReducer,
    tripParks: tripParksReducer
  })
