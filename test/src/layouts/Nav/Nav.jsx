import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // ใช้ useNavigate สำหรับการนำทาง
import './Nav.css';

function Nav() {
  const [showNotificationModal, setShowNotificationModal] = useState(false);
  const [notificationCount, setNotificationCount] = useState(5); // จำนวนการแจ้งเตือน
  const navigate = useNavigate(); // ใช้สำหรับการนำทาง

  // ฟังก์ชันสำหรับเปิด/ปิด modal ของการแจ้งเตือน
  const handleNotificationClick = () => {
    setShowNotificationModal(!showNotificationModal); // เปิด/ปิด modal
    if (notificationCount > 0) {
      setNotificationCount(0); // รีเซ็ตจำนวนแจ้งเตือนเมื่อคลิก
    }
  };

  // ฟังก์ชันสำหรับคลิกที่ปุ่ม "Send" เพื่อไปยังหน้า ChatPage
  const handleSendClick = () => {
    navigate('/chat'); // นำทางไปยังหน้า ChatPage (สมมุติว่า route เป็น "/chat")
  };

  return (
    <div className='nav-con'>
      <img src="/public/logo.png" alt="Logo" className="logo-image" />
      <div className='nav-icon'>
        <div className="notification" onClick={handleNotificationClick}>
          <img src="/public/notification.png" alt="Notification Icon" />
          {notificationCount > 0 && <span className="notification-count">{notificationCount}</span>}
        </div>
        <img src="/public/send.png" alt="Send Icon" onClick={handleSendClick} /> {/* เชื่อมไปที่หน้า ChatPage */}
      </div>

      {/* Modal สำหรับแสดงแจ้งเตือน */}
      {showNotificationModal && (
        <div className="notification-modal">
          <div className="modal-content">
            <h3>แจ้งเตือน</h3>
            <p>คุณมี {notificationCount} การแจ้งเตือนใหม่!</p>
            <button onClick={() => setShowNotificationModal(false)}>ปิด</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Nav;
