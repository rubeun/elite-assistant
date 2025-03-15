import React, { useState } from 'react';
import elitelogo from './logo-elite1.svg';
import './App.css';

const App = () => {
  const [isLightMode, setIsLightMode] = useState<boolean>(false);

  return (
    <div className={`container ${isLightMode ? 'lightMode' : ''}`}>
      <header>
        <h1>Elite Assistant</h1>
        <h4>Coming Soon</h4>
        <img src={elitelogo} className='eliteLogo' alt='Elite Logo' />
      </header>
    </div>
  );
}

export default App;
