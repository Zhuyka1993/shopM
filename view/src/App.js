import React from "react";
import "./App.css";
import CardList from "./modules/card-list";
import HomePage from "./aplication/pages/HomePage";
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
      <HeaderComponent />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/curt"
          element={
            <>
              <EmptyShoppingCurt />
            </>
          }
        />
        <Route
          path="/productsNav"
          element={<ContainerProductTypeNavigation />}
        />
        <Route path="/addProduct" element={<InputFields />} />
        <Route path="/products" element={<CardList />} />
        <Route path="/sleepProducts" element={<SleepProductPage />} />
      </Routes>
       {/* <BurgerMenu /> */}
      <FooterComponent />
      
    </>
  );
}

export default App;
