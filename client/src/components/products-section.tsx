import { useState, useEffect, useRef } from 'react';
import { useLanguage } from '@/hooks/use-language';
import { ChevronDown } from 'lucide-react';

// Products for INSTAKA PRODUKTER section
const instakaProducts = [
  {
    id: 3,
    name: "Anpassade lösningar",
    image: "/assets/IMG_1600_1754760687145.jpg",
    description: "Möbler designade speciellt för dina unika krav och rumslayout.",
    materials: "Varierar beroende på design och funktion",
    customization: "Fullständig designprocess från koncept till slutprodukt"
  }
];

// Products for EGEN PRODUKTION section  
const egenProducts = [
  {
    id: 1,
    name: "Skandinaviska Sittgrupper",
    image: "/assets/Royal_Hotel_Lobby_-_Swan_chairs_1754760702839.jpg",
    description: "Handgjorda sittgrupper med tidlös skandinavisk design som förenar komfort med elegans.",
    materials: "Massivt ek, ulltyg från lokala leverantörer",
    customization: "Tyg, färg och storlek anpassas efter kundens önskemål"
  },
  {
    id: 2,
    name: "Moderna Förvaringslösningar", 
    image: "/assets/IMG_1568_1754760681179.jpg",
    description: "Skräddarsydda förvaringslösningar som maximerar utrymme och minimerar visuell störning.",
    materials: "Lackat trä, dolda beslag av högsta kvalitet",
    customization: "Dimensioner och finish anpassas efter rum och behov"
  }
];

export function ProductsSection() {
  const { t } = useLanguage();
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  const [activeFilter, setActiveFilter] = useState('all');
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const filterOptions = [
    { id: 'all', label: 'ALL' },
    { id: 'instaka', label: 'INSTAKA PRODUKTER' },
    { id: 'egen', label: 'EGEN PRODUKTION' }
  ];

  const openCard = (index: number) => {
    setExpandedCard(index);
  };

  const closeCard = () => {
    setExpandedCard(null);
  };

  // Handle ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeCard();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <>
      <section className="py-20 bg-off-white" id="products" data-testid="products-section">
        <div className="max-w-6xl mx-auto px-8 md:px-12">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-[#2B2B2B] mb-6">
              Våra Produkter
            </h2>
            <p className="text-[#5B401C] text-lg font-medium max-w-3xl mx-auto leading-relaxed">
              Upptäck vår kollektion av handgjorda möbler och skräddarsydda designlösningar
            </p>
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="py-16 bg-[#2B2B2B]">
          <div className="max-w-6xl mx-auto px-8 md:px-12">
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {filterOptions.map((option) => (
                <button
                  key={option.id}
                  onClick={() => setActiveFilter(option.id)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                    activeFilter === option.id
                      ? 'bg-[#FBD44C] text-[#fffaf7]'
                      : 'bg-off-white/10 text-[#fffaf7] hover:bg-off-white/20'
                  }`}
                  data-testid={`filter-${option.id}`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* INSTAKA PRODUKTER Section */}
        {(activeFilter === 'all' || activeFilter === 'instaka') && (
          <div className="py-20 bg-[#2B2B2B]">
            <div className="max-w-6xl mx-auto px-8 md:px-12">
              <div className="text-center mb-12">
                <h3 className="font-serif text-3xl font-bold text-[#FBD44C] mb-4">INSTAKA PRODUKTER</h3>
                <p className="text-[#fffaf7] text-lg">Välj bland våra befintliga möbler och designlösningar</p>
              </div>
              
              {/* Instaka Produkter Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2px] bg-[#F9F9F9] p-[2px]">
                {instakaProducts.map((product, index) => (
                  <div key={product.id} className="group cursor-pointer">
                    <div className="bg-[#2B2B2B] rounded-2xl shadow-sm border border-gray-200 overflow-hidden h-[400px] relative transition-all duration-300 hover:shadow-lg">
                      <div className="relative h-64 overflow-hidden">
                        <img 
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-[#AD8C44]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <span className="text-[#fffaf7] font-semibold text-lg">Visa mer <span className="animate-shake inline-block">→</span></span>
                        </div>
                      </div>
                      <div className="p-6 h-36 flex flex-col justify-center">
                        <h4 className="font-serif text-lg font-bold text-[#fffaf7] mb-2">{product.name}</h4>
                        <p className="text-[#fffaf7]/70 text-sm">{product.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* EGEN PRODUKTION Section */}
        {(activeFilter === 'all' || activeFilter === 'egen') && (
          <div className="py-20 bg-[#5B401C]">
            <div className="max-w-6xl mx-auto px-8 md:px-12">
              <div className="text-center mb-12">
                <h3 className="font-serif text-3xl font-bold text-[#FBD44C] mb-4">EGEN PRODUKTION</h3>
                <p className="text-[#fffaf7] text-lg">Skräddarsydda möbler tillverkade i vår svenska verkstad</p>
              </div>
              
              {/* Egen Produktion Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2px] bg-[#F9F9F9] p-[2px]">
                {egenProducts.map((product, index) => (
                  <div key={product.id} className="group cursor-pointer">
                    <div className="bg-[#5B401C] rounded-2xl shadow-sm border border-gray-200 overflow-hidden h-[400px] relative transition-all duration-300 hover:shadow-lg">
                      <div className="relative h-64 overflow-hidden">
                        <img 
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-[#AD8C44]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <span className="text-[#fffaf7] font-semibold text-lg">Visa mer <span className="animate-shake inline-block">→</span></span>
                        </div>
                      </div>
                      <div className="p-6 h-36 flex flex-col justify-center">
                        <h4 className="font-serif text-lg font-bold text-[#fffaf7] mb-2">{product.name}</h4>
                        <p className="text-[#fffaf7]/70 text-sm">{product.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Production Info Link */}
              <div className="text-center mt-12">
                <a 
                  href="/assets/nordi_production_2023-1_1754761513396.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#FBD44C] text-[#2B2B2B] font-medium rounded-lg hover:bg-[#FBD44C]/90 transition-colors duration-300"
                  data-testid="production-info-link"
                >
                  Läs mer om vår produktion (PDF)
                  <span className="animate-shake inline-block">→</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
}