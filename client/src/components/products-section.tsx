import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/hooks/use-language';

const productCategories = [
  {
    name: "Chairs",
    description: "Dining chairs, lounge chairs, and accent seating",
    image: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
  },
  {
    name: "Tables", 
    description: "Dining tables, coffee tables, and work surfaces",
    image: "https://images.unsplash.com/photo-1549497538-303791108f95?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
  },
  {
    name: "Sofas",
    description: "Sectionals, loveseats, and custom seating",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
  },
  {
    name: "Cabinets",
    description: "Storage solutions and display furniture", 
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
  },
  {
    name: "Lighting",
    description: "Pendant lights, floor lamps, and fixtures",
    image: "https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
  },
  {
    name: "Textiles",
    description: "Cushions, throws, and upholstery fabrics",
    image: "https://images.unsplash.com/photo-1631889993959-41b4e9c6e3c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
  }
];

export function ProductsSection() {
  const [activeTab, setActiveTab] = useState('custom');
  const { t } = useLanguage();

  const tabs = [
    { id: 'custom', label: t('products.tabs.custom') },
    { id: 'standard', label: t('products.tabs.standard') },
    { id: 'special', label: t('products.tabs.special') }
  ];

  return (
    <section id="products" className="py-20 bg-off-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl font-bold text-dark-brown mb-4">
            {t('products.title')}
          </h2>
          <p className="text-xl text-dark-grey max-w-2xl mx-auto">
            {t('products.subtitle')}
          </p>
        </div>
        
        {/* Product Tabs */}
        <div className="flex justify-center mb-12">
          <div className="flex bg-dark-grey/10 rounded-lg p-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  activeTab === tab.id
                    ? 'bg-dark-brown text-off-white'
                    : 'text-dark-grey hover:text-dark-brown'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
        
        {/* Product Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {productCategories.map((category, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg mb-6">
                <img 
                  src={category.image}
                  alt={`${category.name} collection`}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-dark-brown/20 group-hover:bg-dark-brown/40 transition-all duration-300" />
                <div className="absolute bottom-4 left-4 right-4">
                  <Button className="w-full bg-off-white/90 text-dark-brown hover:bg-off-white transition-colors">
                    View {category.name}
                  </Button>
                </div>
              </div>
              <h3 className="font-serif text-xl font-bold text-dark-brown mb-2">
                {category.name}
              </h3>
              <p className="text-dark-grey">
                {category.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
