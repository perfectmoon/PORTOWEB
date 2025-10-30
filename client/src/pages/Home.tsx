import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import SecurityResearch from "@/components/SecurityResearch";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div id="home">
        <Hero />
      </div>
      <Skills />
      <Projects />
      <SecurityResearch />
      <Blog />
      <Contact />
      
      <footer className="py-8 px-6 border-t">
        <div className="max-w-7xl mx-auto text-center">
          <p className="font-mono text-sm text-muted-foreground" data-testid="text-footer">
            <span className="text-primary">&gt;</span> Built with React + TypeScript + Tailwind CSS
            <span className="mx-2">|</span>
            © 2025 Ichwanul Ammar Alfajri
          </p>
        </div>
      </footer>
    </div>
  );
}
