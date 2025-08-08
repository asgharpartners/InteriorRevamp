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

  // Handle mouse events for hover behavior with delay
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    
    let hoverTimeout: NodeJS.Timeout | null = null;

    const handleMouseEnter = () => {
      if (hoverTimeout) {
        clearTimeout(hoverTimeout);
        hoverTimeout = null;
      }
      setIsMenuVisible(true);
    };

    const handleMouseLeave = () => {
      // Add delay to prevent menu from disappearing when moving cursor to menu
      hoverTimeout = setTimeout(() => {
        setIsMenuVisible(false);
      }, 200);
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
      if (hoverTimeout) {
        clearTimeout(hoverTimeout);
      }
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

  const handleButtonClick = () => {
    setIsMenuVisible(!isMenuVisible);
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
    <div ref={containerRef} className={`fixed top-1/2 right-6 transform -translate-y-1/2 z-40 ${className}`}>
      {/* Floating Button */}
      <button
        ref={buttonRef}
        onClick={handleButtonClick}
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
          active:scale-95
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

      {/* Hover Bridge - invisible area that connects button to menu */}
      {isMenuVisible && (
        <div 
          className="absolute top-0 right-12 w-6 h-full pointer-events-none"
          aria-hidden="true"
        />
      )}

      {/* Shortcuts Menu */}
      {isMenuVisible && (
        <div
          ref={menuRef}
          className={`
            absolute top-0 right-14
            w-40 md:w-44
            max-h-80 overflow-y-auto
            py-1 space-y-0.5
            animate-in slide-in-from-right-2 fade-in duration-200
          `}
          role="menu"
          aria-orientation="vertical"
        >
          {shortcuts.map((shortcut, index) => (
            <button
              key={shortcut.id}
              onClick={() => scrollToSection(shortcut.id)}
              className={`
                w-full text-left px-2 py-1.5
                text-xs font-bold tracking-wide uppercase
                text-[#F5F1EA] hover:text-white
                bg-[#3E2516]/80 hover:bg-[#3E2516]/90
                backdrop-blur-sm
                rounded-sm
                shadow-sm hover:shadow-md
                transition-all duration-200
                focus:outline-none focus:ring-1 focus:ring-[#AD8C44] focus:ring-offset-1
                ${activeSection === shortcut.id ? 'ring-1 ring-[#F2DC74] bg-[#3E2516]/95' : ''}
              `}
              role="menuitem"
              tabIndex={isMenuVisible ? 0 : -1}
              data-testid={`shortcut-${shortcut.id}`}
              style={{ 
                fontFamily: '"Playfair Display", "Merriweather", serif',
                fontWeight: '700'
              }}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  scrollToSection(shortcut.id);
                }
              }}
            >
              <div className="flex items-center justify-between">
                <span className="whitespace-nowrap">{shortcut.label}</span>
                {activeSection === shortcut.id && (
                  <div className="w-1.5 h-1.5 bg-[#F2DC74] rounded-full ml-2"></div>
                )}
              </div>
            </button>
          ))}
        </div>
      )}

      {/* Mobile backdrop */}
      {isMenuVisible && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm lg:hidden -z-10"
          onClick={() => setIsMenuVisible(false)}
          onTouchStart={() => setIsMenuVisible(false)}
        />
      )}
    </div>
  );
}