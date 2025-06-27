import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Products from './components/Products';
import Commitment from './components/Commitment';
import Profession from './components/Profession';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Products />
        <Commitment />
        <Profession />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;