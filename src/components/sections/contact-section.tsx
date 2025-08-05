
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, Linkedin, Mail, Send, MessageCircleQuestion, ShieldQuestion, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { submitContactForm } from "@/app/actions"; 
import { useTheme } from "@/contexts/theme-context";

const formSchema = z.object({
  name: z.string().min(2, { message: "Identifier must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address for secure comms." }),
  message: z.string().min(10, { message: "Transmission must be at least 10 characters." }),
});

type ContactFormValues = z.infer<typeof formSchema>;

export default function ContactSection() {
  const { isHackerMode } = useTheme();
  const { toast } = useToast();
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(values: ContactFormValues) {
    try {
      const result = await submitContactForm(values);
      if (result.success) {
        toast({
          title: isHackerMode ? "Signal Received // EOF" : "Message Transmitted! 🚀",
          description: isHackerMode ? "Your query has been logged. Standby for potential acknowledgement." : "Thank you for reaching out. I'll respond at light speed (almost).",
          variant: "default", 
        });
        form.reset();
      } else {
        toast({
          title: isHackerMode ? "Transmission Corrupted!" : "Transmission Error!",
          description: result.error || (isHackerMode ? "Failed to establish secure link. Check parameters." : "Failed to send message. Please check your signal."),
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: isHackerMode ? "System Anomaly Detected" : "System Malfunction",
        description: isHackerMode ? "Unexpected error during transmission. Retry with caution." : "An unexpected error occurred. Please try again.",
        variant: "destructive",
      });
    }
  }
  
  const SectionIcon = isHackerMode ? ShieldQuestion : MessageCircleQuestion;
  const sectionTitle = isHackerMode ? "Establish Secure Channel" : "Establish Connection";
  const sectionSubtitle = isHackerMode ? "For encrypted inquiries or collaborative exploits." : "Let's engineer something extraordinary together.";
  const formTitle = isHackerMode ? "Secure Transmission Form" : "Transmit a Message";
  const nameLabel = isHackerMode ? "Operator Alias" : "Identifier (Full Name)";
  const namePlaceholder = isHackerMode ? "Your Callsign / Handle" : "Your Name / Callsign";
  const emailLabel = isHackerMode ? "Secure Comms Channel (Email)" : "Coordinates (Email)";
  const emailPlaceholder = isHackerMode ? "your.alias@secure.dom" : "your.email@domain.tech";
  const messageLabel = isHackerMode ? "Encrypted Payload" : "Transmission";
  const messagePlaceholder = isHackerMode ? "Your encrypted query, mission details, or zero-day discovery..." : "Your message, project idea, or quantum query...";
  const submitButtonText = isHackerMode ? "Send Encrypted" : "Send Transmission";
  const submittingText = isHackerMode ? "Encrypting // Transmitting..." : "Transmitting...";


  return (
    <section id="contact" className="bg-transparent">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
            <SectionIcon className={`w-12 h-12 text-primary mx-auto mb-4 animate-pulse-glow ${isHackerMode ? 'text-glow-primary' : ''}`} />
            <h2 className={`text-3xl md:text-4xl font-bold text-primary tracking-tight ${isHackerMode ? 'font-mono text-glow-primary' : ''}`}>
            {sectionTitle}
            </h2>
            <p className={`text-muted-foreground mt-2 ${isHackerMode ? 'font-mono' : ''}`}>{sectionSubtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <Card className="card-interactive animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <CardHeader className="bg-card/50">
              <CardTitle className={`text-2xl text-primary ${isHackerMode ? 'font-mono text-glow-primary' : ''}`}>{formTitle}</CardTitle>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className={`text-foreground/80 ${isHackerMode ? 'font-mono' : ''}`}>{nameLabel}</FormLabel>
                        <FormControl>
                          <Input placeholder={namePlaceholder} {...field} className={`input ${isHackerMode ? 'font-mono' : ''}`}/>
                        </FormControl>
                        <FormMessage className={isHackerMode ? 'font-mono' : ''}/>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className={`text-foreground/80 ${isHackerMode ? 'font-mono' : ''}`}>{emailLabel}</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder={emailPlaceholder} {...field} className={`input ${isHackerMode ? 'font-mono' : ''}`}/>
                        </FormControl>
                        <FormMessage className={isHackerMode ? 'font-mono' : ''}/>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className={`text-foreground/80 ${isHackerMode ? 'font-mono' : ''}`}>{messageLabel}</FormLabel>
                        <FormControl>
                          <Textarea placeholder={messagePlaceholder} {...field} rows={5} className={`textarea ${isHackerMode ? 'font-mono' : ''}`}/>
                        </FormControl>
                        <FormMessage className={isHackerMode ? 'font-mono' : ''}/>
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className={`w-full py-3 text-base ${isHackerMode ? 'font-mono btn-primary-animated bg-green-500 hover:bg-green-400 text-black' : 'btn-accent-animated'}`} disabled={form.formState.isSubmitting}>
                    {form.formState.isSubmitting ? submittingText : <>{submitButtonText} <Send className="ml-2 h-4 w-4" /></>}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>

          <div className="space-y-8 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <Card className="card-interactive">
              <CardHeader className="bg-card/50">
                <CardTitle className={`text-2xl text-primary ${isHackerMode ? 'font-mono text-glow-primary' : ''}`}>Contact Matrix</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                 <div className="flex items-center space-x-3 group">
                  <Mail className={`w-6 h-6 text-accent group-hover:text-primary transition-colors ${isHackerMode ? 'text-yellow-400 group-hover:text-yellow-300' : ''}`} />
                  <a href="mailto:4lfasbadar@gmail.com" className={`text-foreground/90 hover:text-primary transition-colors ${isHackerMode ? 'font-mono hover:text-green-300' : ''}`}>
                    4lfasbadar@gmail.com
                  </a>
                </div>
                <div className="flex items-center space-x-3 group">
                  <Phone className={`w-6 h-6 text-accent group-hover:text-primary transition-colors ${isHackerMode ? 'text-yellow-400 group-hover:text-yellow-300' : ''}`} />
                  <a href="tel:8606821125" className={`text-foreground/90 hover:text-primary transition-colors ${isHackerMode ? 'font-mono hover:text-green-300' : ''}`}>
                    +91 8606821125
                  </a>
                </div>
                <p className={`text-muted-foreground leading-relaxed ${isHackerMode ? 'font-mono' : ''}`}>
                  {isHackerMode ? "For sensitive comms or collaboration proposals, use the provided channels. PGP key available upon authenticated request." : "Feel free to initiate contact via subspace email or connect on the listed networks. Open to discussing new projects, stellar ideas, or opportunities." }
                </p>
              </CardContent>
            </Card>
            <Card className="card-interactive">
              <CardHeader className="bg-card/50">
                <CardTitle className={`text-2xl text-primary ${isHackerMode ? 'font-mono text-glow-primary' : ''}`}>Network Links</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col gap-3">
                 <Button variant="outline" size="lg" asChild className={`w-full border-primary/70 text-primary hover:bg-primary hover:text-primary-foreground transform transition-all hover:scale-105 ${isHackerMode ? 'font-mono border-green-500/70 text-green-400 hover:bg-green-500 hover:text-black' : ''}`}>
                  <a href="https://github.com/alfasbadar" target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-5 w-5" /> GitHub (Primary)
                  </a>
                </Button>
                 <Button variant="outline" size="lg" asChild className={`w-full border-primary/70 text-primary hover:bg-primary hover:text-primary-foreground transform transition-all hover:scale-105 ${isHackerMode ? 'font-mono border-green-500/70 text-green-400 hover:bg-green-500 hover:text-black' : ''}`}>
                  <a href="https://github.com/binaryraft" target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-5 w-5" /> GitHub (BinaryRaft)
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild className={`w-full border-primary/70 text-primary hover:bg-primary hover:text-primary-foreground transform transition-all hover:scale-105 ${isHackerMode ? 'font-mono border-green-500/70 text-green-400 hover:bg-green-500 hover:text-black' : ''}`}>
                  <a href="https://www.linkedin.com/in/alfas-badar" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="mr-2 h-5 w-5" /> LinkedIn
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
