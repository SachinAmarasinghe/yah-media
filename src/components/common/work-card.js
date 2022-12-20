import React from "react";

const WorkCard = (props) => {
  return (
    <div className={"work-card " + props.size}>
      <div className="work-card-image">
        <img src={props.image} alt="work-card-image" />
      </div>
      <h5><a href={props.link} target="_blank">{props.title}</a></h5>
      <p>{props.description}</p>
      {props.link && <a className="work-card-link" href={props.link} target="_blank">{props.link}</a>}

    </div>
  );
};

export default WorkCard;
