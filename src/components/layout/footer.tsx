
import Link from 'next/link';
import { Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card text-card-foreground border-t border-border/50 py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center space-x-4 mb-6">
          <Button variant="ghost" size="icon" asChild className="text-muted-foreground hover:text-primary rounded-full transform transition-all hover:scale-110 hover:bg-primary/10">
            <a href="https://github.com/alfasbadar" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github className="h-6 w-6" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild className="text-muted-foreground hover:text-primary rounded-full transform transition-all hover:scale-110 hover:bg-primary/10">
            <a href="https://www.linkedin.com/in/alfas-badar" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin className="h-6 w-6" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild className="text-muted-foreground hover:text-primary rounded-full transform transition-all hover:scale-110 hover:bg-primary/10">
            <a href="mailto:4lfasbadar@gmail.com" aria-label="Email">
              <Mail className="h-6 w-6" />
            </a>
          </Button>
        </div>
        <p className="text-sm text-muted-foreground">
          &copy; {currentYear} Alfas B. All rights reserved.
        </p>
        <p className="text-xs text-muted-foreground/80 mt-3">
          Crafted with <Link href="https://nextjs.org" target="_blank" rel="noopener noreferrer" className="hover:text-primary underline underline-offset-2">Next.js</Link>, <Link href="https://tailwindcss.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary underline underline-offset-2">Tailwind CSS</Link>, and <Link href="https://ui.shadcn.com/" target="_blank" rel="noopener noreferrer" className="hover:text-primary underline underline-offset-2">Shadcn/UI</Link>.
        </p>
      </div>
    </footer>
  );
}
