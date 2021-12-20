import React from "react";

const WorkCard = (props) => {
  return (
    <div className={"work-card " + props.size}>
      <div className="work-card-image">
        <img src={props.image} />
      </div>
      <h5>{props.title}</h5>
      <p>{props.description}</p>
    </div>
  );
};

export default WorkCard;
