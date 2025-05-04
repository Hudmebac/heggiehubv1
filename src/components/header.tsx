import Link from 'next/link';
import { ThemeToggle } from './theme-toggle';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Lock, GalleryVerticalEnd, Sparkles, Wrench } from 'lucide-react'; // Added GalleryVerticalEnd

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center"> {/* Removed justify-between to allow centering nav items */}
        <Link href="/" className="flex items-center space-x-2 mr-auto"> {/* Pushes nav to the right */}
           <h1 className="text-2xl font-bold uppercase tracking-wider">HeggieHub</h1>
        </Link>
        <nav className="flex items-center space-x-1 sm:space-x-2"> {/* Reduced spacing on small screens */}
            {/* Features Link */}
           <Button variant="ghost" size="icon" asChild>
             <Link href="/#features" title="View Features">
                <Sparkles className="h-5 w-5" />
                <span className="sr-only">Features</span>
            </Link>
          </Button>
            {/* Useful Tools Link */}
           <Button variant="ghost" size="icon" asChild>
             <Link href="/#useful-tools" title="View Useful Tools">
                <Wrench className="h-5 w-5" />
                <span className="sr-only">Useful Tools</span>
            </Link>
          </Button>
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
