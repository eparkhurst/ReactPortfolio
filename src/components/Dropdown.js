import React, { Component } from 'react';
import { Link } from 'react-router';
import './Dropdown.css';

class Dropdown extends Component {
  constructor(){
    super()
    this.toggle = this.toggle.bind(this)
  }
  toggle(){
    this.props.toggle()
  }
  render() {
    const currentClass = 'dropdown '+this.props.className;
    return <div className={currentClass} onClick={this.toggle}>
      <Link to="/about" className="dropdownBtn">About</Link>
      <Link to="/portfolio" className="dropdownBtn">Portfolio</Link>
    </div>
  }
}

export default Dropdown;
