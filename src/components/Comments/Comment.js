import React from "react";

const Comment = props => {
  return (
    <div className="Comment">
      <div className="d-flex header">
        <h4>{props.text}</h4>
      </div>
      <div className="d-flex stats">
        <span>{props.points} points</span>
        <span>{props.user}</span>
        <span>{props.date}</span>
      </div>
    </div>
  );
};

export default Comment;
