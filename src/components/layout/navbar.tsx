
"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Printer, X, Bot, ShieldAlert, Terminal } from 'lucide-react';
import { useTheme } from '@/contexts/theme-context';

const navItems = [
  { href: '#about', label: 'About' },
  { href: '#academics', label: 'Education' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#testimonials', label: 'Testimonials', professionalOnly: true },
  { href: '#achievements', label: 'Awards', professionalOnly: true },
  { href: '#blog', label: 'Blog', professionalOnly: true },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const { isHackerMode, toggleHackerMode } = useTheme();
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const currentNavItems = navItems.filter(item => isHackerMode ? !item.professionalOnly : true);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      let currentSectionId = '';
      const sections = currentNavItems.map(item => document.querySelector(item.href) as HTMLElement);
      const navbarHeight = document.querySelector('header')?.offsetHeight || 80;
      
      sections.forEach((section, index) => {
        if (section) {
          const sectionTop = section.offsetTop - navbarHeight - 20;
          const sectionBottom = sectionTop + section.offsetHeight;
          
          if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
            currentSectionId = currentNavItems[index].href;
          }
        }
      });
      
      if (!currentSectionId && window.scrollY < (document.querySelector(currentNavItems[0]?.href) as HTMLElement)?.offsetTop - navbarHeight - 20) {
         currentSectionId = ''; 
      }
      setActiveSection(currentSectionId);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); 
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHackerMode, currentNavItems]);

  const handleLinkClick = (href: string) => {
    setIsSheetOpen(false);
    if (href === '/') { 
      window.scrollTo({ top: 0, behavior: 'smooth'});
      setActiveSection('');
      return;
    }
    const element = document.querySelector(href);
    if (element) {
      const navbarHeight = document.querySelector('header')?.offsetHeight || 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const navLinkClasses = (href: string) => 
    `relative text-sm font-medium transition-colors duration-200 
     ${activeSection === href 
       ? `text-primary font-semibold ${isHackerMode ? 'text-glow-primary' : ''}`
       : `text-foreground/70 hover:text-primary ${isHackerMode ? 'hover:text-glow-primary' : ''}`
     } 
     ${isHackerMode ? 'font-mono' : ''}
     px-3 py-2 rounded-md group`;

  const activeIndicator = (href: string) =>
    `absolute bottom-0 left-0 w-full h-0.5 bg-primary transition-transform duration-300 origin-center scale-x-0 group-hover:scale-x-75
     ${activeSection === href ? '!scale-x-100' : ''}
     ${isHackerMode && activeSection === href ? 'bg-green-400' : ''}
     ${isHackerMode && !(activeSection === href) ? 'group-hover:bg-green-400' : ''}`;


  const HackerModeIcon = isHackerMode ? Terminal : ShieldAlert;
  const resumeLink = `/resume?mode=${isHackerMode ? 'hacker' : 'professional'}`;

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out print:hidden
                  ${isScrolled ? 'bg-background/70 backdrop-blur-lg shadow-2xl border-b border-border/30' : 'bg-transparent border-b border-transparent'}
                  ${isHackerMode && isScrolled ? 'border-primary/40' : ''}`}
      style={{ height: '80px' }} 
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
        <Link href="/" className={`flex items-center gap-2 text-2xl font-bold text-primary hover:text-accent transition-colors duration-300 ${isHackerMode ? 'font-mono text-glow-primary hover:text-glow-accent' : ''}`} onClick={(e) => { e.preventDefault(); handleLinkClick('/');}}>
          {isHackerMode ? <Terminal className="w-8 h-8 transform transition-all duration-500 hover:rotate-[10deg] hover:scale-110 text-primary" /> : <Bot className="w-8 h-8 transform transition-all duration-500 hover:rotate-[20deg] hover:scale-110 text-primary" />}
          <span className="tracking-tight">Alfas B</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-1">
          {currentNavItems.map((item) => (
            <a key={item.label} href={item.href} onClick={(e) => { e.preventDefault(); handleLinkClick(item.href);}} className={navLinkClasses(item.href)}>
                {item.label}
                <span className={activeIndicator(item.href)}></span>
            </a>
          ))}
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleHackerMode}
            className={`ml-4 rounded-full transform transition-all hover:scale-110 
                        ${isHackerMode ? 'text-green-400 hover:text-green-300 hover:bg-green-500/10' : 'text-primary hover:text-accent hover:bg-primary/10'}`}
            aria-label="Toggle Theme Mode"
          >
            <HackerModeIcon className="h-5 w-5 transition-transform duration-300 ease-in-out group-hover:scale-110" />
          </Button>
          <Button 
            asChild 
            variant="outline" 
            size="sm" 
            className={`border-primary/70 text-primary hover:bg-primary hover:text-primary-foreground ml-2 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-primary/30 ${isHackerMode ? 'font-mono border-green-500/70 text-green-400 hover:bg-green-500 hover:text-black' : ''}`}
          >
            <Link href={resumeLink} target="_blank" rel="noopener noreferrer">
              <Printer className="mr-2 h-4 w-4" /> Resume
            </Link>
          </Button>
        </nav>

        <div className="md:hidden flex items-center gap-2">
           <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleHackerMode}
            className={`rounded-full ${isHackerMode ? 'text-green-400 hover:text-green-300 hover:bg-green-500/10' : 'text-primary hover:text-accent hover:bg-primary/10'}`}
            aria-label="Toggle Theme Mode"
          >
            <HackerModeIcon className="h-6 w-6 transition-transform duration-300 ease-in-out group-hover:scale-110" />
          </Button>
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className={`text-primary hover:bg-primary/10 ${isHackerMode ? 'text-green-400 hover:text-green-300' : ''}`}>
                <Menu className="h-7 w-7" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className={`w-full max-w-xs bg-background/80 backdrop-blur-xl p-0 shadow-2xl border-l border-border/50 ${isHackerMode ? 'border-primary/30' : ''}`}>
              <div className="flex flex-col h-full">
                <div className={`flex items-center justify-between p-5 border-b border-border/50 ${isHackerMode ? 'border-primary/30' : ''}`}>
                    <Link href="/" className={`flex items-center gap-2 text-xl font-bold text-primary ${isHackerMode ? 'font-mono text-green-400' : ''}`} onClick={(e) => { e.preventDefault(); handleLinkClick('/'); setIsSheetOpen(false);}}>
                        {isHackerMode ? <Terminal className="w-6 h-6" /> : <Bot className="w-6 h-6" />}
                        <span>Alfas B</span>
                    </Link>
                    <Button variant="ghost" size="icon" onClick={() => setIsSheetOpen(false)} className={`text-primary hover:bg-primary/10 ${isHackerMode ? 'text-green-400 hover:text-green-300' : ''}`}>
                        <X className="h-6 w-6" />
                    </Button>
                </div>
                <nav className="flex-grow p-4 space-y-1.5 overflow-y-auto">
                  {currentNavItems.map((item) => (
                     <a 
                        key={item.label}
                        href={item.href} 
                        onClick={(e) => { e.preventDefault(); handleLinkClick(item.href);}} 
                        className={`block w-full text-left px-4 py-3 rounded-lg text-base transition-all duration-200
                                    ${activeSection === item.href 
                                      ? `bg-primary/20 text-primary font-semibold shadow-sm ${isHackerMode ? 'bg-green-500/20 text-green-300' : ''}` 
                                      : `text-foreground/80 hover:bg-primary/15 hover:text-primary hover:pl-5 ${isHackerMode ? 'text-green-400/80 hover:bg-green-500/15 hover:text-green-300' : ''}`
                                    }
                                    ${isHackerMode ? 'font-mono' : ''}`}
                      >
                        {item.label}
                      </a>
                  ))}
                </nav>
                <div className={`p-5 border-t border-border/50 ${isHackerMode ? 'border-primary/30' : ''}`}>
                  <Button 
                    asChild 
                    variant="default" 
                    className={`w-full text-base py-3 ${isHackerMode ? 'font-mono btn-primary-animated bg-green-500 hover:bg-green-400 text-black' : 'btn-primary-animated'}`}
                  >
                    <Link href={resumeLink} target="_blank" rel="noopener noreferrer">
                      <Printer className="mr-2 h-4 w-4" /> View &amp; Print Resume
                    </Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
