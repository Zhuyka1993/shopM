import React, { useState } from 'react';

// Створення компонента BurgerMenu
const BurgerMenu = () => {
  // Визначення стану isOpen, який визначає, чи меню відкрите чи закрите
  const [isOpen, setIsOpen] = useState(false);

  // Функція toggleMenu змінює стан isOpen на протилежний
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Якщо меню закрите, відображається бургер-кнопка */}
      {!isOpen && (
        <button onClick={toggleMenu} className="burger-button">
          ☰ {/* Символ бургер-меню */}
        </button>
      )}

      {/* Якщо isOpen true, то відображається меню з посиланнями */}
      {isOpen && (
        <>
        <button onClick={toggleMenu} className="close-button">
          ✖
        </button>
        <div className="menu">
          <a href="#products">Продукти</a> {/* Посилання на розділ "Продукти" */}
          <a href="#our-promises">Наші обіцянки</a> {/* Посилання на розділ "Наші обіцянки" */}
          <a href="#registration">Реєстрація</a> {/* Посилання на розділ "Реєстрація" */}
        </div>
        </>
      )}
    </div>
  );
};

export default BurgerMenu;

