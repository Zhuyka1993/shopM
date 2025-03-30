import React from "react";

const BuyButton = ({onBuy}) => {
  return (
     <button className="product-buy-button" onClick={onBuy}>
        Купити
      </button>
  );
};

export default BuyButton;