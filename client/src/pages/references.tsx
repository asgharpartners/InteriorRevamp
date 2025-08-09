import Header from '@/components/Header';
import ProjectsSection from '@/components/projects-section';
import { Footer } from '@/components/footer';
import { FloatingShortcuts } from '@/components/floating-shortcuts';

export default function ReferencesPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-20"> {/* Account for fixed header */}
        <ProjectsSection />
      </div>
      <Footer />
      <FloatingShortcuts />
    </div>
  );
}