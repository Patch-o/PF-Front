import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import './myposts.scss'

const MyPosts = () => {
    const [posts, setPosts] = useState();
    const { user } = useSelector((state) => state.auth);
    
    useEffect(() =>{
    fetch(`http://localhost:4500/users/${user._id}`).then((res) => res.json().then((res) => setPosts(res.posts))); 
    }, [])

    return (
      <div className="mypost">

      <div className="cardsProfile">
        {posts && posts.map((post) => {
            return (
              <div  key={post.title} className="post-item">
                <p>{post.title}</p>
                <img src= {post.image} alt="imagen de codigo"/>
                <p>{post.text}</p>
              </div>
            );
          })} 
      </div>
      </div>
    );
  };

export default MyPosts;
