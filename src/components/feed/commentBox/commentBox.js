import React from "react";
import { useEffect, useState } from "react";
import "./commentBox.css";

const CommentBox = ({ postId }) => {
  const [comments, setComments] = useState(null);

  const fetchComments = async () => {
    try {
      const response = await fetch(
        `http://localhost:3001/api/posts/${postId}/comments`
      );

      if (!response.ok) {
        return;
      }

      const resolved = await response.json();
      setComments(resolved);
    } catch (err) {
      console.log("error:", err);
    }
  };

  const closeComments = () => {
    setComments(null);
  };

  return comments ? (
    <div>
      {comments.map((comment) => {
        return <div key={comment._id}>{comment.text}</div>;
      })}
      <button onClick={closeComments}>Close comments</button>
    </div>
  ) : (
    <button className="view-comments-button" onClick={fetchComments}>
      View Comments
    </button>
  );
};

export default CommentBox;
