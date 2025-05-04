import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react'; // Import Github icon

interface Project {
  title: string;
  description: string;
  imageUrl: string;
  imageHint: string; // For AI hint
  tags: string[];
  liveUrl?: string;
  repoUrl?: string;
}

// Placeholder data - replace with actual projects
const projects: Project[] = [
  {
    title: 'Project Phoenix',
    description: 'A revolutionary web application built with Next.js and Tailwind CSS.',
    imageUrl: 'https://picsum.photos/seed/phoenix/600/400',
    imageHint: 'abstract technology code',
    tags: ['Next.js', 'Tailwind CSS', 'TypeScript', 'AI'],
    liveUrl: '#',
    repoUrl: '#',
  },
  {
    title: 'Tool Titan',
    description: 'A suite of developer tools designed to boost productivity.',
    imageUrl: 'https://picsum.photos/seed/titan/600/400',
    imageHint: 'tools workshop code',
    tags: ['React', 'Node.js', 'Utility'],
    repoUrl: '#',
  },
  {
    title: 'Component Castle',
    description: 'A reusable component library for modern web interfaces.',
    imageUrl: 'https://picsum.photos/seed/castle/600/400',
    imageHint: 'design system components ui',
    tags: ['React', 'Storybook', 'Design System'],
    liveUrl: '#',
  },
   {
    title: 'Data Dashboard',
    description: 'Visualizing complex data sets with interactive charts.',
    imageUrl: 'https://picsum.photos/seed/dashboard/600/400',
    imageHint: 'data visualization chart graph',
    tags: ['React', 'D3.js', 'Data Viz'],
    liveUrl: '#', // Added live link for consistency
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="section-padding">
      <div className="container mx-auto">
        <h2 className="text-3xl text-center mb-10">Apps & Tools</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card key={project.title} className="group flex flex-col overflow-hidden shadow-md border border-border transition-all duration-300 ease-out hover:shadow-xl hover:border-accent hover:-translate-y-1">
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
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
          ))}
        </div>
      </div>
    </section>
  );
}
