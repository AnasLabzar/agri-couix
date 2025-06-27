import React, { useEffect, useRef } from 'react';

const Products: React.FC = () => {
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

  const products = [
    {
      category: 'Légumes de Saison',
      items: ['Tomates', 'Courgettes', 'Aubergines', 'Poivrons', 'Salades', 'Radis'],
      image: 'https://images.pexels.com/photos/1367278/pexels-photo-1367278.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Cultivés avec soin dans le respect des saisons'
    },
    {
      category: 'Fruits Frais',
      items: ['Pommes', 'Poires', 'Prunes', 'Cerises', 'Fraises', 'Framboises'],
      image: 'https://images.pexels.com/photos/1132558/pexels-photo-1132558.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Récoltés à maturité pour un goût authentique'
    },
    {
      category: 'Herbes Aromatiques',
      items: ['Basilic', 'Persil', 'Ciboulette', 'Thym', 'Romarin', 'Menthe'],
      image: 'https://images.pexels.com/photos/1974328/pexels-photo-1974328.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Pour parfumer vos plats avec des saveurs naturelles'
    }
  ];

  return (
    <section id="produits" ref={sectionRef} className="py-20 bg-gradient-to-b from-green-50 to-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 fade-in-on-scroll">
          <h2 className="text-4xl lg:text-5xl font-bold text-green-800 mb-6">
            Nos Produits de Saison
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez notre sélection de fruits et légumes cultivés localement, 
            récoltés à parfaite maturité et disponibles selon les saisons.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div 
              key={index}
              className="fade-in-on-scroll bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={product.image}
                  alt={product.category}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-green-800 mb-3">
                  {product.category}
                </h3>
                <p className="text-gray-600 mb-4">
                  {product.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {product.items.map((item, itemIndex) => (
                    <span 
                      key={itemIndex}
                      className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 fade-in-on-scroll">
          <div className="bg-green-700 text-white p-8 rounded-2xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Disponibilité Saisonnière
            </h3>
            <p className="text-green-100 text-lg">
              Nos produits varient selon les saisons pour vous garantir fraîcheur et saveur optimales. 
              Contactez-nous pour connaître la disponibilité actuelle et passer commande.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;