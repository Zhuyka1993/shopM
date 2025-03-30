import React from 'react';

const TotalPrice = ({ price }) => {
  return (
    <div className="price-container">
        <span>
          <span className="textTotal">Total:</span>
          <span className="summaryPrice">{" $"+price}</span>
      </span>
    </div>
  );
};

export default TotalPrice;