import React, { useState, useEffect } from 'react';
import './NavigationPanel.css';

const NavigationPanel = () => {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div className={`navigation-panel ${scrollY > 0 ? 'scrolled' : ''}`}>
      <div className="logo">
        <img src="./imgs/logo.png" alt="Logo" onClick={() => window.scrollTo(0, 0)} />
      </div>
      <div className="nav-buttons">
        <button className="nav-button">Главная</button>
        <button className="nav-button">О нас</button>
        <button className="nav-button">Отзывы</button>
        <button className="nav-button">Контакты</button>
      </div>
      
      <div className="bottom-line"></div>
    </div>
  );
};

export default NavigationPanel;
