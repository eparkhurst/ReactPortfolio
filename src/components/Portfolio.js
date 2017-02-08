import React, { Component } from 'react';
import Carousel from './Carousel'
import brewsBrothers from '../imgs/brewsbrothers.png'
import moviePicker from '../imgs/moviepicker.png'
import trackPath from '../imgs/trackpath.png'
import allAngular from '../imgs/allangular.png'
import codeRoadTrip from '../imgs/codeRoadTrip.png'
import gingerMingle from '../imgs/gingerMingle.png'
import paintedWithFire from '../imgs/paintedWithFire.png'
import Panel from './Panel'
import './Portfolio.css'

const imgArray=[
  {image: codeRoadTrip,
    title:'Code Road Trip',
    description:'a group project'
  },
  {image: gingerMingle,
    title:'Ginger Mingle',
    description:'a group project'
  },
  {image: paintedWithFire,
    title:'Painted with Fire',
    description:'a group project'
  },
  {image: brewsBrothers,
    title:'Brews Brothers',
    description:'a group project'
  },
  {image: moviePicker,
    title:'Movie Picker',
    description:'a group project'
  },
  {image: trackPath,
    title:'TrackPath',
    description:'a group project'
  },
  {image: allAngular,
    title:'All Angular',
    description:'a group project'
  }
]


class Portfolio extends Component{
  render(){
    return <div className="portfolio">
      <h1 className="portfolio-title">Portfolio</h1>
      {imgArray.map((e, i)=>{
        return <Panel
          image={e.image}
          title={e.title}
          description={e.description}
          key={i}
        />
      })}
    </div>
  }
}

export default Portfolio;
