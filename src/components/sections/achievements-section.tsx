
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Award, Zap, BookCheck, Users, Star, Medal } from 'lucide-react'; // Added Medal

const achievementsData = [
  {
    id: 1,
    title: "Founder & CEO, StockFlow",
    description: "Conceptualized and led the development of a full-scale billing and inventory management system.",
    icon: <Zap className="w-9 h-9 text-accent" />,
    category: "Entrepreneurship",
  },
  {
    id: 2,
    title: "CERD Approval for B.Tech Project",
    description: "Received official approval from the Centre for Engineering Research and Development for final year project.",
    icon: <BookCheck className="w-9 h-9 text-accent" />,
    category: "Academic Research",
  },
];

export default function AchievementsSection() {
  return (
    <section id="achievements" className="bg-transparent">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-primary tracking-tight animate-fade-in-up">
          Achievements & Recognitions
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {achievementsData.map((achievement, index) => (
            <Card key={achievement.id} className="card-interactive animate-fade-in-up flex flex-col group" style={{ animationDelay: `${index * 0.1 + 0.2}s` }}>
              <CardHeader className="flex flex-row items-center space-x-4 p-6 bg-card/50 border-b border-border/40"> {/* Slight translucency */}
                <div className="p-3 bg-accent/20 rounded-lg shadow-inner group-hover:bg-accent/30 transition-colors duration-300 animate-pulse-glow group-hover:animate-none" style={{animationDuration: '3s'}}>
                  {achievement.icon}
                </div>
                <div>
                  <CardTitle className="text-lg font-semibold text-primary group-hover:text-accent transition-colors duration-300 leading-tight">{achievement.title}</CardTitle>
                  <p className="text-xs text-muted-foreground pt-1">{achievement.category}</p>
                </div>
              </CardHeader>
              <CardContent className="p-6 pt-4 flex-grow">
                <p className="text-sm text-foreground/80 leading-relaxed">{achievement.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
