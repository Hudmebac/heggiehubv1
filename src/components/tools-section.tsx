import { tools } from '@/data/projects';
import { ProjectCard } from './project-card';

export function ToolsSection() {
  return (
    <section id="tools" className="section-padding bg-muted/40 dark:bg-black/10">
      <div className="container mx-auto">
        <h2 className="text-3xl text-center mb-10">Tools</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
         {tools.length === 0 && (
            <p className="text-center text-muted-foreground">No tools to display yet.</p>
        )}
      </div>
    </section>
  );
}
