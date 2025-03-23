import React from "react";
import timeImg from "../assets/time.png";
import close from "../assets/close.png";

function CardGroup({ id, title, description, time, image, onClose }) {
  const maxLength = 50;
  const maxLengthDescription = 60;
  const trimmedTitle =
    title.length > maxLength ? title.substring(0, maxLength) + "..." : title;
  const trimmedDescription =
    description.length > maxLengthDescription
      ? description.substring(0, maxLengthDescription) + "..."
      : description;

  return (
    <div className='card'>
      <div className='card-close' onClick={() => onClose(id)}>
        <img src={close} alt='close' className='close-image' />
      </div>
      <h2 className='card-title'>{trimmedTitle}</h2>
      <p className='card-description'>{trimmedDescription}</p>
      <p className='card-time'>
        <img
          src={timeImg}
          alt='cal'
          width={"8px"}
          style={{ paddingRight: "4px" }}
        />
        {new Date(time).toLocaleString()}
      </p>
      {image && <img src={image} alt='news' className='card-image' />}
    </div>
  );
}

export default CardGroup;