import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import About from './components/About';
import Portfolio from './components/Portfolio';
import { Router, Route, hashHistory, IndexRedirect} from 'react-router';
import './index.css';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRedirect to="/about" />
      <Route path="about" component={About} />
      <Route path="portfolio" component={Portfolio}></Route>
    </Route>
  </Router>,
  document.getElementById('root')
);
