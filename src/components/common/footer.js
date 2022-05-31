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
              Yah media is a complete suite of online solutions with well-experienced experts. We are the best at business branding, marketing, designing, and creating mobile applications.
            </p>
          </div>
        </div>
      </section>
      <section className="small-footer">
        <div className="container">
          <p>Copyright 2022 All Rights Reserved</p>
        </div>
      </section>
    </>
  );
};

export default Footer;
