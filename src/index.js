import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import AboutUs from './Component/AboutUs';

const routing = (
  <Router>
    <Switch>
      <Route exact path='/' render={() => <App />} />
      <Route path='/aboutus' component={() => <AboutUs />} />

    </Switch>
  </Router>)


ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
