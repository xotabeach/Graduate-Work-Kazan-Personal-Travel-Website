// ReadySteadyGo.js
import React from 'react';
import './ReadySteadyGo.css';

const ReadySteadyGo = () => {
  const handleScroll = () => {
    const destinationElement = document.getElementById('check-n-create');
    if (destinationElement) {
      destinationElement.scrollIntoView({ behavior: 'smooth' });
      destinationElement.classList.add('scrolled'); // Добавляем новый класс при скролле
    }
  };

  return (
    <div className="ready-steady-go">
      <div className="gray-rectangle">
        <div className="white-frame"></div>
        <p className="text">Построй маршрут <br/>из своих желаний</p>
      </div>
      
      <button className="apply-button" onClick={handleScroll}>
        Оставить заявку
      </button>
    </div>
  );
};

export default ReadySteadyGo;
