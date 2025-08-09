import Header from '@/components/Header';
import ProjectsSection from '@/components/projects-section';
import { Footer } from '@/components/footer';
import { FloatingShortcuts } from '@/components/floating-shortcuts';

export default function ReferencesPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-20"> {/* Account for fixed header */}
        
        {/* Page Title Section */}
        <section className="py-16 bg-off-white">
          <div className="max-w-6xl mx-auto px-8 md:px-12 text-center">
            <h1 className="font-serif text-4xl font-bold text-[#251104] mb-4">
              Best of our projects in 20 years until now:
            </h1>
          </div>
        </section>
        
        <ProjectsSection />
      </div>
      <Footer />
      <FloatingShortcuts />
    </div>
  );
}