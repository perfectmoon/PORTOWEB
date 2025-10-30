import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, ExternalLink } from "lucide-react";

type ProjectCategory = "All" | "HackTheBox" | "Pentesting" | "Web Dev" | "Community";
type Difficulty = "Easy" | "Medium" | "Hard" | "Advanced";

interface Project {
  id: string;
  title: string;
  category: ProjectCategory[];
  difficulty: Difficulty;
  date: string;
  description: string;
  tools: string[];
  tags: string[];
  link?: string;
}

//todo: remove mock functionality
const projects: Project[] = [
  {
    id: "yummy",
    title: "YUMMY (HARD) — HackTheBox",
    category: ["HackTheBox"],
    difficulty: "Hard",
    date: "2024-12-20",
    description: "Web exploitation: JWT manipulation, SQL injection, RCE, privilege escalation",
    tools: ["nmap", "Python", "linPEAS", "rce", "Burp Suite"],
    tags: ["web-exploitation", "jwt", "sqli", "rce", "priv-esc", "HTB"],
  },
  {
    id: "administrator",
    title: "ADMINISTRATOR (MEDIUM) — HackTheBox",
    category: ["HackTheBox"],
    difficulty: "Advanced",
    date: "2024-12-20",
    description: "Windows Active Directory Attacks: Kerberos, certificate attacks, BloodHound",
    tools: ["BloodHound", "pyWhisker", "PKINITtools", "Impacket", "Evil-WinRM"],
    tags: ["active-directory", "windows-security", "kerberos", "certificate-attacks"],
  },
  {
    id: "chemistry",
    title: "CHEMISTRY (EASY) — HackTheBox",
    category: ["HackTheBox"],
    difficulty: "Easy",
    date: "2024-11-30",
    description: "Web application security testing, template injection, reverse shell deployment",
    tools: ["nmap", "Browser", "Curl", "Python", "Reverse shell"],
    tags: ["web application security testing", "CVE research", "Template injection attacks"],
  },
  {
    id: "cicada",
    title: "CICADA (EASY) — HackTheBox",
    category: ["HackTheBox"],
    difficulty: "Easy",
    date: "2024-10-05",
    description: "Windows penetration testing: Active Directory enumeration, privilege escalation",
    tools: ["nmap", "smbclient", "netexec", "Evil-WinRM", "pypykatz"],
    tags: ["active-directory", "windows-security", "penetration-testing", "privilege-escalation"],
  },
  {
    id: "coffee-portal",
    title: "COFFEE PORTAL MOBILE APP PENETRATION TEST",
    category: ["Pentesting"],
    difficulty: "Advanced",
    date: "2025-05-01",
    description: "Critical Account Takeover (CVSS 9.1), IDOR (CVSS 7.5), Integer Overflow (CVSS 7.5)",
    tools: ["JADX", "FRIDA", "Burp Suite", "Postman", "Android Debug Bridge"],
    tags: ["Mobile-Security", "android-penetration-testing", "critical-findings", "account-takeover", "idor"],
  },
  {
    id: "pixai",
    title: "PIXAI MOBILE APP SECURITY ASSESSMENT",
    category: ["Pentesting"],
    difficulty: "Advanced",
    date: "2025-06-01",
    description: "GraphQL API security testing: Broken Access Control, premium bypass. Status: Fixed & Rewarded",
    tools: ["Burp Suite", "GraphQL", "API Testing"],
    tags: ["graphql-security", "api-testing", "access-control", "bug-bounty", "Mobile-Security"],
  },
  {
    id: "web-ctf",
    title: "Web CTF",
    category: ["Web Dev"],
    difficulty: "Medium",
    date: "2025-02-07",
    description: "Frontend untuk Capture The Flag platform similar to HackTheBox",
    tools: ["TypeScript", "TailwindCSS", "HTML", "CSS", "JavaScript", "ReactJS", "Figma"],
    tags: ["WebDevelopment", "FrontendDevelopment", "TypeScript", "TailwindCSS", "ReactJS", "CaptureTheFlag"],
  },
  {
    id: "web-sequiz",
    title: "Web Sequiz",
    category: ["Web Dev"],
    difficulty: "Medium",
    date: "2025-10-01",
    description: "Web-based quiz system untuk cybersecurity education",
    tools: ["Laravel", "ReactJS", "Vite", "Tailwind", "PHP", "MySQL"],
    tags: ["Laravel", "ReactJS", "Vite", "Tailwind", "WebApp", "Fullstack", "PHP", "JavaScript"],
  },
  {
    id: "pkm-1",
    title: "PKM Cyber Security Community – SMAN 85 Jakarta",
    category: ["Community"],
    difficulty: "Medium",
    date: "2024-10-01",
    description: "Koordinator Volunteer: Memimpin 44 volunteer dalam edukasi cybersecurity untuk 140+ siswa",
    tools: ["Canva", "Discord", "Google Sheets", "Microsoft Word/PDF", "Google Drive"],
    tags: ["Cybersecurity", "Education", "Community Service", "Public Speaking", "Leadership"],
  },
  {
    id: "pkm-2",
    title: "PKM Cyber Security Community 2 – SMAN 85 Jakarta",
    category: ["Community"],
    difficulty: "Medium",
    date: "2025-10-23",
    description: "Koordinator Volunteer (Divisi Humas): Edukasi digital dan kesadaran keamanan siber",
    tools: ["Canva", "Discord", "Google Sheets", "Microsoft Word/PDF", "Google Drive"],
    tags: ["Cybersecurity", "Education", "Community Service", "Public Speaking", "Leadership"],
  },
];

const difficulties: { [key in Difficulty]: string } = {
  "Easy": "bg-primary/20 text-primary border-primary/30",
  "Medium": "bg-yellow-500/20 text-yellow-500 border-yellow-500/30",
  "Hard": "bg-red-500/20 text-red-500 border-red-500/30",
  "Advanced": "bg-purple-500/20 text-purple-500 border-purple-500/30",
};

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("All");

  const categories: ProjectCategory[] = ["All", "HackTheBox", "Pentesting", "Web Dev", "Community"];

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => p.category.includes(activeCategory));

  return (
    <section id="projects" className="py-20 px-6 bg-card/30">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <p className="font-mono text-primary mb-2" data-testid="text-section-label">
            <span className="text-muted-foreground">#</span> projects.md
          </p>
          <h2 className="text-4xl font-bold font-mono mb-8" data-testid="text-section-title">
            Projects & Case Studies
          </h2>

          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((cat) => (
              <Button
                key={cat}
                variant={activeCategory === cat ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveCategory(cat)}
                className="font-mono"
                data-testid={`button-filter-${cat.toLowerCase().replace(' ', '-')}`}
              >
                {cat}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <Card 
              key={project.id} 
              className="p-6 hover-elevate flex flex-col"
              data-testid={`card-project-${project.id}`}
            >
              <div className="flex items-start justify-between mb-4">
                <Badge 
                  variant="outline" 
                  className={`${difficulties[project.difficulty]} font-mono`}
                  data-testid={`badge-difficulty-${project.id}`}
                >
                  {project.difficulty}
                </Badge>
                <div className="flex items-center gap-2 text-sm text-muted-foreground font-mono">
                  <Calendar className="w-4 h-4" />
                  <span data-testid={`text-date-${project.id}`}>{project.date}</span>
                </div>
              </div>

              <h3 className="text-xl font-bold font-mono mb-3" data-testid={`text-title-${project.id}`}>
                {project.title}
              </h3>

              <p className="text-sm text-muted-foreground mb-4 flex-grow" data-testid={`text-description-${project.id}`}>
                {project.description}
              </p>

              <div className="space-y-3">
                <div>
                  <p className="text-xs font-mono text-muted-foreground mb-2">Tools:</p>
                  <div className="flex flex-wrap gap-1">
                    {project.tools.map((tool, idx) => (
                      <Badge 
                        key={idx} 
                        variant="secondary" 
                        className="text-xs font-mono"
                        data-testid={`badge-tool-${project.id}-${idx}`}
                      >
                        {tool}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-xs font-mono text-muted-foreground mb-2">Tags:</p>
                  <div className="flex flex-wrap gap-1">
                    {project.tags.slice(0, 3).map((tag, idx) => (
                      <Badge 
                        key={idx} 
                        variant="outline" 
                        className="text-xs font-mono"
                        data-testid={`badge-tag-${project.id}-${idx}`}
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                {project.link && (
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="w-full font-mono gap-2"
                    data-testid={`button-view-${project.id}`}
                  >
                    View Details <ExternalLink className="w-4 h-4" />
                  </Button>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
