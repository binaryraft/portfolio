
"use client";

import React, { useRef, useEffect, useCallback } from 'react';
import { useTheme } from '@/contexts/theme-context';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  color: string;
  opacity: number;
  shape: 'square' | 'triangle' | 'circle' | 'text';
  text?: string;
  originalText?: string; // For hacker mode text flicker
  glitchTime: number;
  glitchMagnitude: number;
  glowColor: string;
  shadowBlur: number;
}

const AnimatedParticles: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { isHackerMode } = useTheme();
  const particlesArray = useRef<Particle[]>([]);

  const professionalBaseColors = [
    'hsla(var(--primary)/0.7)', // Violet
    'hsla(var(--accent)/0.7)',  // Pink/Magenta
    'hsla(210, 70%, 70%, 0.6)', // Lighter Space Blue
    'hsla(250, 60%, 75%, 0.6)', // Light Indigo/Lavender
  ];

  const hackerBaseColors = [
    'hsla(var(--primary)/0.9)',      // Green
    'hsla(var(--primary)/0.5)',      // Lighter Green
    'hsla(var(--accent)/0.8)',       // Hacker Accent (Amber/Yellow)
    'hsla(var(--muted-foreground)/0.7)', // Dimmer Green/Grey
  ];
  
  const professionalTextParticles = [
    'HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js', 
    'Python', 'Java', 'C++', 'Flutter', 'Firebase', 'MongoDB', 'SQL', 'NoSQL', 
    'API', 'REST', 'GraphQL', 'Docker', 'AWS', 'Cloud', 'Git', 'Agile', 
    'UI/UX', 'DevOps', 'Testing', 'AI/ML', '{}', '=>', '<>', '()', 'async'
  ];
  const hackerTextParticles = [
    'ls -la', 'cd /', 'pwd', 'whoami', 'sudo su', 'nmap -sV', 'ping 1.1.1.1', 'grep root', 
    'find / -name', 'chmod 777', 'ssh user@', 'git clone', 'python script.py', 'nc -lvp 4444', 
    'cat /etc/passwd', 'ifconfig', 'iwconfig', 'airmon-ng start', 'ettercap -G', 'beef-xss', 
    'wifite --kill', 'sqlmap -u', 'hydra -L', 'john hash.txt', 'hashcat -m 0', 'msfconsole', 
    '0x0', '0x1', '//', '/*', '/>', '#!/bin/bash', 'sudo rm -rf /', 'systemctl', 'kernel_panic',
    'SEGFAULT', 'BufferOverflow', 'XSS_Vector', 'root@kali:~#', '$', 'exploit.c'
  ];


  const createParticle = useCallback((canvas: HTMLCanvasElement): Particle => {
    const baseColors = isHackerMode ? hackerBaseColors : professionalBaseColors;
    const textOptions = isHackerMode ? hackerTextParticles : professionalTextParticles;
    
    const shapeType = Math.random();
    let shape: Particle['shape'];
    let text: string | undefined;

    if (shapeType < 0.25) shape = 'circle'; // More text particles
    else if (shapeType < 0.5) shape = 'square';
    else if (shapeType < 0.9) { // Increased chance for text
      shape = 'text';
      text = textOptions[Math.floor(Math.random() * textOptions.length)];
    } else shape = 'triangle';
    
    const color = baseColors[Math.floor(Math.random() * baseColors.length)];
    const size = shape === 'text' ? Math.random() * 8 + 11 : Math.random() * (isHackerMode ? 3.5 : 3) + (isHackerMode ? 2 : 1.5);

    return {
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: size,
      speedX: (Math.random() * (isHackerMode ? 0.7 : 0.5) - (isHackerMode ? 0.35 : 0.25)),
      speedY: (Math.random() * (isHackerMode ? 0.7 : 0.5) - (isHackerMode ? 0.35 : 0.25)),
      color: color,
      opacity: Math.random() * 0.4 + 0.2, // Slightly higher base opacity
      shape,
      text,
      originalText: text,
      glitchTime: 0,
      glitchMagnitude: 0,
      glowColor: color.replace(/(\d\.\d+)\)/, '1)'), // Make glow color fully opaque or brighter
      shadowBlur: isHackerMode ? (Math.random() * 5 + 8) : (Math.random() * 3 + 4), // Hacker mode more glow
    };
  }, [isHackerMode]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      particlesArray.current = []; 
      const numberOfParticles = Math.min(Math.floor((canvas.width * canvas.height) / (isHackerMode ? 12000 : 18000)), isHackerMode ? 150 : 100) ; // Increased density
      for (let i = 0; i < numberOfParticles; i++) {
        particlesArray.current.push(createParticle(canvas));
      }
    };

    const drawParticle = (particle: Particle) => {
      ctx.globalAlpha = particle.opacity;
      ctx.fillStyle = particle.color;
      
      ctx.shadowColor = particle.glowColor;
      ctx.shadowBlur = particle.shadowBlur;

      ctx.beginPath();

      let particleX = particle.x;
      let particleY = particle.y;
      let currentText = particle.text;

      if (particle.glitchTime > 0) {
        particleY += particle.glitchMagnitude * Math.sin(Date.now() / 50); // Smoother glitch movement
        if (particle.shape === 'text' && Math.random() < 0.1) { // Chance to flicker text
           const randomHackerChar = hackerTextParticles[Math.floor(Math.random() * hackerTextParticles.length)].substring(0, Math.floor(Math.random() * 5) + 1);
           currentText = Math.random() < 0.5 ? randomHackerChar : particle.originalText?.substring(0, Math.floor(Math.random() * particle.originalText.length)) + "_";
        }
      }

      if (particle.shape === 'square') {
        ctx.fillRect(particleX - particle.size / 2, particleY - particle.size / 2, particle.size, particle.size);
      } else if (particle.shape === 'circle') {
        ctx.arc(particleX, particleY, particle.size / 2, 0, Math.PI * 2);
        ctx.fill();
      } else if (particle.shape === 'triangle') {
        ctx.moveTo(particleX, particleY - particle.size / 2);
        ctx.lineTo(particleX - particle.size / 2, particleY + particle.size / 2);
        ctx.lineTo(particleX + particle.size / 2, particleY + particle.size / 2);
        ctx.closePath();
        ctx.fill();
      } else if (particle.shape === 'text' && currentText) {
        ctx.font = `${particle.size}px ${isHackerMode ? 'var(--font-geist-mono), monospace' : 'var(--font-geist-sans), sans-serif'}`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(currentText, particleX, particleY);
      }
      
      ctx.shadowBlur = 0; // Reset shadow for next particle
      ctx.globalAlpha = 1; 
    };

    const updateParticles = () => {
      for (let i = 0; i < particlesArray.current.length; i++) {
        const p = particlesArray.current[i];
        p.x += p.speedX;
        p.y += p.speedY;

        if (p.x - p.size / 2 < 0 || p.x + p.size / 2 > canvas.width) {
            p.speedX *= -1;
            if (p.x - p.size/2 < 0) p.x = p.size/2 +1;
            if (p.x + p.size/2 > canvas.width) p.x = canvas.width - p.size/2 -1;
        }
        if (p.y - p.size / 2 < 0 || p.y + p.size / 2 > canvas.height) {
            p.speedY *= -1;
            if (p.y - p.size/2 < 0) p.y = p.size/2 +1;
            if (p.y + p.size/2 > canvas.height) p.y = canvas.height - p.size/2 -1;
        }
        

        if (isHackerMode) {
          if (p.glitchTime > 0) {
            p.glitchTime -= 16; 
             if (Math.random() < 0.3) { 
                const originalColor = p.color;
                const originalGlow = p.glowColor;
                p.color = 'hsla(120, 100%, 80%, 0.9)'; 
                p.glowColor = 'hsla(120, 100%, 90%, 1)';
                setTimeout(() => {p.color = originalColor; p.glowColor = originalGlow;}, Math.random() * 50 + 20);
             }
             if (p.shape === 'text' && p.glitchTime <= 0) {
                p.text = p.originalText; // Restore original text after glitch
             }
          } else if (Math.random() < 0.001) { // Slightly increased chance for glitch
            p.glitchTime = Math.random() * 150 + 80; 
            p.glitchMagnitude = (Math.random() - 0.5) * (isHackerMode ? 20 : 10); 
            if (p.shape === 'text') p.glitchMagnitude *= 0.7;
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particlesArray.current.forEach(drawParticle);
      updateParticles();
      animationFrameId = requestAnimationFrame(animate);
    };

    resizeCanvas(); 
    animate();

    window.addEventListener('resize', resizeCanvas);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
      particlesArray.current = [];
    };
  }, [isHackerMode, createParticle]);

  return <canvas ref={canvasRef} id="particle-canvas" className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none" />;
};

export default AnimatedParticles;

