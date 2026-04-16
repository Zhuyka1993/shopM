import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '../../components/Card';
import BuyButton from '../../components/BuyButton';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, removeItem, clearCart } from '../../redux/cartSlice';

const ContainerWearProduct = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart.items);
  const total = useSelector(state => state.cart.total);

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
          >
            <BuyButton onBuy={() => dispatch(addItem(product))} />
          </Card>
        ))}
      </div>

    </>
  );
};

export default ContainerWearProduct;