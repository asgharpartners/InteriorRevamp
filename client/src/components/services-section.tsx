import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '@/hooks/use-language';

const services = [
  {
    title: "OFFENTLIG INREDNING",
    description: "Specialiserad inredning för hotell, restauranger, kontor och offentliga miljöer.",
    longDescription: "Vi skapar funktionella och estetiska miljöer som förstärker din verksamhets identitet. Från koncept till implementation arbetar vi med hållbara material och genomtänkt design som står emot intensiv användning."
  },
  {
    title: "PROJEKTERING",
    description: "Teknisk planering och ritningar för professionell genomförande.",
    longDescription: "Våra erfarna projektörer utvecklar detaljerade tekniska lösningar som säkerställer att ditt projekt genomförs smidigt. Vi hanterar allt från 3D-visualiseringar till bygghandlingar."
  },
  {
    title: "PROJEKTLEDNING",
    description: "Fullständig projektövervakning från start till slutleverans.",
    longDescription: "Vår projektledning koordinerar alla aspekter av ditt projekt - tidplan, budget, leverantörer och kvalitetskontroll. Du får en dedicated kontaktperson som säkerställer att allt flyter på enligt plan."
  },
  {
    title: "BYGGNATION & RENOVERING",
    description: "Professionell byggnation och renovering av kommersiella utrymmen.",
    longDescription: "Från mindre renoveringar till kompletta ombyggnationer. Vi specialiserar oss på hållbara byggmetoder och högkvalitativa material som ger långvariga resultat."
  },
  {
    title: "KONTROLLANSVAR (KA)",
    description: "Certifierad byggövervakning och kvalitetssäkring enligt gällande regelverk.",
    longDescription: "Våra auktoriserade KA-ansvariga säkerställer att alla arbeten uppfyller svenska byggstandarder. Vi hanterar all dokumentation och inspektioner för trygg projektgenomförande."
  },
  {
    title: "EGEN TILLVERKNING",
    description: "Skräddarsydda möbler och inredningslösningar från eget snickeri.",
    longDescription: "I vår egen verkstad tillverkar vi unika möbler och inredningsdetaljer. Varje stycke är handgjort med traditionella tekniker och hållbara material som håller i generationer."
  },
  {
    title: "OMKLÄDNAD & REPARATION",
    description: "Professionell restaurering och förnyelse av befintliga möbler.",
    longDescription: "Ge dina möbler nytt liv med vår expertis inom omklädnad och reparation. Vi arbetar med premium textilier och läder för att bevara möblernas karaktär samtidigt som vi förlänger deras livslängd."
  }
];

export function ServicesSection() {
  const { t } = useLanguage();
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const toggleCard = (index: number) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  const scrollToSection = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="services" className="bg-white">
      {/* Section Title */}
      <div className="text-center py-16 bg-off-white">
        <h2 className="font-serif text-4xl font-bold text-dark-brown mb-4">Tjänster</h2>
        <p className="text-dark-grey max-w-2xl mx-auto px-4">
          Professionella inrednings- och byggtjänster för offentliga miljöer
        </p>
      </div>

      {/* Services Grid */}
      <div className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 min-h-[400px]">
          {services.map((service, index) => (
            <div 
              key={index}
              className="relative bg-[#2B2B2B] border-r border-b border-white/10 last:border-r-0 md:last:border-r-0 flex flex-col group overflow-hidden"
              style={{ minHeight: '400px' }}
            >
              {/* Card Header - Always Visible */}
              <div 
                className="p-8 cursor-pointer flex-1 flex flex-col justify-center text-center relative z-10"
                onClick={() => toggleCard(index)}
                data-testid={`service-card-${index}`}
              >
                <h3 className="font-serif text-lg font-bold text-off-white mb-4 tracking-wide leading-tight">
                  {service.title}
                </h3>
                
                {/* Arrow Icon */}
                <div className={`w-8 h-8 mx-auto flex items-center justify-center transition-all duration-300 ${
                  expandedCard === index ? 'transform rotate-180' : ''
                }`}>
                  <ChevronDown 
                    size={24} 
                    className="text-[#AD8C44]" 
                  />
                </div>
              </div>

              {/* Expanded Content Overlay */}
              {expandedCard === index && (
                <div className="absolute inset-0 bg-off-white/95 backdrop-blur-sm z-20 flex flex-col justify-center p-8 animate-in slide-in-from-bottom duration-300">
                  <div className="text-center">
                    <h3 className="font-serif text-lg font-bold text-dark-brown mb-4 tracking-wide">
                      {service.title}
                    </h3>
                    
                    <p className="text-dark-grey mb-4 text-sm leading-relaxed">
                      {service.description}
                    </p>
                    
                    <p className="text-dark-brown text-xs leading-relaxed mb-6">
                      {service.longDescription}
                    </p>
                    
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        scrollToSection('contact');
                      }}
                      className="text-[#AD8C44] text-sm font-semibold hover:text-[#AD8C44]/80 transition-colors duration-200 inline-flex items-center gap-1"
                      data-testid={`service-read-more-${index}`}
                    >
                      Läs mer →
                    </button>
                  </div>
                </div>
              )}

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-[#AD8C44]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
