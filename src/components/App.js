import React, { Component } from 'react';
import Dropdown from './common/Dropdown';
import './App.css';
import { NavLink, Route, Switch } from 'react-router-dom';
import About from './views/About/About';
import Portfolio from './views/Portfolio/Portfolio';
import Conway from './views/Conways/Conway';
import Philosophy from './views/Philosophy/Philosophy';

class App extends Component {
    constructor() {
        super();
        console.log('Thanks for visiting my portfolio site');
        console.log(
            "This app was made using React. I went for a material design but didn't use any css libraries.If you want to see the uncompiled code for this site please visit https://github.com/eparkhurst/ReactPortfolio.",
        );
        console.log('Feel free to email me at eli.parkhurst@gmail.com');
        this.state = {
            className: 'hidden',
        };
    }

    toggleDropdown = () => {
        if (this.state.className === 'hidden') {
            this.setState({ className: '' });
        } else {
            this.setState({ className: 'hidden' });
        }
    };

    render() {
        const coverClass = 'cover ' + this.state.className;
        return (
            <div className="App">
                <div className="App-header">
                    <h1 className="eliHeader">Elijah Parkhurst</h1>
                    <span onClick={this.toggleDropdown} className="hamburger-icon">
                        <img src="hamburger.png" alt="hamburger icon" />
                    </span>
                    <div className={coverClass} onClick={this.toggleDropdown} />
                    <Dropdown className={this.state.className} toggle={this.toggleDropdown} />
                    <nav>
                        <NavLink activeClassName="selected" to="/about" className="headerBtn">
                            About
                        </NavLink>
                        <NavLink activeClassName="selected" to="/portfolio" className="headerBtn">
                            Portfolio
                        </NavLink>
                        <NavLink activeClassName="selected" to="/philosophy" className="headerBtn">
                            Philosophy
                        </NavLink>
                        <NavLink activeClassName="selected" to="/conways" className="headerBtn">
                            Conway's
                        </NavLink>
                    </nav>
                </div>
                <div className="page-wrapper">
                    <Switch path="/" component={App}>
                        <Route path="/about" component={About} />
                        <Route path="/portfolio" component={Portfolio} />
                        <Route path="/conways" component={Conway} />
                        <Route path="/philosophy" component={Philosophy} />
                        <Route path="/" component={About} />
                    </Switch>
                </div>
            </div>
        );
    }
}

export default App;
