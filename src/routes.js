import React from 'react'
import { Route, IndexRoute} from 'react-router'
import App from './components/App'
import UserSignUp from './components/UserSignUp'
import ParkDetails from './components/ParkDetails'
import ParkIndex from './components/ParkIndex'




export default (
  <Route path='/' component={App}>
    <IndexRoute component={ParkIndex} />
    <Route path='parks' component={ParkIndex} >
    <Route path=':id' component={ParkDetails} />
      </Route>
    <Route path='signup' component={UserSignUp} />
</Route>

)

// <IndexRoute component={MapImage} />
// <MapImage/>
// <TripForm/>
// <ParkDetails/>
// <UserSignUp/>
// <UserLogIn/>
