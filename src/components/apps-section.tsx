import { apps } from '@/data/projects';
import { ProjectCard } from './project-card';

export function AppsSection() {
  return (
    <section id="apps" className="section-padding">
      <div className="container mx-auto">
        <h2 className="text-3xl text-center mb-10">Apps</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {apps.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
        {apps.length === 0 && (
            <p className="text-center text-muted-foreground">No apps to display yet.</p>
        )}
      </div>
    </section>
  );
}
