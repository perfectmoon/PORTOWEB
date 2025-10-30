import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, AlertTriangle } from "lucide-react";

interface Finding {
  title: string;
  target: string;
  cvss: number;
  severity: "Critical" | "High" | "Medium";
  description: string;
  impact: string;
  tools: string[];
  status: string;
}

//todo: remove mock functionality
const findings: Finding[] = [
  {
    title: "Account Takeover via Shared Preferences Manipulation",
    target: "Coffee Portal Mobile Application",
    cvss: 9.1,
    severity: "Critical",
    description: "Manipulasi shared preferences untuk mengambil alih akun tanpa autentikasi. Modifikasi file sp_coffee_portal.xml yang berisi userID dan email.",
    impact: "Full account compromise tanpa memerlukan authentication. Penyerang dapat mengakses seluruh data akun korban.",
    tools: ["JADX", "FRIDA", "Burp Suite", "Android Debug Bridge"],
    status: "Reported",
  },
  {
    title: "IDOR - Unauthorized Cart Operations",
    target: "Coffee Portal Mobile Application",
    cvss: 7.5,
    severity: "High",
    description: "Insecure Direct Object Reference pada endpoint cart memungkinkan manipulasi userID parameter untuk akses cart pengguna lain.",
    impact: "Read, add, delete, purchase items dalam cart orang lain. Privacy breach, exposure transaction history.",
    tools: ["Burp Suite", "Postman"],
    status: "Reported",
  },
  {
    title: "Integer Overflow Causing Negative Balance",
    target: "Coffee Portal Mobile Application",
    cvss: 7.5,
    severity: "High",
    description: "Integer overflow pada perhitungan harga transaksi. Manipulasi productCount menjadi nilai extreme menyebabkan saldo negatif → positive balance.",
    impact: "Tipe data integer 32-bit untuk financial calculations. Saldo user menjadi negative → positive balance.",
    tools: ["JADX", "Burp Suite"],
    status: "Reported",
  },
  {
    title: "Broken Access Control on Premium Features",
    target: "PixAI Mobile Application",
    cvss: 4.3,
    severity: "Medium",
    description: "GraphQL API broken access control memungkinkan user non-premium mengakses fitur exclusive membership termasuk Turbo Mode dan custom image dimensions.",
    impact: "Bypass premium membership features. Akses tidak sah ke computational resources. Potential revenue loss untuk platform.",
    tools: ["Burp Suite", "GraphQL"],
    status: "Fixed & Rewarded",
  },
];

const severityColors = {
  Critical: "bg-red-500/20 text-red-500 border-red-500/30",
  High: "bg-orange-500/20 text-orange-500 border-orange-500/30",
  Medium: "bg-yellow-500/20 text-yellow-500 border-yellow-500/30",
};

export default function SecurityResearch() {
  return (
    <section id="security-research" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <p className="font-mono text-primary mb-2" data-testid="text-section-label">
            <span className="text-muted-foreground">#</span> security_findings.log
          </p>
          <h2 className="text-4xl font-bold font-mono mb-4" data-testid="text-section-title">
            Security Research Highlights
          </h2>
          <p className="text-muted-foreground" data-testid="text-section-description">
            Critical vulnerabilities discovered through ethical security assessments
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {findings.map((finding, idx) => (
            <Card 
              key={idx} 
              className="p-6 hover-elevate"
              data-testid={`card-finding-${idx}`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  {finding.severity === "Critical" ? (
                    <AlertTriangle className="w-6 h-6 text-red-500" data-testid={`icon-severity-${idx}`} />
                  ) : (
                    <Shield className="w-6 h-6 text-primary" data-testid={`icon-severity-${idx}`} />
                  )}
                  <div>
                    <Badge 
                      variant="outline" 
                      className={`${severityColors[finding.severity]} font-mono mb-1`}
                      data-testid={`badge-severity-${idx}`}
                    >
                      {finding.severity}
                    </Badge>
                    <div className="text-3xl font-bold font-mono text-primary" data-testid={`text-cvss-${idx}`}>
                      CVSS {finding.cvss}
                    </div>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-bold font-mono mb-2" data-testid={`text-title-${idx}`}>
                {finding.title}
              </h3>

              <p className="text-sm font-mono text-muted-foreground mb-4" data-testid={`text-target-${idx}`}>
                Target: {finding.target}
              </p>

              <div className="space-y-3 mb-4">
                <div>
                  <p className="text-xs font-mono text-muted-foreground mb-1">Description:</p>
                  <p className="text-sm" data-testid={`text-description-${idx}`}>{finding.description}</p>
                </div>

                <div>
                  <p className="text-xs font-mono text-muted-foreground mb-1">Impact:</p>
                  <p className="text-sm" data-testid={`text-impact-${idx}`}>{finding.impact}</p>
                </div>
              </div>

              <div className="space-y-2">
                <p className="text-xs font-mono text-muted-foreground">Tools Used:</p>
                <div className="flex flex-wrap gap-1">
                  {finding.tools.map((tool, toolIdx) => (
                    <Badge 
                      key={toolIdx} 
                      variant="secondary" 
                      className="text-xs font-mono"
                      data-testid={`badge-tool-${idx}-${toolIdx}`}
                    >
                      {tool}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="mt-4 pt-4 border-t">
                <p className="text-xs font-mono">
                  <span className="text-muted-foreground">Status: </span>
                  <span className={finding.status.includes("Fixed") ? "text-primary" : "text-yellow-500"} data-testid={`text-status-${idx}`}>
                    {finding.status}
                  </span>
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
