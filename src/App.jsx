import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './landingpage/Home';
import About from './landingpage/About';
import TopNav from './landingpage/components/TopNav';
import Footer from "./landingpage/components/Footer";



function App() {
  

  return (
    <Router>
      <TopNav/>
      <div className="relative bg-[#121212] font-satoshi"> 
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='about' element={<About/>}/>
      </Routes>
      <Footer/>
      </div>
    </Router>
  )
}

export default App
