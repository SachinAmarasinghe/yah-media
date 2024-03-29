import * as React from "react";
import Layout from "../components/common/layout";
import ContactSection from "../components/index/contact-section";
import HeroSection from "../components/index/hero-section";
import OurWorkSection from "../components/index/our-work-section";
import PartnersSection from "../components/index/partners-section";
import WhatWeDoSection from "../components/index/what-we-do-section";
import ScrollToTop from "react-scroll-to-top";
import "../styles/style.scss";
import Fade from "react-reveal/Fade";

const IndexPage = () => {
  return (
    <Layout>
      <HeroSection />
      <div className="bg">
        <Fade delay={600} bottom={true}>
          <WhatWeDoSection />
        </Fade>
        <Fade delay={600} bottom={true}>
          <OurWorkSection />
        </Fade>
      </div>
      <Fade delay={600} bottom={true}>
        <PartnersSection />
      </Fade>
      <Fade delay={600} bottom={true}>
        <ContactSection />
      </Fade>
      <ScrollToTop smooth />
    </Layout>
  );
};

export default IndexPage;
