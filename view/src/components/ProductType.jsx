import React from "react";
import { Link } from "react-router-dom";


const ProductType = ({ name, imageUrl, href }) => {
  return (
    <>
    
    <div className="petHouse">

    
      <Link to={href}>
        <div className="stepIcon">
          <img
            src={imageUrl}
          />
        </div>
        <span>{name}</span>
        <div className="categoryLink">   
        </div>
      </Link>
      
      
    </div>
    </>
   
  );
};

export default ProductType;