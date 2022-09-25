import React from 'react';
import Header from './Header';

const Hero = () => {
  return (
    <div className="hero-wrapper">
      <div className="hero-image">
        <div className="hero-main">
          <div className="hero-text">
            <h1>KASHNA</h1>
            <p> "THE BEGINNING" </p>
            <button>
              <a href="#videos"> LISTEN NOW</a>
            </button>
          </div>
          <Header />
        </div>
      </div>
    </div>
  );
};

export default Hero;
