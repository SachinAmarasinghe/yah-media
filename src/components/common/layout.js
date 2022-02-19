import React from "react";
import Footer from "./footer";
import Header from "./header";
import { elastic as MobileMenu } from "react-burger-menu";
import menuIcon from "../../images/icons/menu.svg";

const Layout = ({ children }) => {
  return (
    <>
      <MobileMenu
        pageWrapId={"page-wrap"}
        right
        customBurgerIcon={<img src={menuIcon} />}
      >
        <a id="home" className="menu-item" href="/">
          Home
        </a>
        <a id="about" className="menu-item" href="/about">
          About
        </a>
        <a id="contact" className="menu-item" href="/contact">
          Contact
        </a>
      </MobileMenu>
      <div id="page-wrap">
        <Header />
        {children}
        <Footer />
      </div>
    </>
  );
};

export default Layout;
