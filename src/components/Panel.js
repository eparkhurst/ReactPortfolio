import React, {Component} from 'react'
// import image from '../imgs/brewsbrothers.png'
import './Panel.css'

class Panel extends Component{
  render(){
    console.log(this.props.imgUrl);
    return <div className="plane">
      <img src={this.props.image} />
    </div>
  }
}

export default Panel
