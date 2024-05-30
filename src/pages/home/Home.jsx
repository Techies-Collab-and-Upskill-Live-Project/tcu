import Contact from './components/Contact';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import Reviews from './components/Reviews';
import Section2 from './components/Section2';
import WhatWeDo from './components/WhatWeDo';

const Home = () => {
  return (
    <div>
      <Hero/>
      <Section2/>
      <WhatWeDo/>
      <Portfolio/>
      <Reviews/>
      <Contact/>
    </div>
  );
}

export default Home;
