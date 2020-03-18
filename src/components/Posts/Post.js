import React from "react";

const Post = props => {
  return (
    <div className="Post">
      <div className="d-flex header">
        <h4>{props.title}</h4>
        <span>({props.url})</span>
      </div>
      <div className="d-flex stats">
        <span>{props.points} points</span>
        <span>{props.user}</span>
        <span>{props.date}</span>
        <span>{props.comments}</span>
      </div>
    </div>
  );
};

export default Post;
