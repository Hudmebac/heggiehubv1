import Link from 'next/link';
import { Github, Linkedin, Lock } from 'lucide-react'; // Added Lock, removed Sparkles, Wrench
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
          {/* Admin link */}
           <Button variant="ghost" size="icon" asChild>
             <Link href="/admin" title="Admin Login">
                <Lock className="h-5 w-5" />
                <span className="sr-only">Admin</span>
            </Link>
          </Button>
        </div>
      </div>
    </footer>
  );
}
