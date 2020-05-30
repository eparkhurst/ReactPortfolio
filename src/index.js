import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import About from './components/views/About/About';
import Portfolio from './components/views/Portfolio/Portfolio';
import Conway from "./components/views/Conways/Conway";
import { Router, Route, hashHistory, IndexRedirect} from 'react-router';
import './index.css';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRedirect to="/about" />
      <Route path="about" component={About} />
      <Route path="portfolio" component={Portfolio} />
      <Route path="conways" component={Conway} />
    </Route>
  </Router>,
  document.getElementById('root')
);
