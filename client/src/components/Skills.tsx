import { Card } from "@/components/ui/card";
import { Code2, Shield, Users, Globe } from "lucide-react";

interface Skill {
  name: string;
  level: number;
}

interface SkillCategory {
  title: string;
  icon: typeof Code2;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Computer Skills",
    icon: Code2,
    skills: [
      { name: "C / Algorithm & Programming", level: 90 },
      { name: "Java", level: 70 },
      { name: "TypeScript", level: 70 },
      { name: "Python", level: 65 },
      { name: "SQL / Querying", level: 70 },
      { name: "React + Tailwind CSS", level: 70 },
      { name: "Figma (UI/UX Design)", level: 75 },
      { name: "Git / Version Control", level: 80 },
    ],
  },
  {
    title: "Technical Skills",
    icon: Shield,
    skills: [
      { name: "Penetration Testing", level: 85 },
      { name: "Mobile App Pentest", level: 65 },
      { name: "Web App Security (OWASP)", level: 80 },
      { name: "Reverse Engineering", level: 60 },
      { name: "Vulnerability Analysis", level: 85 },
      { name: "Capture The Flag (CTF)", level: 80 },
    ],
  },
  {
    title: "Communication & Leadership",
    icon: Users,
    skills: [
      { name: "Public Speaking", level: 85 },
      { name: "Effective Communication", level: 90 },
      { name: "Team Leadership", level: 85 },
      { name: "Project Management", level: 80 },
      { name: "Event & Organization Management", level: 85 },
    ],
  },
  {
    title: "Languages",
    icon: Globe,
    skills: [
      { name: "Bahasa Indonesia", level: 100 },
      { name: "English", level: 70 },
      { name: "Arabic", level: 40 },
    ],
  },
];

function ProgressBar({ level }: { level: number }) {
  const filled = Math.round(level / 10);
  const empty = 10 - filled;
  
  return (
    <div className="font-mono text-sm flex items-center gap-2">
      <span className="text-primary">
        {"█".repeat(filled)}
      </span>
      <span className="text-muted-foreground/30">
        {"░".repeat(empty)}
      </span>
      <span className="text-muted-foreground ml-2">{level}%</span>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <p className="font-mono text-primary mb-2" data-testid="text-section-label">
            <span className="text-muted-foreground">#</span> skills.json
          </p>
          <h2 className="text-4xl font-bold font-mono" data-testid="text-section-title">
            Skills & Expertise
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, idx) => {
            const Icon = category.icon;
            return (
              <Card 
                key={idx} 
                className="p-6 hover-elevate"
                data-testid={`card-skill-category-${idx}`}
              >
                <div className="flex items-center gap-3 mb-6">
                  <Icon className="w-5 h-5 text-primary" data-testid={`icon-category-${idx}`} />
                  <h3 className="font-mono font-semibold" data-testid={`text-category-title-${idx}`}>
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIdx) => (
                    <div key={skillIdx} data-testid={`skill-${idx}-${skillIdx}`}>
                      <p className="text-sm mb-2 text-foreground" data-testid={`text-skill-name-${idx}-${skillIdx}`}>
                        {skill.name}
                      </p>
                      <ProgressBar level={skill.level} />
                    </div>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
