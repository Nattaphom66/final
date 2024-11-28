import React, { useState } from "react";
import "./Event.css";

const EventPopup = () => {
  const [popupData, setPopupData] = useState({
    title: "",
    description: "",
    image: "",
  });
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const events = [
    {
      title: "กิจกรรม 1",
      description: "ตอบคำถามรับส่วนลด 2,000 บาท",
      image: "Event1.jpg",
    },
    {
      title: "กิจกรรม 2",
      description: "ร่วมสัมผัสประสบการณ์ท่องเที่ยวที่ไม่เหมือนใคร กับ Yamaha Touring Event!",
      image: "Event2.jpg",
    },
    {
        title: "กิจกรรม 3",
        description: "GT 125 New Generation of Torque สีสันเร้าใจ....พร้อมเทคโนโลยีใหม่ ออกตัวแรง แซงทุกสไตล์",
        image: "Event3.jpg",
    },
    {
        title: "กิจกรรม 4",
        description: "ยามาฮ่า ใจดี ช่วยผ่อนซีซั่น2 จัดใหญ่ลุ้นช่วยผ่อนสู่งสุด 50,000บ./แจกหนัก 5,000 รางวัลมูลค่ารวม20ล้านบาท ตั้งแต่วันที่1 กันยายน - 30 พฤศจิกายน 2564",
        image: "Event4.jpg",
      },
    // เพิ่มกิจกรรมเพิ่มเติมได้
  ];

  const showPopup = (event) => {
    setPopupData(event);
    setIsPopupVisible(true);
  };

  const hidePopup = () => {
    setIsPopupVisible(false);
  };

  return (
    <div className="event-container">
      {events.map((event, index) => (
        <div
          key={index}
          className="event-box"
          onClick={() => showPopup(event)}
        >
          <p>{event.title}</p>
        </div>
      ))}

      {isPopupVisible && (
        <div className="popup">
          <div className="popup-content">
            <span className="close-btn" onClick={hidePopup}>
              &times;
            </span>
            <h2>{popupData.title}</h2>
            <p>{popupData.description}</p>
            <img src={popupData.image} alt={popupData.title} />
          </div>
        </div>
      )}
    </div>
  );
};

export default EventPopup;
