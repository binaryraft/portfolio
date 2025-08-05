
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { GraduationCap, School, BookOpenText, Award } from 'lucide-react';

const academicData = [
  {
    id: 1,
    institution: "B.Tech in Computer Science & Engineering",
    details: "Carmel College of Engineering and Technology, APJ Abdul Kalam Technological University (2019 - 2023)",
    description: "Focused on core computer science principles, advanced software development, and specialized in AI & Machine Learning. Achieved Distinction, Dean's List.",
    icon: <GraduationCap className="w-6 h-6 text-primary-foreground" />,
  },
  {
    id: 2,
    institution: "Polytechnic Diploma in Computer Engineering",
    details: "Carmel College of Engineering and Technology",
    description: "Gained practical skills in programming, networking, and hardware. Secured a CGPA of 8.3, earning a First Class with Distinction.",
    highlight: "First Class with Distinction",
    icon: <Award className="w-6 h-6 text-primary-foreground" />, 
  },
  {
    id: 3,
    institution: "Higher Secondary Education (Computer Science)",
    details: "Lajnathul Muhammediya HSS",
    description: "Completed with a focus on Physics, Chemistry, Mathematics, and Computer Science. CGPA: 6.0.",
    icon: <BookOpenText className="w-6 h-6 text-primary-foreground" />,
  },
  {
    id: 4,
    institution: "Secondary School Education (CBSE)",
    details: "MES English Medium School",
    description: "Completed secondary education with a strong academic record (CGPA: 9.0) and active participation in extracurriculars.",
    highlight: "CGPA: 9.0",
    icon: <School className="w-6 h-6 text-primary-foreground" />,
  },
];

export default function AcademicHistorySection() {
  return (
    <section id="academics" className="bg-transparent">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-primary tracking-tight animate-fade-in-up">
          Academic Journey
        </h2>
        <div className="relative">
          {/* Central Timeline Bar */}
          <div className="absolute left-1/2 top-0 h-full w-1 bg-border/50 -translate-x-1/2"></div>
          
          <div className="space-y-12 md:space-y-0">
            {academicData.map((item, index) => (
              <div key={item.id} className="relative w-full">
                {/* Timeline Item Container */}
                <div className={`flex items-center w-full ${index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
                  {/* Half with empty space */}
                  <div className="hidden md:block w-5/12"></div>
                  {/* Center Dot and Icon */}
                  <div className="z-10 flex items-center justify-center">
                    <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-primary shadow-lg shadow-primary/30 ring-4 ring-background animate-scale-in" style={{ animationDelay: `${index * 0.15 + 0.3}s` }}>
                      {item.icon}
                    </div>
                  </div>
                  {/* Card Section */}
                  <div className="w-full md:w-5/12 px-2 sm:px-4">
                    <Card className="card-interactive animate-fade-in-up" style={{ animationDelay: `${index * 0.15 + 0.2}s` }}>
                      <CardHeader className="pb-3">
                        <CardTitle className="text-xl font-semibold text-primary group-hover:text-accent transition-colors duration-300">{item.institution}</CardTitle>
                        <p className="text-sm text-muted-foreground pt-1">{item.details}</p>
                      </CardHeader>
                      <CardContent className="pt-0 pb-5">
                        <p className="leading-relaxed text-foreground/80">{item.description}</p>
                         {item.highlight && (
                          <div className="mt-3">
                            <span className="inline-block bg-accent/20 text-accent-foreground/90 py-1 px-3 rounded-full text-xs font-semibold border border-accent/40">
                              {item.highlight}
                            </span>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
