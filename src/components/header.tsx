import Link from 'next/link';
import { ThemeToggle } from './theme-toggle';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Network, // Replaced Hub with Network
  Github,
  Linkedin,
  Lock,
  GalleryVerticalEnd,
  Sparkles,
  Wrench,
  ExternalLink,
} from 'lucide-react';
import { projects, usefulTools } from '@/data/projects'; // Import project data

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <Link href="/" className="flex items-center space-x-2 mr-auto group">
           {/* Replaced Hub icon with Network */}
           <Network className="h-6 w-6 text-accent transition-transform duration-300 group-hover:rotate-[-15deg]" />
           <h1 className="text-2xl font-bold uppercase tracking-wider">HeggieHub</h1>
        </Link>
        <nav className="flex items-center space-x-1 sm:space-x-2">
            {/* Features Dropdown */}
           <DropdownMenu>
             <DropdownMenuTrigger asChild>
               <Button variant="ghost" size="icon" title="Features">
                 <Sparkles className="h-5 w-5" />
                 <span className="sr-only">Features</span>
               </Button>
             </DropdownMenuTrigger>
             <DropdownMenuContent align="end">
               <DropdownMenuLabel>Features</DropdownMenuLabel>
               <DropdownMenuSeparator />
               {projects.map((feature) => (
                 <DropdownMenuItem key={feature.title} asChild>
                   <a
                     href={feature.liveUrl}
                     target="_blank"
                     rel="noopener noreferrer"
                     className="flex items-center justify-between w-full"
                   >
                     {feature.title}
                     {feature.liveUrl && <ExternalLink className="h-4 w-4 ml-2 text-muted-foreground" />}
                   </a>
                 </DropdownMenuItem>
               ))}
                <DropdownMenuSeparator />
                 <DropdownMenuItem asChild>
                    <Link href="/#features" className="w-full justify-center">View All Features</Link>
                 </DropdownMenuItem>
             </DropdownMenuContent>
           </DropdownMenu>

            {/* Useful Tools Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" title="Useful Tools">
                  <Wrench className="h-5 w-5" />
                  <span className="sr-only">Useful Tools</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Useful Tools</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {usefulTools.map((tool) => (
                  <DropdownMenuItem key={tool.title} asChild>
                    <a
                      href={tool.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between w-full"
                    >
                      {tool.title}
                      {tool.liveUrl && <ExternalLink className="h-4 w-4 ml-2 text-muted-foreground" />}
                    </a>
                  </DropdownMenuItem>
                ))}
                 <DropdownMenuSeparator />
                 <DropdownMenuItem asChild>
                    <Link href="/#useful-tools" className="w-full justify-center">View All Tools</Link>
                 </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Gallery Link */}
           <Button variant="ghost" size="icon" asChild>
             <Link href="/gallery" title="View Gallery">
                <GalleryVerticalEnd className="h-5 w-5" />
                <span className="sr-only">Gallery</span>
            </Link>
          </Button>

           {/* Social Links */}
           <Button variant="ghost" size="icon" asChild>
            <a href="https://www.linkedin.com/in/craig-heggie-a51b4340/" target="_blank" rel="noopener noreferrer" title="LinkedIn Profile">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
          </Button>
           <Button variant="ghost" size="icon" asChild>
            <a href="https://github.com/Hudmebac" target="_blank" rel="noopener noreferrer" title="GitHub Profile">
              <Github className="h-5 w-5" />
               <span className="sr-only">GitHub</span>
            </a>
          </Button>

            {/* Admin Link */}
          <Button variant="ghost" size="icon" asChild>
             <Link href="/admin" title="Admin Login">
                <Lock className="h-5 w-5" />
                <span className="sr-only">Admin</span>
            </Link>
          </Button>

           {/* Theme Toggle */}
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
