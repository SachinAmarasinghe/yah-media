import React from "react";
import ServiceCard from "./service-card";
import dm from "../../images/icons/bullhorn.svg";
import branding from "../../images/icons/branding.png";
import creative from "../../images/icons/creative.png";
import social from "../../images/icons/social.png";
import seo from "../../images/icons/seo.png";
import web from "../../images/icons/web.png";
import ui from "../../images/icons/ui.png";
import mobile from "../../images/icons/mobile.png";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

const Services = () => {
  return (
    <div className="services">
      <Tabs>
        <TabList>
          <Tab>Digital Marketing</Tab>
          <Tab>Branding</Tab>
          <Tab>Creative Design</Tab>
          <Tab>Social Media Advertising</Tab>
          <Tab>SEO and SME</Tab>
          <Tab>Web Design and Development</Tab>
          <Tab>UI/UX Solutions</Tab>
          <Tab>Mobile App Development</Tab>
        </TabList>
        <TabPanel>
          <ServiceCard image={dm} title="Digital Marketing" />
        </TabPanel>
        <TabPanel>
          <ServiceCard image={branding} title="Branding" />
        </TabPanel>
        <TabPanel>
          <ServiceCard image={creative} title="Creative Design" />
        </TabPanel>
        <TabPanel>
          <ServiceCard image={social} title="Social Media Advertising" />
        </TabPanel>
        <TabPanel>
          <ServiceCard image={seo} title="SEO and SME" />
        </TabPanel>
        <TabPanel>
          <ServiceCard image={web} title="Web Design and Development" />
        </TabPanel>
        <TabPanel>
          <ServiceCard image={ui} title="UI/UX Solutions" />
        </TabPanel>
        <TabPanel>
          <ServiceCard image={mobile} title="Mobile App Development" />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Services;
