import React, { useState } from "react";
import closeIcon from "../assets/close.png";

function CardList({ id, title, description, time, image, onClose }) {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const maxLength = 70;
  const maxLengthDescription = 80;
  const trimmedTitle =
    title.length > maxLength ? title.substring(0, maxLength) + "..." : title;
  const trimmedDescription =
    description.length > maxLengthDescription
      ? description.substring(0, maxLengthDescription) + "..."
      : description;

  return (
    <>
      {/* Card Component */}
      <div className="card2" onClick={() => setIsPopupOpen(true)}>
        {image && <img src={image} alt="news" className="card-image" />}
        <div className="card-details">
          <h2 className="card-title">{trimmedTitle}</h2>
          <p className="card-description">{trimmedDescription}</p>
          <p className="card-time">{new Date(time).toLocaleString()}</p>
        </div>
        <div
          className="card-close"
          onClick={(e) => {
            e.stopPropagation(); // Prevent popup from opening when clicking close
            onClose(id);
          }}
        >
          <img src={closeIcon} alt="close" className="close-image" />
        </div>
      </div>

      {/* Popup Component */}
      {isPopupOpen && (
        <div className="popup-overlay" onClick={() => setIsPopupOpen(false)}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <button className="popup-close" onClick={() => setIsPopupOpen(false)}>
              <img src={closeIcon} alt="close" />
            </button>
            {image && <img src={image} alt="news" className="popup-image" />}
            <h2>{title}</h2>
            <p>{description}</p>
            <p className="popup-time">{new Date(time).toLocaleString()}</p>
          </div>
        </div>
      )}
    </>
  );
}

export default CardList;
