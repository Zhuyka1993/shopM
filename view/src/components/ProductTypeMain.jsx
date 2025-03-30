
import React from "react";
import Animation2Ball from "./Animation2Ball";


const ProductTypeMain = ({ image, name, href }) => {
  const renderName = (name) => { return name.split('').map((letter, index) => 
  ( <div key={index} className={index % 2 === 0 ? 'up' : 'down'}> {letter} </div> )); };
  return (
    <div className="animalContainer">
      <a href={href}>
        <div className="round">
        <Animation2Ball/>
        <div className="upDownContainer">
        {renderName(name)}
        </div>
        <img src={image} alt="Animal" />
        </div>
      </a>
    </div>
  );
};

export default ProductTypeMain;
