import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TickerTape from './components/TickerTape';
import Benefits from './components/Benefits';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-dark">
      <Navbar />
      <Hero />
      <TickerTape />
      <Benefits />
      <Footer />
    </div>
  );
}

export default App;
