import React from "react";
import Card from "./Card";
import BallAnimation from "./AnimationBall";


const IntroCurt = ({littleH, bigH, image}) => {
    return (
        <>
        <div className="containerIntroCart">
          <div className="introCardLeftSide">
            <h3>{littleH}</h3>
            <h1>{bigH}</h1>
          </div>
          <div className="introCardRightSide">
            <BallAnimation/>
            <Card isEmpty={true} image={image} />
          </div>
       </div>
       </>
      );
    };

export default IntroCurt;