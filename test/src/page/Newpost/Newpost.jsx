import React from "react";
import CreatePost from "../../components/CreatePost/CreatePost";
import { Link, useNavigate } from "react-router-dom";
import "./Newpost.css";

const Newpost = ({ onAddPost }) => {
  const navigate = useNavigate();

  const handleAddPost = (newPost) => {
    onAddPost(newPost); // เรียกฟังก์ชัน onAddPost ที่ส่งมาจาก App.jsx
    navigate("/"); // กลับไปหน้า Home
  };

  return (
    <div>
      <div className="nawpost-head">
        <Link to={"/home"}>
        <i className="bi bi-x-lg" style={{ fontSize: "1.5rem", marginLeft: "1rem", color: "white"}}></i>
        </Link>
        <h1>New Post</h1>
        <h3>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h3>
      </div>

      
      <div className="newpost-create">
        <CreatePost onAddPost={handleAddPost} />
      </div>
    </div>
  );
};

export default Newpost;
