import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '@/hooks/use-language';

const slides = [
  {
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080",
    titleKey: "hero.slide1.title",
    subtitleKey: "hero.slide1.subtitle"
  },
  {
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080",
    titleKey: "hero.slide2.title", 
    subtitleKey: "hero.slide2.subtitle"
  },
  {
    image: "https://images.unsplash.com/photo-1631889993959-41b4e9c6e3c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080",
    titleKey: "hero.slide3.title",
    subtitleKey: "hero.slide3.subtitle"
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
              <div className="max-w-4xl px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <h2 className="font-serif text-3xl md:text-5xl font-bold mb-4">
                  {t(slide.titleKey)}
                </h2>
                <p className="text-lg md:text-xl text-white/80">
                  {t(slide.subtitleKey)}
                </p>
              </div>
            </div>
            
            {/* Scroll cue arrow */}
            {index === currentSlide && (
              <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 animate-bounce">
                <div className="w-6 h-6 border-r-2 border-b-2 border-white transform rotate-45"></div>
              </div>
            )}
          </div>
        ))}
      </div>
      
      {/* Navigation Arrows */}
      <button 
        onClick={previousSlide}
        className="absolute left-8 top-1/2 transform -translate-y-1/2 text-white text-3xl hover:text-warm-gold transition-colors z-10"
      >
        <ChevronLeft className="h-8 w-8" />
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-8 top-1/2 transform -translate-y-1/2 text-white text-3xl hover:text-warm-gold transition-colors z-10"
      >
        <ChevronRight className="h-8 w-8" />
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
