import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Terminal, Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Research", href: "#security-research" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    setIsMobileMenuOpen(false);
    const id = href.replace("#", "");
    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.getElementById(id);
      element?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/80 backdrop-blur-lg border-b border-border"
            : "bg-transparent"
        }`}
        data-testid="nav-main"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <button
              onClick={() => scrollToSection("#home")}
              className="flex items-center gap-2 font-mono font-bold text-lg hover-elevate px-3 py-2 rounded-lg"
              data-testid="button-logo"
            >
              <Terminal className="w-5 h-5 text-primary" />
              <span className="text-primary">&gt;</span> ichwanul
            </button>

            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item, idx) => (
                <Button
                  key={idx}
                  variant="ghost"
                  size="sm"
                  onClick={() => scrollToSection(item.href)}
                  className="font-mono"
                  data-testid={`button-nav-${item.label.toLowerCase()}`}
                >
                  <span className="text-primary mr-1">&gt;</span>
                  {item.label}
                </Button>
              ))}
            </div>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              data-testid="button-mobile-menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </Button>
          </div>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-background/95 backdrop-blur-lg md:hidden"
          data-testid="mobile-menu"
        >
          <div className="flex flex-col items-center justify-center h-full gap-4">
            {navItems.map((item, idx) => (
              <Button
                key={idx}
                variant="ghost"
                size="lg"
                onClick={() => scrollToSection(item.href)}
                className="font-mono text-xl"
                data-testid={`button-mobile-nav-${item.label.toLowerCase()}`}
              >
                <span className="text-primary mr-2">&gt;</span>
                {item.label}
              </Button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
