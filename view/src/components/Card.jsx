import React, { Children } from "react";
import SelectBox from "./Select-box.jsx";

const Card = ({ image, title, description, price, isEmpty = false,  onClose, children}) => {
  return (
    <div className="product-card">
     
      <div className="round">
        <img src={image} alt={title} className="product-image" />
      </div>
      <h2 className="product-title">{title}</h2>
      <p className="product-description">{description}</p>
      <div className="container-price">
        {!isEmpty && <SelectBox />}
        <p className="product-price">{price ? `${price} грн` : null}</p>
      </div>
          {children}
         { /* <button onClick={onClose}>Close</button>    */}
    </div>
  );
};

export default Card;