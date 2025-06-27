import React, { useState, useEffect } from 'react';
import { Menu, X, Leaf } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-white/90 backdrop-blur-sm'
    }`}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => scrollToSection('accueil')}>
            <div className="bg-green-700 p-2 rounded-full">
              <Leaf className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl lg:text-2xl font-bold text-green-800">Couix Maraîcher</h1>
              <p className="text-xs text-green-600 hidden sm:block">Fruits & Légumes de Saison</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('accueil')} className="text-gray-700 hover:text-green-700 transition-colors font-medium">
              Accueil
            </button>
            <button onClick={() => scrollToSection('produits')} className="text-gray-700 hover:text-green-700 transition-colors font-medium">
              Nos Produits
            </button>
            <button onClick={() => scrollToSection('engagement')} className="text-gray-700 hover:text-green-700 transition-colors font-medium">
              Notre Engagement
            </button>
            <button onClick={() => scrollToSection('metier')} className="text-gray-700 hover:text-green-700 transition-colors font-medium">
              Le Métier
            </button>
            <button onClick={() => scrollToSection('contact')} className="bg-green-700 text-white px-6 py-2 rounded-full hover:bg-green-800 transition-colors font-medium">
              Contact
            </button>
          </nav>

          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t">
            <nav className="flex flex-col py-4">
              <button onClick={() => scrollToSection('accueil')} className="px-4 py-3 text-left text-gray-700 hover:bg-green-50 hover:text-green-700 transition-colors">
                Accueil
              </button>
              <button onClick={() => scrollToSection('produits')} className="px-4 py-3 text-left text-gray-700 hover:bg-green-50 hover:text-green-700 transition-colors">
                Nos Produits
              </button>
              <button onClick={() => scrollToSection('engagement')} className="px-4 py-3 text-left text-gray-700 hover:bg-green-50 hover:text-green-700 transition-colors">
                Notre Engagement
              </button>
              <button onClick={() => scrollToSection('metier')} className="px-4 py-3 text-left text-gray-700 hover:bg-green-50 hover:text-green-700 transition-colors">
                Le Métier
              </button>
              <button onClick={() => scrollToSection('contact')} className="mx-4 mt-2 bg-green-700 text-white px-6 py-3 rounded-full hover:bg-green-800 transition-colors text-center">
                Contact
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;