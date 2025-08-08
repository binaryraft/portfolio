
"use client";

import { Button } from "@/components/ui/button";
import { ArrowDown, Cpu, Sparkles, Terminal, ShieldCheck } from "lucide-react"; 
import Link from "next/link";
import { useTheme } from "@/contexts/theme-context";

export default function HeroSection() {
  const { isHackerMode } = useTheme();

  const professionalTitle = "Alfas B";
  const professionalSubtitle = "Professional Techie";
  const professionalDescription = "Leveraging the full spectrum of technology to architect robust solutions and drive innovation. My expertise spans software development, system design, and cutting-edge digital transformations.";

  const hackerTitle = "Alfas B"; 
  const hackerSubtitle = "Cyber Sentinel";
  const hackerDescription = "Navigating the digital shadows, I analyze systems, uncover vulnerabilities, and fortify defenses. My domain is the network; my tools are logic and code. Ethical exploration, relentless learning.";


  return (
    <section id="hero" className="text-foreground flex flex-col items-center justify-center text-center relative overflow-hidden">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div 
          className="absolute -top-1/3 -left-1/3 w-2/3 h-2/3 bg-primary/10 rounded-full filter blur-3xl opacity-60 animate-pulse-slow"
          style={{ animationDelay: '0s' }}
        />
        <div 
          className="absolute -bottom-1/3 -right-1/3 w-2/3 h-2/3 bg-accent/10 rounded-full filter blur-3xl opacity-50 animate-pulse-medium"
          style={{ animationDelay: '1.5s' }}
        />
         <div 
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] hacker-theme:opacity-[0.07]"
          style={{
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 600 600' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")"
          }}
        />
      </div>
      
      <div className="relative z-10 p-4 flex flex-col items-center">
        <h1 className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary bg-size-200 animate-gradient-text animate-fade-in-up ${isHackerMode ? 'font-mono text-glow-primary' : ''}`} style={{ animationDelay: '0.3s' }}>
          {isHackerMode ? hackerTitle : professionalTitle}
        </h1>
        <p className={`text-2xl md:text-3xl font-medium mb-8 animate-fade-in-up ${isHackerMode ? 'font-mono text-glow-accent text-foreground/90' : 'text-foreground/80'}`} style={{ animationDelay: '0.5s' }}>
          {isHackerMode ? hackerSubtitle : professionalSubtitle}
        </p>
        <p className={`text-lg md:text-xl max-w-3xl mx-auto mb-10 text-muted-foreground animate-fade-in-up leading-relaxed ${isHackerMode ? 'font-mono' : ''}`} style={{ animationDelay: '0.7s' }}>
          {isHackerMode ? hackerDescription : professionalDescription}
        </p>
        <div className="space-y-4 sm:space-y-0 sm:space-x-6 flex flex-col sm:flex-row items-center animate-fade-in-up" style={{ animationDelay: '0.9s' }}>
          <Button 
            size="lg" 
            asChild 
            className={`w-full sm:w-auto px-10 py-6 text-lg shadow-primary/40 ${isHackerMode ? 'font-mono btn-primary-animated' : 'btn-primary-animated'}`}
          >
            <Link href={isHackerMode ? "#skills" : "#projects"}>{isHackerMode ? "View Arsenal" : "Explore Creations"}</Link>
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            asChild 
            className={`w-full sm:w-auto px-10 py-6 text-lg shadow-accent/40 ${isHackerMode ? 'font-mono btn-accent-animated' : 'btn-accent-animated border-accent text-accent hover:text-accent-foreground'}`}
          >
            <Link href="#contact">{isHackerMode ? "Open Secure Channel" : "Initiate Contact"}</Link>
          </Button>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce z-10">
        <Link href="#about" aria-label="Scroll to About Me">
          <ArrowDown className="w-10 h-10 text-primary/60 hover:text-primary transition-colors" />
        </Link>
      </div>

      <style jsx global>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.7; transform: scale(1) rotate(0deg); }
          50% { opacity: 0.5; transform: scale(1.1) rotate(8deg); }
        }
        @keyframes pulse-medium {
          0%, 100% { opacity: 0.6; transform: scale(1) rotate(0deg); }
          50% { opacity: 0.4; transform: scale(1.1) rotate(-8deg); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 14s infinite ease-in-out;
        }
        .animate-pulse-medium {
          animation: pulse-medium 12s infinite ease-in-out;
        }
        .bg-size-200 {
          background-size: 200% auto;
        }
        .hacker-theme .animate-gradient-text {
          animation: gradient-text 4s linear infinite; 
        }
      `}</style>
    </section>
  );
}
