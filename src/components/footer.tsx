import Link from 'next/link';
import { Github, Linkedin, Sparkles, Wrench } from 'lucide-react'; // Added Sparkles, Wrench
import { Button } from '@/components/ui/button';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted text-muted-foreground border-t">
      <div className="container mx-auto py-6 px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center">
        <p className="text-sm text-center sm:text-left mb-4 sm:mb-0">
          © {currentYear} Craig Heggie. All rights reserved.
        </p>
        <div className="flex space-x-4">
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
          {/* Admin link is intentionally omitted from the footer per user request */}
        </div>
      </div>
    </footer>
  );
}
