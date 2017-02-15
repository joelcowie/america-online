import axios from 'axios'
import {browserHistory} from 'react-router'


const URL = 'http://localhost:3000/api/v1/'

var config = {
  headers: {'Authorization': 'DF1C7C58-FBFD-4B3D-AC24-5B33CC02E88E'}
}

var parksApi = axios.get('https://developer.nps.gov/api/v0/parks', config).then(response => response.data)
debugger
// ?parkCode=yell,yose

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
