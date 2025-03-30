import React, { useState } from "react";

const SelectBox = () => {
  // Стан для відкриття/закриття випадаючого списку
  const [isOpen, setIsOpen] = useState(false);
  // Стан для вибраної опції
  const [selectedOption, setSelectedOption] = useState(null);

  // Функція для перемикання випадаючого списку
  const toggleDropdown = () => {
    setIsOpen((prevState) => !prevState);
  };

  // Функція для вибору опції
  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false); // Закриває випадаючий список після вибору
  };

  return (
    <div className="selectbox">
      {/* Контейнер для вибору з опцією */}
      <div className="jq-selectbox__select" onClick={toggleDropdown}>
        <span>{selectedOption || "S/M"}</span>
        <i className={`arrow ${isOpen ? "open" : ""}`}></i>
      </div>
      
      {/* Випадаючий список, який показується при isOpen = true */}
      <ul className={`jq-selectbox__dropdown ${isOpen ? "show" : ""}`}>
        <li onClick={() => handleOptionClick("Опція 1")}>Опція 1</li>
        <li onClick={() => handleOptionClick("Опція 2")}>Опція 2</li>
        <li onClick={() => handleOptionClick("Опція 3")}>Опція 3</li>
      </ul>
    </div>
  );
};

export default SelectBox;

