import { features } from '@/data/projects'; // Renamed import from 'apps'
import { ProjectCard } from './project-card';

export function FeaturesSection() { // Renamed component
  return (
    // Updated section ID and padding/background if needed (kept original for consistency)
    <section id="features" className="section-padding">
      <div className="container mx-auto">
        <h2 className="text-3xl text-center mb-10">Features</h2> {/* Updated heading */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((project) => ( // Updated variable name
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
        {features.length === 0 && ( // Updated variable name
            <p className="text-center text-muted-foreground">No features to display yet.</p> // Updated empty message
        )}
      </div>
    </section>
  );
}
