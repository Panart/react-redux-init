import { Router, Route, IndexRoute } from 'react-router'
import createBrowserHistory from 'history/lib/createBrowserHistory'

let history = createBrowserHistory()

/**
**
** globalComponents
**
**/

import {
  ButtonKit
} from 'globalComponentsKit'

/**
**
** use case pages
**
**/

import Registration from './docs/registration/registration'

import Frame from './frame/frame'
import Home from './docs/home/home'

let routes = (
  <Router>
    <Route path='/' component={ Frame }>

      <IndexRoute component={ Home } />
      
      <Route path='/button' component={ ButtonKit } />

      <Route path='/registration' component={ Registration } />

      <Route path="*" component={ Home } />

    </Route>
  </Router>
)

ReactDOM.render (
  <Router history={ history }>{ routes }</Router>,
  document.getElementById('root')
)