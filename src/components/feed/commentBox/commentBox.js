import React from "react";
import { useState } from "react";
import "./commentBox.css";
import Comment from "./comment/comment";

const CommentBox = ({ postId }) => {
  const [comments, setComments] = useState(null);

  const fetchComments = async () => {
    try {
      const response = await fetch(
        `http://localhost:3001/api/posts/${postId}/comments`
      );

      if (!response.ok) {
        return { error: "User not found" };
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
        return <Comment comment={comment} key={comment._id} />;
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
