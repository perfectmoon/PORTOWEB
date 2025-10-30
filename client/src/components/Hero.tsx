import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Terminal, Github, Linkedin, Mail } from "lucide-react";

export default function Hero() {
  const [displayedText, setDisplayedText] = useState("");
  const roles = [
    "Cybersecurity Analyst",
    "Security Researcher",
    "Penetration Tester",
  ];
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (charIndex < currentRole.length) {
            setDisplayedText(currentRole.substring(0, charIndex + 1));
            setCharIndex(charIndex + 1);
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (charIndex > 0) {
            setDisplayedText(currentRole.substring(0, charIndex - 1));
            setCharIndex(charIndex - 1);
          } else {
            setIsDeleting(false);
            setRoleIndex((roleIndex + 1) % roles.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-6">
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="mb-6 flex items-center justify-center gap-2 text-primary">
          <Terminal className="w-6 h-6" data-testid="icon-terminal" />
          <span className="font-mono text-sm" data-testid="text-prompt">guest@portfolio:~$</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold font-mono mb-4" data-testid="text-name">
          Ichwanul Ammar Alfajri
        </h1>
        
        <div className="h-12 mb-8">
          <p className="text-2xl md:text-3xl font-mono text-primary" data-testid="text-role">
            <span className="text-foreground">&gt; </span>
            {displayedText}
            <span className="animate-pulse">|</span>
          </p>
        </div>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed" data-testid="text-bio">
          Mahasiswa BINUS Cyber Security dengan pengalaman 7+ tahun di organisasi.
          Fokus pada penetration testing, vulnerability assessment, dan security research.
          HackTheBox enthusiast dengan track record menyelesaikan challenges hingga level Hard.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <Button 
            size="lg" 
            onClick={() => scrollToSection('projects')}
            className="font-mono"
            data-testid="button-view-projects"
          >
            View Projects
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            onClick={() => scrollToSection('blog')}
            className="font-mono"
            data-testid="button-read-blog"
          >
            Read Blog
          </Button>
        </div>

        <div className="flex items-center justify-center gap-4">
          <a 
            href="https://github.com/perfectmoon" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover-elevate active-elevate-2 p-3 rounded-lg border"
            data-testid="link-github"
          >
            <Github className="w-5 h-5" />
          </a>
          <a 
            href="https://www.linkedin.com/in/ichwanul-ammar-6b4917329" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover-elevate active-elevate-2 p-3 rounded-lg border"
            data-testid="link-linkedin"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a 
            href="mailto:ichwanul.fajri@binus.ac.id"
            className="hover-elevate active-elevate-2 p-3 rounded-lg border"
            data-testid="link-email"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>

      <style>{`
        .bg-grid-pattern {
          background-image: 
            linear-gradient(to right, hsl(var(--border)) 1px, transparent 1px),
            linear-gradient(to bottom, hsl(var(--border)) 1px, transparent 1px);
          background-size: 40px 40px;
        }
      `}</style>
    </section>
  );
}
