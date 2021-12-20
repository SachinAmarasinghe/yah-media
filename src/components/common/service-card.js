import React from "react";

const ServiceCard = (props) => {
  return (
    <div className="service-card">
      <div className="service-card-img">
        <img src={props.image} />
      </div>
      <h3>{props.title}</h3>
      <p>
        When we talk about what it means to be an integrated advertising agency,
        we are referencing having the skills to take a campaign from the above
        the line to online, driving real response and ROI from marketing and
        advertising. <br />
        <br />
        Whether it’s developing a website that converts, building a remarketing
        campaign that converts, or creating an attribution model in Google
        Analytics, our strategy team understands how to build a strong digital
        marketing program that drives maximum return for your brand.
      </p>
    </div>
  );
};
export default ServiceCard;
