import React, {Component} from 'react'
import './Panel.css'

class Panel extends Component {

  constructor() {
    super();
    this.state = {
      className: "expand hidden",
    };
  }

  toggle = () => {
    if (this.state.className === "expand hidden") {
      this.setState({className: 'expand'})
    } else {
      this.setState({className: 'expand hidden'})
    }
  };

  render() {
    let linkClass = ''
    if (!this.props.link) {
      linkClass = 'hidden'
    }
    return <div className="image-panel">
      <div onClick={this.toggle}>
        <img src={this.props.image} alt='a portfolio piece'/>
        <div className="image-title">
          <h3>{this.props.title}</h3>
          <p>{this.props.description}</p>
        </div>
      </div>
      <div className={this.state.className}>
        <a href={this.props.link} className={linkClass}><i className="fa fa-link"></i> Visit the Site</a>
        {this.props.github &&<a href={this.props.github}><i className="fa fa-github-square"></i> See the Code on Github</a>}
      </div>
    </div>
  }
}

export default Panel
