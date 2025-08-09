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


export default function HomePage() {
  const { t } = useLanguage();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-off-white" style={{ margin: 0, padding: 0 }}>
      <Header />
      <HeroSlider />
      {/* Intro & Vår Process - Split 50/50 Landscape */}
      <section id="intro-process" className="w-full h-screen min-h-[100vh] flex">
        {/* Left Half - Intro */}
        <div className="w-1/2 bg-[#FFPAF7] flex items-center justify-center px-6 sm:px-8 md:px-12 py-10">
          <div className="text-center max-w-md lg:max-w-lg">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[#3A2315] mb-4 lg:mb-6 leading-tight">
              {t('intro.title')}
            </h2>
            <p className="text-base md:text-lg text-[#3A2315]/80 leading-relaxed">
              {t('intro.subtitle')}<br />
              {t('intro.description')}
            </p>
          </div>
        </div>

        {/* Right Half - Vår Process */}
        <div className="w-1/2 bg-[#3A2315] flex items-center justify-center px-6 sm:px-8 md:px-12 py-10">
          <div className="text-center w-full max-w-md lg:max-w-lg">
            {/* Title */}
            <div className="mb-6 lg:mb-8">
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-3 text-[#fffaf6]">
                Vår process
              </h2>
              <div className="w-12 h-0.5 bg-[#D1AE77] mx-auto"></div>
            </div>
            
            {/* Process Steps - Horizontal Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 lg:gap-6 mb-6 lg:mb-8">
              {/* Step 1 */}
              <div className="text-center">
                <div className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 bg-[#D1AE77] rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-[#3A2315] font-bold text-sm md:text-base lg:text-lg">1</span>
                </div>
                <h3 className="font-semibold text-xs md:text-sm mb-1 text-[#fffaf6]">
                  Konsultation
                </h3>
                <p className="text-xs leading-tight text-[#fffaf6]">
                  Vi lyssnar på dina behov och visioner
                </p>
              </div>

              {/* Step 2 */}
              <div className="text-center">
                <div className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 bg-[#D1AE77] rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-[#3A2315] font-bold text-sm md:text-base lg:text-lg">2</span>
                </div>
                <h3 className="font-semibold text-xs md:text-sm mb-1 text-[#fffaf6]">
                  Koncept
                </h3>
                <p className="text-xs leading-tight text-[#fffaf6]">
                  Utvecklar unika designkoncept
                </p>
              </div>

              {/* Step 3 */}
              <div className="text-center">
                <div className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 bg-[#D1AE77] rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-[#3A2315] font-bold text-sm md:text-base lg:text-lg">3</span>
                </div>
                <h3 className="font-semibold text-xs md:text-sm mb-1 text-[#fffaf6]">
                  Produktion
                </h3>
                <p className="text-[#FFPAF7]/80 text-xs leading-tight">
                  Tillverkar skräddarsydda lösningar
                </p>
              </div>

              {/* Step 4 */}
              <div className="text-center">
                <div className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 bg-[#D1AE77] rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-[#3A2315] font-bold text-sm md:text-base lg:text-lg">4</span>
                </div>
                <h3 className="text-[#FFPAF7] font-semibold text-xs md:text-sm mb-1">
                  Installation
                </h3>
                <p className="text-[#FFPAF7]/80 text-xs leading-tight">
                  Professionell installation på plats
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="text-center">
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-[#D1AE77] text-[#3A2315] px-4 py-2 md:px-6 md:py-3 rounded-lg font-semibold text-sm md:text-base hover:bg-[#D1AE77]/90 transition-all duration-300 transform hover:scale-105"
                data-testid="discuss-project-button"
              >
                Diskutera ditt projekt
              </button>
            </div>
          </div>
        </div>
      </section>
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
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-[#3A2315] mb-6">Career & Internship</h1>
            <p className="text-dark-grey max-w-2xl mx-auto leading-relaxed text-lg">
              We believe in nurturing the next generation of designers and craftspeople. 
              Our collaboration with students and young professionals creates opportunities for hands-on learning 
              in real-world projects while contributing fresh perspectives to our work.
            </p>
          </div>
          
          {/* Job Openings Card - Services card style */}
          <div className="career-card bg-white rounded-2xl shadow-sm border border-gray-200 p-8 text-center mb-6">
            <h3 className="font-serif text-xl font-bold text-[#3A2315] mb-4 tracking-wide">Job Openings & Opportunities</h3>
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
              className="btn-primary bg-[#D1AE77] text-[#3A2315] px-8 py-3 rounded-lg font-medium hover:bg-[#D1AE77]/90 transition-all duration-300 transform hover:scale-105"
              data-testid="career-contact-button"
            >
              Get In Touch
            </button>
          </div>

          {/* Student Collaboration Card - Services card style */}
          <div className="career-card bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
            <h3 className="font-serif text-xl font-bold text-[#3A2315] mb-4 tracking-wide">Student Collaboration</h3>
            <p className="text-dark-grey mb-6 leading-relaxed">
              We regularly partner with design schools and universities to provide internship opportunities, 
              thesis project support, and mentorship programs. Students work alongside our experienced team 
              on live projects, gaining valuable industry experience.
            </p>
            
            {/* Two-column grid */}
            <div className="career-grid grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="text-left">
                <h4 className="font-serif text-lg font-bold text-[#3A2315] mb-3 tracking-wide">What We Offer</h4>
                <ul className="text-dark-grey space-y-2">
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-[#D1AE77] rounded-full mr-3 flex-shrink-0 mt-2"></div>
                    <span>Real project experience</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-[#D1AE77] rounded-full mr-3 flex-shrink-0 mt-2"></div>
                    <span>Professional mentorship</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-[#D1AE77] rounded-full mr-3 flex-shrink-0 mt-2"></div>
                    <span>Portfolio development support</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-[#D1AE77] rounded-full mr-3 flex-shrink-0 mt-2"></div>
                    <span>Industry network access</span>
                  </li>
                </ul>
              </div>
              <div className="text-left">
                <h4 className="font-serif text-lg font-bold text-[#3A2315] mb-3 tracking-wide">Areas of Focus</h4>
                <ul className="text-dark-grey space-y-2">
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-[#D1AE77] rounded-full mr-3 flex-shrink-0 mt-2"></div>
                    <span>Interior design</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-[#D1AE77] rounded-full mr-3 flex-shrink-0 mt-2"></div>
                    <span>Furniture craftsmanship</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-[#D1AE77] rounded-full mr-3 flex-shrink-0 mt-2"></div>
                    <span>Project management</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-[#D1AE77] rounded-full mr-3 flex-shrink-0 mt-2"></div>
                    <span>Sustainable design practices</span>
                  </li>
                </ul>
              </div>
            </div>
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
