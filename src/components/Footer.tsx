import React from 'react';
import { Leaf, Phone, Mail, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-green-800 text-white py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-green-600 p-2 rounded-full">
                <Leaf className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Couix Maraîcher</h3>
                <p className="text-green-200 text-sm">Fruits & Légumes de Saison</p>
              </div>
            </div>
            <p className="text-green-100 leading-relaxed">
              Producteur local engagé dans une agriculture responsable, 
              cultivant des fruits et légumes frais selon les saisons.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Navigation</h4>
            <nav className="space-y-2">
              <button onClick={() => scrollToSection('accueil')} className="block text-green-200 hover:text-white transition-colors">
                Accueil
              </button>
              <button onClick={() => scrollToSection('produits')} className="block text-green-200 hover:text-white transition-colors">
                Nos Produits
              </button>
              <button onClick={() => scrollToSection('engagement')} className="block text-green-200 hover:text-white transition-colors">
                Notre Engagement
              </button>
              <button onClick={() => scrollToSection('metier')} className="block text-green-200 hover:text-white transition-colors">
                Le Métier
              </button>
              <button onClick={() => scrollToSection('contact')} className="block text-green-200 hover:text-white transition-colors">
                Contact
              </button>
            </nav>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-green-300" />
                <span className="text-green-100">06 12 34 56 78</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-green-300" />
                <span className="text-green-100">contact@couix-maraicher.fr</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-green-300" />
                <span className="text-green-100">Région Française</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Horaires</h4>
            <div className="space-y-2 text-green-100">
              <p><span className="font-medium">Lun-Ven:</span> 8h-18h</p>
              <p><span className="font-medium">Samedi:</span> 8h-12h</p>
              <p><span className="font-medium">Dimanche:</span> Fermé</p>
              <p className="text-sm text-green-200 mt-3">
                Commandes et livraisons sur rendez-vous
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-green-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-green-200 text-sm">
              <p>&copy; 2025 Couix Maraîcher - SIRET: 881297840</p>
              <p>Tous droits réservés - Producteur local de fruits et légumes</p>
            </div>
            <div className="text-green-200 text-sm text-center md:text-right">
              <p>Agriculture responsable • Produits de saison • Livraison locale</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;