import React from "react";
import { Link } from "gatsby";
import ReactWOW from "react-wow";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="container">
        <ReactWOW animation="fadeIn" delay=".5s">
          <h1>Say yah! to Growth.</h1>
          <p>
            Grow your digital brand with Yah! We provide the best social media
            coverage for all your products.
          </p>
          <Link className="btn btn-primary btn-icon-right">GET STARTED</Link>
        </ReactWOW>
      </div>
    </section>
  );
};

export default HeroSection;
