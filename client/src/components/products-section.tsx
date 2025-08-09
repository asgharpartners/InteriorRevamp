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
        <div className="mb-16">
          <h2 className="font-serif text-4xl font-bold text-dark-brown mb-4 text-center">
            {t('products.title')}
          </h2>
          <p className="text-xl text-[#5B401C] max-w-2xl text-left">
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
                    : 'text-[#5B401C] hover:text-dark-brown'
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
              <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 text-left relative overflow-hidden h-80 flex flex-col justify-center transition-all duration-300 hover:shadow-md">
                <h3 className="font-serif text-xl font-bold text-dark-brown mb-4 tracking-wide">
                  {category.name}
                </h3>
                <p className="text-[#5B401C] mb-6 leading-relaxed">
                  {category.description}
                </p>
                <Button className="bg-[#AD8C44] text-white px-6 py-2 rounded-lg font-medium hover:bg-[#AD8C44]/90 transition-all duration-300">
                  View {category.name}
                </Button>
                {/* Hover Effect */}
                <div className="absolute inset-0 bg-[#AD8C44]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
