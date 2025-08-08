import { useState } from 'react';
import { useLanguage } from '@/hooks/use-language';

const projects = [
  // 2025 Projects
  {
    id: 1,
    title: "Utemöbler restaurang",
    description: "Skräddarsydd utemiljö för restaurang i Hagastaden",
    category: "restaurant",
    year: 2025,
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    tags: ["Restaurant", "Utemiljö"]
  },
  {
    id: 2,
    title: "Skräddarsydd utemiljö",
    description: "Specialdesignad utemiljö på Östermalm",
    category: "residential",
    year: 2025,
    image: "https://images.unsplash.com/photo-1631889993959-41b4e9c6e3c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    tags: ["Residential", "Utemiljö"]
  },
  {
    id: 3,
    title: "Skräddarsydd inne- och utemiljö",
    description: "Komplett inredningslösning i Stockholm City",
    category: "commercial",
    year: 2025,
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    tags: ["Commercial", "Inredning"]
  },
  {
    id: 4,
    title: "Parasollösningar hotell",
    description: "Specialanpassade parasollösningar för hotell i Stockholms skärgård",
    category: "hotel",
    year: 2025,
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    tags: ["Hotel", "Utemiljö"]
  },
  {
    id: 5,
    title: "KA-uppdrag nybyggnation kontor",
    description: "Kontrollansvar för nybyggnation av kontorsbyggnad i Bro",
    category: "office",
    year: 2025,
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    tags: ["Office", "KA-uppdrag"]
  },
  // 2024 Projects
  {
    id: 6,
    title: "Hotellinredning Bålsta",
    description: "Komplett hotellinredning i Bålsta",
    category: "hotel",
    year: 2024,
    image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    tags: ["Hotel", "Inredning"]
  },
  {
    id: 7,
    title: "Hotellinredning Bro",
    description: "Hotellprojekt i Bro med skräddarsydda lösningar",
    category: "hotel",
    year: 2024,
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    tags: ["Hotel", "Inredning"]
  },
  {
    id: 8,
    title: "Golvprojekt industrilokal",
    description: "Golvsanering och installation i industrilokal, Knivsta",
    category: "industrial",
    year: 2024,
    image: "https://images.unsplash.com/photo-1606744824163-985d376605aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    tags: ["Industrial", "Golv"]
  },
  {
    id: 9,
    title: "Butiksinredning Örebro",
    description: "Komplett butiksinredning i Örebro",
    category: "retail",
    year: 2024,
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    tags: ["Butik", "Inredning"]
  },
  {
    id: 10,
    title: "KA-uppdrag nybyggnation skola",
    description: "Kontrollansvar för nybyggnation av skola i Nacka",
    category: "education",
    year: 2024,
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    tags: ["Skola", "KA-uppdrag"]
  },
  {
    id: 11,
    title: "Kebabrestaurang Västerås",
    description: "Komplett restauranginredning i Västerås",
    category: "restaurant",
    year: 2024,
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    tags: ["Restaurant", "Inredning"]
  },
  // 2023 Projects
  {
    id: 12,
    title: "Gardinlösning hotell Stockholm",
    description: "Specialanpassade gardinlösningar för hotell i Stockholm",
    category: "hotel",
    year: 2023,
    image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    tags: ["Hotel", "Gardiner"]
  },
  {
    id: 13,
    title: "Omklädnad kontorslandskap",
    description: "Omklädning av kontorsmöbler i Solna",
    category: "office",
    year: 2023,
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    tags: ["Office", "Omklädnad"]
  },
  {
    id: 14,
    title: "Specialtillverkning restaurang",
    description: "Specialtillverkad inredning för restaurang i Solna",
    category: "restaurant",
    year: 2023,
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    tags: ["Restaurant", "Specialtillverkning"]
  },
  {
    id: 15,
    title: "Butiksinredning hela Sverige",
    description: "Butiksinredningsprojekt över hela Sverige",
    category: "retail",
    year: 2023,
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    tags: ["Butik", "Nationellt"]
  },
  // 2022 Projects  
  {
    id: 16,
    title: "Omklädnad kontorsinredning",
    description: "Renovering av kontorsinredning i Stockholm",
    category: "office",
    year: 2022,
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    tags: ["Office", "Omklädnad"]
  },
  {
    id: 17,
    title: "Nyproduktion fast inredning",
    description: "Fast inredning för hotell i Stockholm",
    category: "hotel",
    year: 2022,
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    tags: ["Hotel", "Fast inredning"]
  },
  {
    id: 18,
    title: "Speciallösning bord restaurang",
    description: "Skräddarsydda bordslösningar för restaurang i Stockholm",
    category: "restaurant",
    year: 2022,
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    tags: ["Restaurant", "Speciallösning"]
  }
];

const filterOptions = [
  { id: 'all', label: 'Alla Projekt' },
  { id: 'hotel', label: 'Hotell' },
  { id: 'office', label: 'Kontor' },
  { id: 'restaurant', label: 'Restaurang' },
  { id: 'retail', label: 'Butik' },
  { id: 'residential', label: 'Bostäder' },
  { id: 'industrial', label: 'Industri' }
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
              <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 text-center relative overflow-hidden h-80 flex flex-col justify-center transition-all duration-300 hover:shadow-md">
                <div className="absolute top-4 right-4 bg-warm-gold text-dark-brown px-3 py-1 rounded-full text-sm font-semibold">
                  {project.year}
                </div>
                <h3 className="font-serif text-xl font-bold text-dark-brown mb-4 tracking-wide">
                  {project.title}
                </h3>
                <p className="text-dark-grey mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6 justify-center">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="bg-[#AD8C44]/10 text-[#AD8C44] text-xs px-2 py-1 rounded font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
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
