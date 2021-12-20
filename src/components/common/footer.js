import React from "react";
import logo from "../../images/icon.png";

const Footer = () => {
  return (
    <>
      <section className="footer">
        <div className="container">
          <div className="footer-logo-section">
            <img src={logo} alt="logo"></img>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </section>
      <section className="small-footer">
        <div className="container">
          <p>Copyright 2021 All Rights Reserved</p>
        </div>
      </section>
    </>
  );
};

export default Footer;
