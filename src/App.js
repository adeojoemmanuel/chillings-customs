import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;

