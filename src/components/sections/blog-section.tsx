
import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, FileText } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: "Is AI a divine creation made by God through us?",
    date: "October 26, 2023",
    excerpt: "Exploring the philosophical and theological implications of artificial intelligence as a potential extension of divine will.",
    image: "https://scitechdaily.com/images/Artificial-Intelligence-Robot-Thinking-Brain.jpg",
    imageHint: "ai robot thinking",
    link: "#", 
  },
  {
    id: 2,
    title: "The way of coding has shifted. Use AI and learn now.",
    date: "September 15, 2023",
    excerpt: "A look at how AI coding assistants are fundamentally changing the software development lifecycle and why developers must adapt.",
    image: "https://elearn.nptel.ac.in/wp-content/uploads/2025/01/Understanding-AI-Coding-Assistants-for-Programming.jpg",
    imageHint: "ai coding programming",
    link: "#",
  },
  {
    id: 3,
    title: "AI will be out of control. How can we control before its too late.",
    date: "August 02, 2023",
    excerpt: "Examining the potential risks of superintelligence and the critical importance of establishing robust safety protocols and ethical frameworks.",
    image: "https://www.scnsoft.com/blog-pictures/information-security/artificial-intelligence-threats.png",
    imageHint: "ai threats security",
    link: "#",
  },
];

export default function BlogSection() {
  return (
    <section id="blog" className="bg-transparent">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
            <FileText className="w-12 h-12 text-primary mx-auto mb-4 animate-pulse-glow" />
            <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-tight">
            My Thoughts & Insights
            </h2>
            <p className="text-muted-foreground mt-2">Exploring the latest in tech and development.</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Card key={post.id} className="group flex flex-col card-interactive animate-fade-in-up" style={{ animationDelay: `${index * 0.1 + 0.2}s` }}>
              <div className="relative h-52 w-full overflow-hidden rounded-t-xl">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  objectFit="cover"
                  data-ai-hint={post.imageHint}
                  className="transition-transform duration-500 ease-in-out group-hover:scale-110"
                />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
              </div>
              <CardHeader className="pb-3">
                <CardTitle className="text-xl font-semibold text-primary group-hover:text-accent transition-colors duration-300">{post.title}</CardTitle>
                <p className="text-xs text-muted-foreground pt-1">{post.date}</p>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardDescription className="text-foreground/80">{post.excerpt}</CardDescription>
              </CardContent>
              <CardFooter className="pt-4 pb-6">
                <Button variant="link" asChild className="text-primary hover:text-accent p-0 font-medium group-hover:underline">
                  <a href={post.link} target="_blank" rel="noopener noreferrer">
                    Read More <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="text-center mt-16 animate-fade-in-up" style={{animationDelay: "0.5s"}}>
          <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground btn-primary-animated px-8 py-3">
            Explore All Posts (Coming Soon)
          </Button>
        </div>
      </div>
    </section>
  );
}
