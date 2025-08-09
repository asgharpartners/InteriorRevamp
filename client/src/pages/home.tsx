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
      
      {/* Intro & Vår Process - Split 50/50 Page */}
      <section id="intro-process" className="w-full h-screen min-h-[100vh] grid grid-cols-1 md:grid-cols-2">
        {/* Left Column - Intro */}
        <div className="bg-[#FFPAF7] flex items-center justify-center min-h-[80vh] md:min-h-[100vh] px-8 md:px-12 lg:px-16 py-10 md:py-12">
          <div className="max-w-[640px] text-center">
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-[#3A2315] mb-6 leading-tight">
              {t('intro.title')}
            </h2>
            <p className="text-base md:text-lg text-[#3A2315]/80 leading-relaxed">
              {t('intro.subtitle')}<br />
              {t('intro.description')}
            </p>
          </div>
        </div>

        {/* Right Column - Vår Process */}
        <div className="bg-[#3A2315] flex items-center justify-center min-h-[80vh] md:min-h-[100vh] px-8 md:px-12 lg:px-16 py-10 md:py-12">
          <div className="max-w-[640px] w-full text-center">
            {/* Title with accent line */}
            <div className="mb-8 md:mb-10">
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#FFPAF7] mb-3">
                Vår process
              </h2>
              <div className="w-16 h-1 bg-[#D1AE77] mx-auto"></div>
            </div>
            
            {/* Process Steps - Single Row */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10 mb-8">
              {/* Step 1 */}
              <div className="text-center">
                <div className="w-24 h-24 lg:w-28 lg:h-28 bg-[#D1AE77] rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-[#3A2315] font-bold text-xl lg:text-2xl">01</span>
                </div>
                <h3 className="text-[#FFPAF7] font-semibold text-sm lg:text-base mb-2">
                  Konsultation
                </h3>
                <p className="text-[#FFPAF7]/80 text-xs lg:text-sm leading-snug">
                  Förutsättningslöst möte
                </p>
              </div>

              {/* Step 2 */}
              <div className="text-center">
                <div className="w-24 h-24 lg:w-28 lg:h-28 bg-[#D1AE77] rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-[#3A2315] font-bold text-xl lg:text-2xl">02</span>
                </div>
                <h3 className="text-[#FFPAF7] font-semibold text-sm lg:text-base mb-2">
                  Koncept
                </h3>
                <p className="text-[#FFPAF7]/80 text-xs lg:text-sm leading-snug">
                  Design & utveckling
                </p>
              </div>

              {/* Step 3 */}
              <div className="text-center">
                <div className="w-24 h-24 lg:w-28 lg:h-28 bg-[#D1AE77] rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-[#3A2315] font-bold text-xl lg:text-2xl">03</span>
                </div>
                <h3 className="text-[#FFPAF7] font-semibold text-sm lg:text-base mb-2">
                  Produktion
                </h3>
                <p className="text-[#FFPAF7]/80 text-xs lg:text-sm leading-snug">
                  Hållbar tillverkning
                </p>
              </div>

              {/* Step 4 */}
              <div className="text-center">
                <div className="w-24 h-24 lg:w-28 lg:h-28 bg-[#D1AE77] rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-[#3A2315] font-bold text-xl lg:text-2xl">04</span>
                </div>
                <h3 className="text-[#FFPAF7] font-semibold text-sm lg:text-base mb-2">
                  Installation
                </h3>
                <p className="text-[#FFPAF7]/80 text-xs lg:text-sm leading-snug">
                  Professionell leverans
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="text-center">
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-[#D1AE77] text-[#3A2315] px-6 py-3 lg:px-8 lg:py-4 rounded-lg font-semibold text-sm lg:text-base hover:bg-[#D1AE77]/90 transition-all duration-300 transform hover:scale-105"
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
