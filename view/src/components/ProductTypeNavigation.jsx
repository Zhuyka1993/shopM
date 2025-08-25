import React, { useState, useEffect } from "react";
import IntroCurt from "./PetIntro";
import ContainerBonesProduct from "../aplication/pages/ContainerBonesProduct";
import ContainerSleepProduct from "../aplication/pages/ContainerSleepProduct";
import ContainerWearProduct from "../aplication/pages/ContainerWearProduct";
import CardList from "../modules/card-list/index";
import Image from "../images/doggg.png";


function ProductTypeNavigation() {
  const [activeTab, setActiveTab] = useState("all");

  return (
    <>
      <IntroCurt
        littleH="Sleep"
        bigH="Upgrade your pet and make it more stylish"
        image={Image}
      />

      <div className="product-type-nav">
        <button
          className={activeTab === "all" ? "active" : ""}
          onClick={() => setActiveTab("all")}
        >
          All
        </button>
        <button
          className={activeTab === "sleep" ? "active" : ""}
          onClick={() => setActiveTab("sleep")}
        >
          Sleep
        </button>
        <button
          className={activeTab === "bones" ? "active" : ""}
          onClick={() => setActiveTab("bones")}
        >
          Bones
        </button>
        <button
          className={activeTab === "wear" ? "active" : ""}
          onClick={() => setActiveTab("wear")}
        >
          Wear
        </button>
      </div>

      
      <div className="product-type-content">
        {activeTab === "all" && (
          <>
            { <CardList /> }
          </>
        )}
        {activeTab === "sleep" && (
          <>
            { <ContainerSleepProduct /> }
          </>
        )}
        {activeTab === "bones" && (
          <>
            { <ContainerBonesProduct /> }
          </>
        )}
        {activeTab === "wear" && (
          <>
            { <ContainerWearProduct /> }
          </>
        )}
      </div>
    </>
  );
}

export default ProductTypeNavigation;
