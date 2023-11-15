// App.js
import React, { useState } from 'react';
import LaunchComponent from './components/LaunchComponent/LaunchComponent';
import NavigationPanel from './components/NavigationPanel/NavigationPanel';
import ReadySteadyGo from './components/ReadySteadyGo/ReadySteadyGo';
import CheckNCreate from './components/CheckNCreate/CheckNCreate';
import './App.css';

function App() {
  

  return (
    <div className="app" >
      <NavigationPanel />
      <main className="main">
        
        <ReadySteadyGo />
        <CheckNCreate />
      </main>
    </div>
  );
}

export default App;
