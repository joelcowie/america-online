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
    return userData
  })

  return {
    type: "CREATE_USER",
    payload: response
  }
}

export const createTrip = (trip) => {
  const jwt = sessionStorage.getItem('jwt')
  const response = axios.post(URL + 'trip', {trip: trip, jwt: jwt}).then(response => response.data)

  return {
    type: "CREATE_TRIP",
    payload: response
  }
}

export const addParkToTrip = (trippark) => {
  const jwt = sessionStorage.getItem('jwt')
  const response = axios.post(URL + 'trippark', {park: trippark.park, trip: trippark.trip, jwt: jwt}).then(response => response.data)

  return {
    type: "ADD_PARK_TO_TRIP",
    payload: response
  }
}

export const logInUser = (user) => {
  const response = axios.post(URL + 'login', user).then((userData) => {
    sessionStorage.setItem('jwt', userData.data.jwt)
    return userData
  })

  return {
    type: "LOG_IN_USER",
    payload: response
  }
}

 export const fetchUser = (jwt) => {
   const response = axios.post(URL + 'current', {jwt: jwt}).then(response => response.data)

   return {
     type: "FETCH_USER",
     payload: response
   }
 }

 export const logOutUser = () => {
   return {
     type: "LOG_OUT_USER",
     payload: {}
   }
 }

 export const removeParkFromTrip = (trippark) => {
   const jwt = sessionStorage.getItem('jwt')
   const response = axios.post(URL + 'tripparks', {park: trippark.park, trip: trippark.trip, jwt: jwt}).then(response => response.data)

   return {
     type: "REMOVE_PARK_FROM_TRIP",
     payload: response
   }
 }
