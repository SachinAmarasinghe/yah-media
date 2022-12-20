import React from "react";

const ServiceCard = (props) => {
  return (
    <div className="service-card">
      <div className="service-card-img">
        <img src={props.image} alt="service card image" />
      </div>
      <h3>{props.title}</h3>
      <div dangerouslySetInnerHTML={{ __html: props.description }} />
    </div>
  );
};
export default ServiceCard;
