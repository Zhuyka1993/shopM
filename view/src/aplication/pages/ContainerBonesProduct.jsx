import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '../../components/Card';
import BuyButton from '../../components/BuyButton';

const ContainerBonesProduct = () => {
     const [products, setProducts] = useState([]);

  const fetchBonesProducts = async () => {
    try {
      const response = await axios.get('/api/products/bones');
      setProducts(response.data);
    } catch (error) {
      console.error('Помилка при завантаженні товарів категорії Bones:', error);
    }
  };

  useEffect(() => {
    fetchBonesProducts();
  }, []);

  const onClose = (productId) => {
    const filteredData = products.filter(product => product._id !== productId);
    setProducts(filteredData);
  };

return (
  <div className='containerProductList'>
    {products.map(({ _id, imageUrl, title, description, price }) => (
      <Card
        key={_id}
        image={`/${imageUrl}`}
        title={title}
        description={description}
        price={price}
      >
        <BuyButton onBuy={() => console.log(`Куплено товар ${title}`)} />
      </Card>
    ))}
  </div>
);
;}

    export default ContainerBonesProduct;