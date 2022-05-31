import React from "react";
import SectionHText from "../common/sectionHText";
import arrow from "../../images/icons/arrow-grey.svg";
import WorkCard from "../common/work-card";
import Vip from "../../images/our-work/vip.png";
import yamios from "../../images/our-work/yamios.png";
import concepts from "../../images/our-work/92concepts.png";
import birbaby from "../../images/our-work/birbaby.png";
import melandom from "../../images/our-work/melandom.png";

const OurWorkSection = () => {
  return (
    <section className="our-work-section" id="our-work">
      <div className="container">
        <div className="section-header">
          <SectionHText
            text="We're Trusted By Leading Companies Around The World"
            pretext="OUR WORK"
          />
          {/* <a className="explore">
            Explore All Projects
            <img src={arrow} alt="icon" />
          </a> */}
        </div>
        <div className="work-wrapper">
          <WorkCard
            image={concepts}
            title="92 Concepts"
            description="92 Concepts provides a variety of Bookkeeping and Accounting services, Tax and Financial services for small businesses and individuals."
            size="lg"
            link="https://92concept.com"
          />
          <WorkCard
            image={Vip}
            title="VIP Value"
            description="VIP VALUE provides members and business clients with a plethora of services including virtual personal assistance, home services, personal car maintains, personal shopping support, IT facilities, utility support services, Accounting and Legal facility, booking and travel facilities, events organization, floral services, and other services that are frequently demanded by this demographic."
            size="sm"
            link="https://vipvalue.com.au"
          />
          <WorkCard
            image={yamios}
            title="Yamios pizza"
            description="Yamios Pizza is known for providing some of the tastiest gourmet pizza. They offer classic, deluxe, gourmet, and custom pizzas at your request."
            size="sm"
            link="https://yamiospizza.com.au"
          />
          <WorkCard
            image={melandom}
            title="Melandom"
            description="Birbaby is the top online retailer of baby gift baskets. Order quality baby products like apparel, blankets, toys and more, delivered to your door step."
            size="lg"
            link="https://melandom.com.au"
          />
        </div>
      </div>
    </section>
  );
};

export default OurWorkSection;
