
import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink, Layers, Code, Database, Wind, Zap, Box, Cloud } from 'lucide-react';
import React from 'react';

const icons: { [key: string]: React.FC<any> } = {
  'next.js': ({ className }) => (
    <svg className={className} role="img" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 0L2.25 10.305V24h19.5V10.305L12 0zm7.125 21.938h-2.25v-9.376h2.25v9.376zm-4.5-2.812H12l-2.25-3.375h-2.25v6.187H5.25V10.305h6.375a2.25 2.25 0 012.25 2.25v2.25a2.25 2.25 0 01-2.25 2.25H9.375l2.25 3.375h3.001v1.538z"></path></svg>
  ),
  'react': ({ className }) => (
    <svg className={className} role="img" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="2"/><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10A10 10 0 0012 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"/><ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(120 12 12)"/></svg>
  ),
  'tailwind css': ({ className }) => <Wind className={className} />,
  'mongodb': ({ className }) => <Database className={className} />,
  'firebase': ({ className }) => (
     <svg className={className} role="img" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M3.05 16.525l6.05-10.478L3.05 3.113v13.412zM14.9 3.113l-6.05 10.478 6.05 2.934 6.05-13.412h-6.05zm0 17.774l6.05-3.493-9.544-11.348L2.25 18.005l12.65 2.882z"></path></svg>
  ),
  'vite': ({ className }) => (
    <svg className={className} role="img" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 0L1.67 3.5v17L12 24l10.33-3.5v-17L12 0zM9.48 9.5h2.23L12 13.5l.3-.85h2.89l-2.91 8.52h-2.4l2.91-8.52zm-3.8-3.26h2.32l.85 2.4-1.58.55-1.59-2.95zm8.64 0h2.32l-1.59 2.95-1.58-.55.85-2.4z"></path></svg>
  ),
  'envia api': ({ className }) => <Box className={className} />,
  'firebase firestore': ({ className }) => <Cloud className={className} />,
};

const TechTag = ({ tech }: { tech: string }) => {
  const normalizedTech = tech.toLowerCase();
  const Icon = icons[normalizedTech] || Code;

  return (
    <span className="inline-flex items-center gap-1.5 py-1 px-2.5 rounded-full text-xs font-medium bg-primary/10 text-primary group-hover:bg-accent/15 group-hover:text-accent transition-colors duration-300">
      <Icon className="w-3.5 h-3.5" />
      {tech}
    </span>
  );
};


const projectsData = [
  {
    id: 1,
    title: "StockFlow",
    about: "An intelligent inventory management system designed for efficiency and scalability.",
    frameworks: ["Next.js", "Tailwind CSS", "MongoDB"],
    repoLink: "https://github.com/binaryraft/stockflow",
    liveLink: "https://stockspeed.vercel.app",
    image: "https://placehold.co/1280x800.png",
    imageHint: "inventory management dashboard"
  },
  {
    id: 2,
    title: "Spring Gold & Diamonds",
    about: "A specialized billing application tailored for the jewellery industry, ensuring accuracy and compliance.",
    frameworks: ["Next.js", "Tailwind CSS", "MongoDB"],
    repoLink: "https://github.com/binaryraft/stockflow",
    liveLink: "https://spring-mauve.vercel.app",
    image: "https://placehold.co/1280x800.png",
    imageHint: "billing software jewellery"
  },
  {
    id: 3,
    title: "Laynered",
    about: "A premium, responsive e-commerce web application for the Laynered clothing store.",
    frameworks: ["React", "Vite", "Firebase", "Tailwind CSS", "Envia API"],
    repoLink: null,
    liveLink: "https://laynered.com",
    image: "https://placehold.co/1280x800.png",
    imageHint: "ecommerce website clothing"
  },
   {
    id: 4,
    title: "Nature of the Divine",
    about: "A web app for a book selling platform, leveraging serverless architecture for scalability and real-time data.",
    frameworks: ["Firebase Firestore", "Next.js"],
    repoLink: null,
    liveLink: "https://www.natureofthedivine.com",
    image: "https://placehold.co/1280x800.png",
    imageHint: "book selling website"
  },
];

export default function ProjectShowcaseSection() {
  return (
    <section id="projects" className="bg-transparent">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
            <Layers className="w-12 h-12 text-primary mx-auto mb-4 animate-pulse-glow" />
            <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-tight">
            Featured Projects
            </h2>
            <p className="text-muted-foreground mt-2">A glimpse into my development work and capabilities.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <Card key={project.id} className="group flex flex-col card-interactive animate-fade-in-up" style={{ animationDelay: `${index * 0.1 + 0.2}s` }}>
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-t-xl bg-muted/30">
                <Image
                    src={project.image}
                    alt={`Screenshot of ${project.title}`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                    data-ai-hint={project.imageHint}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                <a 
                  href={project.liveLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="absolute inset-0 bg-transparent cursor-pointer"
                  aria-label={`View live site for ${project.title}`}
                ></a>
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="text-xl font-semibold text-primary group-hover:text-accent transition-colors duration-300">{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow pt-2">
                <CardDescription className="text-foreground/80 mb-4">{project.about}</CardDescription>
                 <div className="flex flex-wrap gap-2">
                  {project.frameworks.map(tech => <TechTag key={tech} tech={tech} />)}
                </div>
              </CardContent>
              <CardFooter className="flex justify-start space-x-3 pt-4 pb-6 mt-auto">
                {project.repoLink && (
                  <Button variant="outline" size="sm" asChild className="border-primary/70 text-primary hover:bg-primary hover:text-primary-foreground transform transition-all hover:scale-105">
                    <a href={project.repoLink} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" /> GitHub
                    </a>
                  </Button>
                )}
                {project.liveLink && (
                  <Button variant="default" size="sm" asChild className="btn-accent-animated transform transition-all hover:scale-105">
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" /> Live Site
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
