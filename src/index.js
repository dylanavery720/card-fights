import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory, IndexRedirect } from 'react-router';
import App from './App';
import Fight from './Fight';
import './index.css';


const routes = (
  <Router history={browserHistory} >
    <Route path='/' component={App}>
      <Route path='/fight' component={Fight} />
    </Route>
  </Router>
)

ReactDOM.render(
  routes,
  document.getElementById('root')
);
