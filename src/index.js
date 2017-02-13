import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import {Router, browserHistory} from 'react-router'
import {ReduxPromise} from 'redux-promise'
import routes from './routes'
import rootReducer from './reducers'

const store = createStore(rootReducer)

// store.dispatch

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes}/>
  </Provider>,
  document.getElementById('root')
)
