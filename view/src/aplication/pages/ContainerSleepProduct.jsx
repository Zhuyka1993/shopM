import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Card from '../../components/Card';
import BuyButton from '../../components/BuyButton';



const ContainerSleepProduct = () => {
     const [products, setProducts] = useState([]);

  const fetchSleepProducts = async () => {
    try {
      const response = await axios.get('/api/products/sleep');
      setProducts(response.data);
    } catch (error) {
      console.error('Помилка при завантаженні товарів категорії Bones:', error);
    }
  };

  useEffect(() => {
    fetchSleepProducts();
  }, []);

  const onClose = (productId) => {
    const filteredData = products.filter(product => product._id !== productId);
    setProducts(filteredData);
  };

  return (
    <>
      

      <div className='containerProductList'>
        {products.map((product) => (
          <Card
            key={product._id}
            image={`/${product.imageUrl}`}
            title={product.title}
            description={product.description}
            price={product.price}
          >
            <BuyButton onBuy={() => console.log(`Куплено товар ${product.title}`)} />
          </Card>
        ))}
      </div>

    </>
  );}


export default ContainerSleepProduct;