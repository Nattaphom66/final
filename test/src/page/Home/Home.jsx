import React from "react";
import Post from "../../layouts/Post/Post";
import Story from "../../layouts/story/story";
import "./Home.css";

function Home({ posts = [] }) {
  return (
    <div>
      <Story />
      {posts.length > 0 ? (
        posts.map((post) => (
          <Post
            key={post.id}
            post={post} // ส่งข้อมูลโพสต์ รวมทั้งฟิลเตอร์
          />
        ))
      ) : (
        <div>No posts yet</div>
      )}
      <div>&nbsp;</div>
      <div>&nbsp;</div>
    </div>
  );
}

export default Home;
