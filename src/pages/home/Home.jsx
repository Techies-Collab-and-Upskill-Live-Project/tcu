import Test from '../portfolio/Test';
import Contact from './components/Contact';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import Reviews from './components/Reviews';
import Section2 from './components/Section2';
import WhatWeDo from './components/WhatWeDo';

const Home = () => {
  return (
    <div className='overflow-hidden'>
      <Hero/>
      <Section2/>
      <WhatWeDo/>
      {/* <Portfolio/> */}
      <Test />
      <Reviews/>
      <Contact/>
    </div>
  );
}

export default Home;
