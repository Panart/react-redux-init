import React from 'react'
import { IndexRoute, Route } from 'react-router'

import { homeUrl } from 'urls'

import {
  App,
  Home,
  NotFound
} from '../containers/containers'

console.log(homeUrl(), '!!')

export default (store) => {
  return (
    <Route path="/" component={ App }>
      <IndexRoute component={ Home } />
      <Route path="*" component={ NotFound } />
    </Route>
  )
}
  