import axios from "axios";
import React, { useEffect, useState } from "react";
import "./allposts.scss";

const AllPosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4500/post/all").then((res) =>
      res.json().then((res) => setPosts(res))
    );
  }, []);

  return (
    <div className="allpost">

    <div className="cardsProfile">
      {posts &&
        posts.map((post) => {
          return (
            <div key={post.title} className="post-item">
              <p>{post.title}</p>
              <img src={post.image} alt="imagen de codigo" />
              <p>{post.text}</p>
            </div>
          );
        })}
    </div>
    </div>
  );
};

export default AllPosts;
