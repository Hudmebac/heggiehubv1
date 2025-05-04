import Image from 'next/image';
import type { Project } from '@/types/project';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card key={project.title} className="group flex flex-col overflow-hidden shadow-md border border-border transition-all duration-300 ease-out hover:shadow-xl hover:border-accent hover:-translate-y-1">
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={project.imageUrl}
          alt={project.title}
          fill={true} // Use fill instead of layout="fill"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Provide sizes for optimization
          style={{ objectFit: "cover" }} // Use style for objectFit
          data-ai-hint={project.imageHint}
          className="transition-transform duration-300 group-hover:scale-105"
        />
        {/* Subtle overlay effect on hover */}
        <div className="absolute inset-0 bg-black/10 dark:bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      <CardHeader className="pb-2">
        <CardTitle>{project.title}</CardTitle>
        <CardDescription>{project.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow pt-2 pb-4">
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="transition-colors group-hover:bg-accent group-hover:text-accent-foreground">{tag}</Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-end gap-2 pt-0">
        {project.repoUrl && (
          <Button variant="outline" size="sm" asChild className="transition-colors hover:bg-accent/10 hover:border-accent">
            <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" title="View Source Code">
              Code
              <Github className="ml-1 h-4 w-4" /> {/* Use Github icon */}
            </a>
          </Button>
        )}
        {project.liveUrl && (
          <Button variant="default" size="sm" asChild className="bg-secondary hover:bg-secondary/90 text-secondary-foreground dark:bg-secondary dark:hover:bg-secondary/90 dark:text-secondary-foreground transition-colors">
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" title="View Live Demo">
              Live Demo
              <ExternalLink className="ml-1 h-4 w-4" />
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
