import { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '@/hooks/use-language';

const projects = [
  {
    before: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800",
    after: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800",
    title: "Restaurant Smak Transformation",
    description: "Complete renovation of dining space with custom seating and ambient lighting design"
  },
  {
    before: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800",
    after: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800",
    title: "Modern Office Renovation",
    description: "Transformation of corporate workspace with Scandinavian design principles"
  },
  {
    before: "https://images.unsplash.com/photo-1606744824163-985d376605aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800",
    after: "https://images.unsplash.com/photo-1631889993959-41b4e9c6e3c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800",
    title: "Residential Living Space",
    description: "Complete home renovation with custom furniture and natural materials"
  }
];

export function BeforeAfterSlider() {
  const [currentProject, setCurrentProject] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging || !sliderRef.current) return;

    const rect = sliderRef.current.getBoundingClientRect();
    const percentage = Math.max(0, Math.min(100, ((e.clientX - rect.left) / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleClick = (e: React.MouseEvent) => {
    if (!sliderRef.current) return;

    const rect = sliderRef.current.getBoundingClientRect();
    const percentage = Math.max(0, Math.min(100, ((e.clientX - rect.left) / rect.width) * 100));
    setSliderPosition(percentage);
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging]);

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
    setSliderPosition(50);
  };

  const previousProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
    setSliderPosition(50);
  };

  const currentProjectData = projects[currentProject];

  return (
    <section className="py-20 bg-dark-brown text-[#FFFAF7]">
      <div className="container mx-auto px-4">
        <div className="mb-16">
          <h2 className="font-serif text-4xl font-bold mb-4 text-center">
            {t('beforeAfter.title')}
          </h2>
          <p className="text-xl max-w-2xl text-left">
            {t('beforeAfter.subtitle')}
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div 
            ref={sliderRef}
            className="comparison-slider rounded-lg overflow-hidden shadow-2xl mb-8 h-96 relative cursor-ew-resize"
            onClick={handleClick}
          >
            {/* Before image (base layer) */}
            <img 
              src={currentProjectData.before}
              alt="Before renovation"
              className="w-full h-full object-cover"
            />
            
            {/* After image (overlay) */}
            <div 
              className="after-image"
              style={{ width: `${sliderPosition}%` }}
            >
              <img 
                src={currentProjectData.after}
                alt="After renovation"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Draggable handle */}
            <div 
              className="comparison-handle"
              style={{ left: `${sliderPosition}%` }}
              onMouseDown={handleMouseDown}
            />
          </div>
          
          <div className="text-left mb-8">
            <h3 className="font-serif text-2xl font-bold mb-2 text-[#FFFAF7]">
              {currentProjectData.title}
            </h3>
            <p className="text-lg text-[#FFFAF7]">
              {currentProjectData.description}
            </p>
          </div>
          
          {/* Project Navigation */}
          <div className="flex justify-center items-center space-x-4">
            <button 
              onClick={previousProject}
              className="flex items-center px-6 py-3 bg-[#FBD44C] text-dark-brown rounded-lg hover:bg-opacity-90 transition-colors"
            >
              <ChevronLeft className="h-4 w-4 mr-2" />
              Previous
            </button>
            <div className="flex items-center space-x-2">
              {projects.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full ${
                    index === currentProject ? 'bg-[#FBD44C]' : 'bg-[#FFFAF7]/30'
                  }`}
                />
              ))}
            </div>
            <button 
              onClick={nextProject}
              className="flex items-center px-6 py-3 bg-[#FBD44C] text-dark-brown rounded-lg hover:bg-opacity-90 transition-colors"
            >
              Next
              <ChevronRight className="h-4 w-4 ml-2" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
