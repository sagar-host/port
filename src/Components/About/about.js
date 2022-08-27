import React from 'react'
import {Link} from 'react-router-dom'

import "./about.css"


function about() {
  return (
    <div id='about'>
    <div className="textAbout">
    <h2>Hello. I am Sagar. </h2>
<h2 className="darkText">I'm an interdisciplinary Web Developer living in <a href="https://en.wikipedia.org/wiki/Mandi,_Himachal_Pradesh" target="_blank" rel="noopener noreferrer" className="link-3">Mandi</a>, Himachal Pardesh. Currently I work at Freelance, transforming how we experience Work From Home.</h2>

    </div>

    <Link to="/resume" id='secondLink' className="cta inline sec w-button">Read about my past</Link>

    </div>
  )
}

export default about