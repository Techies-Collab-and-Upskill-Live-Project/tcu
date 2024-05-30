import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./home/Home";
import About from './landingpage/About';
import TopNav from "./home/components/TopNav";
import Footer from "./home/components/Footer";


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
  );
}

export default App;
