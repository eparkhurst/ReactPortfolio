import React, { Component } from 'react';
import headShot from '../../../imgs/headShot.jpg';
import PageHeader from '../../common/PageHeader/PageHeader';
import './About.css';

class About extends Component {
    render() {
        return (
            <div>
                <PageHeader title="About" />
                <div className="about-panel">
                    <img className="head-shot" src={headShot} alt="a handsome head shot of Elijah Parkhurst" />
                    <p className="about-text">
                        I’m a Colorado kid doing my best to grow along with Denver. Professionally, I am a full stack
                        developer, working in tech since 2016. I've worked in greenfield and legacy projects, run scum
                        teams, and worked directly with a variety of stakeholders. If I look like a good fit for your
                        team feel free to contact me.
                    </p>
                </div>
                <div className="about-panel contact-me">
                    <h1>Contact Me</h1>
                    <a
                        href="https://www.linkedin.com/in/eliparkhurst"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="connect-link"
                    >
                        <span className="fa fa-linkedin-square" />
                        <span className="contact-text">LinkedIn</span>
                    </a>
                    <a
                        href="https://github.com/eparkhurst"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="connect-link"
                    >
                        <span className="fa fa-github-square" />
                        <span className="contact-text">Github</span>
                    </a>
                    <a href="mailto:eli.parkhurst@gmail.com" className="connect-link">
                        <span className="fa fa-envelope-square" />
                        <span className="contact-text">Email</span>
                    </a>
                    <a
                        href="/Resume-ElijahParkhurst.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="connect-link"
                    >
                        <span className="fa fa-file-pdf-o" />
                        <span className="contact-text">Resume</span>
                    </a>
                </div>
            </div>
        );
    }
}

export default About;
