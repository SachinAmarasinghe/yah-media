import React from "react";

import partner1 from "../../images/partners/partner1.svg";
import partner2 from "../../images/partners/partner2.svg";
import partner3 from "../../images/partners/partner3.svg";
import partner4 from "../../images/partners/partner4.svg";
import partner5 from "../../images/partners/partner5.svg";
import SectionHText from "../common/sectionHText";

const PartnersSection = () => {
  return (
    <section className="partners-section" id="partners">
      <div className="container">
        <div className="section-header">
          <SectionHText
            text="Who We've Worked With"
            pretext="OUR TRUSTED PARTNERS"
          />
        </div>
        <div className="partners-wrapper">
          <img src={partner1} alt="partner logo" />
          <img src={partner2} alt="partner logo" />
          <img src={partner3} alt="partner logo" />
          <img src={partner4} alt="partner logo" />
          <img src={partner5} alt="partner logo" />
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
