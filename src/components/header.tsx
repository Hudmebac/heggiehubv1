import Link from 'next/link';
import { ThemeToggle } from './theme-toggle';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Lock } from 'lucide-react'; // Added Lock for Admin

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
           <h1 className="text-2xl font-bold uppercase tracking-wider">HeggieHub</h1>
        </Link>
        <nav className="flex items-center space-x-2">
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
          <Button variant="ghost" size="icon" asChild>
             <Link href="/admin" title="Admin Login">
                <Lock className="h-5 w-5" />
                <span className="sr-only">Admin</span>
            </Link>
          </Button>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
