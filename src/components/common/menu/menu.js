import { Link } from "gatsby";
import React from "react";

const Menu = () => {
  return (
    <ul className="menu">
      <li>
        <Link to="#what-we-do">What we do</Link>
      </li>
      <li>
        <Link to="#our-work">Our work</Link>
      </li>
      <li>
        <Link to="#">Testimonials</Link>
      </li>
      <li>
        <Link to="#partners">Our trusted partners</Link>
      </li>
      <li>
        <Link to="#contact">Contact</Link>
      </li>
    </ul>
  );
};

export default Menu;
