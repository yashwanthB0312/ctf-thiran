import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Events from './components/Events';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Events />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;