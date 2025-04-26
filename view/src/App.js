import React from "react";
import "./App.css";
import CardList from "./modules/card-list";
import HomePage from "./aplication/pages/home.jsx";
import SleepProductPage from "./aplication/pages/SleepProductPage.jsx";
import EmptyShoppingCurt from "./components/EmptyShoppingCurt.jsx";
import TextContainer from "./components/TextContainer.jsx";
import ProductTypeContainer from "./components/ProductTypeContainer.jsx";
import ProductType from "./components/ProductType.jsx";
import TotalPrice from "./components/TotalPrice.jsx";
import BurgerMenu from "./components/BurgerMenu.jsx";
import Preloader from "./components/Preloader.jsx";
import ContainerProductTypeNavigation from "./aplication/pages/ContainerProductTypeNavigation.jsx";
import InputFields from "./components/InputFields.jsx";
import HeaderComponent from "./components/headerComponent";
import FooterComponent from "./components/FooterComponent";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/curt"
          element={
            <>
              <HeaderComponent />
              <EmptyShoppingCurt />
              <FooterComponent />
            </>
          }
        />
        <Route
          path="/productsNav"
          element={<ContainerProductTypeNavigation />}
        />
        <Route path="/cardList" element={<CardList />} />

        <Route path="/sleepProducts" element={<SleepProductPage />} />
      </Routes>

      {/* <ProductTypeContainer /> */}

      {/* <TextContainer 
          leftElement="+" 
          rightElement="Continue Shopping"
        />
        <TextContainer 
          leftElement="←" 
          rightElement="Back"
        />

        <TotalPrice price="10" />
        <InputFields />
        <BurgerMenu />
        <EmptyShoppingCurt /> */}
    </>
  );
}

export default App;
