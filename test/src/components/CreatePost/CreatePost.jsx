import React, { useState } from "react";
import "./CreatePost.css";

const CreatePost = ({ onAddPost }) => {
  const [username, setUsername] = useState("");
  const [caption, setCaption] = useState("");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState("");
  const [error, setError] = useState("");
  const [filter, setFilter] = useState(""); // สถานะสำหรับฟิลเตอร์

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const fileType = file.type;
      if (!fileType.startsWith("image/")) {
        setError("โปรดเลือกไฟล์รูปภาพเท่านั้น");
        setImage(null);
        setPreview("");
      } else {
        setError("");
        setImage(file);
        const reader = new FileReader();
        reader.onload = () => {
          setPreview(reader.result);
        };
        reader.readAsDataURL(file);
      }
    }
  };

  const handlePost = () => {
    if (!username || !caption || !image) {
      alert("กรุณากรอกข้อมูลทั้งหมดและอัพโหลดภาพ!");
      return;
    }

    const newPost = {
      id: Date.now(), // ใช้ timestamp เป็น id
      username,
      caption,
      image: preview,
      filter, // เพิ่มฟิลเตอร์
    };

    onAddPost(newPost); // ส่งโพสต์ใหม่ไปยังฟังก์ชันที่ได้รับจาก props
  };

  return (
    <div className="createpost">
      {preview && (
        <img
          src={preview}
          style={{
            width: "300px",
            height: "auto",
            borderRadius: "10px",
            filter: filter, // ใช้ฟิลเตอร์กับภาพ preview
          }}
          alt="preview"
        />
      )}
      <input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
      />
      {error && <p style={{ color: "red" }}>{error}</p>}

      <div className="enter-post">
        <input
          type="text"
          placeholder="Enter your username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <textarea
          placeholder="Enter your caption"
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
        />
      </div>

      <div className="filter-buttons">
        <button onClick={() => setFilter("grayscale(100%)")}>Grayscale</button>
        <button onClick={() => setFilter("sepia(100%)")}>Sepia</button>
        <button onClick={() => setFilter("brightness(150%)")}>Brightness</button>
        <button onClick={() => setFilter("")}>Reset</button>
      </div>

      <button onClick={handlePost}>Post</button>
    </div>
  );
};

export default CreatePost;
