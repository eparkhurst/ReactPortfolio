import React, { Component } from 'react';
import Cell from './Cell';
import './Cmap.css';

class Cmap extends Component{
    currentMap = [];

    constructor(props) {
        super(props);
        this.currentMap = [];
        for (let i = 0; i < this.props.height; i++) {
            this.currentMap.push([])
            for (let j = 0; j < this.props.width; j++) {
                let newCell = {
                    x:j,
                    y:i,
                    status:false
                }
                if (this.props.random) {
                    if(Math.floor(Math.random()*2)<1){
                        newCell.status = true;
                    }
                }
                this.currentMap[i].push(newCell);
            }
        }
        this.state = {
            update: false
        }
    }

    componentDidMount(){
        console.log(this);
    }

    render(){
        return <div className="map">
            {this.currentMap.map((row, i)=>{
                return <div className="row" key={i}>
                    {row.map((cell, j)=>{
                        return <Cell map={this.state.currentMap}
                                     update={this.state.update}
                                     x={cell.x} y={cell.y}
                                     status={cell.status}
                                     key={j}/>
                    })}
                </div>
            })}
        </div>
    }

    updateMap(){
        this.setState(prevState => ({
            update: !prevState.update
        }));
        this.resetStatus(this.currentMap)
        this.render()
    }

    setNeightbors(){

    }

    resetStatus (map){
        for (var i = 0; i < map.length; i++) {
            for (var j = 0; j < map.length; j++) {
                let cell = map[i][j]
                if(cell.status){
                    if(cell.livingNeighbors >3 ||cell.livingNeighbors<2){
                        cell.status = false;
                    }
                }else{
                    if(cell.livingNeighbors ===3){
                        cell.status = true
                    }
                }
            }
        }
    }
}

export default Cmap;