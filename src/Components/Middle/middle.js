import React from 'react'
import "./middle.css"
import Typewriter from 'typewriter-effect';

function middle() {
  return (
 
    <div className='middle'>

        <div className='divi' id='leftDiv'>
        <div className='leftH1'>
            <h1>WELCOME</h1>
        </div>
        <div className="typewriterDiv">

        {
        <Typewriter
  options={{
   
    strings:  ["Hello, there","I'm a Web Developer","a FrontEnd Enginner","a Seo Analyst", "Have a nice day!","Thank You" ],
    autoStart: true,
    loop: true,
  
  }}/>}
        </div>
         


        </div>
        <div className='divi' id='rightDiv'>
        
        <div className="para">
<h1>"Not all improvement ideas are good ones. Process and governance is needed to allow bad ideas to die and good ideas to flourish."</h1>
</div>

        {/* <div className="imgComp">
        <img src={require('../Images/new.png')} id='computerPic'  alt=""  />

        </div> */}
          

        </div>
  
    </div>
   
  )
}

export default middle