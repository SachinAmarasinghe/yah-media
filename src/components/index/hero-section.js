import React from "react";
import hvideo from "../../images/hero/hero_video.mp4";
import Scroll from "../common/scroll";
import Fade from 'react-reveal/Fade';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <video autoPlay muted loop id="myVideo">
        <source src={hvideo} type="video/mp4" />
      </video>
      <div className="container">
      <Fade delay={600} left={true}>
          <h1>Say yah! to Growth.</h1>
          <p>
            Grow your digital brand with Yah! We provide the best social media
            coverage for all your products.
          </p>
          <Scroll type="id" element="what-we-do">
            <a className="btn btn-primary btn-icon-right">GET STARTED</a>
          </Scroll>
          </Fade>
      </div>
    </section>
  );
};

export default HeroSection;
