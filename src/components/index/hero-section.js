import React from "react";
import { Link } from "gatsby";
import ReactWOW from "react-wow";
import hvideo from "../../images/hero/hero_video.mp4";
import Scroll from "../common/scroll";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <video autoPlay muted loop id="myVideo">
        <source src={hvideo} type="video/mp4" />
      </video>
      <div className="container">
        <ReactWOW animation="fadeIn" delay=".5s">
          <h1>Say yah! to Growth.</h1>
          <p>
            Grow your digital brand with Yah! We provide the best social media
            coverage for all your products.
          </p>
          <Scroll type="id" element="what-we-do">
            <a className="btn btn-primary btn-icon-right">GET STARTED</a>
          </Scroll>
        </ReactWOW>
      </div>
    </section>
  );
};

export default HeroSection;
