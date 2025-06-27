import React, { useEffect, useRef } from 'react';
import { Sunrise, Droplets, Scissors, Package } from 'lucide-react';

const Profession: React.FC = () => {
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

  const dailyTasks = [
    {
      icon: Sunrise,
      title: 'Lever du Soleil',
      description: 'Chaque journée commence tôt pour profiter de la fraîcheur matinale et planifier les activités de la journée.',
      time: '6h00'
    },
    {
      icon: Droplets,
      title: 'Arrosage & Soins',
      description: 'Surveillance attentive des cultures, arrosage adapté et soins préventifs pour garantir la santé des plants.',
      time: '7h00 - 10h00'
    },
    {
      icon: Scissors,
      title: 'Récolte',
      description: 'Cueillette au moment optimal de maturité, dans le respect du produit et en préservant ses qualités.',
      time: '10h00 - 12h00'
    },
    {
      icon: Package,
      title: 'Préparation & Vente',
      description: 'Conditionnement soigné des produits et préparation des commandes pour nos clients locaux.',
      time: '14h00 - 17h00'
    }
  ];

  return (
    <section id="metier" ref={sectionRef} className="py-20 bg-gradient-to-b from-amber-50 to-green-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 fade-in-on-scroll">
          <h2 className="text-4xl lg:text-5xl font-bold text-green-800 mb-6">
            Le Métier de Maraîcher
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez le quotidien passionnant d'un producteur local, 
            entre tradition agricole et techniques modernes durables.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="fade-in-on-scroll">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="https://images.pexels.com/photos/2132097/pexels-photo-2132097.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Maraîcher dans ses champs"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
          </div>

          <div className="fade-in-on-scroll space-y-6">
            <h3 className="text-3xl font-bold text-green-800 mb-6">
              Un Métier de Passion
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Être maraîcher, c'est bien plus qu'un métier : c'est un art de vivre en harmonie avec la nature. 
              Chaque saison apporte ses défis et ses récompenses, rythmant notre quotidien au gré des cycles naturels.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Notre expertise se nourrit d'années d'expérience, d'observation attentive de la terre et des plants, 
              ainsi que d'une formation continue aux meilleures pratiques agricoles durables.
            </p>
            <div className="bg-green-100 p-6 rounded-xl">
              <h4 className="text-xl font-bold text-green-800 mb-3">
                Nos Spécialités
              </h4>
              <ul className="text-gray-700 space-y-2">
                <li>• Culture biologique et raisonnée</li>
                <li>• Maîtrise des cycles saisonniers</li>
                <li>• Techniques de conservation naturelle</li>
                <li>• Sélection de variétés locales</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="fade-in-on-scroll">
          <h3 className="text-3xl font-bold text-green-800 text-center mb-12">
            Une Journée Type
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {dailyTasks.map((task, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center"
              >
                <div className="bg-gradient-to-br from-green-600 to-green-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <task.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-sm font-bold text-amber-600 mb-2">
                  {task.time}
                </div>
                <h4 className="text-xl font-bold text-green-800 mb-3">
                  {task.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {task.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="fade-in-on-scroll mt-16 text-center">
          <div className="bg-gradient-to-r from-green-700 to-green-600 text-white p-8 rounded-2xl max-w-4xl mx-auto">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              "La terre ne ment pas"
            </h3>
            <p className="text-green-100 text-lg lg:text-xl">
              Cette maxime guide notre travail quotidien. Chaque geste compte, 
              chaque saison nous enseigne, et chaque récolte récompense notre patience et notre dévouement.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profession;