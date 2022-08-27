import React from 'react'
import './Carousel.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


function carousel() {
  return (
    <Carousel className='caro' autoPlay>
    <div>
        <img src={require('../Images/firs.png')} alt=''/>
        <p >Ecommerce</p>
    </div>
    <div>
        <img src={require('../Images/sec.png')} alt=''/>
        <p >Anime Characters</p>
    </div>
    <div>
        <img src={require('../Images/thir.png')} alt=''/>
        <p >Dashboard</p>
    </div>
</Carousel>
  )
}

export default carousel