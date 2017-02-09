import React, { Component } from 'react';
import Dropdown from './components/Dropdown'
import './App.css';
import {Link} from 'react-router';

class App extends Component {
  constructor(){
    console.log("Thanks for visiting my portfolio site");
    console.log("If you want to see the uncompiled code for this site please visit https://github.com/eparkhurst/ReactPortfolio");
    console.log("Feel free to email me at eli.parkhurst@gmail.com");
    super()
    this.toggleDropdown = this.toggleDropdown.bind(this)
  }
  state = {
    className:'hidden'
  }
  toggleDropdown(){
    if (this.state.className === 'hidden') {
      this.setState({className:''})
    }else{
      this.setState({className:'hidden'})
    }
    console.log('clicked');
  }
  render() {
    const coverClass = 'cover '+this.state.className
    return (
      <div className="App">
        <div className="App-header">
          <h1 className="eliHeader">Elijah Parkhurst</h1>
          <span
            onClick={this.toggleDropdown}
            className="hamburger-icon" >
            <img src="hamburger.png" alt="hamburger icon" />
          </span>
          <div className={coverClass} onClick={this.toggleDropdown}></div>
          <Dropdown
            className={this.state.className}
            toggle={this.toggleDropdown}
          />
          <nav>
            <Link to="/about" className="headerBtn">About</Link>
            <Link to="/portfolio" className="headerBtn">Portfolio</Link>
          </nav>
        </div>
        {this.props.children}
      </div>
    );
  }
}

export default App;
