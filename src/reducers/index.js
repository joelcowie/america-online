import { combineReducers } from 'redux'
import parksReducer from './parksReducer'
import usersReducer from './usersReducer'
import currentParkReducer from './currentParkReducer'
import tripsReducer from './tripsReducer'

export default combineReducers({
    parks: parksReducer,
    currentPark: currentParkReducer,
    users: usersReducer,
    trips: tripsReducer
  })
