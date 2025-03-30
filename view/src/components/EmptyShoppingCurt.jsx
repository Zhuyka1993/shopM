import React from "react";
import Card from "./Card";
import dogImage from '../images/dog.png';
import BallAnimation from "./AnimationBall";


const EmptyShoppingCurt = () => {
  return (
    <>
    <div className="containerIntroCart">
      <div className="introCurtLeftSide">
        <h3>Shopping Cart</h3>
        <h1>Your shopping cart is empty!</h1>
      </div>
      <div className="introCardRightSide">
        <BallAnimation/>
        <Card isEmpty={true} image={dogImage} />
      </div>
   </div>
   </>
  );
};

export default EmptyShoppingCurt;