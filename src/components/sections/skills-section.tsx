
"use client";

import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Cpu, CodeXml, Layers3, Smartphone, DatabaseZap, Palette, Settings2, GitFork, BrainCircuit, Terminal, Wifi, KeyRound, Network, ScanEye, Code2, Lock, ShieldCheck } from 'lucide-react';
import { useTheme } from '@/contexts/theme-context';

const professionalSkills = [
  { name: "C", proficiency: 85, icon: <CodeXml className="w-5 h-5 text-primary" /> },
  { name: "C++", proficiency: 80, icon: <CodeXml className="w-5 h-5 text-primary" /> },
  { name: "Java", proficiency: 75, icon: <Cpu className="w-5 h-5 text-primary" /> },
  { name: "Python", proficiency: 90, icon: <BrainCircuit className="w-5 h-5 text-primary" /> },
  { name: "HTML5", proficiency: 95, icon: <CodeXml className="w-5 h-5 text-primary" /> },
  { name: "CSS3", proficiency: 90, icon: <Palette className="w-5 h-5 text-primary" /> },
  { name: "JavaScript (ES6+)", proficiency: 90, icon: <CodeXml className="w-5 h-5 text-primary" /> },
  { name: "React", proficiency: 85, icon: <Layers3 className="w-5 h-5 text-primary" /> },
  { name: "Next.js", proficiency: 80, icon: <Layers3 className="w-5 h-5 text-primary" /> },
  { name: "Node.js", proficiency: 75, icon: <Settings2 className="w-5 h-5 text-primary" /> },
  { name: "Express.js", proficiency: 70, icon: <Settings2 className="w-5 h-5 text-primary" /> },
  { name: "Flutter", proficiency: 70, icon: <Smartphone className="w-5 h-5 text-primary" /> },
  { name: "Tailwind CSS", proficiency: 90, icon: <Palette className="w-5 h-5 text-primary" /> },
  { name: "Firebase", proficiency: 75, icon: <DatabaseZap className="w-5 h-5 text-primary" /> },
  { name: "MongoDB", proficiency: 70, icon: <DatabaseZap className="w-5 h-5 text-primary" /> },
  { name: "REST APIs", proficiency: 80, icon: <Settings2 className="w-5 h-5 text-primary" /> },
  { name: "Git & GitHub", proficiency: 85, icon: <GitFork className="w-5 h-5 text-primary" /> },
];

const hackerSkills = [
  { name: "Kali Linux", proficiency: 90, icon: <Terminal className="w-5 h-5 text-primary" /> },
  { name: "Nmap", proficiency: 85, icon: <ScanEye className="w-5 h-5 text-primary" /> },
  { name: "Wireshark", proficiency: 80, icon: <Network className="w-5 h-5 text-primary" /> },
  { name: "Burp Suite", proficiency: 88, icon: <Lock className="w-5 h-5 text-primary" /> },
  { name: "Airmon-ng Suite", proficiency: 75, icon: <Wifi className="w-5 h-5 text-primary" /> },
  { name: "Gobuster", proficiency: 70, icon: <ScanEye className="w-5 h-5 text-primary" /> },
  { name: "Bettercap", proficiency: 65, icon: <Network className="w-5 h-5 text-primary" /> },
  { name: "Ettercap", proficiency: 60, icon: <Network className="w-5 h-5 text-primary" /> },
  { name: "BeEF", proficiency: 68, icon: <Code2 className="w-5 h-5 text-primary" /> },
  { name: "Wifite", proficiency: 72, icon: <Wifi className="w-5 h-5 text-primary" /> },
  { name: "Python Scripting", proficiency: 90, icon: <Code2 className="w-5 h-5 text-primary" /> },
  { name: "Bash Scripting", proficiency: 80, icon: <Terminal className="w-5 h-5 text-primary" /> },
  { name: "Password Cracking", proficiency: 78, icon: <KeyRound className="w-5 h-5 text-primary" /> },
  { name: "Vulnerability Assessment", proficiency: 85, icon: <ShieldCheck className="w-5 h-5 text-primary" /> },
  { name: "Penetration Testing (Web/Network/WiFi)", proficiency: 82, icon: <ShieldCheck className="w-5 h-5 text-primary" /> },
];


export default function SkillsSection() {
  const { isHackerMode } = useTheme();
  const skillsToDisplay = isHackerMode ? hackerSkills : professionalSkills;
  const sectionTitle = isHackerMode ? "Cyber Arsenal" : "Technical Arsenal";
  const sectionSubtitle = isHackerMode ? "Tools and techniques for digital reconnaissance and defense." : "My toolkit for engineering digital realities.";
  const Icon = isHackerMode ? Terminal : Cpu;

  return (
    <section id="skills" className="bg-transparent">
      <div className="container mx-auto">
         <div className="text-center mb-16 animate-fade-in-up">
            <Icon className={`w-12 h-12 text-primary mx-auto mb-4 animate-pulse-glow ${isHackerMode ? 'text-glow-primary' : ''}`} />
            <h2 className={`text-3xl md:text-4xl font-bold text-primary tracking-tight ${isHackerMode ? 'font-mono text-glow-primary' : ''}`}>
            {sectionTitle}
            </h2>
            <p className={`text-muted-foreground mt-2 ${isHackerMode ? 'font-mono' : ''}`}>{sectionSubtitle}</p>
        </div>

        <Card className="card-interactive p-8 md:p-10">
          <CardContent className="pt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-8">
              {skillsToDisplay.map((skill, index) => (
                <div key={skill.name} className="animate-fade-in-up group" style={{ animationDelay: `${index * 0.05 + 0.2}s` }}>
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="flex items-center gap-2.5">
                      <div className={`p-1.5 bg-primary/15 rounded-md group-hover:bg-primary/25 transition-colors shadow-sm ${isHackerMode ? 'bg-primary/20 group-hover:bg-primary/30' : ''}`}>
                        {skill.icon}
                      </div>
                      <span className={`font-medium text-foreground/90 ${isHackerMode ? 'font-mono' : ''}`}>{skill.name}</span>
                    </div>
                    <span className={`text-sm text-muted-foreground group-hover:text-primary transition-colors ${isHackerMode ? 'font-mono' : ''}`}>{skill.proficiency}%</span>
                  </div>
                  <Progress 
                    value={skill.proficiency} 
                    aria-label={`${skill.name} proficiency`} 
                    className={`h-2.5 progress-shimmer [&>div]:bg-gradient-to-r [&>div]:from-primary [&>div]:to-accent group-hover:[&>div]:shadow-md group-hover:[&>div]:shadow-primary/40 transition-all duration-300 ${isHackerMode ? '[&>div]:from-primary [&>div]:to-green-400' : ''}`}
                  />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
