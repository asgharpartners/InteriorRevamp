import { useState, useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '@/hooks/use-language';
import projektledningImage from '@assets/image_1754741347160.png';
import reparationImage from '@assets/image_1754755683706.png';
import projekteringImage from '@assets/image_1754754947827.png';
import designradgivningImage from '@assets/designradgivning_portfolio.png';
import byggnationImage from '@assets/image_1754753437709.png';
import kaImage from '@assets/image_1754753810032.png';
import oldDesignradgivningImage from '@assets/image_1754754368025.png';

const services = [
  {
    title: "PROJEKTERING",
    description: "När våra beställare behöver hjälp med att ta fram underlag för sitt projekt så bistår vi gärna med projektering och projekteringsledning med stöd av vårt nätverk.",
    longDescription: "Avser alla typer av offentliga miljöer. När projekten är av större omfattning inbegriper det olika typer av konsultgrupper såsom arkitektur, konstruktion, El, VVS, brand, tillgänglighet m.fl.",
    image: oldDesignradgivningImage
  },
  {
    title: "DESIGNRÅDGIVNING & KONCEPTUTVECKLING",
    description: "Från behovsanalys till tydlig designriktning.",
    longDescription: "Vi hjälper er att tydliggöra visionen och översätta den till en konkret och funktionell plan. Vi tar fram moodboards, skisser och materialval samt rums- och funktionslayout som passar era behov, tidsramar och budget. Perfekt både för större ombyggnader och mindre uppdateringar — och som första steg innan full produktion och installation.",
    image: designradgivningImage
  },
  {
    title: "PROJEKTLEDNING",
    description: "När det finns färdiga underlag ser vi gärna att ett första möte blir en förutsättningslös diskussion om målbild & upplägg, omfattning, tidplan och ekonomi.",
    longDescription: "Utifrån givna ramar tar vi sedan fram ett förslag på lösning oavsett innehåll. Inget projekt är för litet. Det kan t.ex. handla om att uppgradera en hotellobby, bygga om ett kontor, inreda nya hotellrum, skräddarsy en restaurang eller varför inte inreda en butik. Men det kan också handla om att bygga en helt ny byggnad eller att bygga om/ bygga till en befintlig. Oavsett vad så tar vi hand om ert projekt från start till mål!"
  },
  {
    title: "KONTROLLANSVAR (KA)",
    description: "Många ny-, om- eller tillbyggnadsprojekt kräver en kontrollansvarig funktion. Vi är certifierade med behörighet K.",
    longDescription: "Våra auktoriserade KA-ansvariga säkerställer att alla arbeten uppfyller svenska byggstandarder. Vi hanterar all dokumentation och inspektioner för trygg projektgenomförande.",
    image: kaImage
  },
  {
    title: "BYGGNATION OCH RENOVERING",
    description: "Med hjälp av vårt stora nätverk av underentreprenörer erbjuder vi även projekt- och/eller byggledning för i stort sett alla typer av arbeten inom byggnation och inredning.",
    longDescription: "En enkel och prisvärd lösning för beställaren. I alla typer av lokaler blir det ofrånkomligen slitage på ytskikten. Ibland kan detta innebära patina och en känsla av trivsel, men oftast så innebär det att helhetsintrycket dras ned och att det är läge att fräscha upp eller byta ut vissa delar. Vi har stor erfarenhet av att snabbt och effektivt förändra offentliga rum så att verksamheten drabbas så lite som möjligt, enkelt och prisvärt.",
    image: byggnationImage
  },
  {
    title: "OMKLÄDNADER OCH REPARATION",
    description: "Varför slänga bra och fungerande möbler som bara behöver en uppfräschning?",
    longDescription: "Som ett hållbart och prisvärt alternativ i dagens \"slit & släng\" samhälle erbjuder vi omklädnad och renovering av alla typer av stoppade möbler och andra inredningsdetaljer. Stommen i stoppade möbler är ofta i utmärkt skick även efter många år i bruk även om själva ytan kanske har gjort sitt. Stolar, soffor och fåtöljer med smutsigt eller trasigt tyg blir som nya efter en omklädnad. Vi har stor erfarenhet av omklädnader och har klätt om tusentals stolar och fåtöljer till kontor, hotell och restauranger. Och skulle det behövas finns det ofta möjlighet att byta ut eller förstärka stoppning och olika typer av mekanismer (t.ex. fjädrar) som kan ha mattats av över tiden samtidigt som möbler kläs om. Vi erbjuder även reparation och renovering av andra inredningsdetaljer som t.ex. slipning av bordsskivor m.m. Att klä om möbler är en riktigt hållbar lösning. Förutom att det lönar sig rent ekonomiskt så innebär det ALLTID en miljömässig vinst."
  }
];

export function ServicesSection() {
  const { t } = useLanguage();
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const toggleCard = (index: number) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  const closeCard = () => {
    setExpandedCard(null);
  };

  // Handle ESC key and click outside
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeCard();
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (expandedCard !== null) {
        const clickedCard = cardRefs.current[expandedCard];
        if (clickedCard && !clickedCard.contains(e.target as Node)) {
          closeCard();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [expandedCard]);

  const scrollToSection = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="services" className="bg-white">
      {/* Section Title */}
      <div className="py-16 bg-off-white">
        <div className="max-w-6xl mx-auto px-8 md:px-12 text-center">
          <h2 className="font-serif text-4xl font-bold text-[#251104] mb-4">Tjänster</h2>
          <p className="max-w-4xl mx-auto text-left text-[#251104] font-bold text-[18px]">
            {t('services.subtitle')}
          </p>
        </div>
      </div>
      {/* Services Grid - 2 rows x 3 columns */}
      <div className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-[2px] bg-[#F9F9F9] p-[2px]">
          {services.map((service, index) => (
            <div 
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              className="service-card relative bg-[#251104] flex flex-col group overflow-hidden h-[400px]"
              onMouseLeave={() => {
                // Close popup when mouse leaves card on desktop
                if (expandedCard === index && window.innerWidth >= 768) {
                  closeCard();
                }
              }}
            >
              {/* Background images for specific service cards */}
              {service.title === "PROJEKTERING" && (
                <div 
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
                  style={{ backgroundImage: `url(${oldDesignradgivningImage})` }}
                />
              )}
              {service.title === "DESIGNRÅDGIVNING & KONCEPTUTVECKLING" && (
                <div 
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
                  style={{ backgroundImage: `url(${designradgivningImage})` }}
                />
              )}
              {service.title === "PROJEKTLEDNING" && (
                <div 
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
                  style={{ backgroundImage: `url(${projektledningImage})` }}
                />
              )}
              {service.title === "KONTROLLANSVAR (KA)" && (
                <div 
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
                  style={{ backgroundImage: `url(${kaImage})` }}
                />
              )}
              {service.title === "BYGGNATION OCH RENOVERING" && (
                <div 
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
                  style={{ backgroundImage: `url(${byggnationImage})` }}
                />
              )}
              {service.title === "OMKLÄDNADER OCH REPARATION" && (
                <div 
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
                  style={{ backgroundImage: `url(${reparationImage})` }}
                />
              )}

              {/* Card Header - Always Visible */}
              <div 
                className="p-8 cursor-pointer flex-1 flex flex-col justify-center text-center relative z-10"
                onClick={() => toggleCard(index)}
                data-testid={`service-card-${index}`}
              >
                <h3 className="font-serif text-lg font-bold mb-4 tracking-wide leading-tight text-white">
                  {service.title}
                </h3>
                
                {/* Arrow Icon */}
                <div className={`w-8 h-8 mx-auto flex items-center justify-center transition-all duration-300 ${
                  expandedCard === index ? 'transform rotate-180' : ''
                }`}>
                  <ChevronDown 
                    size={24} 
                    className="text-[#D1AE77]" 
                  />
                </div>
              </div>

              {/* Expanded Content Overlay */}
              {expandedCard === index && (
                <div 
                  className="absolute inset-0 bg-[#FBD44C] z-20 flex flex-col p-6 animate-in slide-in-from-bottom duration-300 rounded-lg"
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Fixed Header */}
                  <div className="flex-shrink-0 mb-3">
                    <h3 className="font-serif text-lg font-bold text-[#251104] tracking-wide">
                      {service.title}
                    </h3>
                  </div>
                  
                  {/* Scrollable Content Area */}
                  <div className="flex-1 overflow-y-auto min-h-0 pr-2 scrollbar-thin scrollbar-thumb-[#5B401C] scrollbar-track-transparent">
                    <div className="space-y-4">
                      <p className="text-[#251104] text-sm leading-relaxed">
                        {service.description}
                      </p>
                      
                      <p className="text-[#251104] text-xs leading-relaxed">
                        {service.longDescription}
                      </p>
                    </div>
                  </div>
                  
                  {/* Fixed Footer Button */}
                  <div className="flex-shrink-0 mt-4 pt-3 border-t border-[#251104]/20">
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        if (service.title === "DESIGNRÅDGIVNING & KONCEPTUTVECKLING") {
                          scrollToSection('design-koncept');
                        } else {
                          scrollToSection('contact');
                        }
                      }}
                      className="text-[#5B401C] text-sm font-semibold hover:text-[#251104] transition-colors duration-200 inline-flex items-center gap-1"
                      data-testid={`service-read-more-${index}`}
                    >
                      Läs mer <span className="animate-shake inline-block">→</span>
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
