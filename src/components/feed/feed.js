import React from "react";
import { useState, useEffect } from "react";

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
        return <div key={post._id}>{post.text}</div>;
      })}
    </main>
  );
};

export default Feed;
