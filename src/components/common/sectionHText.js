import React from "react";
import ReactWOW from "react-wow";

const SectionHText = (props) => {
  return (
    <div className="section-text">
      <ReactWOW delay=".2s" animation="fadeInUp">
        <label>{props.pretext}</label>
        <h2>{props.text}</h2>
      </ReactWOW>
    </div>
  );
};

export default SectionHText;
