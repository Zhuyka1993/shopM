import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from "../../components/Card.jsx";
import BuyButton from "../../components/BuyButton.jsx";
import { useDispatch } from "react-redux";
import { addItem } from "../../redux/cartSlice";

const CardList = () => {
  const [products, setProducts] = useState([]);

  const dispatch = useDispatch();

  // Функція для завантаження продуктів з MongoDB
  const fetchProducts = async () => {
    try {
      const response = await axios.get('/api/products');
      setProducts(response.data);
    } catch (error) {
      console.error('Помилка завантаження продуктів:', error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const onClose = (productId) => {
     const filteredData = products.filter(product => product._id !== productId);
     setProducts(filteredData);
  }

  return (
    <div className='containerProductList'>
      {products.map((product) => (
        <Card
          key={product._id}
          image={`/${product.imageUrl}`} // Відносний шлях до зображень
          title={product.title}
          description={product.description}
          price={product.price}
         // buyButton={<BuyButton onBuy={() => console.log(`Куплено товар ${product.title}`)} />} // <------------ don't put componet as props use children instead
        >
          <BuyButton onBuy={() => dispatch(addItem(product))} />
          
          </Card>
      ))}
    </div>
  );
};

export default CardList;

