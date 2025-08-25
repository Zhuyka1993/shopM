import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '../../components/Card';
import BuyButton from '../../components/BuyButton';

const ContainerWearProduct = () => {
     const [products, setProducts] = useState([]);

  const fetchWearProducts = async () => {
    try {
      const response = await axios.get('/api/products/wear');
      setProducts(response.data);
    } catch (error) {
      console.error('Помилка при завантаженні товарів категорії Bones:', error);
    }
  };

  useEffect(() => {
    fetchWearProducts();
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


export default ContainerWearProduct;