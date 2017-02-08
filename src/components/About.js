import React, { Component } from 'react';
import headShot from '../imgs/headShot.jpg'
import './About.css'

class About extends Component{
  render(){
    return <div className="about">
      <h1 className="about-title">About</h1>
      <div className="about-panel">
        <img className="head-shot" src={headShot}/>
        <p>
          I am a fullstack web developer living in Denver Colorado. In September 2015 I quit the world of anyalytical chemistry and vowed to never use Windows ME again. After several months of tinkering and 6 months in a fullstack immersion program at Galvanize I can now call myself a developer. From creating RESTful APIs to sprucing up the look of a site, I like it all.
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
