import { createStore as _createStore, compose } from 'redux'
import reducer from '../reducers'

let createStore

if (process.env.NODE_ENV !== 'production') {

  createStore = function(reduxReactRouter, getRoutes, createHistory, data) {

    let finalCreateStore;

    const DevTools = require('../containers/DevTools/DevTools').default;

    finalCreateStore = compose(
      reduxReactRouter({ getRoutes, createHistory }),
      DevTools.instrument()
    )(_createStore);

    const store = finalCreateStore(reducer, data);

    module.hot.accept('../reducers', () => {
      store.replaceReducer(require('../reducers').default);
    });

    return store;
  }

} else {

  createStore = function(reduxReactRouter, getRoutes, createHistory, data) {

    let finalCreateStore;

    finalCreateStore = compose(
      reduxReactRouter({ getRoutes, createHistory }),
    )(_createStore);

    const store = finalCreateStore(reducer, data);

    return store;
  }

}

export default createStore
