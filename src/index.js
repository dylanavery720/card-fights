import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory, IndexRedirect } from 'react-router';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
// import App from './Components/App/App';
// import Fight from './Components/Fight/Fight';
// import Final from './Components/Final/Final';
import FightContainer from './Containers/FightContainer'
import AppContainer from './Containers/AppContainer'
import FinalContainer from './Containers/FinalContainer'
import './index.css';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(combineReducers({}),
{
    tree: {
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
        ready: true,
      }
  }
})

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
