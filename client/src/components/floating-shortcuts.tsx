import { useState, useEffect, useRef } from 'react';
import { useLanguage } from '@/hooks/use-language';
import { ChevronUp, Menu } from 'lucide-react';

interface FloatingShortcutsProps {
  className?: string;
}

export function FloatingShortcuts({ className = "" }: FloatingShortcutsProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const { language } = useLanguage();
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Define shortcuts based on language
  const shortcuts = [
    { id: 'hero', label: language === 'sv' ? 'Intro' : 'Intro' },
    { id: 'services', label: language === 'sv' ? 'Tjänster' : 'Services' },
    { id: 'process', label: language === 'sv' ? 'Vår Process' : 'Our Process' },
    { id: 'products', label: language === 'sv' ? 'Produkter' : 'Products' },
    { id: 'references', label: language === 'sv' ? 'Referensprojekt' : 'Reference Projects' },
    { id: 'about', label: language === 'sv' ? 'Om Oss' : 'About Us' },
    { id: 'contact', label: language === 'sv' ? 'Kontakt' : 'Contact' }
  ];

  // Handle scroll visibility and active section detection
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsVisible(scrollY > 400);

      // Detect active section
      const sections = shortcuts.map(s => s.id);
      let currentSection = '';
      
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            currentSection = sectionId;
            break;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [shortcuts]);

  // Handle mouse events for hover behavior
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseEnter = () => {
      setIsMenuVisible(true);
    };

    const handleMouseLeave = () => {
      setIsMenuVisible(false);
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isMenuVisible) {
        setIsMenuVisible(false);
        buttonRef.current?.focus();
      }
    };

    container.addEventListener('mouseenter', handleMouseEnter);
    container.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('keydown', handleEscape);
    
    return () => {
      container.removeEventListener('mouseenter', handleMouseEnter);
      container.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isMenuVisible]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
      });
      setIsMenuVisible(false);
    }
  };

  const handleButtonFocus = () => {
    setIsMenuVisible(true);
  };

  const handleButtonBlur = (event: React.FocusEvent) => {
    // Only hide menu if focus is moving outside the container
    if (!containerRef.current?.contains(event.relatedTarget as Node)) {
      setIsMenuVisible(false);
    }
  };

  if (!isVisible) return null;

  return (
    <div ref={containerRef} className={`fixed bottom-6 right-6 z-40 ${className}`}>
      {/* Floating Button */}
      <button
        ref={buttonRef}
        onFocus={handleButtonFocus}
        onBlur={handleButtonBlur}
        className={`
          group relative
          w-11 h-11 md:w-12 md:h-12
          bg-[#F5F1EA] hover:bg-white
          border-2 border-[#3E2516]
          rounded-full
          shadow-lg hover:shadow-xl
          transition-all duration-300 ease-out
          focus:outline-none focus:ring-2 focus:ring-[#AD8C44] focus:ring-offset-2
          hover:scale-105
        `}
        aria-label={language === 'sv' ? 'Genvägar' : 'Shortcuts'}
        aria-expanded={isMenuVisible}
        data-testid="floating-shortcuts-button"
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <Menu className="w-5 h-5 md:w-6 md:h-6 text-[#3E2516] transition-transform duration-300" />
        </div>
        
        {/* Tooltip */}
        <div className="absolute bottom-full right-0 mb-2 px-3 py-1 bg-[#3E2516] text-[#F5F1EA] text-sm rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
          {language === 'sv' ? 'Genvägar' : 'Shortcuts'}
          <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-[#3E2516]"></div>
        </div>
      </button>

      {/* Shortcuts Menu */}
      {isMenuVisible && (
        <div
          ref={menuRef}
          className={`
            absolute bottom-16 right-0
            w-72 md:w-80
            max-h-96 overflow-y-auto
            bg-[#F5F1EA] 
            border border-[#3E2516]/20
            rounded-lg shadow-xl
            py-2
            animate-in slide-in-from-bottom-2 fade-in duration-200
          `}
          role="menu"
          aria-orientation="vertical"
        >
          <div className="px-4 py-2 border-b border-[#3E2516]/10">
            <h3 className="text-[#3E2516] font-semibold text-sm uppercase tracking-wide">
              {language === 'sv' ? 'Genvägar' : 'Shortcuts'}
            </h3>
          </div>
          
          <div className="py-1">
            {shortcuts.map((shortcut, index) => (
              <button
                key={shortcut.id}
                onClick={() => scrollToSection(shortcut.id)}
                className={`
                  w-full text-left px-4 py-3
                  text-[#3E2516] hover:text-[#2B1B0F]
                  hover:bg-[#3E2516]/5
                  transition-colors duration-150
                  focus:outline-none focus:bg-[#3E2516]/10
                  ${activeSection === shortcut.id ? 'bg-[#F2DC74]/30 border-r-2 border-[#AD8C44]' : ''}
                `}
                role="menuitem"
                tabIndex={isMenuVisible ? 0 : -1}
                data-testid={`shortcut-${shortcut.id}`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    scrollToSection(shortcut.id);
                  }
                }}
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">{shortcut.label}</span>
                  {activeSection === shortcut.id && (
                    <div className="w-2 h-2 bg-[#AD8C44] rounded-full"></div>
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Mobile backdrop */}
      {isMenuVisible && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm md:hidden -z-10"
          onClick={() => setIsMenuVisible(false)}
        />
      )}
    </div>
  );
}