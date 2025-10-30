import { Card } from "@/components/ui/card";
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";

interface ContactMethod {
  icon: typeof Github;
  label: string;
  value: string;
  link: string;
}

const contactMethods: ContactMethod[] = [
  {
    icon: Mail,
    label: "Email",
    value: "ichwanul.fajri@binus.ac.id",
    link: "mailto:ichwanul.fajri@binus.ac.id",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "ichwanul-ammar-6b4917329",
    link: "https://www.linkedin.com/in/ichwanul-ammar-6b4917329",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "perfectmoon",
    link: "https://github.com/perfectmoon",
  },
];

const testimonials = [
  {
    quote: "Out-of-the-Box Creator",
    author: "Kiyoshi hein",
    role: "Project Manager",
  },
  {
    quote: "An articulate speaker with precise and impactful delivery.",
    author: "Faraj Muhiddin",
    role: "Backend Team",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12 text-center">
          <p className="font-mono text-primary mb-2" data-testid="text-section-label">
            <span className="text-muted-foreground">#</span> contact.sh
          </p>
          <h2 className="text-4xl font-bold font-mono mb-4" data-testid="text-section-title">
            Get In Touch
          </h2>
          <p className="text-muted-foreground" data-testid="text-section-description">
            Interested in collaboration or have questions? Feel free to reach out!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          {contactMethods.map((method, idx) => {
            const Icon = method.icon;
            return (
              <a
                key={idx}
                href={method.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
                data-testid={`link-contact-${idx}`}
              >
                <Card className="p-6 hover-elevate active-elevate-2 transition-all">
                  <div className="flex items-start gap-4">
                    <Icon className="w-6 h-6 text-primary flex-shrink-0" data-testid={`icon-contact-${idx}`} />
                    <div className="flex-grow min-w-0">
                      <p className="font-mono text-sm text-muted-foreground mb-1" data-testid={`text-label-${idx}`}>
                        {method.label}
                      </p>
                      <p className="font-mono text-sm truncate" data-testid={`text-value-${idx}`}>
                        {method.value}
                      </p>
                    </div>
                    <ExternalLink className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                  </div>
                </Card>
              </a>
            );
          })}
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-mono font-semibold mb-4" data-testid="text-testimonials-title">
            <span className="text-primary">&gt;</span> Testimonials
          </h3>
          {testimonials.map((testimonial, idx) => (
            <Card key={idx} className="p-6" data-testid={`card-testimonial-${idx}`}>
              <blockquote className="mb-3">
                <p className="text-lg italic" data-testid={`text-quote-${idx}`}>
                  "{testimonial.quote}"
                </p>
              </blockquote>
              <div className="flex items-center gap-2 text-sm">
                <p className="font-mono font-semibold" data-testid={`text-author-${idx}`}>
                  {testimonial.author}
                </p>
                <span className="text-muted-foreground">—</span>
                <p className="text-muted-foreground font-mono" data-testid={`text-role-${idx}`}>
                  {testimonial.role}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
