import React from "react";
import SectionHText from "../common/sectionHText";
import arrow from "../../images/icons/arrow-pointing-to-right.svg";

const ContactSection = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <div className="section-header">
          <SectionHText
            text="Lets Talk On How We Can Elevate Your Business"
            pretext="CONTACT US"
          />
        </div>
        <div className="contact-wrapper">
          <div className="contact-text">
            <h3>Call us</h3>
            <a href="tel:+611300373790">+61 1300 37 37 90</a>
            <a href="tel:+61435987777">+61 435 98 77 77</a>
            <a href="mailto:sales@activedl.com">Email us sales@activedl.com</a>
            <p>
              Not sure who to turn to? We'll make sure your enquiry gets to the
              right person. Leave us a message and your details and we'll get
              back to you with magic sparkles at the ready.
            </p>
          </div>
          <form className="contact-form">
            <input
              className="input input-100"
              placeholder="Email"
              type="email"
            />
            <input
              className="input input-50"
              placeholder="First Name"
              type="text"
            />
            <input
              className="input input-50"
              placeholder="Last Name"
              type="text"
            />
            <input
              className="input input-100"
              placeholder="Phone number"
              type="tel"
            />
            <textarea
              className="input input-100"
              placeholder="Message"
            ></textarea>
            <button className="btn btn-primary icon-right">
              Contact
              <img src={arrow} alt="contact icon" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
