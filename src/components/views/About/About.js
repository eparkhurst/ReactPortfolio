import React, {Component} from 'react';
import headShot from '../../../imgs/headShot.jpg'
import './About.css'

class About extends Component {
  render() {
    return <div>
      <h1 className="about-title">About</h1>
      <div className="about-panel">
        <img className="head-shot" src={headShot} alt="a handsome head shot of Elijah Parkhurst"/>
        <p>
          I’m a Colorado kid doing my best to grow along with Denver. Professionally, I am a full stack developer with
          an emphasis on the front end. I'm currently working almost entirely in React (with redux and sagas) but I have worked with
          Angular, Python/Flask/Postgres and node/express/Postgres in the past.
          If I look like a good fit for your team feel free to contact me.
        </p>
      </div>
      <div className="about-panel contact-me">
        <h1>Contact Me</h1>
        <a href="https://www.linkedin.com/in/eliparkhurst" target="_blank" rel="noopener noreferrer" className="connect-link">
          <span className="fa fa-linkedin-square"/>
          Linked In
        </a>
        <a href="https://github.com/eparkhurst" target="_blank" rel="noopener noreferrer"   className="connect-link">
          <span className="fa fa-github-square"/>
          Git Hub
        </a>
        <a href="mailto:eli.parkhurst@gmail.com" className="connect-link">
          <span className="fa fa-envelope-square"/>
          Email</a>
        <a href="/Resume-ElijahParkhurst.pdf" target="_blank" rel="noopener noreferrer" className="connect-link">
          <span className="fa fa-file-pdf-o"/>
          Resume
        </a>
      </div>
    </div>
  }
}

export default About
