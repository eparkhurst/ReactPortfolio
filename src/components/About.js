import React, { Component } from 'react';
import headShot from '../imgs/headShot.jpg'
import './About.css'

class About extends Component{
  render(){
    return <div className="about">
      <h1 className="about-title">About</h1>
      <div className="about-panel">
        <img className="head-shot" src={headShot} alt="a handsome head shot of Elijah Parkhurst"/>
        <p>
          I’m a Colorado kid doing my best to grow along with Denver. Professionally, I am a full stack developer with an emphasis on the front end. I dream in React but AngularJS and I still have a good relationship. Don’t put me in a box though. I’ve made RESTful APIs, native mobile apps and know my way around an ERD. If I look like a good fit for your team my contact info is on this very page!
        </p>
      </div>
      <div className="about-panel">
        <h1>Contact Me</h1>
        <a href="https://www.linkedin.com/in/eliparkhurst" target="_blank" className="connect-link"><span className="fa fa-linkedin-square"></span> Linked In</a>
        <a href="https://github.com/eparkhurst" target="_blank" className="connect-link"><span className="fa fa-github-square"></span> Git Hub</a>
        <a href="mailto:eli.parkhurst@gmail.com" className="connect-link"><span className="fa fa-envelope-square"></span> Email</a>
        <a href="/Resume-ElijahParkhurst.pdf" className="connect-link"><span className="fa fa-file-pdf-o"></span> Resume</a>
      </div>
    </div>
  }
}

export default About
