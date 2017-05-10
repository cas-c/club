import React from 'react';
import Greeting from './greeting';
import Clock from './clock';

const Hero = () => {
    return (
    <section className="hero">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">
        	<Greeting />
          </h1>
          <h2 className="subtitle">
             <Clock />
          </h2>
        </div>
      </div>
    </section>
    );
};

export default Hero;