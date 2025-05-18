
import { Header } from '@/components/header';
import { BioSection } from '@/components/bio-section';
import { FeaturesSection } from '@/components/features-section'; // Renamed from AppsSection
import { PlayAreaSection } from '@/components/play-area-section'; // New import
import { UsefulToolsSection } from '@/components/useful-tools-section'; // Renamed from ToolsSection
import { GallerySection } from '@/components/gallery-section'; // Added GallerySection
import { JukeboxSection } from '@/components/jukebox-section'; // Added JukeboxSection
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <BioSection />
        <FeaturesSection />
        <PlayAreaSection /> {/* Added new section here */}
        <UsefulToolsSection />
        <GallerySection />
        <JukeboxSection />
      </main>
      <Footer />
    </div>
  );
}
