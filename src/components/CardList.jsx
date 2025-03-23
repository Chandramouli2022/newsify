import im from "../assets/image.jpg";
import close from "../assets/close.png";

function CardList({ id, title, description, time, image, onClose }) {
  const maxLength = 70;
  const maxLengthDescription = 80;
  const trimmedTitle =
    title.length > maxLength ? title.substring(0, maxLength) + "..." : title;
  const trimmedDescription =
    description.length > maxLengthDescription
      ? description.substring(0, maxLengthDescription) + "..."
      : description;

  return (
    <div className='card2'>
      {image && <img src={image} alt='news' className='card-image' />}
      <div className='card-details'>
        <h2 className='card-title'>{trimmedTitle}</h2>
        <p className='card-description'>{trimmedDescription}</p>
        <p className='card-time'>{new Date(time).toLocaleString()}</p>
      </div>
      <div className='card-close' onClick={() => onClose(id)}>
        <img src={close} alt='close' className='close-image' />
      </div>
    </div>
  );
}

export default CardList;
