import React, {Component} from 'react';
import Cmap from './Cmap';
import './Conway.css';

class Conway extends Component {

  constructor(props) {
    super(props);
    this.state = {
      running: false
    }
  }

  random = () => {
    this.stop();
    this.child.initializeMap(true);
  };

  blank = () => {
    this.stop();
    this.child.initializeMap(false);
  };

  start = () => {
    if(!this.state.running) {
      let interval = setInterval(this.iterate, 250);
      this.setState({interval, running: true});
    }
  };

  stop = () => {
    clearInterval(this.state.interval);
    this.setState({ running: false })
  };

  iterate = () => {
    this.child.updateMap()
  };

  componentWillUnmount() {
    clearInterval(this.state.interval)
  }

  render() {
    return (
      <div>
        <h2 className="conway-title">Conway's Game of Life</h2>
        <h5 className="game-prep">Click any cell to toggle 'Life'</h5>
        <div className="conway-wrapper">
          <div className="game">
            <Cmap ref={instance => {
              this.child = instance;
            }} height="50" width="50"/>
          </div>
          <div className="controls">
            <button
              className="game-btn st-btn"
              onClick={this.start}
            >
              Start
            </button>
            <button
              className="game-btn st-btn"
              onClick={this.stop}
            >
              Stop
            </button>
            <button
              className="game-btn"
              onClick={this.blank}
            >
              Clear
            </button>
            <button
              className="game-btn"
              onClick={this.random}
            >
              Generate Random
            </button>
          </div>
        </div>
      </div>
    )
  }
}


export default Conway;