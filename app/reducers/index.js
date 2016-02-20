import { combineReducers } from 'redux'
import { routerStateReducer } from 'redux-router'
import user from './user/user'

let app = combineReducers({
  router: routerStateReducer,
  user,
})

export default app