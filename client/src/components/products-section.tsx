import { useState } from 'react';
import { useLanguage } from '@/hooks/use-language';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

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
  }
];

export function ProductsSection() {
  const { t } = useLanguage();
  const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openProductModal = (product: typeof products[0]) => {
    setSelectedProduct(product);
    setCurrentImageIndex(0);
  };

  const closeModal = () => {
    setSelectedProduct(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (selectedProduct) {
      // For now, just cycle the same image since we have one per product
      setCurrentImageIndex(0);
    }
  };

  const prevImage = () => {
    if (selectedProduct) {
      // For now, just cycle the same image since we have one per product
      setCurrentImageIndex(0);
    }
  };

  return (
    <>
      <section id="products" className="py-20 bg-off-white">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="font-serif text-4xl font-bold text-dark-brown mb-4">
              Produkter
            </h2>
            <p className="text-xl text-[#5B401C] max-w-3xl mx-auto">
              Upptäck vår kollektion av handgjorda möbler och skräddarsydda designlösningar
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2px] bg-[#F9F9F9] p-[2px]">
            {products.map((product) => (
              <div 
                key={product.id} 
                className="group cursor-pointer"
                onClick={() => openProductModal(product)}
                data-testid={`product-card-${product.id}`}
              >
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 text-left relative overflow-hidden h-[400px] flex flex-col transition-all duration-300 hover:shadow-md">
                  <div className="relative h-48 mb-4 overflow-hidden rounded-lg">
                    <img 
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-dark-brown/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-serif text-lg font-bold text-dark-brown mb-2 group-hover:text-[#AD8C44] transition-colors duration-300">
                        {product.name}
                      </h3>
                      <div className="inline-block px-3 py-1 bg-[#FBD44C]/20 text-[#5B401C] text-sm rounded-full mb-3">
                        {product.category}
                      </div>
                    </div>
                    
                    <div className="mt-auto">
                      <span className="text-[#5B401C] text-sm font-medium group-hover:text-[#AD8C44] transition-colors duration-300">
                        Läs mer →
                      </span>
                    </div>
                  </div>
                  
                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-[#AD8C44]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-4xl max-h-[90vh] overflow-y-auto relative">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 p-2 bg-white/90 rounded-full hover:bg-white transition-colors duration-200"
              data-testid="close-product-modal"
            >
              <X className="h-5 w-5 text-dark-brown" />
            </button>
            
            <div className="grid lg:grid-cols-2 gap-8 p-8">
              {/* Image Gallery */}
              <div className="relative">
                <div className="aspect-square rounded-lg overflow-hidden mb-4">
                  <img 
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              {/* Product Details */}
              <div className="flex flex-col justify-center">
                <div className="inline-block px-4 py-2 bg-[#FBD44C]/20 text-[#5B401C] text-sm rounded-full mb-4 w-fit">
                  {selectedProduct.category}
                </div>
                
                <h2 className="font-serif text-3xl font-bold text-dark-brown mb-6">
                  {selectedProduct.name}
                </h2>
                
                <p className="text-[#5B401C] text-lg leading-relaxed mb-6">
                  {selectedProduct.description}
                </p>
                
                <div className="space-y-4 mb-8">
                  <div>
                    <h4 className="font-semibold text-dark-brown mb-2">Material:</h4>
                    <p className="text-[#5B401C]">{selectedProduct.materials}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-dark-brown mb-2">Anpassning:</h4>
                    <p className="text-[#5B401C]">{selectedProduct.customization}</p>
                  </div>
                </div>
                
                <button 
                  className="bg-[#FBD44C] text-[#5B401C] px-8 py-3 rounded-lg font-semibold hover:bg-[#FBD44C]/90 transition-colors duration-300 w-fit"
                  onClick={closeModal}
                  data-testid="contact-about-product"
                >
                  Kontakta oss för offert
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}