import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import TopNav from "./components/TopNav";
import Footer from "./components/Footer";
import Hire from "./pages/hire/Hire";
import PortfolioGrid from "./pages/portfolio/PortfolioGrid";
import Portfolio from "./pages/portfolio/Portfolio";
import ContactPage from "./pages/contactPage/ContactPage";
import Join from "./pages/join/Join";
import { Toaster } from "sonner";
import UserList from "./components/Admin/UserList";
import UserDetails from "./components/Admin/UserDetails";
import JoinClosed from "./pages/join/JoinClosed";
import ScrollToTop from "./ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Toaster />
      <TopNav />
      <div className="relative pt-[54px] lg:pt-[105px] bg-[#121212] font-satoshi">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="hire-us" element={<Hire />} />
          <Route path="join-secret-thank-you-admin" element={<Join />} />
          <Route path="join" element={<Join />} />
          {/* <Route path="join" element={<Navigate to="/join-closed" replace />} /> */}
          <Route path="join-closed" element={<JoinClosed />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="user" element={<UserList />} />
          <Route path="application/:id" element={<UserDetails />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
