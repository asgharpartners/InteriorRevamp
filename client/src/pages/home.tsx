import { useState } from 'react';
import Header from '@/components/Header';
import { HeroSlider } from '@/components/hero-slider';
import { ServicesSection } from '@/components/services-section';
import { BeforeAfterSlider } from '@/components/before-after-slider';
import { ProductsSection } from '@/components/products-section';

import { AboutSection } from '@/components/about-section';
import { ContactSection } from '@/components/contact-section';
import { Footer } from '@/components/footer';
import { StickyCTA } from '@/components/sticky-cta';
import { FloatingShortcuts } from '@/components/floating-shortcuts';
import { useLanguage } from '@/hooks/use-language';
import { ChevronDown, ChevronUp } from 'lucide-react';


export default function HomePage() {
  const { t } = useLanguage();
  const [openProcessStep, setOpenProcessStep] = useState<number | null>(null);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const toggleProcessStep = (stepNumber: number) => {
    setOpenProcessStep(openProcessStep === stepNumber ? null : stepNumber);
  };

  const processSteps = [
    {
      number: 1,
      title: "Förutsättningslöst möte",
      subtitle: "Vi lyssnar först.",
      description: "Vi träffas för att förstå era behov, visioner och förutsättningar – tidplan, budget, omfattning och projektets mål. Tack vare vår långa erfarenhet och breda nätverk kan vi redan här ge idéer och lösningar som är realistiska och hållbara.",
      services: "projektledning, rådgivning, behovsanalys",
      brand: "Flexibel och lätt att arbeta med, alltid utifrån kundens unika förutsättningar."
    },
    {
      number: 2,
      title: "Design & Koncept",
      subtitle: "Skräddarsytt för er verksamhet.",
      description: "Vi tar fram unika inredningslösningar och möbelkoncept anpassade efter ert varumärke och er miljö – från hotellrum till kontorslandskap. Designen bygger på estetik, funktionalitet och lång livslängd.",
      services: "inredningsdesign, specialsnickeri, möbelritning, textil & tapetsering",
      brand: "Hög estetisk nivå, skandinavisk minimalism och hållbarhet."
    },
    {
      number: 3,
      title: "Produktion",
      subtitle: "Från idé till färdig lösning.",
      description: "Vi använder vårt nätverk av skickliga snickare, leverantörer och hantverkare för att tillverka och förädla möbler, material och detaljer. Vi säkrar att varje del motsvarar designkonceptet och håller högsta kvalitet – prisvärt och med hänsyn till miljön.",
      services: "möbeltillverkning, renovering, upphandling av material, kvalitetssäkring",
      brand: "Professionellt genomförande med fokus på hållbara material och leveranser i tid."
    },
    {
      number: 4,
      title: "Leverans",
      subtitle: "Perfekt slutresultat – direkt på plats.",
      description: "Vi hanterar installation, montering och styling på plats, och lämnar över en nyckelfärdig miljö redo att användas. Allt sker med omsorg om detaljer och helhet, så att resultatet blir precis som ni tänkt er – eller bättre.",
      services: "turnkey-lösningar, montering, slutstyling, kvalitetskontroll",
      brand: "Lätt att arbeta med, trygg helhetsleverantör, levererar på löften."
    }
  ];

  return (
    <div className="min-h-screen bg-off-white" style={{ margin: 0, padding: 0 }}>
      <Header />
      <HeroSlider />
      {/* Intro Section */}
      <section className="w-full bg-[#FAF7F2] py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-8 md:px-12 text-left">
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[#3C2415] mb-8 text-center ml-[-100px] mr-[-100px]">
            Välkomna till Nils Holger – Furniture & Project
          </h1>
          <p className="text-base md:text-lg leading-relaxed text-[#3C2415] max-w-4xl text-left">
            Vår affärsidé är att vara en pålitlig och flexibel partner när det gäller inredning och byggnation för alla typer av offentliga projekt. Vi arbetar i såväl interiöra som exteriöra miljöer.
          </p>
        </div>
      </section>
      {/* Vår Process Section */}
      <section className="w-full bg-[#3A2315] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-8 md:px-16">
          {/* Section Title */}
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[#FFFAF7] mb-4">
              Vår Process
            </h2>
            <div className="w-16 h-0.5 bg-[#FBD44C] mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {processSteps.map((step) => (
              <div 
                key={step.number} 
                className="text-center relative group"
                onMouseLeave={() => setOpenProcessStep(null)}
              >
                {/* Step Circle */}
                <div className="w-20 h-20 md:w-24 md:h-24 border-2 border-[#FBD44C] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-[#FBD44C] font-bold text-xl md:text-2xl">{step.number}</span>
                </div>
                
                {/* Step Title */}
                <h3 className="font-serif font-bold text-lg md:text-xl text-[#FFFAF7] mb-3">
                  {step.title}
                </h3>
                
                {/* Chevron Indicator - Clickable */}
                <div 
                  className="mb-4 p-2 rounded-full transition-colors duration-200 cursor-pointer hover:bg-[#FBD44C]/10"
                  onClick={() => toggleProcessStep(step.number)}
                  data-testid={`process-step-${step.number}-toggle`}
                >
                  {openProcessStep === step.number ? (
                    <ChevronUp className="w-6 h-6 text-[#FBD44C] mx-auto" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-[#FBD44C] mx-auto" />
                  )}
                </div>
                
                {/* Description (Hover Popup) */}
                {openProcessStep === step.number && (
                  <div className="absolute top-0 left-0 right-0 bg-[#FBD44C] p-6 rounded-lg text-left z-10 min-h-full flex flex-col justify-center">
                    <h4 className="font-serif font-bold text-lg text-[#3A2315] mb-3">
                      {step.subtitle}
                    </h4>
                    <p className="text-[#3A2315] text-sm md:text-base leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          {/* CTA Button */}
          <div className="text-center mt-12">
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-[#FBD44C] text-[#5B401C] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#FBD44C]/90 transition-all duration-300 transform hover:scale-105"
              data-testid="discuss-project-button"
            >
              Diskutera ditt projekt
            </button>
          </div>
        </div>
      </section>
      <ServicesSection />
      <div id="products">
        <ProductsSection />
      </div>
      <BeforeAfterSlider />
      <AboutSection />
      <ContactSection />
      <Footer />
      <FloatingShortcuts />
    </div>
  );
}
