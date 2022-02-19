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
import Fade from "react-reveal/Fade";

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
          <ServiceCard
            image={dm}
            title="Digital Marketing"
            description="<p>When we talk about what it means to be an integrated advertising agency, we are referencing having the skills to take a campaign from the above the line to online, driving real response and ROI from marketing and advertising.<br/><br/>Whether it’s developing a website that converts, building a re-marketing campaign that converts, or creating an attribution model in Google Analytics, our strategy team understands how to build a strong digital marketing program that drives maximum return for your brand.</p>"
          />
        </TabPanel>
        <TabPanel>
          <ServiceCard
            image={branding}
            title="Branding"
            description="<p>We build stand-out, purpose-led brands that build trust. We focus on why your brand matters and how you can build lasting relationships with your customers.</P>"
          />
        </TabPanel>
        <TabPanel>
          <ServiceCard
            image={creative}
            title="Creative Design"
            description="<p>Yah! Media design all kind of creative designs and make the best first impression Great, conversion-driven design can multiple your visitors and drive more leads.<br/><br/>
            <ul>
            <li><p>Graphic design</li></p>
            <li><p>Business profiles</li></p>
            <li><p>Logos</li></p>
            <li><p>Flyers and all kind of digital designs</li></p>
            <li><p>Animated video</li></p>
            </ul>
            </p>"
          />
        </TabPanel>
        <TabPanel>
          <ServiceCard
            image={social}
            title="Social Media Advertising"
            description="<p>Tactical, accountable and measurable with social media agency
            Ask about Yah! X-Chart Guarantee and discover how social media marketing and Yah!media agency can multiply your returns
            <br/><br/>
            Yah! Media understands the Facebook, Instagram, LinkedIn, YouTube and TikTok advertising strategy, marketing and metrics you need to deliver the results you want from all social media platforms .</p>"
          />
        </TabPanel>
        <TabPanel>
          <ServiceCard
            image={seo}
            title="SEO and SME"
            description="<p>A great deal of time is spent utilising audience and statistical data to determine the best time and place to put your brand so you are connecting with as much of your key audience as possible, maximising your marketing dollar.
            <br/><br/>
            Working closely with other channels, we help improve SEO results with tactics that are focussed towards your long term success. We supplement our organic efforts with the most cost-effective Google Ads campaigns helping your audience find you.</p>"
          />
        </TabPanel>
        <TabPanel>
          <ServiceCard
            image={web}
            title="Web Design and Development"
            description="<p>Increase the profitability, availability, and efficiency of your business via the relevant web development solutions with the scalable architecture using the latest technologies and trends.</p>
            <ul>
            <li><p>Personalized web development</p></li>
            
            <li><p>Business web site</p></li>
            
            <li><p>E-Commerce &amp; Retail</p></li>
            
            <li><p>Web portal</p></li></ul>"
          />
        </TabPanel>
        <TabPanel>
          <ServiceCard
            image={ui}
            title="UI/UX Solutions"
            description="<p>Our UI/UX team works closely with a design team based in the Melbourne and Sri Lanka to design and develop the professional, polished user interfaces of our solutions.</p>"
          />
        </TabPanel>
        <TabPanel>
          <ServiceCard
            image={mobile}
            title="Mobile App Development"
            description="<p>We combine extensive product development expertise with great designs and proven processes to build high quality mobile applications. We mostly use technology as Swift, Java, React Native and Flutter.</p>
            <ul>
            <li><p>Native application development</p></li>
            
            <li><p>Hybrid application development</p></li>
            
            <li><p>Game development</p></li></ul>"
          />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Services;
