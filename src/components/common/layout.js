import React from "react";
import Footer from "./footer";
import Header from "./header";
import { elastic as MobileMenu } from "react-burger-menu";
import menuIcon from "../../images/icons/menu.svg";
import MenuMobile from "./menu/mobile-menu";
import SEO from "./seo";

const Layout = ({ children }) => {
  return (
    <>
      <SEO />
      <MobileMenu
        pageWrapId={"page-wrap"}
        right
        customBurgerIcon={<img src={menuIcon} alt="menu icon" />}
      >
        <MenuMobile />
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
