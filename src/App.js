import React from 'react';

import { About, CTA, Footer, Guide, Header, Offers, Testimonials } from './container';
import { Brand, Navbar } from './components'; 
import './App.css';

const App = () => {
  return (
    <div className='App'>
      <div className='header'>
        <Navbar />
        <Header />
      </div>
      <Brand />
      <Offers />
      <Guide />
      <About />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
};

export default App;