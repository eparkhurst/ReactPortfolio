import React, {Component} from 'react'
import './Panel.css'

class Panel extends Component{
  render(){
    return <div className="image-panel">
      <img src={this.props.image} />
      <div className="image-title">
        <h3>{this.props.title}</h3>
        <p>{this.props.description}</p>
      </div>
    </div>
  }
}

export default Panel
