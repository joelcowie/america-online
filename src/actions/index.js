import axios from 'axios'
import {browserHistory} from 'react-router'


const URL = 'http://localhost:3000/api/v1/'


export const fetchParks = () => {
  const parks = axios.get(URL + 'parks').then(response => response.data)
  return {
    type: "FETCH_PARKS",
    payload: parks
  }
}

export const updateCurrentPark = (park) => {
  return {
    type: "UPDATE_CURRENT_PARK",
    payload: park
  }
}


export const createUser = (user) => {
  const response = axios.post(URL + 'signup', user).then((userData) => {
    sessionStorage.setItem('jwt', userData.data.jwt)
    browserHistory.push('/parks')
    return userData
  })

  return {
    type: "CREATE_USER",
    payload: response
  }
}
