import { Link } from "gatsby";
import React, { useState } from "react";
import Scroll from "../scroll";

const MenuMobile = (props) => {
  return (
    <div
      id="main-menu-mobile"
      className={`main-menu-mobile ${props.active ? "open" : ""}`}
    >
      <ul>
        <li>
          <Scroll type="id" element="what-we-do">
            <a>What we do</a>
          </Scroll>
        </li>
        <li>
          <Scroll type="id" element="our-work">
            <a>Our work</a>
          </Scroll>
        </li>
        <li>
          <Scroll type="id" element="testimonials">
            <a>Testimonials</a>
          </Scroll>
        </li>
        <li>
          <Scroll type="id" element="partners">
            <a>Our trusted partners</a>
          </Scroll>
        </li>
        <li>
          <Scroll type="id" element="contact">
            <a>Contact</a>
          </Scroll>
        </li>
      </ul>
    </div>
  );
};

export default MenuMobile;
