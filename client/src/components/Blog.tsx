import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight } from "lucide-react";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  category: "HackTheBox" | "Web Security" | "Mobile Security" | "CTF";
}

//todo: remove mock functionality
const blogPosts: BlogPost[] = [
  {
    id: "yummy-htb",
    title: "YUMMY (Hard) — HackTheBox Writeup",
    excerpt: "Complete walkthrough of YUMMY machine: JWT manipulation, SQL injection leading to RCE, and privilege escalation techniques.",
    date: "2024-12-20",
    readTime: "15 min",
    tags: ["JWT", "SQLi", "RCE", "Privilege Escalation"],
    category: "HackTheBox",
  },
  {
    id: "administrator-htb",
    title: "ADMINISTRATOR (Medium) — Active Directory Exploitation",
    excerpt: "Deep dive into Windows Active Directory attacks: Kerberos exploitation, certificate-based attacks using BloodHound and PKINITtools.",
    date: "2024-12-20",
    readTime: "20 min",
    tags: ["Active Directory", "Kerberos", "BloodHound", "Windows"],
    category: "HackTheBox",
  },
  {
    id: "coffee-portal-pentest",
    title: "Coffee Portal Mobile App: Critical Vulnerabilities Disclosed",
    excerpt: "Security assessment revealing Critical Account Takeover (CVSS 9.1), IDOR, and Integer Overflow vulnerabilities in Android application.",
    date: "2025-05-01",
    readTime: "12 min",
    tags: ["Mobile Security", "OWASP", "Account Takeover", "IDOR"],
    category: "Mobile Security",
  },
  {
    id: "pixai-graphql",
    title: "PixAI GraphQL API: Bypassing Premium Features",
    excerpt: "Broken access control analysis in GraphQL API allowing non-premium users to access exclusive features. Responsibly disclosed and rewarded.",
    date: "2025-06-01",
    readTime: "10 min",
    tags: ["GraphQL", "API Security", "Bug Bounty", "Access Control"],
    category: "Mobile Security",
  },
  {
    id: "chemistry-htb",
    title: "CHEMISTRY (Easy) — Template Injection to RCE",
    excerpt: "Beginner-friendly walkthrough: From template injection vulnerability discovery to reverse shell deployment and system compromise.",
    date: "2024-11-30",
    readTime: "8 min",
    tags: ["Template Injection", "Web Security", "Reverse Shell"],
    category: "HackTheBox",
  },
  {
    id: "cicada-htb",
    title: "CICADA (Easy) — Windows Penetration Testing Basics",
    excerpt: "Introduction to Windows pentesting: SMB enumeration, lateral movement techniques, and privilege escalation using pypykatz.",
    date: "2024-10-05",
    readTime: "10 min",
    tags: ["Windows", "SMB", "Lateral Movement", "Privilege Escalation"],
    category: "HackTheBox",
  },
];

const categoryColors = {
  HackTheBox: "bg-primary/20 text-primary border-primary/30",
  "Web Security": "bg-blue-500/20 text-blue-500 border-blue-500/30",
  "Mobile Security": "bg-purple-500/20 text-purple-500 border-purple-500/30",
  CTF: "bg-yellow-500/20 text-yellow-500 border-yellow-500/30",
};

export default function Blog() {
  return (
    <section id="blog" className="py-20 px-6 bg-card/30">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <p className="font-mono text-primary mb-2" data-testid="text-section-label">
            <span className="text-muted-foreground">#</span> writeups.txt
          </p>
          <h2 className="text-4xl font-bold font-mono mb-4" data-testid="text-section-title">
            CTF Writeups & Security Research
          </h2>
          <p className="text-muted-foreground" data-testid="text-section-description">
            Detailed technical writeups of challenges, vulnerabilities, and security assessments
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {blogPosts.map((post) => (
            <Card 
              key={post.id} 
              className="p-6 hover-elevate flex flex-col"
              data-testid={`card-blog-${post.id}`}
            >
              <div className="flex items-center justify-between mb-4">
                <Badge 
                  variant="outline" 
                  className={`${categoryColors[post.category]} font-mono`}
                  data-testid={`badge-category-${post.id}`}
                >
                  {post.category}
                </Badge>
                <div className="flex items-center gap-4 text-sm text-muted-foreground font-mono">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span data-testid={`text-date-${post.id}`}>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span data-testid={`text-readtime-${post.id}`}>{post.readTime}</span>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-bold font-mono mb-3" data-testid={`text-title-${post.id}`}>
                {post.title}
              </h3>

              <p className="text-sm text-muted-foreground mb-4 flex-grow" data-testid={`text-excerpt-${post.id}`}>
                {post.excerpt}
              </p>

              <div className="space-y-3">
                <div className="flex flex-wrap gap-1">
                  {post.tags.map((tag, idx) => (
                    <Badge 
                      key={idx} 
                      variant="secondary" 
                      className="text-xs font-mono"
                      data-testid={`badge-tag-${post.id}-${idx}`}
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="w-full font-mono gap-2 group"
                  data-testid={`button-read-${post.id}`}
                >
                  Read Writeup 
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
