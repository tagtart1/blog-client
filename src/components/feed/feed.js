import React from "react";
import { useState, useEffect } from "react";
import "./feed.css";
import moment from "moment";
import he from "he";

const Feed = () => {
  const [posts, setPosts] = useState();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("http://localhost:3001/api/posts");
        const json = await response.json();
        setPosts(json);
      } catch (err) {
        console.error("Error:", err);
      }
    };

    fetchPosts();
  }, []);

  if (!posts) return "Loading...";

  return (
    <main>
      {posts.map((post) => {
        return (
          <section key={post._id}>
            <div className="header">
              <div className="name-title">
                <h1>{post.title}</h1>
                <p>By: {post.author.username}</p>
              </div>
              <p className="date">
                {moment(post.timestamp).format("MMM Do, YYYY")}
              </p>
            </div>
            <p className="text">{he.decode(post.text)}</p>
          </section>
        );
      })}
    </main>
  );
};

export default Feed;
