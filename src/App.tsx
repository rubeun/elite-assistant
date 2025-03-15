import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';

const App = () => {
  const [isLightMode, setIsLightMode] = useState<boolean>(false);

  return (
    <div className={`container ${isLightMode ? 'lightMode' : ''}`}>
      <Header />
    </div>
  );
}

export default App;
