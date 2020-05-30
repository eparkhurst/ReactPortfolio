import React, {Component} from 'react';
import Cell from './Cell';
import './Cmap.css';

class Cmap extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentMap: []
    };

    this.checkCell = this.checkCell.bind(this);
    this.getNeighbors = this.getNeighbors.bind(this);
    this.setNeighbors = this.setNeighbors.bind(this);
    this.resetStatus = this.resetStatus.bind(this);
  }

  componentDidMount() {
    this.initializeMap(true);
  }

  render() {
    return <div className="map">
      {this.state.currentMap.map((row, i) => {
        return <div className="row" key={i}>
          {row.map((cell, j) => {
            return <Cell
              update={this.state.update}
              onClick={this.cellClick.bind(this, cell)}
              x={cell.x} y={cell.y}
              status={cell.status}
              key={j}/>
          })}
        </div>
      })}
    </div>
  }

  initializeMap(random) {
    const currentMap = []
    for (let i = 0; i < this.props.height; i++) {
      currentMap.push([]);
      for (let j = 0; j < this.props.width; j++) {
        let newCell = {
          x: j,
          y: i,
          status: false,
          neighbors: 0
        }
        if (random) {
          if (Math.floor(Math.random() * 2) < 1) {
            newCell.status = true;
          }
        }
        currentMap[i].push(newCell);
      }
    }
    this.setState(oldState => ({
      currentMap: currentMap
    }))
  }

  cellClick(cellData, event) {
    this.change(cellData)
  }

  change(cellData) {
    this.setState(oldState => {
      oldState.currentMap[cellData.y][cellData.x].status = !oldState.currentMap[cellData.y][cellData.x].status;
      return {
        currentMap: oldState.currentMap
      }
    })
  }

  updateMap() {
    const updatedMap = this.setNeighbors();
    this.resetStatus(updatedMap)
  }

  setNeighbors() {
    return this.state.currentMap.map((row) => {
      return row.map(cell => {
        return this.getNeighbors(cell)
      })
    })
  }

  getNeighbors(cell) {
    cell.neighbors = 0;
    for (let x = -1; x < 2; x++) {
      for (let y = -1; y < 2; y++) {
        if (x === 0 && y === 0) continue;
        cell.neighbors += this.checkCell(cell.x + x, cell.y + y, cell)
      }
    }
    return cell
  }

  checkCell(x, y, cell) {
    if (this.state.currentMap[y]) {
      const neighbor = this.state.currentMap[y][x];
      if (neighbor && neighbor.status === true) {
        return 1
      }
    }
    return 0
  }

  resetStatus() {
    this.setState(oldState => ({
      currentMap: oldState.currentMap.map((row) => {
        return row.map(cell => {
          if (cell.status) {
            if (cell.neighbors > 3 || cell.neighbors < 2) {
              cell.status = false;
            }
          } else {
            if (cell.neighbors === 3) {
              cell.status = true
            }
          }
          return cell
        })
      })
    }))
  }
}

export default Cmap;