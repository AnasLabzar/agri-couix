import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="accueil" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(45, 80, 22, 0.7), rgba(45, 80, 22, 0.5)), url('https://images.pexels.com/photos/1268101/pexels-photo-1268101.jpeg?auto=compress&cs=tinysrgb&w=1920')`
        }}
      />
      
      <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 animate-fade-in-up">
            Des Fruits et Légumes
            <span className="block text-green-300">Fraîchement Récoltés</span>
          </h1>
          
          <p className="text-xl lg:text-2xl mb-8 text-green-100 animate-fade-in-up animation-delay-300">
            Producteur local engagé dans une agriculture responsable et de proximité
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up animation-delay-600">
            <button 
              onClick={() => scrollToSection('produits')}
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Découvrir nos Produits
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="border-2 border-white hover:bg-white hover:text-green-800 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            >
              Nous Contacter
            </button>
          </div>
        </div>
        
        <button 
          onClick={() => scrollToSection('produits')}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
          aria-label="Faire défiler vers le bas"
        >
          <ArrowDown className="w-8 h-8 text-white" />
        </button>
      </div>
    </section>
  );
};

export default Hero;