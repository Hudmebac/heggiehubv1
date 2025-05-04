import { Header } from '@/components/header';
import { BioSection } from '@/components/bio-section';
import { AppsSection } from '@/components/apps-section';
import { ToolsSection } from '@/components/tools-section';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <BioSection />
        <AppsSection />
        <ToolsSection />
      </main>
      <footer className="bg-muted text-muted-foreground text-center p-4 text-sm">
        © {new Date().getFullYear()} Craig Heggie. All rights reserved.
      </footer>
    </div>
  );
}
