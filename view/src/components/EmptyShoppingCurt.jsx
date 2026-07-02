import React from "react";
import Card from "./Card";
import dogImage from '../images/dog.png';
import BallAnimation from "./AnimationBall";
import { Link } from "react-router-dom";



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
   <div className="backToShopping">
    <span><Link to="/">Back to shopping</Link></span>
   </div>
   </>
  );
};

export default EmptyShoppingCurt;