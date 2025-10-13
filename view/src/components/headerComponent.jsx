import React from "react";
import NavLink from "./NavLink";
import curt from '../images/curt.svg';
import person from '../images/person.svg';
import logo from "../images/logo.png";
import { useSelector } from "react-redux"; // 👈 підключаємо хук Redux

const HeaderComponent = () => {
  const cartItems = useSelector((state) => state.cart.items); // 👈 отримуємо товари
  const totalCount = cartItems.reduce((sum, item) => sum + item.quantity, 0); // рахуємо загальну кількість

  return (
    <div className="headerContainer">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>

      <div className="navigationContainerHeader">
        <NavLink hrefCurt="/products" content="Products" isImage={false} />
        <NavLink hrefCurt="/about" content="Our Culture|Our Promise" isImage={false} />
        <NavLink hrefCurt="/services" content={person} isImage={true} />

        {/* 🔹 Іконка корзини з бейджем - розбираюсь, що до чого, ціль - кружечок з к-тю позицій на червоному фоні */}
        <div className="cartIconWrapper">
          <NavLink hrefCurt="/curt" content={curt} isImage={true} />
          {totalCount > 0 && (
            <span className="cartCountBadge">{totalCount}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeaderComponent;

