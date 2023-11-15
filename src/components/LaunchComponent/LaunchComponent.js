
import React, { useState, useEffect } from 'react';
import './LaunchComponent.css';

const LaunchComponent = ({ setScrollEnabled }) => {
  const [clicked, setClicked] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const handleButtonClick = () => {
    setClicked(true);
  };

  useEffect(() => {
    if (clicked) {
      const timeoutId = setTimeout(() => {
        setIsVisible(false);
        setScrollEnabled(true); // Устанавливаете здесь true, если хотите разрешить скроллинг
      }, 1000); // Устанавливаете таймаут на основе времени вашей анимации

      return () => clearTimeout(timeoutId);
    }
  }, [clicked, setScrollEnabled]);

  return isVisible ? (
    <div className={`launch-component ${clicked ? 'clicked' : ''}`} onClick={handleButtonClick}>
      <div className="background"></div>
    </div>
  ) : null;
};

export default LaunchComponent;
