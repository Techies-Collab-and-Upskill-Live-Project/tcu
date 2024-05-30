import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import About from './pages/about/About';
import TopNav from "./components/TopNav";
import Footer from "./components/Footer";
import Portfolio from "./pages/Portfolio/Portfolio";
import JoinTeam from "./pages/Join/JoinTeam";


function App() {
  return (
    <Router>
      <TopNav/>
      <div className="relative pt-[105px] bg-[#121212] font-satoshi"> 
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='portfolio' element={<Portfolio />}/>
        <Route path='join' element={<JoinTeam />}/>
      </Routes>
      <Footer/>
      </div>
    </Router>
  );
}

export default App;
