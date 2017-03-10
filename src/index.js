import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory, IndexRedirect } from 'react-router';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux'

import FightContainer from './Containers/FightContainer'
import AppContainer from './Containers/AppContainer'
import FinalContainer from './Containers/FinalContainer'
import './index.css';
import app from './Reducers/app'
import fight from './Reducers/fight'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(combineReducers({ app, fight }),
{
      fight: {
      teamdice: 0,
      oppdice: 0,
      teamrolls: 2,
      opprolls: 2,
      ops: [],
    },
      app: {
        data: null,
        team: [],
      }
}, composeEnhancers(applyMiddleware()) )

const routes = (
<Provider store={store}>
  <Router history={browserHistory} >
    <Route path='/' component={AppContainer}>
      <Route path='fight' component={FightContainer} />
      <Route path='final' component={FinalContainer} />
    </Route>
  </Router>
</Provider>
)

ReactDOM.render(
  routes,
  document.getElementById('root')
);
