import React, { useEffect, useRef } from 'react';
import { Leaf, Heart, MapPin, Shield } from 'lucide-react';

const Commitment: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.fade-in-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const commitments = [
    {
      icon: Leaf,
      title: 'Agriculture Responsable',
      description: 'Pratiques respectueuses de l\'environnement, sans pesticides chimiques, pour préserver la biodiversité et la qualité des sols.'
    },
    {
      icon: MapPin,
      title: 'Production Locale',
      description: 'Cultivé directement sur notre exploitation, réduisant l\'empreinte carbone et garantissant la fraîcheur de nos produits.'
    },
    {
      icon: Heart,
      title: 'Passion du Métier',
      description: 'Un savoir-faire transmis de génération en génération, alliant tradition et techniques modernes durables.'
    },
    {
      icon: Shield,
      title: 'Qualité Garantie',
      description: 'Contrôle rigoureux de nos cultures, récolte au bon moment et conditionnement soigné pour préserver toutes les qualités.'
    }
  ];

  return (
    <section id="engagement" ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 fade-in-on-scroll">
          <h2 className="text-4xl lg:text-5xl font-bold text-green-800 mb-6">
            Notre Engagement
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Chez Couix Maraîcher, nous cultivons plus que des légumes : 
            nous cultivons des valeurs d'authenticité, de respect et de proximité.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {commitments.map((commitment, index) => (
            <div 
              key={index}
              className="fade-in-on-scroll flex items-start space-x-6 p-6 bg-green-50 rounded-2xl hover:bg-green-100 transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="bg-green-700 p-4 rounded-full flex-shrink-0">
                <commitment.icon className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-green-800 mb-3">
                  {commitment.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {commitment.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="fade-in-on-scroll">
          <div 
            className="relative rounded-3xl overflow-hidden shadow-2xl"
            style={{
              backgroundImage: `linear-gradient(rgba(45, 80, 22, 0.8), rgba(45, 80, 22, 0.6)), url('https://images.pexels.com/photos/853097/pexels-photo-853097.jpeg?auto=compress&cs=tinysrgb&w=1200')`
            }}
          >
            <div className="bg-cover bg-center p-12 lg:p-20 text-white text-center">
              <h3 className="text-3xl lg:text-4xl font-bold mb-6">
                Une Agriculture de Proximité
              </h3>
              <p className="text-xl lg:text-2xl text-green-100 max-w-4xl mx-auto leading-relaxed">
                Chaque jour, nous nous levons avec la même passion : 
                cultiver des produits sains et savoureux pour notre communauté locale. 
                Notre engagement envers la terre et nos clients guide chacune de nos actions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Commitment;