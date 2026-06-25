import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '../../components/Card';
import BuyButton from '../../components/BuyButton';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../../redux/cartSlice';
import { useNavigate } from "react-router-dom";

const ContainerWearProduct = () => {
  const [error, setError] = useState("");
  const [products, setProducts] = useState([]);

  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart.items);
  const total = useSelector(state => state.cart.total);

  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Точно видалити товар?");
    if (!confirmDelete) return;

    try {
      const token = localStorage.getItem("token");

      await axios.delete(`/api/products/${id}`, {
        headers: {
          Authorization: "Bearer " + token
        }
      });

      setProducts(prev =>
        prev.filter(p => String(p._id) !== String(id))
      );

    } catch (err) {
      console.error("Delete error", err);
    }
  };

  useEffect(() => {
    const fetchWearProducts = async () => {
      try {
        const response = await axios.get('/api/products/wear');
        setProducts(response.data);
      } catch (error) {
        console.error('Помилка при завантаженні товарів:', error);
      }
    };

    fetchWearProducts();
  }, []);

  return (
    <>
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

            onEdit={(product) => {
              if (user?.role !== "admin") {
                setError("У вас обмежені права (тільки для адміністратора)");
                return;
              }

              setError("");
              navigate(`/editProduct/${product._id}`);
            }}

            onDelete={(id) => {
              if (user?.role !== "admin") {
                setError("У вас обмежені права (тільки для адміністратора)");
                return;
              }

              setError("");
              handleDelete(id);
            }}
          >
            <BuyButton onBuy={() => dispatch(addItem(product))} />
          </Card>
        ))}

      </div>

      {error && (
        <p style={{ color: "red", marginTop: "10px" }}>
          {error}
        </p>
      )}
    </>
  );
};

export default ContainerWearProduct;