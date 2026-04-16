import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '../../components/Card';
import BuyButton from '../../components/BuyButton';
import { useDispatch } from 'react-redux';
import { addItem } from '../../redux/cartSlice';

const ContainerBonesProduct = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchBonesProducts = async () => {
      try {
        const response = await axios.get('/api/products/bones');
        setProducts(response.data);
      } catch (error) {
        console.error('Помилка при завантаженні товарів:', error);
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
        >
          <BuyButton onBuy={() => dispatch(addItem(product))} />
        </Card>
      ))}
    </div>
  );
};

export default ContainerBonesProduct;
