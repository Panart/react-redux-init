import React from 'react'
import ReactDOM from 'react-dom'
import createHistory from 'history/lib/createBrowserHistory'
import createStore from './store/createStore'
import { Provider } from 'react-redux'
import { reduxReactRouter, ReduxRouter } from 'redux-router'
import makeRouteHooksSafe from './helpers/makeRouteHooksSafe'
import getRoutes from './routes'

const initialState = {}

const store = createStore(reduxReactRouter, makeRouteHooksSafe(getRoutes), createHistory, initialState)

let app

if (process.env.NODE_ENV !== 'production') {

  let DevTools = require('./containers/DevTools/DevTools').default

  app = (
    <Provider store={ store } key="provider">
      <div>
        <ReduxRouter routes={ getRoutes(store) } />
        <DevTools />
      </div>
    </Provider>
  )
  
} else {

  app = (
    <Provider store={ store } key="provider">
      <ReduxRouter routes={ getRoutes(store) } />
    </Provider>
  )

}
 
ReactDOM.render(app, document.getElementById('root'))