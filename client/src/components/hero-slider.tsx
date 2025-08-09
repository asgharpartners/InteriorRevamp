import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '@/hooks/use-language';

const slides = [
  {
    image: "/assets/clarion_tapto_1754760556876.jpg",
    titleKey: "hero.slide1.title",
    subtitleKey: "hero.slide1.subtitle"
  },
  {
    image: "/assets/Screenshot 2025-07-14 at 21.16.36_1754760595448.png",
    titleKey: "hero.slide2.title", 
    subtitleKey: "hero.slide2.subtitle"
  },
  {
    image: "/assets/Screenshot 2025-07-14 at 21.18.15_1754760563509.png",
    titleKey: "hero.slide3.title",
    subtitleKey: "hero.slide3.subtitle"
  },
  {
    image: "/assets/707.6_1754760649131.jpg",
    titleKey: "hero.slide4.title",
    subtitleKey: "hero.slide4.subtitle"
  },
  {
    image: "/assets/707.9_1754760653675.jpg",
    titleKey: "hero.slide5.title",
    subtitleKey: "hero.slide5.subtitle"
  },
  {
    image: "/assets/DAR-06_1754760665742.jpg",
    titleKey: "hero.slide6.title",
    subtitleKey: "hero.slide6.subtitle"
  },
  {
    image: "/assets/DSC02291_1754760673373.JPG",
    titleKey: "hero.slide7.title",
    subtitleKey: "hero.slide7.subtitle"
  },
  {
    image: "/assets/IMG_1568_1754760681179.jpg",
    titleKey: "hero.slide8.title",
    subtitleKey: "hero.slide8.subtitle"
  },
  {
    image: "/assets/IMG_1600_1754760687145.jpg",
    titleKey: "hero.slide9.title",
    subtitleKey: "hero.slide9.subtitle"
  },
  {
    image: "/assets/IMG_1597_1754760693613.jpg",
    titleKey: "hero.slide10.title",
    subtitleKey: "hero.slide10.subtitle"
  },
  {
    image: "/assets/Royal_Hotel_Lobby_-_Swan_chairs_1754760702839.jpg",
    titleKey: "hero.slide11.title",
    subtitleKey: "hero.slide11.subtitle"
  }
];

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { t } = useLanguage();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const previousSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section 
      id="hero" 
      data-section="hero"
      className="slider-container" 
      style={{ height: '100vh', position: 'relative' }}
    >
      <div 
        className="slider-track h-full"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="slider-slide relative group cursor-pointer">
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url('${slide.image}')` }}
            />
            <div className="absolute inset-0 bg-dark-brown/40 group-hover:bg-dark-brown/60 transition-all duration-500" />
            <div className="absolute inset-0 flex items-center justify-center text-center text-white">
              <div className="max-w-4xl px-4 opacity-100 transition-opacity duration-500">
                <h2 className="font-serif text-3xl md:text-5xl font-bold mb-4 text-shadow">
                  {t(slide.titleKey)}
                </h2>
                <p className="text-lg md:text-xl text-white/90 text-shadow">
                  {t(slide.subtitleKey)}
                </p>
              </div>
            </div>
            
            {/* Scroll cue arrow - White */}
            {index === currentSlide && (
              <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 animate-bounce">
                <div className="w-6 h-6 border-r-2 border-b-2 border-white transform rotate-45"></div>
              </div>
            )}
          </div>
        ))}
      </div>
      
      {/* Navigation Arrows - White Icons */}
      <button 
        onClick={previousSlide}
        className="absolute left-8 top-1/2 transform -translate-y-1/2 text-white hover:text-[#FBD44C] text-3xl transition-colors duration-300 z-10"
      >
        <ChevronLeft className="h-8 w-8 animate-shake" />
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-8 top-1/2 transform -translate-y-1/2 text-white hover:text-[#FBD44C] text-3xl transition-colors duration-300 z-10"
      >
        <ChevronRight className="h-8 w-8 animate-shake" />
      </button>
      
      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? 'bg-white' : 'bg-white/50 hover:bg-white'
            }`}
          />
        ))}
      </div>
    </section>
  );
}
