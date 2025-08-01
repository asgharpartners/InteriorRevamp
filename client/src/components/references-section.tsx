import { useState } from 'react';
import { useLanguage } from '@/hooks/use-language';

const projects = [
  {
    id: 1,
    title: "Hotel Clarion Renovation",
    description: "Complete lobby and guest room renovation with custom furniture and lighting design.",
    category: "hotel",
    year: 2023,
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    tags: ["Hotel", "Commercial"]
  },
  {
    id: 2,
    title: "Tech Startup Office",
    description: "Open-plan workspace design promoting collaboration and creativity.",
    category: "office",
    year: 2023,
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    tags: ["Office", "Corporate"]
  },
  {
    id: 3,
    title: "Bistro Norden",
    description: "Intimate dining space with custom banquette seating and acoustic solutions.",
    category: "restaurant",
    year: 2022,
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    tags: ["Restaurant", "Hospitality"]
  },
  {
    id: 4,
    title: "Stockholm Apartment",
    description: "Complete interior renovation of a historic apartment with modern amenities.",
    category: "residential",
    year: 2023,
    image: "https://images.unsplash.com/photo-1631889993959-41b4e9c6e3c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    tags: ["Residential", "Private"]
  },
  {
    id: 5,
    title: "Executive Desk Collection",
    description: "Bespoke office furniture series crafted from sustainable Swedish oak.",
    category: "furniture",
    year: 2022,
    image: "https://images.unsplash.com/photo-1606744824163-985d376605aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    tags: ["Furniture", "Custom"]
  },
  {
    id: 6,
    title: "Hotel Nordic Spa",
    description: "Wellness-focused hotel design incorporating natural materials and calming aesthetics.",
    category: "hotel",
    year: 2021,
    image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    tags: ["Hotel", "Boutique"]
  }
];

const filterOptions = [
  { id: 'all', label: 'All Projects' },
  { id: 'hotel', label: 'Hotels' },
  { id: 'office', label: 'Offices' },
  { id: 'restaurant', label: 'Restaurants' },
  { id: 'residential', label: 'Residential' },
  { id: 'furniture', label: 'Custom Furniture' }
];

export function ReferencesSection() {
  const [activeFilter, setActiveFilter] = useState('all');
  const { t } = useLanguage();

  const filteredProjects = projects.filter(project => 
    activeFilter === 'all' || project.category === activeFilter
  );

  return (
    <section id="references" className="py-20 bg-dark-brown text-off-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl font-bold mb-4">
            {t('references.title')}
          </h2>
          <p className="text-xl max-w-2xl mx-auto">
            {t('references.subtitle')}
          </p>
        </div>
        
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filterOptions.map((option) => (
            <button
              key={option.id}
              onClick={() => setActiveFilter(option.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                activeFilter === option.id
                  ? 'bg-warm-gold text-dark-brown'
                  : 'bg-off-white/10 text-off-white hover:bg-off-white/20'
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
        
        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card cursor-pointer group">
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-dark-brown/40 group-hover:bg-dark-brown/60 transition-all duration-300" />
                <div className="absolute top-4 right-4 bg-warm-gold text-dark-brown px-3 py-1 rounded-full text-sm font-semibold">
                  {project.year}
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex flex-wrap gap-2 mb-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="bg-off-white/20 text-xs px-2 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <h3 className="font-serif text-xl font-bold mb-2">
                {project.title}
              </h3>
              <p className="text-off-white/80">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
