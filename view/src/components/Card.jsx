import React from "react";
import SelectBox from "./Select-box.jsx";

const Card = ({
  image,
  title,
  description,
  price,
  isEmpty = false,
  children,
  user,
  onEdit,
  product,
  onDelete
}) => {
  return (
    <div className="product-card">
      <div className="round">
        <img src={image} alt={title} className="product-image" />
      </div>

      <h2 className="product-title">{title}</h2>
      <p className="product-description">{description}</p>

      <div className="container-price">
        {!isEmpty && <SelectBox />}
        <p className="product-price">
          {price ? `${price} грн` : null}
        </p>
      </div>

      {/*  КНОПКИ ТІЛЬКИ ДЛЯ ЗАЛОГІНЕНИХ */}
 {user && user.role === "admin" && (
        <>
          <button onClick={() => onEdit(product)}>
            Edit
          </button>

          <button onClick={() => onDelete(product._id)}>
            Delete
          </button>
        </>
      )}

      {children}
    </div>
  );
};

export default Card;