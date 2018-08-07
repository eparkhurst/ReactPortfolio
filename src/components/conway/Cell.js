import React, { Component } from 'react';

class Cell extends Component{
    x;
    y;

    constructor(props){
        super(props);
        this.x = this.props.x;
        this.y = this.props.y;
    }


    render(){
        return <div onClick={this.props.onClick} style={this.styles()}>
        </div>
    }

    styles = ()=>{
        let style = {
            backgroundColor: 'red',
            width: '12px',
            height: '12px'
        };
        if (this.props.status){
            style.backgroundColor = '#222'
        }else {
            style.backgroundColor = '#bfbfbf'
        }
        return style
    };
}

export default Cell;