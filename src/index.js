import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';

import Index from './components/IndexComponent';
import Admin from './components/AdminComponent';
import Login from './components/LoginComponent';


// Render the main component into the dom
ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={Index}/>
    <Route path="/admin" component={Admin}/>
    <Route path="/login" component={Login}/>
  </Router>
), document.getElementById('app'));
