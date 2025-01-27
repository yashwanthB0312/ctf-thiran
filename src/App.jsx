import React from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Events from './components/Events.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
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