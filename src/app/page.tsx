import { Header } from '@/components/header';
import { BioSection } from '@/components/bio-section';
import { AppsSection } from '@/components/apps-section';
import { ToolsSection } from '@/components/tools-section';
import { Footer } from '@/components/footer'; // Import Footer

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {/* Optional: Add Hero Section here */}
         {/* <section className="section-padding bg-gradient-to-br from-primary to-secondary text-primary-foreground text-center"> */}
         {/*   <div className="container mx-auto"> */}
         {/*     <h1 className="text-4xl md:text-5xl lg:text-6xl mb-4 animate-fade-in-down">Welcome to HeggieHub</h1> */}
         {/*     <p className="text-lg md:text-xl animate-fade-in-up">Showcasing projects and tools.</p> */}
         {/*      Add animation classes */}
         {/*   </div> */}
         {/* </section> */}
        <BioSection />
        <AppsSection />
        <ToolsSection />
      </main>
      <Footer /> {/* Add Footer component */}
    </div>
  );
}
