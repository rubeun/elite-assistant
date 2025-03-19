import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Colony from './Colony/Colony';
import Footer from './components/Footer';

const App = () => {
  const [isLightMode, setIsLightMode] = useState<boolean>(false);

  return (
    <div className={`container ${isLightMode ? 'lightMode' : ''}`}>
      <Header />
      <Colony />
      <Footer />
    </div>
  );
}

export default App;
