import { useState } from 'react';
import { useLanguage } from '@/hooks/use-language';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const translations = {
  sv: {
    sectionTitle: "Våra Projekt",
    sectionSubtitle: "Utforska vårt portfolio av färdigställda projekt inom olika sektorer",
    viewProject: "Visa Projekt",
    filters: {
      all: "Alla",
      hotel: "Hotell",
      office: "Kontor", 
      restaurant: "Restaurang",
      store: "Butik",
      other: "Övrigt"
    },
    closeModal: "Stäng",
    projectDescription: "Projektbeskrivning",
    testimonial: "Kundutlåtande"
  },
  en: {
    sectionTitle: "Our Projects",
    sectionSubtitle: "Explore our portfolio of completed projects across various sectors",
    viewProject: "View Project",
    filters: {
      all: "All",
      hotel: "Hotel",
      office: "Office",
      restaurant: "Restaurant", 
      store: "Store",
      other: "Other"
    },
    closeModal: "Close",
    projectDescription: "Project Description",
    testimonial: "Client Testimonial"
  }
};

// Project data with authentic sample projects
const projects = [
  {
    id: 1,
    name: "Grand Hotel Stockholm Lobby",
    type: "hotel",
    location: "Stockholm, Sweden",
    coverImage: "/api/placeholder/400/300",
    images: [
      "/api/placeholder/800/600",
      "/api/placeholder/800/600", 
      "/api/placeholder/800/600",
      "/api/placeholder/800/600"
    ],
    description: {
      sv: "Komplett renovering av Grand Hotel Stockholms lobbyn med fokus på skandinavisk elegans och funktionalitet. Projektet omfattade möbeldesign, belysning och materialval som speglar hotellets historiska karaktär samtidigt som det möter moderna gästbehov.",
      en: "Complete renovation of Grand Hotel Stockholm's lobby focusing on Scandinavian elegance and functionality. The project included furniture design, lighting, and material selection that reflects the hotel's historical character while meeting modern guest needs."
    },
    testimonial: {
      sv: "Nils Holger Design förvandlade vår lobby till en välkomnande och elegant miljö som våra gäster älskar. Deras förståelse för vår varumärkesidentitet var exceptionell.",
      en: "Nils Holger Design transformed our lobby into a welcoming and elegant environment that our guests love. Their understanding of our brand identity was exceptional."
    },
    testimonialAuthor: "Anna Lindström, Hotel Manager"
  },
  {
    id: 2,
    name: "Tech Startup Office",
    type: "office",
    location: "Göteborg, Sweden",
    coverImage: "/api/placeholder/400/300",
    images: [
      "/api/placeholder/800/600",
      "/api/placeholder/800/600",
      "/api/placeholder/800/600"
    ],
    description: {
      sv: "Modernt kontorslandskap för växande teknikföretag med fokus på kreativitet och samarbete. Flexibla arbetszoner, mötesrum och viloytor designade för att stödja innovation och välbefinnande.",
      en: "Modern office landscape for growing tech company focusing on creativity and collaboration. Flexible work zones, meeting rooms and rest areas designed to support innovation and wellbeing."
    },
    testimonial: {
      sv: "Vårt nya kontor har revolutionerat hur vi arbetar. Designen inspirerar kreativitet och förbättrar teamsamarbetet märkbart.",
      en: "Our new office has revolutionized how we work. The design inspires creativity and noticeably improves team collaboration."
    },
    testimonialAuthor: "Erik Johansson, CEO"
  },
  {
    id: 3,
    name: "Bistro Malmö",
    type: "restaurant",
    location: "Malmö, Sweden",
    coverImage: "/api/placeholder/400/300",
    images: [
      "/api/placeholder/800/600",
      "/api/placeholder/800/600",
      "/api/placeholder/800/600",
      "/api/placeholder/800/600",
      "/api/placeholder/800/600"
    ],
    description: {
      sv: "Intim restaurangmiljö som kombinerar skandinavisk minimalism med varm atmosfär. Specialdesignade möbler och belysning skapar en unik matupplevelse som kompletterar kökchefens kulinariska vision.",
      en: "Intimate restaurant environment combining Scandinavian minimalism with warm atmosphere. Custom-designed furniture and lighting create a unique dining experience that complements the chef's culinary vision."
    },
    testimonial: {
      sv: "Designen har verkligen förhöjt vår gästers matupplevelse. Atmosfären är precis vad vi drömde om för vår restaurang.",
      en: "The design has truly elevated our guests' dining experience. The atmosphere is exactly what we dreamed of for our restaurant."
    },
    testimonialAuthor: "Maria Andersson, Restaurant Owner"
  },
  {
    id: 4,
    name: "Fashion Boutique",
    type: "store",
    location: "Stockholm, Sweden", 
    coverImage: "/api/placeholder/400/300",
    images: [
      "/api/placeholder/800/600",
      "/api/placeholder/800/600",
      "/api/placeholder/800/600"
    ],
    description: {
      sv: "Elegant butiksdesign som framhäver modevarumärkets identitet genom genomtänkt layout och belysning. Flexibla displayområden och kundzoner som skapar en premiumshoppingupplevelse.",
      en: "Elegant boutique design that highlights the fashion brand's identity through thoughtful layout and lighting. Flexible display areas and customer zones that create a premium shopping experience."
    },
    testimonial: {
      sv: "Vår nya butik har ökat försäljningen med 40% och kunderna stannar längre. Designen kommunicerar perfekt vårt varumärke.",
      en: "Our new store has increased sales by 40% and customers stay longer. The design perfectly communicates our brand."
    },
    testimonialAuthor: "Lisa Nilsson, Brand Manager"
  },
  {
    id: 5,
    name: "Corporate Headquarters",
    type: "office",
    location: "Stockholm, Sweden",
    coverImage: "/api/placeholder/400/300",
    images: [
      "/api/placeholder/800/600",
      "/api/placeholder/800/600",
      "/api/placeholder/800/600",
      "/api/placeholder/800/600"
    ],
    description: {
      sv: "Representativ huvudkontor som balanserar professionalitet med skandinavisk värme. Multifunktionella ytor för olika arbetsmetoder och imponerande entréområde som speglar företagets värderingar.",
      en: "Representative headquarters balancing professionalism with Scandinavian warmth. Multifunctional spaces for different work methods and impressive entrance area reflecting company values."
    },
    testimonial: {
      sv: "Vårt nya huvudkontor stärker vår företagskultur och imponerar på alla besökare. En investering som verkligen lönat sig.",
      en: "Our new headquarters strengthens our company culture and impresses all visitors. An investment that has truly paid off."
    },
    testimonialAuthor: "Per Eriksson, Managing Director"
  },
  {
    id: 6,
    name: "Wellness Center",
    type: "other",
    location: "Göteborg, Sweden",
    coverImage: "/api/placeholder/400/300", 
    images: [
      "/api/placeholder/800/600",
      "/api/placeholder/800/600",
      "/api/placeholder/800/600"
    ],
    description: {
      sv: "Lugnande spa- och wellnessmiljö designad för återhämtning och välbefinnande. Naturliga material och mjuk belysning skapar en harmonisk atmosfär för avkoppling och behandlingar.",
      en: "Calming spa and wellness environment designed for recovery and wellbeing. Natural materials and soft lighting create a harmonious atmosphere for relaxation and treatments."
    },
    testimonial: {
      sv: "Designen har skapat den perfekta miljön för våra kunders välbefinnande. Vi ser en tydlig ökning av återkommande besök.",
      en: "The design has created the perfect environment for our clients' wellbeing. We see a clear increase in repeat visits."
    },
    testimonialAuthor: "Helena Larsson, Spa Director"
  }
];

export default function ProjectsSection() {
  const { language } = useLanguage();
  const t = translations[language as keyof typeof translations];
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const filterOptions = [
    { id: 'all', label: t.filters.all },
    { id: 'hotel', label: t.filters.hotel },
    { id: 'office', label: t.filters.office },
    { id: 'restaurant', label: t.filters.restaurant },
    { id: 'store', label: t.filters.store },
    { id: 'other', label: t.filters.other }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.type === activeFilter);

  const openProject = (project: typeof projects[0]) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
    document.body.style.overflow = 'hidden';
  };

  const closeProject = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
    document.body.style.overflow = 'unset';
  };

  const nextImage = () => {
    if (selectedProject && currentImageIndex < selectedProject.images.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  const prevImage = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  return (
    <section id="references" className="py-20 bg-dark-brown text-off-white">
      <div className="container mx-auto px-4">
        
        {/* Filter Buttons */}
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
            >
              {option.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2px] bg-[#F9F9F9] p-[2px]">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="group cursor-pointer"
              onClick={() => openProject(project)}
            >
              <div className="project-card bg-[#2B2B2B] rounded-2xl shadow-sm border border-gray-200 overflow-hidden h-[400px] relative transition-all duration-300 hover:shadow-lg">
                {/* Cover Image */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={project.coverImage}
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-[#5B401C]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white font-semibold text-lg">{t.viewProject}</span>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6 h-36 flex flex-col justify-between">
                  <div>
                    <h4 className="font-serif text-lg font-bold text-[#fffaf7] mb-2 line-clamp-2">
                      {project.name}
                    </h4>
                    <p className="text-[#FBD44C] font-medium text-sm mb-1 capitalize">
                      {t.filters[project.type as keyof typeof t.filters]}
                    </p>
                    {project.location && (
                      <p className="text-[#fffaf7]/70 text-sm">
                        {project.location}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Detail Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              {/* Modal Header */}
              <div className="flex justify-between items-center p-6 border-b">
                <h3 className="text-2xl font-serif font-bold text-dark-brown">
                  {selectedProject.name}
                </h3>
                <button 
                  onClick={closeProject}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X className="w-6 h-6 text-gray-600" />
                </button>
              </div>

              {/* Image Gallery */}
              <div className="relative">
                <img 
                  src={selectedProject.images[currentImageIndex]}
                  alt={`${selectedProject.name} - Image ${currentImageIndex + 1}`}
                  className="w-full h-96 object-cover"
                />
                
                {/* Navigation Buttons */}
                {selectedProject.images.length > 1 && (
                  <>
                    {currentImageIndex > 0 && (
                      <button 
                        onClick={prevImage}
                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                      >
                        <ChevronLeft className="w-6 h-6" />
                      </button>
                    )}
                    {currentImageIndex < selectedProject.images.length - 1 && (
                      <button 
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                      >
                        <ChevronRight className="w-6 h-6" />
                      </button>
                    )}
                  </>
                )}

                {/* Image Counter */}
                <div className="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                  {currentImageIndex + 1} / {selectedProject.images.length}
                </div>
              </div>

              {/* Project Details */}
              <div className="p-6 space-y-6">
                {/* Project Info */}
                <div>
                  <p className="text-[#FBD44C] font-medium mb-2 capitalize">
                    {t.filters[selectedProject.type as keyof typeof t.filters]}
                    {selectedProject.location && ` • ${selectedProject.location}`}
                  </p>
                </div>

                {/* Description */}
                <div>
                  <h4 className="font-serif text-xl font-bold text-dark-brown mb-3">
                    {t.projectDescription}
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    {selectedProject.description[language as keyof typeof selectedProject.description]}
                  </p>
                </div>

                {/* Testimonial */}
                {selectedProject.testimonial && (
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="font-serif text-xl font-bold text-dark-brown mb-3">
                      {t.testimonial}
                    </h4>
                    <blockquote className="text-gray-700 italic mb-3">
                      "{selectedProject.testimonial[language as keyof typeof selectedProject.testimonial]}"
                    </blockquote>
                    <cite className="text-[#AD8C44] font-medium">
                      — {selectedProject.testimonialAuthor}
                    </cite>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}