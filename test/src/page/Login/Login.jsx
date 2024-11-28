import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Login.css"
function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); // ใช้เก็บข้อความผิดพลาด
  const navigate = useNavigate(); // ใช้ navigate เพื่อเปลี่ยนเส้นทาง

  const correctUsername = "user";  // ชื่อผู้ใช้ที่ถูกต้อง
  const correctPassword = "pass";  // รหัสผ่านที่ถูกต้อง

  const handleSubmit = (event) => {
    event.preventDefault(); // ป้องกันการ submit ฟอร์ม

    // ตรวจสอบชื่อผู้ใช้และรหัสผ่าน
    if (username === correctUsername && password === correctPassword) {
      
      navigate('/Home'); // นำทางไปที่หน้า Home เมื่อเข้าสู่ระบบสำเร็จ
    } else {
      setError('Invalid username or password.'); // แสดงข้อความผิดพลาดเมื่อข้อมูลไม่ถูกต้อง
    }
  };

  return (
    <div className="login-container">
      <img src="/Yamaha-Motor-Company-Logo-1998-present.png" alt="" />
      <form id="login-Form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="login-submit">Log In</button>
      </form>

      {/* ถ้ามีข้อผิดพลาดแสดงข้อความ */}
      {error && <div style={{ color: 'red' }}>{error}</div>}

    </div>
  );
}

export default Login;
