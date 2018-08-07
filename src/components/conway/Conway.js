import React, { Component } from 'react';
import Cmap from './Cmap';

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
            <h1>Conways</h1>
                <Cmap ref={instance => { this.child = instance; }} random="true" height="3" width="3"/>
            <button onClick={()=>{this.start()}}>Start</button>
            <button onClick={()=>{this.stop()}}>Stop</button>
            </div>
    }

    start(){
        let interval = setInterval(this.iterate, 1000);
        this.setState({interval:interval});
    }

    stop(){
        clearInterval(this.state.interval)
    }

    iterate(){
        this.child.updateMap()
    }
}




export default Conway;