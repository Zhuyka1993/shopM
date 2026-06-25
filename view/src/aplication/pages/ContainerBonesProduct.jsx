import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "../../components/Card";
import BuyButton from "../../components/BuyButton";
import { useDispatch } from "react-redux";
import { addItem } from "../../redux/cartSlice";
import { useNavigate } from "react-router-dom";

const ContainerBonesProduct = () => {
  const [error, setError] = useState("");
  const [products, setProducts] = useState([]);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  // DELETE PRODUCT
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Точно видалити товар?"
    );

    if (!confirmDelete) return;

    try {
      const token = localStorage.getItem("token");

      await axios.delete(`/api/products/${id}`, {
        headers: {
          Authorization: "Bearer " + token,
        },
      });

      // remove from UI
      setProducts((prev) =>
        prev.filter((p) => p._id !== id)
      );
    } catch (err) {
      console.error("Delete error:", err);
    }
  };

  // LOAD PRODUCTS
  useEffect(() => {
    const fetchBonesProducts = async () => {
      try {
        const response = await axios.get(
          "/api/products/bones"
        );

        setProducts(response.data);
      } catch (error) {
        console.error(
          "Помилка при завантаженні товарів:",
          error
        );
      }
    };

    fetchBonesProducts();
  }, []);

  return (
    <div className="containerProductList">
      {products.map((product) => (
        <Card
          key={product._id}
          image={`/${product.imageUrl}`}
          title={product.title}
          description={product.description}
          price={product.price}
          product={product}
          user={user}

          onEdit={() => {
            if (user?.role !== "admin") {
              setError(
                "У вас обмежені права (тільки для адміністратора)"
              );
              return;
            }

            setError("");
            navigate(`/editProduct/${product._id}`);
          }}

          onDelete={() => {
            if (user?.role !== "admin") {
              setError(
                "У вас обмежені права (тільки для адміністратора)"
              );
              return;
            }

            setError("");
            handleDelete(product._id);
          }}
        >
          <BuyButton
            onBuy={() => dispatch(addItem(product))}
          />
        </Card>
      ))}

      {error && (
        <p style={{ color: "red", marginTop: "10px" }}>
          {error}
        </p>
      )}
    </div>
  );
};

export default ContainerBonesProduct;