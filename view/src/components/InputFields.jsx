import React, { useState } from 'react';
import axios from 'axios';

// Компонент ProductForm
const InputFields = () => {
  // Визначаємо стан для заголовка, опису, ціни та файлу зображення
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState(null);

  // Функція обробки події відправлення форми
  const handleSubmit = async (e) => {
    e.preventDefault(); // Запобігаємо перезавантаженню сторінки при відправленні форми

    // Створюємо новий об'єкт форми для відправлення даних
    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('price', price);
    formData.append('image', image);

    try {
      // Відправляємо дані на сервер
      const response = await axios.post('/api/products/add', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log('Відповідь сервера:', response.data);
    } catch (error) {
      console.error('Помилка відправлення даних:', error);
    }
  };

  return (
    <div  className='inputContainer'>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Заголовок</label>
          <input 
            type="text" 
            value={title} 
            onChange={(e) => setTitle(e.target.value)} 
            required // Поле обов'язкове для заповнення
          />
        </div>
        <div>
          <label>Опис</label>
          <input 
            type="text" 
            value={description} 
            onChange={(e) => setDescription(e.target.value)} 
            required // Поле обов'язкове для заповнення
          />
        </div>
        <div>
          <label>Ціна</label>
          <input 
            type="number" 
            value={price} 
            onChange={(e) => setPrice(e.target.value)} 
            required // Поле обов'язкове для заповнення
          />
        </div>
        <div>
          <label>Картинка</label>
          <input 
            type="file" 
            onChange={(e) => setImage(e.target.files[0])} 
            required // Поле обов'язкове для заповнення
          />
        </div>
        <button type="submit">Відправити</button>
      </form>
    </div>
  );
};

export default InputFields;
