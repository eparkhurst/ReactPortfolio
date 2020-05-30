import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Dropdown.css';

class Dropdown extends Component {
  toggle = () => {
    this.props.toggle()
  };

  render() {
    const currentClass = 'dropdown ' + this.props.className;
    return <div className={currentClass} onClick={this.toggle}>
      <Link to="/about" className="dropdownBtn">About</Link>
      <Link to="/portfolio" className="dropdownBtn">Portfolio</Link>
      <Link to="/conways" className="dropdownBtn">Conways</Link>
    </div>
  }
}

export default Dropdown;
