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
import ContainerBonesProduct from "./aplication/pages/ContainerBonesProduct.jsx";
import ContainerProductTypeNavigation from "./aplication/pages/ContainerProductTypeNavigation.jsx";
import InputFields from "./components/InputFields.jsx";
import HeaderComponent from "./components/headerComponent";
import FooterComponent from "./components/FooterComponent";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ContainerSleepProduct from "./aplication/pages/ContainerSleepProduct.jsx";
import ContainerWearProduct from "./aplication/pages/ContainerWearProduct.jsx";
import ProductTypeNavigation from "./components/ProductTypeNavigation.jsx";
import Login from "./components/Login.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";


function App() {
  const [user, setUser] = React.useState(() => {
    const stored = localStorage.getItem("user");
    return stored ? JSON.parse(stored) : null;
  });

  const handleLogin = (userData) => {
    setUser(userData);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <>
      <HeaderComponent user={user} onLogout={handleLogout} />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/curt" element={<EmptyShoppingCurt />} />
        <Route path="/productsNav" element={<ContainerProductTypeNavigation />} />
        <Route
  path="/addProduct"
  element={
    <ProtectedRoute user={user}>
      <InputFields />
    </ProtectedRoute>
  }
/>
        <Route path="/products" element={<ProductTypeNavigation />} />
        <Route path="/sleepProducts" element={<ContainerSleepProduct />} />
        <Route path="/bonesProducts" element={<ContainerBonesProduct />} />
        <Route path="/wearProducts" element={<ContainerWearProduct />} />
        <Route path="/test" element={<SleepProductPage />} />
        <Route path="/empty" element={<EmptyShoppingCurt />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />}/>
        <Route path="/editProduct/:id" element={<ProtectedRoute user={user}> <InputFields isEdit={true} /> </ProtectedRoute>}/>


      </Routes>

      <FooterComponent />
    </>
  );
}

export default App;
