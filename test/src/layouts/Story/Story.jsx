import React, { useState } from 'react';
import './Story.css';

const stories = [
  { id: 1, className: 'mystory', imageUrl: '/public/mycar.jpg' },
  { id: 2, className: 'friendstory1', imageUrl: '/public/car.jpg' },
  { id: 3, className: 'friendstory2', imageUrl: '/public/กีต้า2.jpg' },
  { id: 4, className: 'friendstory3', imageUrl: '/public/กลอง.jpg' },
  { id: 5, className: 'friendstory4', imageUrl: '/public/กีต้า.jpg' },
  { id: 6, className: 'friendstory5', imageUrl: '/public/car3.jpg' },
  { id: 7, className: 'friendstory6', imageUrl: '/public/car.jpg' },
];

function Story() {
  const [selectedStoryId, setSelectedStoryId] = useState(null); // เก็บ ID ของ Story ที่ถูกเลือก
  const [popupImage, setPopupImage] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = (imageUrl, storyId) => {
    setPopupImage(imageUrl);
    setIsPopupOpen(true);
    setSelectedStoryId(storyId); // ตั้งค่าตัวเลือกเมื่อเปิด Popup
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setPopupImage(null);
    setSelectedStoryId(null); // ล้างตัวเลือกเมื่อปิด Popup
  };

  return (
    <div className="story-con">
      {stories.map((story) => (
        <div
          key={story.id}
          className={`story ${story.id === selectedStoryId ? 'selected' : ''}`}
          style={{ backgroundImage: `url(${story.imageUrl})` }}
          onClick={() => openPopup(story.imageUrl, story.id)} // เปิด Popup พร้อมเปลี่ยนสถานะ
        ></div>
      ))}

      {isPopupOpen && (
        <div className="popup-overlay show" onClick={closePopup}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={closePopup}></button>
            <img src={popupImage} alt="Popup" />
          </div>
        </div>
      )}
    </div>
  );
}

export default Story;