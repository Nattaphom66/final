import React, { useState } from 'react';
import './Chat.css';

function ChatPage() {
  const [messages, setMessages] = useState([
    { user: "John", text: "สวัสดีครับ!" },
    { user: "Me", text: "สวัสดีครับคุณ John!" },
    { user: "John", text: "มีอะไรให้ช่วยครับ?" }
  ]);

  const [newMessage, setNewMessage] = useState(""); // สำหรับเก็บข้อความใหม่
  const [selectedUser, setSelectedUser] = useState("John"); // สำหรับเลือกคนที่จะคุยด้วย

  // ฟังก์ชันสำหรับการส่งข้อความ
  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setMessages([...messages, { user: "Me", text: newMessage }]);
      setNewMessage(""); // รีเซ็ตช่องข้อความหลังจากส่ง
    }
  };

  // ฟังก์ชันสำหรับการกด Enter เพื่อส่งข้อความ
  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) { // เมื่อกด Enter และไม่กด Shift
      e.preventDefault(); // ป้องกันการเพิ่มบรรทัดใหม่
      handleSendMessage(); // ส่งข้อความ
    }
  };

  return (
    <div className="chat-container">
      <div className="chat-header">
        <h3>การสนทนา</h3>

        <p>สนทนากับ: {selectedUser}</p>
      </div>

      <div className="chat-messages">
        {messages.filter(message => message.user === selectedUser || message.user === "Me").map((message, index) => (
          <div
            key={index}
            className={`message ${message.user === "Me" ? "my-message" : "other-message"}`}
          >
            <strong>{message.user}:</strong>
            <p>{message.text}</p>
          </div>
        ))}
      </div>

      <div className="chat-input">
        <textarea
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="พิมพ์ข้อความ..."
          rows="4"
          onKeyPress={handleKeyPress} // เชื่อมโยงฟังก์ชันสำหรับกด Enter
        />
        <button 
          onClick={handleSendMessage}
          disabled={!newMessage.trim()} // ปิดปุ่มถ้าไม่มีข้อความ
        >
          ส่ง
        </button>
        <div>&nbsp</div>
        
      </div>
    </div>
  );
}

export default ChatPage;
