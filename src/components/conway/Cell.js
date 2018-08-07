import React, { Component } from 'react';

class Cell extends Component{
    x;
    y;

    constructor(props){
        super(props);
        this.x = this.props.x;
        this.y = this.props.y;
        this.update = this.props.update;
        this.state = {
            status: false,
            livingNeighbors: 0,
            update:this.props.update
        };
        this.toggle = this.toggle.bind(this);
        this.checkCell = this.checkCell.bind(this);
        this.getNeighbors = this.getNeighbors.bind(this);
    }

    componentWillReceiveProps(newProps){
        if (newProps.update !== this.props.update){
            this.getNeighbors(this.props.map)
        }
    }

    render(){
        return <div onClick={this.toggle} style={this.styles()}>
        </div>
    }

    toggle(){
        this.setState(prevState => ({
            status: !prevState.status
        }));
    }

    styles = ()=>{
        let style = {
            backgroundColor: 'red',
            width: '30px',
            height: '30px'
        }
        if (this.state.status){
            style.backgroundColor = 'red'
        }else {
            style.backgroundColor = 'blue'
        }
        return style

    };

    getNeighbors(map){
        for (let x = -1; x < 2; x ++){
            for(let y = -1; y < 2; y ++){
                if(x ===0 && y===0) continue;
                this.checkCell(this.x + x, this.y + y, map)
            }
        }
    }

    checkCell(x, y, map){
        const neighbor = map[y][x];
        if(neighbor && neighbor.status === true){
            this.setState(prevState => ({
                livingNeighbors: prevState.livingNeighbors +1
            }))
        }
    }
}

export default Cell;