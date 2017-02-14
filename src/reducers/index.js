import { combineReducers } from 'redux'
import parksReducer from './parksReducer'
import usersReducer from './usersReducer'
import currentParkReducer from './currentParkReducer'

export default combineReducers({
    parks: parksReducer,
    currentPark: currentParkReducer,
    users: usersReducer
  })
