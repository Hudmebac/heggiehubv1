import Image from 'next/image';
import type { Project } from '@/types/project';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Link as LinkIcon, Info } from 'lucide-react'; // Added Info icon
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose
} from "@/components/ui/dialog"
import { ScrollArea } from '@/components/ui/scroll-area';


interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const linkButtonText = project.type === 'tool' ? 'Visit Tool' : 'Live Demo';
  const linkButtonTitle = project.type === 'tool' ? 'Visit Tool Website' : 'View Live Demo';
  const LinkButtonIcon = project.type === 'tool' ? LinkIcon : ExternalLink; // Use LinkIcon for tools

  return (
    <Card key={project.title} className="group flex flex-col overflow-hidden shadow-md border border-border transition-all duration-300 ease-out hover:shadow-xl hover:border-accent hover:-translate-y-1 bg-card">
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={project.imageUrl}
          alt={project.title}
          fill={true}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{ objectFit: "cover" }}
          data-ai-hint={project.imageHint}
          className="transition-transform duration-300 group-hover:scale-105"
        />
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
      <CardFooter className="flex justify-end items-center gap-2 pt-0">
        {project.moreInfo && (
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" size="sm" title="More Info" className="transition-colors hover:bg-accent/10 hover:border-accent hover:text-accent-foreground">
                <Info className="h-4 w-4" />
                <span className="sr-only">More Info</span>
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] md:max-w-[600px]">
              <DialogHeader>
                <DialogTitle>{project.title} - More Info</DialogTitle>
                <DialogDescription>Detailed information about {project.title}.</DialogDescription>
              </DialogHeader>
              <ScrollArea className="max-h-[60vh] p-1">
                 <div className="prose dark:prose-invert max-w-none text-sm">
                    {project.moreInfo.split('\n').map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                    ))}
                </div>
               </ScrollArea>
               <DialogClose asChild>
                <Button type="button" variant="secondary" className="mt-4">
                    Close
                </Button>
              </DialogClose>
            </DialogContent>
          </Dialog>
        )}
        {project.repoUrl && (
          <Button variant="outline" size="sm" asChild className="transition-colors hover:bg-accent/10 hover:border-accent hover:text-accent-foreground">
            <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" title="View Source Code">
              Code
              <Github className="ml-1 h-4 w-4" />
            </a>
          </Button>
        )}
        {project.liveUrl && (
          // Use accent color for live/visit button
          <Button variant="default" size="sm" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground dark:bg-accent dark:hover:bg-accent/90 dark:text-accent-foreground transition-colors group">
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" title={linkButtonTitle} className="group">
              {linkButtonText}
              <LinkButtonIcon className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" /> {/* Use dynamic icon and add hover effect */}
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
