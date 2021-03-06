import React, {Component} from 'react';

class Cell extends Component {
  x;
  y;

  constructor(props) {
    super(props);
    this.x = this.props.x;
    this.y = this.props.y;
  }


  render() {
    return <div onClick={this.props.onClick} style={this.styles()}>
    </div>
  }

  styles = () => {
    let style = {
      width: '12px',
      height: '12px'
    };
    if (this.props.status) {
      style.backgroundColor = '#222'
    } else {
      style.backgroundColor = '#e8e8e8'
    }
    return style
  };
}

export default Cell;