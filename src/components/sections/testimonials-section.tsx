
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import { Star, QuoteIcon, UsersRound } from 'lucide-react';

const testimonialsData = [
  {
    id: 1,
    name: "Ahmed Yaseen",
    title: "Founder, laynered.com",
    testimonial: "What Alfas delivered was premium and cool. The design for both desktop and mobile is unique, with a cool, intuitive interface that exceeded our expectations.",
    avatar: "https://placehold.co/100x100.png",
    imageHint: "man professional modern",
    rating: 5,
  },
  {
    id: 2,
    name: "Azil",
    title: "Spring Gold & Diamonds",
    testimonial: "On short notice, Alfas delivered an incredibly powerful billing system that met our exact and complex requirements. The efficiency and precision of the final product were outstanding.",
    avatar: "https://placehold.co/100x100.png",
    imageHint: "man business owner",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="bg-transparent">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
            <UsersRound className="w-12 h-12 text-primary mx-auto mb-4 animate-pulse-glow" /> 
            <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-tight">
            Network Commendations
            </h2>
            <p className="text-muted-foreground mt-2">Testimonials from collaborators and mentors.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonialsData.map((testimonial, index) => (
            <Card key={testimonial.id} className="group flex flex-col card-interactive animate-fade-in-up" style={{ animationDelay: `${index * 0.1 + 0.2}s` }}>
              <CardHeader className="bg-card/50 p-6 border-b border-border/40"> 
                <div className="flex items-center space-x-4">
                  {testimonial.avatar ? (
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      width={60}
                      height={60}
                      className="rounded-full border-2 border-primary/70 shadow-lg group-hover:border-primary transition-all duration-300 group-hover:shadow-primary/30"
                      data-ai-hint={testimonial.imageHint}
                    />
                  ) : (
                    <div className="w-14 h-14 rounded-full bg-muted/30 flex items-center justify-center border-2 border-primary/70 shadow-lg">
                      <UsersRound className="w-8 h-8 text-primary" />
                    </div>
                  )}
                  <div>
                    <CardTitle className="text-lg font-semibold text-primary group-hover:text-accent transition-colors duration-300">{testimonial.name}</CardTitle>
                    <p className="text-xs text-muted-foreground">{testimonial.title}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex-grow p-6 relative">
                <QuoteIcon className="absolute top-5 left-5 w-12 h-12 text-primary/10 transform rotate-180 -z-0 group-hover:text-primary/20 transition-all duration-300 scale-90 group-hover:scale-100" />
                <p className="text-foreground/80 leading-relaxed italic text-center z-10 relative">&quot;{testimonial.testimonial}&quot;</p>
                <QuoteIcon className="absolute bottom-5 right-5 w-12 h-12 text-primary/10 -z-0 group-hover:text-primary/20 transition-all duration-300 scale-90 group-hover:scale-100" />
              </CardContent>
              <CardFooter className="p-6 pt-2 flex justify-center border-t border-border/40">
                <div className="flex items-center">
                  {Array(5).fill(0).map((_, i) => (
                    <Star key={i} className={`w-5 h-5 transition-colors duration-150 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400 group-hover:text-yellow-300 group-hover:fill-yellow-300 group-hover:animate-pulse' : 'text-muted-foreground/30 group-hover:text-muted-foreground/50'}`} 
                    style={{animationDelay: `${i * 50}ms`}}/>
                  ))}
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
