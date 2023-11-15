// CheckNCreate.js
import React, { useEffect } from 'react';
import './CheckNCreate.css';

const CheckNCreate = () => {
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

  return (
    <div id="check-n-create" className="check-n-create">
      <div className="black-bar"></div>
      <div className="gradient-rectangle">
        <div className="black-frame"></div>
        <p className="text-checkn">Подобрать параметры путешествия</p>
      </div>
      <div className="black-bar2"></div>
    </div>
  );
};

export default CheckNCreate;
