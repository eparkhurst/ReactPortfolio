import React, { Component } from 'react';
import './App.css';
import {Link} from 'react-router';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1 className="eliHeader">Elijah Parkhurst</h1>
          <Link to="/about" className="headerBtn">About</Link>
          <Link to="/portfolio" className="headerBtn">Portfolio</Link>
        </div>
        {this.props.children}
      </div>
    );
  }
}

export default App;
