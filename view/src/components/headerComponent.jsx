import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItem, clearCart } from "../redux/cartSlice";
import { useNavigate } from "react-router-dom";
import NavLink from "./NavLink";
import curt from '../images/curt.svg';
import person from '../images/person.svg';
import logo from "../images/logo.png";

const HeaderComponent = ({ user, onLogout }) => {
  const cartItems = useSelector((state) => state.cart.items);
  const totalCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <div className="headerContainer">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>

      <div className="navigationContainerHeader">
        <NavLink hrefCurt="/products" content="Products" isImage={false} />
  <NavLink hrefCurt="/about" content="Our Culture|Our Promise" isImage={false} />

  {!user && (
    <NavLink hrefCurt="/login" content={person} isImage={true} />
  )}

  {user && user.role === "admin" && (
    <NavLink hrefCurt="/addProduct" content="Add Product" isImage={false} />
  )}

  {user && (
    <button onClick={onLogout}>Logout</button>
  )}

        <div className="cartIconWrapper">
          <img
            src={curt}
            alt="cart"
            style={{ cursor: "pointer" }}
            onClick={() => {
              if (cartItems.length === 0) {
                navigate("/empty");
              } else {
                setIsCartOpen(!isCartOpen);
              }
            }}
          />
          {totalCount > 0 && (
            <span className="cartCountBadge">{totalCount}</span>
          )}

          {isCartOpen && cartItems.length > 0 && (
            <div className="cartDropdown">
              <button
                  className="closeCartBtn"
                  onClick={() => setIsCartOpen(false)}
                >
                  Х
                </button>
              <ul>
                {cartItems.map((item) => (
                  <li key={item._id} className="cart-item">
                    <img
                      src={`/${item.imageUrl}`}
                      alt={item.title}
                      className="cart-item-image"
                    />
                    <div className="cart-item-info">
                      <span>{item.title}</span>
                      <span>
                        {item.quantity} × {item.price} грн ={" "}
                        {item.price * item.quantity} грн
                      </span>
                    </div>
                    <button onClick={() => dispatch(removeItem(item._id))}>
                      ×
                    </button>
                  </li>
                ))}
              </ul>

              <h4>Загалом: {totalPrice} грн</h4>

              <div className="cartActions">
                <button onClick={() => dispatch(clearCart())}>
                  Очистити корзину
                </button>

                
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeaderComponent;




