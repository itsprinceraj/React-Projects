import { useState } from "react";
import { FaRupeeSign } from "react-icons/fa";
export const Card = ({ id, name, info, image, price, removeTour }) => {
  const [readmore, setReadmore] = useState(false);
  const description = readmore ? info : `${info.substring(0, 150)}...`;

  return (
    <div className="card flex flex-col border-2 rounded-md ">
      <img className="tour-image " src={image} />
      <div className="tour-info">
        <h4 className="tour-price">
          <FaRupeeSign />
          {price}
        </h4>
        <h4 className="tour-name">{name}</h4>
      </div>
      <div className="tour-description">
        {description}
        <span className="readmore" onClick={() => setReadmore(!readmore)}>
          {readmore ? " Show less" : "Read more"}
        </span>
      </div>
      <button className="remove-button" onClick={() => removeTour(id)}>
        Not Interested
      </button>
    </div>
  );
};
