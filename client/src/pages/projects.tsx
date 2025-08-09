import Header from '@/components/Header';
import { ReferencesSection } from '@/components/references-section';
import { Footer } from '@/components/footer';
import { StickyCTA } from '@/components/sticky-cta';
import { FloatingShortcuts } from '@/components/floating-shortcuts';
import { useLanguage } from '@/hooks/use-language';

export default function ProjectsPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-off-white" style={{ margin: 0, padding: 0 }}>
      <Header />
      
      {/* Hero Section for Projects Page */}
      <section className="w-full bg-[#FAF7F2] pt-32 md:pt-40 lg:pt-48 pb-16 md:pb-24">
        <div className="max-w-6xl mx-auto px-8 md:px-12 text-center">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-[#3C2415] mb-8">
            {t('projects.title')}
          </h1>
          <p className="text-xl md:text-2xl text-[#5B401C] max-w-4xl mx-auto leading-relaxed">
            {t('projects.subtitle')}
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <ReferencesSection />
      
      <Footer />
      <StickyCTA />
      <FloatingShortcuts />
    </div>
  );
}