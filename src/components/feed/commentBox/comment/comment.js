import React from "react";
import "./comment.css";
import moment from "moment";

const Comment = ({ comment }) => {
  return (
    <div className="comment">
      <div className="top">
        <p>{comment.author}</p>
        <p className="comment-date">
          {moment(comment.timestamp).format("MMM Do, YYYY")}
        </p>
      </div>
      <p>{comment.text}</p>
    </div>
  );
};

export default Comment;
