import React, { createContext, useContext, useState } from 'react';

const LaunchContext = createContext();

export const LaunchProvider = ({ children }) => {
  const [isLaunchComponentActive, setLaunchComponentActive] = useState(true);

  return (
    <LaunchContext.Provider value={{ isLaunchComponentActive, setLaunchComponentActive }}>
      {children}
    </LaunchContext.Provider>
  );
};

export const useLaunchContext = () => {
  const context = useContext(LaunchContext);
  if (!context) {
    throw new Error('useLaunchContext must be used within a LaunchProvider');
  }
  return context;
};
