// CheckNCreate.js
import React, { useState, useEffect } from 'react';
import './CheckNCreate.css';

const CheckNCreate = () => {
  const [checkboxes, setCheckboxes] = useState(Array(8).fill(false));

  useEffect(() => {
    const handleScroll = () => {
      const checkNCreateElement = document.getElementById('check-n-create');
      if (checkNCreateElement) {
        const scrollY = window.scrollY;
        if (scrollY > 0 && !checkNCreateElement.classList.contains('scrolled')) {
          // Если скролл вниз и еще не добавлен класс scrolled, добавляем его
          checkNCreateElement.classList.add('scrolled');
        } else if (scrollY === 0 && checkNCreateElement.classList.contains('scrolled')) {
          // Если скролл вверх и есть класс scrolled, удаляем его
          checkNCreateElement.classList.remove('scrolled');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleCheckboxChange = (index) => {
    setCheckboxes((prevCheckboxes) => {
      const newCheckboxes = [...prevCheckboxes];
      newCheckboxes[index] = !newCheckboxes[index];
      return newCheckboxes;
    });
  };

  const handleButtonClick = () => {
    // Обработка нажатия кнопки
  };

  const checkBoxTexts = ["Текст 1", "Текст 2", "Текст 3", "Текст 4", "Текст 5", "Текст 6", "Текст 7", "Текст 8"];

  return (
    <div id="check-n-create" className="check-n-create">
      <div className="black-bar"></div>
      <div className="checkbox-container">
        <div className="column">
          {[0, 1, 2, 3].map((row) => (
            <label key={row} className="checkbox-label">
              <input
                id={"0" + row}
                type="checkbox"
                checked={checkboxes[row]}
                onChange={() => handleCheckboxChange(row)}
              />
              <div className="custom-checkbox"></div>
              <span className="checkbox-text">{checkBoxTexts[row]}</span>
            </label>
          ))}
        </div>
        <div className="column">
          {[4, 5, 6, 7].map((row) => (
            <label key={row} className="checkbox-label">
              <input
                id={"0" + row}
                type="checkbox"
                checked={checkboxes[row]}
                onChange={() => handleCheckboxChange(row)}
              />
              <div className="custom-checkbox"></div>
              <span className="checkbox-text">{checkBoxTexts[row]}</span>
            </label>
          ))}
        </div>
      </div>
      <div className="button_container">
        <button className="buttonContainer"onClick={handleButtonClick}>Сформировать</button>
      </div>
      <div className="black-bar2"></div>
    </div>
  );
};

export default CheckNCreate;
