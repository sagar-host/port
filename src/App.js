import { React} from "react";
import { Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./Components/Home/home"
import Proute from "./Components/ProjectRoute/proute";
import Resume from '../src/Components/Resume/Resume';
import Contact from "./Components/Contact/contact";






function App() {



  return (
    <div className="App">
    

       <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/myproject" element={<Proute />} />
        <Route exact path="/resume" element={<Resume />} />
        <Route exact path="/contact" element={<Contact />} />


      </Routes>
   
     
 
    </div>
 
      


    
   
  );
}

export default App;
