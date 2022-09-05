import React from 'react';
import {Navbar,Nav,Container } from "react-bootstrap";
import "./header.css"
import {Link} from "react-router-dom";
import {ReactNavbar} from "overlay-navbar"



function header() {

  return (
    <>
          <ReactNavbar
        logo="https://www.lunapic.com/editor/premade/transparent.gif"
        burgerColor="black"
        burgerWidth = "5vh"
      
        navColor1="#fff5f5"
        burgerColorHover="burgerColor"
        logoWidth="50%"
        logoHoverColor="crimson"
        link1Size="1.2rem"
        link1Color="#121212"
        link1Padding="1vmax"
        link1ColorHover="crimson"
        nav2justifyContent="flex-end"
        link1Margin="1vmax"
        link2Margin="0"
        link3Margin="0"
        link4Margin="1vmax"
        nav3justifyContent="flex-start"
        link1Text="Home"
        link1Family="sans-serif"
        link2Text="Profile"
        link3Text="Contact"
        link4Text="Coffee"
        link1Url= "/"
        link2Url= '/resume'
        link3Url= '/contact'
        link4Url= '/coffe'
        nav4justifyContent="flex-start"
        searchIconMargin="0.5vmax"
        cartIconMargin="1vmax"
        profileIconMargin="0.5vmax"
        searchIconColor="#121212"
        cartIconColor="#121212"
        profileIconColor="#121212"
        searchIconColorHover="crimson"
        cartIconColorHover="crimson"
        profileIconColorHover="crimson"
      />
      {/* <div className="timer"></div>
      <div className="pic">
         <img src={require('../Images/eye.gif')} alt="" />
      </div> */}

{/* //          <Navbar id='NAVBAR' collapseOnSelect expand="lg" >
// //   <Container>
// // <Link to="/" className='LinkHeading'>EverGreen</Link> 
// //   <Navbar.Toggle aria-controls="responsive-navbar-nav" />
// //   <Navbar.Collapse id="responsive-navbar-nav">
// //     <Nav className="me-auto">
// //       <Link  to="/myproject" className='link2'>My Project</Link>
// //       <Link to="/contact" className='link2'>Contact Me</Link>
    
    
// //     </Nav>
// //     <Nav>
// //       <Link to="https://www.linkedin.com/in/sagar-208723153"><i className="fa fa-twitter"></i></Link>

// //       <Link to="https://www.github.com/sagar-host">
// //       <i className="fa fa-github"></i>
// //       </Link>
// //     </Nav>
// //   </Navbar.Collapse>
// //   </Container>
// // </Navbar> */}
   </>
  )
}

export default header