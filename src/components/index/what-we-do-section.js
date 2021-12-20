import React from "react";
import SectionHText from "../common/sectionHText";
import Services from "../common/services";

const WhatWeDoSection = () => {
  return (
    <div className="whatwedo-section" id="what-we-do">
      <div className="container">
        <div className="section-header">
          <SectionHText
            text="Perfect Solution For Your Business"
            pretext="WHAT WE DO"
          />
        </div>
        <Services />
      </div>
    </div>
  );
};

export default WhatWeDoSection;
