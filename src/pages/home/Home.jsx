import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import Reviews from "./components/Reviews";
import Section2 from "./components/Section2";
import WhatWeDo from "./components/WhatWeDo";
import WhyJoinUs from "./components/WhyJoinUs";
import wireclay from '../about/assets/Telephone wire clay.svg';
import spiralclay from '../about/assets/Spiral clay.svg';

const Home = () => {
  return (
    <div className="bg-black">
      <Hero />
      <Section2 />
      {/* <div className='flex justify-center items-center float-right w-[100px] h-[100px] bg-pink-500'><img src={wireclay} alt='wireclay'/></div> */}
      <WhatWeDo />
       {/* <div className='flex'><img src={spiralclay} alt='spiralclay'/></div> */}
      <Portfolio />
      <WhyJoinUs/>
      <Reviews />
      <Contact />
    </div>
  );
};

export default Home;
