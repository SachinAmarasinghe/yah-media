import React from "react";
import SectionHText from "../common/sectionHText";
import arrow from "../../images/icons/arrow-grey.svg";
import WorkCard from "../common/work-card";

const OurWorkSection = () => {
  return (
    <section className="our-work-section" id="our-work">
      <div className="container">
        <div className="section-header">
          <SectionHText
            text="We're Trusted By Leading Companies Around The World"
            pretext="OUR WORK"
          />
          <a className="explore">
            Explore All Projects
            <img src={arrow} alt="icon" />
          </a>
        </div>
        <div className="work-wrapper">
          <WorkCard
            title="Yamios Pizza App"
            description="Ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi"
            size="lg"
          />
          <WorkCard
            title="Real Estate App"
            description="Ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi"
            size="sm"
          />
          <WorkCard
            title="IDP Website"
            description="Ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi"
            size="sm"
          />
          <WorkCard
            title="Education Website"
            description="Ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi"
            size="lg"
          />
        </div>
      </div>
    </section>
  );
};

export default OurWorkSection;
