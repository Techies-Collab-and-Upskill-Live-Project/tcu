import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import TopNav from "./components/TopNav";
import Footer from "./components/Footer";
import Hire from "./pages/hire/Hire";
import PortfolioGrid from "./pages/portfolio/PortfolioGrid";
import Portfolio from "./pages/portfolio/Portfolio";
import ContactPage from "./pages/contactPage/ContactPage";
import Join from "./join/Join";
import { Toaster } from "sonner";



function App() {
  return (
    <Router>
      <Toaster />
      <TopNav />
      <div className="relative pt-[54px] lg:pt-[105px] bg-[#121212] font-satoshi">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="hire-us" element={<Hire />} />
          <Route path="join" element={<Join />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
    
  );
}

export default App;
