import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './landingpage/Home';
import About from './landingpage/About';


function App() {
  

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='about' element={<About/>}/>
      </Routes>
    </Router>
  )
}

export default App
