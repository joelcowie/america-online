import { combineReducers } from 'redux'
import parksReducer from './parksReducer'
import usersReducer from './usersReducer'
import currentParkReducer from './currentParkReducer'
import currentUserReducer from './currentUserReducer'
import tripsReducer from './tripsReducer'
import signUpReducer from './signUpReducer'
import loginReducer from './loginReducer'


export default combineReducers({
    parks: parksReducer,
    currentPark: currentParkReducer,
    user: usersReducer,
    trips: tripsReducer,
    currentUser: currentUserReducer,
    login: loginReducer,
    signUp: signUpReducer
  })
