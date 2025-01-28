import React from 'react';
import Navbar from './Components/Navbar.jsx';
import Hero from './Components/Hero.jsx';
import Events from './Components/Events.jsx';
import About from './Components/About.jsx';
import Footer from './Components/Footer.jsx';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Events />
      <About />
      <Footer />
    </div>
  );
}

export default App;