import "./Post.css";
import React, { useState } from "react";

function Post({ post }) {
  const [showDiv, setShowDiv] = useState(false);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [isLiked, setIsLiked] = useState(false);

  const handleButtonClick = () => {
    setShowDiv(true);
  };

  const handleCloseDiv = () => {
    setShowDiv(false);
  };

  const handleAddComment = () => {
    if (newComment.trim() === "") {
      alert("กรุณาใส่ข้อความคอมเมนต์");
      return;
    }
    setComments([...comments, { text: newComment, id: Date.now() }]);
    setNewComment("");
  };

  const toggleLike = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div className="post-con">
      <div className="post-username">
        <div className="post-username-in">
          <a href="">
            <i
              className="bi bi-person-circle"
              style={{ fontSize: "2rem", color: "black" }}
            ></i>
          </a>
          <h2>{post.username}</h2>
        </div>
        <i className="bi bi-three-dots-vertical"></i>
      </div>

      <div className="post-img">
        <img
          src={post.image}
          alt="รูปโพส"
          style={{
            filter: post.filter || "none",
            width: "100%",
            height: "auto",
            borderRadius: "10px",
          }}
        />
      </div>

      <div className="post-interact">
        {/* ปุ่มไลค์ */}
        <i
          className={isLiked ? "bi bi-heart-fill" : "bi bi-heart"}
          style={{
            fontSize: "1.5rem",
            color: isLiked ? "red" : "black",
            cursor: "pointer",
          }}
          onClick={toggleLike}
        ></i>
        <span>{isLiked ? "1" : "0"}</span>

        <i
          className="bi bi-chat-dots"
          style={{ fontSize: "1.25rem", cursor: "pointer" }}
          onClick={handleButtonClick}
        ></i>
        <span>{comments.length}</span>

        <i className="bi bi-send" style={{ fontSize: "1.25rem" }}></i>
        <span>5</span>
      </div>

      <div className="post-description">
        <i className="bi bi-person-circle"></i>
        <h3>{post.username}</h3>&nbsp;&nbsp;
        <h3>{post.caption}</h3>
      </div>

          {/* คอมเมนท์ */}
      {showDiv && (
        <>
        <div className="popup-overlay" onClick={handleCloseDiv}></div>
        <div className="post-popup">
          <i
            className="bi bi-arrow-left post-popup-close-btn"
            onClick={handleCloseDiv}
          ></i>
          <h2>แสดงความคิดเห็น</h2>
          <div className="comments-section">
            {comments.length > 0 ? (
              comments.map((comment) => (
                <div key={comment.id} className="comment-item">
                  <i className="bi bi-person-circle"></i>
                  <span>{comment.text}</span>
                </div>
              ))
            ) : (
              <p>ยังไม่มีความคิดเห็น</p>
            )}
          </div>

          <div className="comment-input">
            <input
              type="text"
              placeholder="พิมพ์ความคิดเห็น..."
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
            />
            <button onClick={handleAddComment}>ส่ง</button>
          </div>
        </div>
        </>
      )}
    </div>
  );
}

export default Post;
