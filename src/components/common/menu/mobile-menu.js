import React from "react";
import Scroll from "../scroll";

const MenuMobile = () => {
  return (
    <div className="menu-mobile">
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
