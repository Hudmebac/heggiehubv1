import { usefulTools } from '@/data/projects'; // Renamed import from 'tools'
import { ProjectCard } from './project-card';

export function UsefulToolsSection() { // Renamed component
  return (
     // Updated section ID and background
    <section id="useful-tools" className="section-padding bg-muted/40 dark:bg-black/10">
      <div className="container mx-auto">
        <h2 className="text-3xl text-center mb-10">Useful Tools</h2> {/* Updated heading */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {usefulTools.map((project) => ( // Updated variable name
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
         {usefulTools.length === 0 && ( // Updated variable name
            <p className="text-center text-muted-foreground">No useful tools to display yet.</p> // Updated empty message
        )}
      </div>
    </section>
  );
}
