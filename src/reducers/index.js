import { combineReducers } from 'redux'
import genericReducer from './genericReducer'
import usersReducer from './usersReducer'

export default combineReducers({generic: genericReducer, users: usersReducer})
