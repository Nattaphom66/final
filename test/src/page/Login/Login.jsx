import React, { useState } from 'react';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent form submission

    // Basic validation
    if (username && password) {
      alert(`Logging in with Username: ${username}`);
      // ส่งข้อมูลไปที่เซิร์ฟเวอร์ (ตัวอย่าง)
      // fetch('/api/login', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify({ username, password }),
      // });
    } else {
      alert('Please fill in both fields.');
    }
  };

  return (
    <div className="container">
      <h1>Yamaha Social</h1>
      <form id="loginForm" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Log In</button>
      </form>
      <a href="#" className="forgot-password">
        Forgot password?
      </a>
      <div className="footer">
        <p>
          Don't have an account? <a href="#">Sign up</a>
        </p>
      </div>
    </div>
  );
}

export default Login;
