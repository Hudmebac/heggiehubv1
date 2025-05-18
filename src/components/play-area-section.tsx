
// src/components/play-area-section.tsx
import { playAreaFeatures } from '@/data/projects';
import { ProjectCard } from './project-card';

export function PlayAreaSection() {
  return (
    <section id="play-area" className="section-padding bg-muted/20 dark:bg-black/5">
      <div className="container mx-auto">
        <h2 className="text-3xl text-center mb-10">Play Area</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {playAreaFeatures.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
        {playAreaFeatures.length === 0 && (
            <p className="text-center text-muted-foreground">Nothing in the play area yet.</p>
        )}
      </div>
    </section>
  );
}
