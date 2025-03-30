import React, { useEffect, useState } from 'react';

// Компонент Preloader
const Preloader = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Симулюємо завантаження
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // 3 секунди для демонстрації, можна змінити на реальний час завантаження

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="loading">
          <div className="spinner"></div>
        </div>
      ) : (
        children
      )}
    </>
  );
};

export default Preloader;
