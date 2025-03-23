import React, { useState } from "react";
import timeImg from "../assets/time.png";
import closeIcon from "../assets/close.png";

function CardGroup({ id, title, description, time, image, onClose }) {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const maxLength = 50;
  const maxLengthDescription = 60;
  const trimmedTitle =
    title.length > maxLength ? title.substring(0, maxLength) + "..." : title;
  const trimmedDescription =
    description.length > maxLengthDescription
      ? description.substring(0, maxLengthDescription) + "..."
      : description;

  return (
    <>
      {/* Card Component */}
      <div className="card" onClick={() => setIsPopupOpen(true)}>
        <div className="card-close" onClick={(e) => { e.stopPropagation(); onClose(id); }}>
          <img src={closeIcon} alt="close" className="close-image" />
        </div>
        <h2 className="card-title">{trimmedTitle}</h2>
        <p className="card-description">{trimmedDescription}</p>
        <p className="card-time">
          <img src={timeImg} alt="cal" width={"8px"} style={{ paddingRight: "4px" }} />
          {new Date(time).toLocaleString()}
        </p>
        {image && <img src={image} alt="news" className="card-image" />}
      </div>

      {/* Popup Component */}
      {isPopupOpen && (
        <div className="popup-overlay" onClick={() => setIsPopupOpen(false)}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <button className="popup-close" onClick={() => setIsPopupOpen(false)}>
              <img src={closeIcon} alt="close" />
            </button>
            <h2>{title}</h2>
            <p>{description}</p>  
            <p className="popup-time">
              <img src={timeImg} alt="cal" width={"12px"} style={{ paddingRight: "4px" }} />
              {new Date(time).toLocaleString()}
            </p>
            {image && <img src={image} alt="news" className="popup-image" />}
          </div>
        </div>
      )}
    </>
  );
}

export default CardGroup;
