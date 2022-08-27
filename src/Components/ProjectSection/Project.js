import React from 'react'
import "./project.css"
import { Card } from 'react-bootstrap';
import {Link} from 'react-router-dom'


function Project() {
 

  

  return (
<>
<div className="mainCard">
<Card>
    {/* <Card.Img variant="top" src={require('../Images/projectpic.png')} className='cardImg'/> */}
   <h1 className='cardImg'>My Projects</h1>
   
    <Card.Body>
      <Card.Text className='text1'>
      Ecommerce || Login  Registration || CRUD
      </Card.Text>
    </Card.Body>
    <Link to="/myproject"><button className='button_slide slide_down'>Click to see More</button></Link>


  </Card>
</div>
 

</>
  )
}

export default Project