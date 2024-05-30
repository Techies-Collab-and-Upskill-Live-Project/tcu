import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import About from './pages/about/About';
import TopNav from "./components/TopNav";
import Footer from "./components/Footer";


function App() {
  return (
    <Router>
      <TopNav/>
      <div className="relative pt-[105px] bg-[#121212] font-satoshi"> 
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
