import React, { Component } from 'react';
import Cmap from './Cmap';
import PageHeader from '../../common/PageHeader/PageHeader';
import './Conway.css';

class Conway extends Component {
    constructor(props) {
        super(props);
        this.state = {
            running: false,
        };
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
        if (!this.state.running) {
            let interval = setInterval(this.iterate, 250);
            this.setState({ interval, running: true });
        }
    };

    stop = () => {
        clearInterval(this.state.interval);
        this.setState({ running: false });
    };

    iterate = () => {
        this.child.updateMap();
    };

    componentWillUnmount() {
        clearInterval(this.state.interval);
    }

    render() {
        const { running } = this.state;
        return (
            <div>
                <PageHeader title="Conways Game of Life" />
                <h5 className="game-prep">Click any cell to toggle 'Life'</h5>
                <div className="conway-wrapper">
                    <div className="game">
                        <Cmap
                            ref={(instance) => {
                                this.child = instance;
                            }}
                            height="50"
                            width="50"
                        />
                    </div>
                    <div className="side-section">
                        <div className="controls">
                            <div>
                                {running ? (
                                    <button className="game-btn st-btn" onClick={this.stop}>
                                        Stop
                                    </button>
                                ) : (
                                    <button className="game-btn st-btn" onClick={this.start}>
                                        Start
                                    </button>
                                )}
                            </div>
                            <div className="clear-generate">
                                <button className="game-btn sm-btn" onClick={this.blank}>
                                    Clear
                                </button>
                                <button className="game-btn sm-btn" onClick={this.random}>
                                    Generate Random
                                </button>
                            </div>
                        </div>
                        <h3 className="rule-header">The Rules</h3>
                        <div className="rules">
                            <p>Any live cell with two or three live neighbors survives.</p>
                            <p>Any dead cell with three live neighbors becomes a live cell.</p>
                            <p>
                                All other live cells die in the next generation. Similarly, all other dead cells stay
                                dead.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Conway;
