import React from 'react'
import { Route, IndexRoute} from 'react-router'
import App from './components/App'
import UserSignUp from './components/UserSignUp'
import ParkDetails from './components/ParkDetails'
import ParkIndex from './components/ParkIndex'
import UserLogIn from './components/UserLogIn'
import TripForm from './components/TripForm'
// import TripList from './components/TripList'
// import TripIndex from './components/TripIndex'

export default (
  <Route path='/' component={App}>
    <IndexRoute component={ParkIndex} />
    <Route path='parks' component={ParkIndex} >
      <Route path=':id' component={ParkDetails} >
    </Route>
    </Route>
    <Route path='trips/new' component={TripForm} />
    <Route path='login' component={UserLogIn} />
    <Route path='signup' component={UserSignUp} />
</Route>
)
