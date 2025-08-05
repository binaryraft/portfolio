
"use client"; 
import { Mail, Phone, Linkedin, Github, FileText, GraduationCap, Laptop, Lightbulb, Award, Brain, ShieldCheck, Network as NetworkIcon, Code2 as CodeIcon } from 'lucide-react';
import React, { useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

const professionalResumeData = {
  name: "Alfas B",
  title: "Computer Engineer",
  contact: {
    email: "alfas.b.dev@example.com",
    phone: "+1 (555) 123-4567", 
    linkedin: "linkedin.com/in/alfasb",
    github: "github.com/alfasb",
    portfolio: "yourportfolio.com" 
  },
  summary: "Dedicated and innovative Computer Engineer with a strong foundation in software development, web technologies, and problem-solving. Proven ability to learn quickly and collaborate effectively in team environments. Eager to leverage technical skills to contribute to impactful projects and drive technological advancements.",
  education: [
    {
      degree: "B.Tech in Computer Science & Engineering",
      institution: "Carmel College of Engineering and Technology, APJ Abdul Kalam Technological University", 
      period: "2019 - 2023",
      notes: "Achieved Distinction, Dean's List. Specialized in Software Development and AI."
    },
    {
      degree: "Polytechnic Diploma in Computer Engineering",
      institution: "Carmel College of Engineering and Technology", 
      period: "2016 - 2019",
      notes: "CGPA: 8.3 (First Class with Distinction). Key Project: 'Smart Library Management System'."
    },
    {
      degree: "Higher Secondary Education (Computer Science)",
      institution: "Lajnathul Muhammediya HSS", 
      period: "2014 - 2016",
      notes: "CGPA: 6.0. Focus on Physics, Chemistry, Mathematics, and Computer Science."
    },
     {
      degree: "Secondary School Education (CBSE)",
      institution: "MES English Medium School", 
      period: "Graduated", 
      notes: "CGPA: 9.0."
    }
  ],
  skills: [ 
    { category: "Programming Languages", items: ["C", "C++", "Java", "Python", "JavaScript (ES6+)"] },
    { category: "Web Technologies", items: ["HTML5", "CSS3", "React", "Next.js", "Node.js", "Express.js", "Tailwind CSS", "REST APIs"] },
    { category: "Mobile Development", items: ["Flutter"] },
    { category: "Databases & Tools", items: ["Firebase", "MongoDB", "Git & GitHub", "VS Code", "Docker (Basic)"] },
  ],
  projects: [ 
    {
      title: "StockFlow",
      tech: "Next.js, Tailwind CSS, MongoDB",
      description: "Developed an intelligent inventory management system designed for efficiency and scalability, featuring real-time data synchronization.",
      link: "https://stockspeed.vercel.app"
    },
    {
      title: "Spring Gold & Diamonds",
      tech: "Next.js, Tailwind CSS, MongoDB",
      description: "Built a specialized billing application for the jewellery industry, ensuring transaction accuracy and compliance with industry standards.",
      link: "https://spring-mauve.vercel.app"
    },
    {
      title: "Laynered E-commerce",
      tech: "React, Vite, Firebase, Tailwind CSS, Envia API",
      description: "Designed and developed a premium, responsive e-commerce web application for the Laynered clothing brand.",
      link: "https://laynered.com"
    }
  ],
  achievements: [
    "Best Project Award - National Tech Symposium 2023 (AI for Urban Planning)",
    "Certified Advanced Next.js Developer",
    "Global Hackathon Winner - CodeForGood 2022 (Disaster Relief App)",
    "University Gold Medalist - B.Tech CSE", 
    "Top Open Source Contributor - DevTools X"
  ],
};

const hackerResumeData = {
  name: "Alfas B",
  title: "Ethical Hacker / Cybersecurity Analyst",
  contact: professionalResumeData.contact,
  summary: "Proactive and analytical Cybersecurity Analyst with a strong foundation in networking, system vulnerabilities, and penetration testing. Proficient in leveraging a wide array of security tools (Nmap, Burp Suite, Wireshark, Airmon-ng, Metasploit) and scripting (Python, Bash) to identify, assess, and mitigate threats. Experienced in web application security, network reconnaissance, WiFi security audits (Deauth, Evil Twin, WPA cracking), and vulnerability exploitation. Committed to ethical hacking principles and continuous learning in the dynamic field of cybersecurity.",
  education: [ // Education remains the same for both profiles
    {
      degree: "B.Tech in Computer Science & Engineering",
      institution: "Carmel College of Engineering and Technology, APJ Abdul Kalam Technological University",
      period: "2019 - 2023",
      notes: "Achieved Distinction, Dean's List. Specialized in Software Development and AI."
    },
    {
      degree: "Polytechnic Diploma in Computer Engineering",
      institution: "Carmel College of Engineering and Technology",
      period: "2016 - 2019",
      notes: "CGPA: 8.3 (First Class with Distinction). Key Project: 'Smart Library Management System'."
    },
    {
      degree: "Higher Secondary Education (Computer Science)",
      institution: "Lajnathul Muhammediya HSS",
      period: "2014 - 2016",
      notes: "CGPA: 6.0. Focus on Physics, Chemistry, Mathematics, and Computer Science."
    },
    {
      degree: "Secondary School Education (CBSE)",
      institution: "MES English Medium School",
      period: "Graduated",
      notes: "CGPA: 9.0."
    }
  ],
  skills: [
    { category: "Operating Systems & Tools", items: ["Kali Linux", "Nmap", "Wireshark", "Burp Suite", "Airmon-ng Suite", "Gobuster", "Bettercap", "Ettercap", "BeEF", "Wifite", "Metasploit (Basic)", "John the Ripper", "Hashcat"] },
    { category: "Scripting & Automation", items: ["Python (for Security)", "Bash Scripting"] },
    { category: "Penetration Testing Areas", items: ["Network Pentesting", "Web Application VAPT", "WiFi Security Audits", "Vulnerability Assessment & Exploitation"] },
    { category: "Security Concepts & Techniques", items: ["TCP/IP & Networking", "Cryptography Basics", "OS Internals", "MITM Attacks", "Evil Twin Attacks", "Password Cracking (Brute Force, Dictionary)", "Social Engineering Awareness", "Incident Response Fundamentals"] }
  ],
  projects: [
    {
      title: "Simulated Enterprise Network Pentest",
      tech: "Kali Linux, Nmap, Metasploit, Wireshark, Python",
      description: "Conducted a comprehensive penetration test on a model enterprise network. Identified critical vulnerabilities including unpatched systems, weak configurations, and potential data leakage points. Provided actionable remediation strategies.",
      link: null 
    },
    {
      title: "Web App Security Audit for [Fictional Startup]",
      tech: "Burp Suite, OWASP ZAP, SQLMap, Nikto",
      description: "Performed a thorough vulnerability assessment of a web application, uncovering XSS, SQLi, and CSRF vulnerabilities. Documented findings and recommended security hardening measures.",
      link: null 
    },
    {
      title: "CTF Challenge Participation & Writeups",
      tech: "Reverse Engineering, Web Exploitation, Forensics, Cryptography",
      description: "Regular participant in online CTF competitions (e.g., HackTheBox, TryHackMe). Authored detailed writeups for complex challenges, demonstrating problem-solving and technical skills.",
      link: "github.com/alfasb/ctf-writeups" 
    }
  ],
  achievements: [
    "Certified Ethical Hacker (CEH v12) - EC-Council (or other relevant cert)",
    "CompTIA Security+ Certified",
    "Top 10% Ranking - HackTheBox Platform",
    "Successfully identified and responsibly disclosed a medium-severity vulnerability in an open-source project.",
    "Led university cybersecurity club workshop on WiFi security."
  ],
};


const ResumeSection: React.FC<{ title: string; icon?: React.ReactNode; children: React.ReactNode; className?: string }> = ({ title, icon, children, className }) => (
  <section className={`resume-section print-break-inside-avoid ${className || ''}`}>
    <h2 className="text-xl font-semibold mb-3 flex items-center print:text-lg print:mb-1.5 print:font-semibold">
      {icon && <span className="mr-2.5 print:mr-2 print:text-primary print:inline-block">{icon}</span>}
      {title}
    </h2>
    <div className="pl-1 print:pl-6">{children}</div>
  </section>
);


function ResumePageContent() {
  const searchParams = useSearchParams();
  const mode = searchParams.get('mode');
  const isHackerResume = mode === 'hacker';
  const resumeData = isHackerResume ? hackerResumeData : professionalResumeData;

  useEffect(() => {
    const htmlEl = document.documentElement;
    const hadHackerTheme = htmlEl.classList.contains('hacker-theme');
    const hadDarkTheme = htmlEl.classList.contains('dark');
    const hadLightTheme = htmlEl.classList.contains('light');

    if (hadHackerTheme) {
      htmlEl.classList.remove('hacker-theme');
      if (!hadDarkTheme && !hadLightTheme) { 
         document.documentElement.classList.add('light'); 
      } else if (hadDarkTheme) {
        // keep dark
      } else if (hadLightTheme) {
        // keep light
      }
    } else if(!hadDarkTheme && !hadLightTheme) {
        document.documentElement.classList.add('light');
    }


    return () => {
      if (hadHackerTheme) {
        htmlEl.classList.add('hacker-theme');
        if (htmlEl.classList.contains('dark')) htmlEl.classList.remove('dark');
        if (htmlEl.classList.contains('light')) htmlEl.classList.remove('light');
      } else if (!hadDarkTheme && hadLightTheme) {
        // no change
      } else if (hadDarkTheme && !hadLightTheme) {
         // no change
      } else if(!hadDarkTheme && !hadLightTheme) {
         htmlEl.classList.remove('light'); 
         htmlEl.classList.add('dark');
      }
    };
  }, []);
  
  return (
    <div className="resume-page bg-background text-foreground min-h-screen py-8 md:py-12 print:py-0">
      <div className="resume-container max-w-4xl mx-auto p-6 md:p-10 bg-card shadow-2xl print:shadow-none print:p-0 print:bg-transparent border border-border print:border-0">
        
        <header className="text-center mb-8 print:mb-4 print:text-left">
          <h1 className="text-3xl font-bold text-primary print:text-2xl print:font-bold print:text-black">{resumeData.name}</h1>
          <p className="text-lg text-accent print:text-base print:font-medium print:text-gray-700">{resumeData.title}</p>
          <div className="mt-3 flex flex-wrap justify-center gap-x-4 gap-y-1.5 text-xs text-muted-foreground print:text-[8pt] print:justify-start print:gap-x-3 print:gap-y-1 print:mt-1.5">
            <a href={`mailto:${resumeData.contact.email}`} className="hover:text-primary flex items-center print:text-gray-800">
              <Mail size={14} className="mr-1.5 print:mr-1 print:text-primary" /> {resumeData.contact.email}
            </a>
            <a href={`tel:${resumeData.contact.phone}`} className="hover:text-primary flex items-center print:text-gray-800">
              <Phone size={14} className="mr-1.5 print:mr-1 print:text-primary" /> {resumeData.contact.phone}
            </a>
            <a href={`https://${resumeData.contact.linkedin}`} target="_blank" rel="noopener noreferrer" className="hover:text-primary flex items-center print:text-gray-800 print-show-link">
              <Linkedin size={14} className="mr-1.5 print:mr-1 print:text-primary" /> {resumeData.contact.linkedin}
            </a>
            <a href={`https://${resumeData.contact.github}`} target="_blank" rel="noopener noreferrer" className="hover:text-primary flex items-center print:text-gray-800 print-show-link">
              <Github size={14} className="mr-1.5 print:mr-1 print:text-primary" /> {resumeData.contact.github}
            </a>
          </div>
        </header>

        <div className="fixed top-4 right-4 no-print p-2 bg-muted/80 backdrop-blur-sm rounded-lg shadow-lg text-xs text-muted-foreground z-50">
          Use Ctrl/Cmd + P to Print or Save as PDF.
        </div>

        <ResumeSection title="Summary" icon={<FileText size={18} className="print:text-primary"/>}>
          <p className="text-foreground/90 leading-relaxed print:text-sm print:leading-normal print:text-gray-800">{resumeData.summary}</p>
        </ResumeSection>

        <ResumeSection title="Education" icon={<GraduationCap size={18} className="print:text-primary"/>}>
          {resumeData.education.map((edu, index) => (
            <div key={index} className="mb-4 print:mb-2 print-break-inside-avoid">
              <h3 className="font-semibold text-md text-primary print:text-base print:font-semibold print:text-black">{edu.degree}</h3>
              <p className="text-sm text-muted-foreground print:text-xs print:text-gray-600">{edu.institution} | {edu.period}</p>
              <p className="text-sm text-foreground/80 mt-0.5 print:text-xs print:mt-0.5 print:text-gray-700">{edu.notes}</p>
            </div>
          ))}
        </ResumeSection>

        <ResumeSection title="Skills" icon={isHackerResume ? <ShieldCheck size={18} className="print:text-primary"/> : <Laptop size={18} className="print:text-primary"/>}>
          {resumeData.skills.map((skillCat, catIndex) => (
            <div key={catIndex} className={`mb-3 print:mb-1.5 print-break-inside-avoid ${isHackerResume ? 'md:col-span-2' : ''}`}>
              <h4 className="font-medium text-foreground/90 mb-1 print:text-sm print:font-medium print:mb-0.5 print:text-black">{skillCat.category}:</h4>
              <p className="text-sm text-muted-foreground print:text-xs print:text-gray-700">
                {skillCat.items.join(', ')}
              </p>
            </div>
          ))}
        </ResumeSection>

        <ResumeSection title="Projects" icon={isHackerResume ? <CodeIcon size={18} className="print:text-primary"/> : <Lightbulb size={18} className="print:text-primary"/>}>
          {resumeData.projects.map((project, index) => (
            <div key={index} className="mb-4 print:mb-2 print-break-inside-avoid">
              <h3 className="font-semibold text-md text-primary print:text-base print:font-semibold print:text-black">{project.title}</h3>
              {project.tech && <p className="text-xs text-muted-foreground italic print:text-[7pt] print:italic print:text-gray-600">Tech: {project.tech}</p>}
              <p className="text-sm text-foreground/80 mt-0.5 print:text-xs print:mt-0.5 print:text-gray-700">{project.description}
                {project.link && !project.link.startsWith('confidential') && (
                  <>
                    <a href={project.link.startsWith('http') ? project.link : `https://${project.link}`} target="_blank" rel="noopener noreferrer" className="text-primary/80 hover:text-primary print:hidden ml-1"> (View)</a>
                    <span className="print-show print-text-xs print-italic print-show-link" data-print-link={project.link}> ({project.link})</span>
                  </>
                )}
              </p>
            </div>
          ))}
        </ResumeSection>
        
        <ResumeSection title="Achievements & Awards" icon={<Award size={18} className="print:text-primary"/>} className="print:border-b-0 print:pb-0">
          <ul className="list-disc list-inside text-sm text-foreground/80 space-y-1 print:text-xs print:space-y-0.5 print:list-disc print:list-inside print:text-gray-700">
            {resumeData.achievements.map((ach, index) => (
              <li key={index} className="print-break-inside-avoid print:mb-0.5">{ach}</li>
            ))}
          </ul>
        </ResumeSection>
      </div>
    </div>
  );
}

export default function ResumePage() {
  return (
    <Suspense fallback={<div>Loading resume...</div>}>
      <ResumePageContent />
    </Suspense>
  )
}
