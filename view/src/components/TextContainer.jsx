import React from 'react';

const TextContainer = ({ leftElement, rightElement }) => {
  return (
    <div className="text-container">
        <button>
          <span className="leftElement">{leftElement}</span>
          <span className="rightElement">{rightElement}</span>
      </button>
    </div>
  );
};

export default TextContainer;
