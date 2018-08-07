import React, { Component } from 'react';
import Cmap from './Cmap';
import './Conway.css';

class Conway extends Component{

    constructor(props){
        super(props);
        this.stop = this.stop.bind(this);
        this.start = this.start.bind(this);
        this.iterate = this.iterate.bind(this);
        this.state = {}
    }

    render(){
        return <div>
            <h2 className="conway-title">Conway's Game of Life</h2>
            <h5 className="game-prep">Click any cell to toggle 'Life'</h5>
            <button className="game-btn st-btn" onClick={()=>{this.start()}}>Start</button>
            <button className="game-btn st-btn" onClick={()=>{this.stop()}}>Stop</button>
            <div className="game">
                <Cmap ref={instance => { this.child = instance; }} height="50" width="50"/>
            </div>
            <button className="game-btn" onClick={()=>{this.blank()}}>Generate Blank</button>
            <button className="game-btn" onClick={()=>{this.random()}}>Generate Random</button>
            </div>
    }

    random(){
        this.stop();
        this.child.initializeMap(true);
    }

    blank(){
        this.stop()
        this.child.initializeMap(false);
    }

    start(){
        let interval = setInterval(this.iterate, 250);
        this.setState({interval:interval});
    }

    stop(){
        clearInterval(this.state.interval)
    }

    iterate(){
        this.child.updateMap()
    }

    componentWillUnmount(){
        clearInterval(this.state.interval)
    }
}




export default Conway;