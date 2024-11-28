import React, { useState } from 'react'; // assuming you have styles.css for custom styles
import "./Search.css";

const YamahaSearchPage = () => {
  const [notificationVisible, setNotificationVisible] = useState(false);
  
  const toggleNotification = () => {
    setNotificationVisible(prevState => !prevState);
  };
  
  const closeNotification = () => {
    setNotificationVisible(false);
  };

  return (
    <div>
      {/* Search Bar */}
      <div className="container">
        <div className="search-bar">
          <input type="text" className="form-control" placeholder="Search" />
          <button className="btn btn-outline-secondary position-absolute end-0 top-0" style={{ height: '100%', borderLeft: 'none' }}>
            <i className="bi bi-qr-code"></i>
          </button>
        </div>
      </div>

      {/* Grid Layout */}
      <div className="container">
        <div className="row g-3">
          {/* Loop through items */}
          {[
            '/public/2025-Yamaha-YZF-R1M-1.jpg',
            '/public/67_03_28-New-Yamaha-MT-09-SP-by-Kwang-Tiny.jpg',
            '/public/A1M_VN.jpg',
            '/public/all-new-yamaha-xsr155-(11).jpg',
            '/public/Yamaha-Tenere-700-Extreme-Edition.jpg',
            '/public/Yamaha-YZF-R3-2024.jpg'
          ].map((image, index) => (
            <div className="col-6 col-md-4" key={index}>
              <div className="grid-item">
                <img src={`Images/${image}`} alt={`Image ${index + 1}`} className="img-fluid" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bootstrap Bundle with Popper */}
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
      <script src="https://unpkg.com/html5-qrcode/minified/html5-qrcode.min.js"></script>
    </div>
  );
};

export default YamahaSearchPage;
