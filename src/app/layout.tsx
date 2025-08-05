
import type {Metadata} from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/navbar';
import Footer from '@/components/layout/footer';
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from '@/contexts/theme-context';
import AnimatedParticles from '@/components/effects/animated-particles';
import { Suspense } from 'react';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Alfas B - Computer Engineer Portfolio',
  description: 'Professional portfolio of Alfas B, a skilled Computer Engineer specializing in web and mobile development. Discover projects, skills, and achievements.',
};

function RootLayoutContent({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider>
      <html lang="en" className="scroll-smooth dark">
        <body className={`${geistSans.variable} ${geistMono.variable}`}>
          <AnimatedParticles />
          <Navbar />
          <main className="pt-20 print:pt-0 relative z-10">
            {children}
          </main>
          <Footer />
          <Toaster />
        </body>
      </html>
    </ThemeProvider>
  );
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RootLayoutContent>{children}</RootLayoutContent>
    </Suspense>
  );
}
