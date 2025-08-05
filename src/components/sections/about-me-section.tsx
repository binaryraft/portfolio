
"use client";

import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { User, ShieldQuestion, Swords, Bot, Terminal } from 'lucide-react';
import Link from 'next/link';
import { useTheme } from '@/contexts/theme-context';

export default function AboutMeSection() {
  const { isHackerMode, setHackerMode } = useTheme();

  const professionalBio = (
    <>
      <p className="text-lg text-foreground/90 leading-relaxed">
        Hello! I'm Alfas B, a dedicated Computer Engineer with a strong foundation in software development and a keen interest in creating innovative digital experiences. My journey in technology has been fueled by a desire to solve complex problems and build impactful applications.
      </p>
      <p className="text-muted-foreground leading-relaxed mt-4">
        My academic background started with a CGPA of 9.0 (CBSE) from MES English Medium School, progressing through focused studies in Computer Science and Engineering. I thrive in collaborative environments and am always eager to learn new technologies and methodologies to enhance my skill set. My goal is to leverage technology to create meaningful and user-centric solutions.
      </p>
    </>
  );

  const hackerBio = (
    <>
      <p className="text-lg text-foreground/90 leading-relaxed font-mono">
        Code. Systems. Networks. I dissect the digital, exploring the intricate dance between software and hardware. My curiosity drives me beyond the surface, seeking to understand the 'why' and 'how' of every byte and signal.
      </p>
      <p className="text-muted-foreground leading-relaxed mt-4 font-mono">
        With a strong foundation in networking principles and a deep understanding of computer systems architecture, I navigate complex digital environments. It's not just about finding flaws; it's about comprehending the design, identifying attack vectors, and ultimately, contributing to more resilient and secure technological landscapes. Ethical exploration is paramount.
      </p>
    </>
  );

  return (
    <section id="about" className="bg-transparent">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-8">
          <Card className="card-interactive">
            <CardHeader className="text-center bg-card/50 p-8 border-b border-accent/30">
              <div className="flex justify-center items-center gap-3 mb-2">
                 <div className="relative group">
                    <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center border-2 border-primary/60 group-hover:border-primary transition-all duration-300">
                      <User className={`w-12 h-12 text-primary transition-all duration-300 group-hover:scale-110 ${isHackerMode ? "text-green-400" : ""}`} />
                    </div>
                </div>
                <CardTitle className={`text-3xl md:text-4xl font-bold text-primary tracking-tight ${isHackerMode ? 'font-mono text-glow-primary' : ''}`}>
                  {isHackerMode ? "Operator Profile" : "About Me"}
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="p-8 md:p-12">
              <div className="space-y-6 animate-fade-in-up text-center" style={{ animationDelay: '0.4s' }}>
                {isHackerMode ? hackerBio : professionalBio}
                {!isHackerMode && (
                  <>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      Key academic milestones further detailed in the Education section include:
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2 pl-3 inline-block text-left">
                      <li>MES English Medium School (CGPA: 9.0 - CBSE)</li>
                      <li>Higher Secondary Education (CGPA: 6.0 - Computer Science)</li>
                      <li>Polytechnic Diploma in Computer Engineering (CGPA: 8.3 - First Class with Distinction)</li>
                      <li>B.Tech in Computer Science &amp; Engineering</li>
                    </ul>
                  </>
                )}
              </div>
            </CardContent>
             {isHackerMode && (
                 <CardContent className="p-6 pt-0 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                     <Button onClick={() => setHackerMode(false)} className="w-full sm:w-auto btn-accent-animated font-mono">
                        <Bot className="mr-2 h-4 w-4" /> View Professional Portfolio
                    </Button>
                </CardContent>
            )}
          </Card>
        </div>
      </div>
    </section>
  );
}
