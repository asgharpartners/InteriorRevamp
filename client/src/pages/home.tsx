import { useState } from 'react';
import Header from '@/components/Header';
import { HeroSlider } from '@/components/hero-slider';
import { ServicesSection } from '@/components/services-section';
import { BeforeAfterSlider } from '@/components/before-after-slider';
import { ProductsSection } from '@/components/products-section';
import { ReferencesSection } from '@/components/references-section';
import { AboutSection } from '@/components/about-section';
import { ContactSection } from '@/components/contact-section';
import { Footer } from '@/components/footer';
import { StickyCTA } from '@/components/sticky-cta';
import { FloatingShortcuts } from '@/components/floating-shortcuts';
import { useLanguage } from '@/hooks/use-language';
import { ChevronDown } from 'lucide-react';

export default function HomePage() {
  const { t } = useLanguage();
  const [expandedStep, setExpandedStep] = useState<number | null>(null);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const toggleStep = (index: number) => {
    setExpandedStep(expandedStep === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-off-white" style={{ margin: 0, padding: 0 }}>
      <Header />
      <HeroSlider />
      
      {/* Two-Column Layout: Intro + Process */}
      <div className="w-full h-[80vh] flex flex-col lg:flex-row">
        {/* Intro Section - Left Column */}
        <section className="bg-[#F5F1EA] flex-1 flex items-center justify-center">
          <div className="max-w-xl mx-auto text-left px-6 py-8">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-dark-brown mb-6 leading-tight">
              {t('intro.title')}
            </h2>
            <p className="text-lg md:text-xl text-dark-grey leading-relaxed">
              {t('intro.subtitle')}<br />
              {t('intro.description')}
            </p>
          </div>
        </section>

        {/* Process Section - Right Column */}
        <section className="bg-[#3E2516] flex-1 flex items-center justify-center relative overflow-hidden">
          <div className="w-full h-full flex items-center justify-center px-8 py-8">
            {/* Circular Process Steps */}
            <div className="relative w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] lg:w-[360px] lg:h-[360px] mx-auto">
              {/* Center Title */}
              <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-10 transition-opacity duration-300 ${
                expandedStep !== null ? 'opacity-30' : 'opacity-100'
              }`}>
                <h3 className="font-serif text-lg font-bold text-white mb-1">
                  Vår
                </h3>
                <h3 className="font-serif text-2xl font-bold text-white">
                  process
                </h3>
              </div>
              
              {/* Step 1 - Top */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-4">
                <div className="text-center relative">
                  <div 
                    className="w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20 bg-[#AD8C44] rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-105 relative mx-auto"
                    onClick={() => toggleStep(1)}
                  >
                    <span className="text-[#F5F1EA] font-bold text-[9px] sm:text-[10px] leading-[10px] sm:leading-[11px] text-center px-1">
                      Förutsätt-<br />ningslöst<br />möte
                    </span>
                  </div>
                  
                  {/* Compact Tooltip */}
                  {expandedStep === 1 && (
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-64 sm:w-80 bg-[#3E2516] rounded-lg shadow-xl border-2 border-[#AD8C44] p-4 z-50">
                      <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#3E2516] border-l-2 border-t-2 border-[#AD8C44] rotate-45"></div>
                      <p className="text-[#F5F1EA] text-xs sm:text-sm leading-relaxed">
                        {t('process.step1.description')}
                      </p>
                      <button 
                        onClick={() => setExpandedStep(null)}
                        className="absolute top-1 right-2 text-[#AD8C44] hover:text-[#F5F1EA] text-lg"
                      >
                        ×
                      </button>
                    </div>
                  )}
                </div>
              </div>

              {/* Arrow from Step 1 to Step 2 */}
              <div className="absolute top-14 right-14 sm:top-16 sm:right-16 lg:top-18 lg:right-18 z-10">
                <svg width="45" height="45" viewBox="0 0 45 45" className="text-white sm:w-12 sm:h-12 lg:w-15 lg:h-15">
                  <path d="M10 22 Q22 10 34 22" stroke="currentColor" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)" />
                  <defs>
                    <marker id="arrowhead" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
                      <polygon points="0 0, 8 3, 0 6" fill="currentColor" />
                    </marker>
                  </defs>
                </svg>
              </div>

              {/* Step 2 - Right */}
              <div className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-4">
                <div className="text-center relative">
                  <div 
                    className="w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20 bg-[#AD8C44] rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-105 relative mx-auto"
                    onClick={() => toggleStep(2)}
                  >
                    <span className="text-[#F5F1EA] font-bold text-[9px] sm:text-[10px] leading-[10px] sm:leading-[11px] text-center px-1">
                      Design &<br />Koncept
                    </span>
                  </div>
                  
                  {/* Compact Tooltip */}
                  {expandedStep === 2 && (
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-64 sm:w-80 bg-[#3E2516] rounded-lg shadow-xl border-2 border-[#AD8C44] p-4 z-50">
                      <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#3E2516] border-l-2 border-t-2 border-[#AD8C44] rotate-45"></div>
                      <p className="text-[#F5F1EA] text-xs sm:text-sm leading-relaxed">
                        {t('process.step2.description')}
                      </p>
                      <button 
                        onClick={() => setExpandedStep(null)}
                        className="absolute top-1 right-2 text-[#AD8C44] hover:text-[#F5F1EA] text-lg"
                      >
                        ×
                      </button>
                    </div>
                  )}
                </div>
              </div>

              {/* Arrow from Step 2 to Step 3 */}
              <div className="absolute bottom-14 right-14 sm:bottom-16 sm:right-16 lg:bottom-18 lg:right-18 z-10">
                <svg width="45" height="45" viewBox="0 0 45 45" className="text-white sm:w-12 sm:h-12 lg:w-15 lg:h-15">
                  <path d="M34 10 Q22 22 10 34" stroke="currentColor" strokeWidth="2" fill="none" markerEnd="url(#arrowhead2)" />
                  <defs>
                    <marker id="arrowhead2" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
                      <polygon points="0 0, 8 3, 0 6" fill="currentColor" />
                    </marker>
                  </defs>
                </svg>
              </div>

              {/* Step 3 - Bottom */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-4">
                <div className="text-center relative">
                  <div 
                    className="w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20 bg-[#AD8C44] rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-105 relative mx-auto"
                    onClick={() => toggleStep(3)}
                  >
                    <span className="text-[#F5F1EA] font-bold text-[9px] sm:text-[10px] leading-[10px] sm:leading-[11px] text-center px-1">
                      Produktion
                    </span>
                  </div>
                  
                  {/* Compact Tooltip */}
                  {expandedStep === 3 && (
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-64 sm:w-80 bg-[#3E2516] rounded-lg shadow-xl border-2 border-[#AD8C44] p-4 z-50">
                      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#3E2516] border-r-2 border-b-2 border-[#AD8C44] rotate-45"></div>
                      <p className="text-[#F5F1EA] text-xs sm:text-sm leading-relaxed">
                        {t('process.step3.description')}
                      </p>
                      <button 
                        onClick={() => setExpandedStep(null)}
                        className="absolute top-1 right-2 text-[#AD8C44] hover:text-[#F5F1EA] text-lg"
                      >
                        ×
                      </button>
                    </div>
                  )}
                </div>
              </div>

              {/* Arrow from Step 3 to Step 4 */}
              <div className="absolute bottom-14 left-14 sm:bottom-16 sm:left-16 lg:bottom-18 lg:left-18 z-10">
                <svg width="45" height="45" viewBox="0 0 45 45" className="text-white sm:w-12 sm:h-12 lg:w-15 lg:h-15">
                  <path d="M34 34 Q22 22 10 10" stroke="currentColor" strokeWidth="2" fill="none" markerEnd="url(#arrowhead3)" />
                  <defs>
                    <marker id="arrowhead3" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
                      <polygon points="0 0, 8 3, 0 6" fill="currentColor" />
                    </marker>
                  </defs>
                </svg>
              </div>

              {/* Step 4 - Left */}
              <div className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-4">
                <div className="text-center relative">
                  <div 
                    className="w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20 bg-[#AD8C44] rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-105 relative mx-auto"
                    onClick={() => toggleStep(4)}
                  >
                    <span className="text-[#F5F1EA] font-bold text-[9px] sm:text-[10px] leading-[10px] sm:leading-[11px] text-center px-1">
                      Leverans
                    </span>
                  </div>
                  
                  {/* Compact Tooltip */}
                  {expandedStep === 4 && (
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-64 sm:w-80 bg-[#3E2516] rounded-lg shadow-xl border-2 border-[#AD8C44] p-4 z-50">
                      <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#3E2516] border-l-2 border-t-2 border-[#AD8C44] rotate-45"></div>
                      <p className="text-[#F5F1EA] text-xs sm:text-sm leading-relaxed">
                        {t('process.step4.description')}
                      </p>
                      <button 
                        onClick={() => setExpandedStep(null)}
                        className="absolute top-1 right-2 text-[#AD8C44] hover:text-[#F5F1EA] text-lg"
                      >
                        ×
                      </button>
                    </div>
                  )}
                </div>
              </div>

              {/* Arrow from Step 4 to Step 1 */}
              <div className="absolute top-14 left-14 sm:top-16 sm:left-16 lg:top-18 lg:left-18 z-10">
                <svg width="45" height="45" viewBox="0 0 45 45" className="text-white sm:w-12 sm:h-12 lg:w-15 lg:h-15">
                  <path d="M10 34 Q22 22 34 10" stroke="currentColor" strokeWidth="2" fill="none" markerEnd="url(#arrowhead4)" />
                  <defs>
                    <marker id="arrowhead4" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
                      <polygon points="0 0, 8 3, 0 6" fill="currentColor" />
                    </marker>
                  </defs>
                </svg>
              </div>
            </div>

            {/* CTA Button */}
            <div className="text-center mt-8">
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-[#AD8C44] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#AD8C44]/90 transition-all duration-300"
                data-testid="discuss-project-button"
              >
                Diskutera ditt projekt
              </button>
            </div>
          </div>
        </section>
      </div>

      <ServicesSection />
      

      
      <div id="products">
        <ProductsSection />
      </div>
      
      <div id="references">
        <ReferencesSection />
      </div>
      
      <BeforeAfterSlider />

      {/* Career & Internship Section - Refactored to match Services visual system */}
      <section id="career" className="career-section py-12 bg-off-white">
        <div className="max-w-6xl mx-auto px-4">
          {/* Section Title - H1 style matching Services */}
          <div className="text-center mb-12">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-dark-brown mb-6">Career & Internship</h1>
            <p className="text-dark-grey max-w-2xl mx-auto leading-relaxed text-lg">
              We believe in nurturing the next generation of designers and craftspeople. 
              Our collaboration with students and young professionals creates opportunities for hands-on learning 
              in real-world projects while contributing fresh perspectives to our work.
            </p>
          </div>
          
          {/* Student Collaboration Card - Services card style */}
          <div className="career-card bg-white rounded-2xl shadow-sm border border-gray-200 p-8 mb-6">
            <h3 className="font-serif text-xl font-bold text-dark-brown mb-4 tracking-wide">Student Collaboration</h3>
            <p className="text-dark-grey mb-6 leading-relaxed">
              We regularly partner with design schools and universities to provide internship opportunities, 
              thesis project support, and mentorship programs. Students work alongside our experienced team 
              on live projects, gaining valuable industry experience.
            </p>
            
            {/* Two-column grid */}
            <div className="career-grid grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="text-left">
                <h4 className="font-serif text-lg font-bold text-dark-brown mb-3 tracking-wide">What We Offer</h4>
                <ul className="text-dark-grey space-y-2">
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-[#AD8C44] rounded-full mr-3 flex-shrink-0 mt-2"></div>
                    <span>Real project experience</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-[#AD8C44] rounded-full mr-3 flex-shrink-0 mt-2"></div>
                    <span>Professional mentorship</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-[#AD8C44] rounded-full mr-3 flex-shrink-0 mt-2"></div>
                    <span>Portfolio development support</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-[#AD8C44] rounded-full mr-3 flex-shrink-0 mt-2"></div>
                    <span>Industry network access</span>
                  </li>
                </ul>
              </div>
              <div className="text-left">
                <h4 className="font-serif text-lg font-bold text-dark-brown mb-3 tracking-wide">Areas of Focus</h4>
                <ul className="text-dark-grey space-y-2">
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-[#AD8C44] rounded-full mr-3 flex-shrink-0 mt-2"></div>
                    <span>Interior design</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-[#AD8C44] rounded-full mr-3 flex-shrink-0 mt-2"></div>
                    <span>Furniture craftsmanship</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-[#AD8C44] rounded-full mr-3 flex-shrink-0 mt-2"></div>
                    <span>Project management</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-[#AD8C44] rounded-full mr-3 flex-shrink-0 mt-2"></div>
                    <span>Sustainable design practices</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Job Openings Card - Services card style */}
          <div className="career-card bg-white rounded-2xl shadow-sm border border-gray-200 p-8 text-center">
            <h3 className="font-serif text-xl font-bold text-dark-brown mb-4 tracking-wide">Job Openings & Opportunities</h3>
            <p className="text-dark-grey mb-6 leading-relaxed">
              Stay tuned for upcoming internship and full-time positions
            </p>
            
            {/* Launching Soon Badge */}
            <div className="mb-4">
              <span className="badge--launching inline-block bg-[#F2DC74] text-[#3E2516] px-4 py-2 rounded-full text-sm font-semibold">
                Launching Soon
              </span>
            </div>
            
            {/* Primary CTA Button */}
            <button 
              onClick={() => scrollToSection('contact')}
              className="btn-primary bg-[#AD8C44] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#AD8C44]/90 transition-all duration-300 transform hover:scale-105"
              data-testid="career-contact-button"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </section>

      <AboutSection />

      {/* Workshop Section */}
      <section className="py-20 bg-dark-brown text-off-white">
        <div className="w-full">
          <div className="relative h-96 mb-16">
            <div 
              className="absolute inset-0 bg-cover bg-center parallax-bg" 
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1606744824163-985d376605aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=800')" }}
            />
            <div className="absolute inset-0 bg-dark-brown/60" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <h2 className="font-serif text-5xl font-bold mb-4">{t('workshop.title')}</h2>
                <p className="text-2xl font-light">{t('workshop.subtitle')}</p>
              </div>
            </div>
          </div>
          
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-xl leading-relaxed mb-8">
                Our 2,000 square meter workshop in Nykvarn combines traditional Swedish woodworking techniques with modern precision tools. Here, our master craftsmen transform sustainably sourced timber into bespoke furniture pieces that will grace homes and businesses for generations.
              </p>
              <p className="text-lg leading-relaxed">
                Every piece that leaves our workshop carries the mark of genuine craftsmanship – from hand-selected wood grain to carefully applied finishes, each detail reflects our commitment to excellence and our respect for the natural beauty of Scandinavian materials.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ContactSection />
      <Footer />
      <FloatingShortcuts />
    </div>
  );
}
