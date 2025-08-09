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
    before: "/assets/Before 2_1754764030502.png",
    after: "/assets/After 2_1754764025506.png",
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

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
    document.body.style.cursor = 'ew-resize';
    document.body.style.userSelect = 'none';
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging || !sliderRef.current) return;

    const rect = sliderRef.current.getBoundingClientRect();
    const percentage = Math.max(0, Math.min(100, ((e.clientX - rect.left) / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    document.body.style.cursor = '';
    document.body.style.userSelect = '';
  };

  const handleClick = (e: React.MouseEvent) => {
    if (!sliderRef.current || isDragging) return;

    const rect = sliderRef.current.getBoundingClientRect();
    const percentage = Math.max(0, Math.min(100, ((e.clientX - rect.left) / rect.width) * 100));
    setSliderPosition(percentage);
  };

  // Touch handlers for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging || !sliderRef.current) return;

    const rect = sliderRef.current.getBoundingClientRect();
    const touch = e.touches[0];
    const percentage = Math.max(0, Math.min(100, ((touch.clientX - rect.left) / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      document.addEventListener('touchmove', handleTouchMove, { passive: false });
      document.addEventListener('touchend', handleTouchEnd);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
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
        <div className="mb-16 text-center">
          <h2 className="font-serif text-4xl font-bold mb-4">
            {t('beforeAfter.title')}
          </h2>
          <p className="text-xl max-w-2xl mx-auto text-left">
            {t('beforeAfter.subtitle')}
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div 
            ref={sliderRef}
            className={`comparison-slider rounded-lg overflow-hidden shadow-2xl mb-8 h-96 relative select-none ${isDragging ? 'cursor-ew-resize' : 'cursor-ew-resize'}`}
            onClick={handleClick}
          >
            {/* Before image (base layer) */}
            <img 
              src={currentProjectData.before}
              alt="Before renovation"
              className="w-full h-full object-cover pointer-events-none"
              draggable={false}
            />
            
            {/* After image (overlay) */}
            <div 
              className="after-image absolute top-0 left-0 h-full overflow-hidden"
              style={{ width: `${sliderPosition}%` }}
            >
              <img 
                src={currentProjectData.after}
                alt="After renovation"
                className="w-full h-full object-cover pointer-events-none"
                style={{ width: `${sliderRef.current?.offsetWidth || 0}px` }}
                draggable={false}
              />
            </div>
            
            {/* Draggable handle with enhanced styling */}
            <div 
              className={`comparison-handle absolute top-0 bottom-0 w-1 bg-white shadow-lg transform -translate-x-1/2 cursor-ew-resize z-10 ${isDragging ? 'shadow-2xl' : 'hover:shadow-xl'} transition-shadow duration-200`}
              style={{ left: `${sliderPosition}%` }}
              onMouseDown={handleMouseDown}
              onTouchStart={handleTouchStart}
            >
              {/* Handle indicator */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg border-2 border-gray-200 flex items-center justify-center">
                <div className="w-1 h-4 bg-gray-400 rounded-full mx-0.5"></div>
                <div className="w-1 h-4 bg-gray-400 rounded-full mx-0.5"></div>
              </div>
              
              {/* Left arrow */}
              <div className="absolute top-1/2 left-0 transform -translate-x-full -translate-y-1/2 w-0 h-0 border-t-4 border-b-4 border-r-4 border-transparent border-r-white"></div>
              
              {/* Right arrow */}
              <div className="absolute top-1/2 right-0 transform translate-x-full -translate-y-1/2 w-0 h-0 border-t-4 border-b-4 border-l-4 border-transparent border-l-white"></div>
            </div>
            
            {/* Instructional text overlay */}
            <div className="absolute bottom-4 left-4 bg-black/50 text-white px-3 py-1 rounded text-sm">
              Drag the slider to compare
            </div>
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
