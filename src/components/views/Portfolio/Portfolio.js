import React, { Component } from 'react';
import brewsBrothers from '../../../imgs/brewsbrothers.png';
import moviePicker from '../../../imgs/moviepicker.png';
import trackPath from '../../../imgs/trackpath.png';
import allAngular from '../../../imgs/allangular.png';
import codeRoadTrip from '../../../imgs/codeRoadTrip.png';
import gingerMingle from '../../../imgs/gingerMingle.png';
import paintedWithFire from '../../../imgs/paintedWithFire.png';
import bounce from '../../../imgs/bounce.png';
import gitUp from '../../../imgs/gitup.png';
import Panel from '../../common/Panel';
import PageHeader from '../../common/PageHeader/PageHeader';
import './Portfolio.css';

const imgArray = [
    {
        image: bounce,
        title: 'Bounce',
        description: 'Video Conferencing for large groups. Built with React, NodeJs, and WebRTC',
        link: 'https://bounce.video',
    },
    {
        image: codeRoadTrip,
        title: 'Code Road Trip',
        description: 'A fullstack React app designed as a blog for my roadtrip in the fall of 2016',
        github: 'https://github.com/eparkhurst/CodeRoadTrip',
        link: 'https://coderoadtrip.firebaseapp.com/',
    },
    {
        image: gingerMingle,
        title: 'Ginger Mingle',
        description: 'A fake dating site built in AngularJS',
        github: 'https://github.com/eparkhurst/GingerMingle',
    },
    {
        image: paintedWithFire,
        title: 'Painted with Fire',
        description: 'A static site built for the Artist Guild "Painted with Fire"',
        github: 'https://github.com/eparkhurst/paintedWithFire',
        link: 'https://paintedwithfire.xyz',
    },
    {
        image: brewsBrothers,
        title: 'Brews Brothers',
        description: 'A group project which uses a Raspberry Pi to control a refrigerator for beer brewing',
        github: 'https://github.com/brews-brothers',
        link: 'https://brewsbrotherschillerfrontend.firebaseapp.com/',
    },
    {
        image: moviePicker,
        title: 'Movie Picker',
        description: 'A game to pick the imdb rank of movies. This was my first project',
        github: 'https://github.com/eparkhurst/Movie-Picker',
    },
    {
        image: trackPath,
        title: 'TrackPath',
        description:
            'An Android native app written in java. The app tracks the users location and displays it on a map',
        github: 'https://github.com/eparkhurst/Track-Path',
    },
    {
        image: allAngular,
        title: 'All Angular',
        description: 'An assortment of AngularJS apps made when I was learning AngularJS',
        github: 'https://github.com/eparkhurst/allAngular',
        link: 'https://allangular.firebaseapp.com',
    },
    {
        image: gitUp,
        title: 'Git Up',
        description: 'A group project using Express and Postgres for parents to monitor their childrens activity',
        github: 'https://github.com/GitAwwwShit',
    },
];

class Portfolio extends Component {
    render() {
        return (
            <div>
                <PageHeader title="Portfolio" />
                <div>
                    {imgArray.map((e, i) => {
                        return (
                            <Panel
                                image={e.image}
                                title={e.title}
                                description={e.description}
                                github={e.github}
                                link={e.link}
                                key={i}
                            />
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default Portfolio;
