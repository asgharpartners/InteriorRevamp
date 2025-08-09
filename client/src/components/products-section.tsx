import { useState, useEffect, useRef } from 'react';
import { useLanguage } from '@/hooks/use-language';
import { ChevronDown } from 'lucide-react';

const products = [
  {
    id: 1,
    name: "Skandinaviska Sittgrupper",
    category: "Möbler",
    image: "/assets/IMG_1568_1754760681179.jpg",
    description: "Handgjorda sittgrupper i skandinavisk design med fokus på komfort och hållbarhet. Tillverkade i ekologiska material med tidlös estetik.",
    materials: "Massivt ek, naturliga textilier",
    customization: "Fullt anpassningsbar i storlek, färg och material"
  },
  {
    id: 2,
    name: "Exklusiva Bardiskar",
    category: "Hospitality",
    image: "/assets/bar_1754760510804.jpeg",
    description: "Skräddarsydda bardiskar för restauranger och hotell. Kombination av funktionalitet och elegant design som skapar atmosfär.",
    materials: "Laminat, stål, natursten",
    customization: "Anpassad till lokalens behov och varumärke"
  },
  {
    id: 3,
    name: "Moderna Förvaringslösningar",
    category: "Förvaring",
    image: "/assets/Screenshot 2025-07-14 at 21.25.07_1754760614116.png",
    description: "Innovativa förvaringssystem som maximerar utrymme samtidigt som de behåller visuell elegans. Perfekt för både kontor och hem.",
    materials: "Laminat, metall, glas",
    customization: "Modulära system som kan anpassas efter behov"
  },
  {
    id: 4,
    name: "Restaurangmöbler",
    category: "Hospitality",
    image: "/assets/DSC02291_1754760673373.JPG",
    description: "Komplett möblering för restauranger och caféer. Från intima bordsmiljöer till stora sällskapslokaler.",
    materials: "Massivt trä, läder, textil",
    customization: "Tematisk design anpassad efter koncept"
  },
  {
    id: 5,
    name: "Kontorslösningar",
    category: "Kontor",
    image: "/assets/IMG_1597_1754760693613.jpg",
    description: "Ergonomiska och estetiska kontorsmöbler som främjar produktivitet och kreativitet i moderna arbetsmiljöer.",
    materials: "Laminat, stål, tyg",
    customization: "Färg och layout anpassad efter företagets profil"
  },
  {
    id: 6,
    name: "Hotellinteriörer",
    category: "Hospitality",
    image: "/assets/Royal_Hotel_Lobby_-_Swan_chairs_1754760702839.jpg",
    description: "Eleganta hotellmöbler som skapar minnesvärda upplevelser för gäster. Kombination av komfort och lyxig design.",
    materials: "Premiumtyger, massivt trä, metall",
    customization: "Anpassad efter hotellets varumärke och atmosfär"
  },
  {
    id: 7,
    name: "Möbeltillverkning & Egen Produktion",
    category: "Produktion",
    image: "/assets/Furniture Production & In-house Manufacturing_1754761065666.png",
    description: "Från skiss till färdig möbel - vår interna designprocess och produktion. Vi utvecklar unika möbler med precisa mått och handgjord kvalitet.",
    materials: "Massivt trä, metall, naturliga finish",
    customization: "Fullständig designprocess från koncept till slutprodukt"
  }
];

export function ProductsSection() {
  const { t } = useLanguage();
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const toggleCard = (index: number) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  const closeCard = () => {
    setExpandedCard(null);
  };

  // Handle ESC key and click outside
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeCard();
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (expandedCard !== null) {
        const clickedCard = cardRefs.current[expandedCard];
        if (clickedCard && !clickedCard.contains(e.target as Node)) {
          closeCard();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [expandedCard]);

  return (
    <>
      <section id="products" className="bg-white">
        {/* Section Title */}
        <div className="py-16 bg-off-white">
          <div className="max-w-6xl mx-auto px-8 md:px-12 text-center">
            <h2 className="font-serif text-4xl font-bold text-[#3A2315] mb-4">Produkter</h2>
            <p className="max-w-4xl mx-auto text-left text-[#3a2315] font-bold text-[18px]">
              Upptäck vår kollektion av handgjorda möbler och skräddarsydda designlösningar
            </p>
          </div>
        </div>
        {/* Products Grid with Expandable Cards */}
        <div className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-[2px] bg-[#F9F9F9] p-[2px]">
            {products.map((product, index) => (
              <div 
                key={product.id}
                ref={(el) => (cardRefs.current[index] = el)}
                className="service-card relative bg-[#2B2B2B] flex flex-col group overflow-hidden h-[400px]"
                data-testid={`product-card-${product.id}`}
              >
                {/* Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
                  style={{ backgroundImage: `url('${product.image}')` }}
                />

                {/* Card Header - Always Visible */}
                <div 
                  className="p-8 cursor-pointer flex-1 flex flex-col justify-center text-center relative z-10"
                  onClick={() => toggleCard(index)}
                >
                  <h3 className="font-serif text-lg font-bold mb-4 tracking-wide leading-tight text-white">
                    {product.name}
                  </h3>
                  
                  {/* Category Tag */}
                  <div className="inline-block px-3 py-1 bg-[#FBD44C]/80 text-[#2B2B2B] text-sm rounded-full mb-4 mx-auto">
                    {product.category}
                  </div>
                  
                  {/* Arrow with animation */}
                  <div className="w-8 h-8 mx-auto flex items-center justify-center">
                    <span className="text-[#D1AE77] font-bold">
                      Läs mer <span className="animate-shake inline-block">→</span>
                    </span>
                  </div>
                </div>

                {/* Expandable Content Overlay */}
                {expandedCard === index && (
                  <div className="absolute inset-0 bg-[#FBD44C] p-8 flex flex-col justify-start overflow-y-auto z-20">
                    <div className="flex justify-between items-start mb-6">
                      <h3 className="font-serif text-xl font-bold text-[#2B2B2B] leading-tight pr-4">
                        {product.name}
                      </h3>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          closeCard();
                        }}
                        className="text-[#2B2B2B] hover:text-[#5B401C] transition-colors flex-shrink-0"
                        data-testid={`close-product-${product.id}`}
                      >
                        <ChevronDown className="h-5 w-5" />
                      </button>
                    </div>
                    
                    <div className="text-[#2B2B2B] text-sm leading-relaxed space-y-4">
                      <p>{product.description}</p>
                      
                      <div>
                        <h4 className="font-semibold mb-1">Material:</h4>
                        <p className="text-sm">{product.materials}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-1">Anpassning:</h4>
                        <p className="text-sm">{product.customization}</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-[#AD8C44]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            ))}
          </div>
        </div>
        
        {/* Production Information Link */}
        <div className="py-16 bg-off-white">
          <div className="max-w-6xl mx-auto px-8 md:px-12 text-center">
            <a 
              href="/assets/nordi_production_2023-1_1754761513396.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#AD8C44] text-white font-semibold rounded-lg hover:bg-[#936F39] transition-colors duration-300 shadow-lg hover:shadow-xl"
              data-testid="production-info-link"
            >
              Läs mer om vår produktion
              <span className="animate-shake inline-block">→</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}