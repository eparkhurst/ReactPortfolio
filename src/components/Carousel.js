import React,{Component} from 'react'
import image from '../imgs/allangular.png'
import Panel from './Panel'

const imgArray=['brewsbrothers.png','moviepicker.png', 'trackpath.png']

class Carousel extends Component{

  render(){
    return <div>
      <h1>This is from Carousel</h1>
      {imgArray.map((e, i)=>{
        return <Panel imgUrl={e} image={image} key={i}/>
      })}
    </div>
  }
}

export default Carousel
