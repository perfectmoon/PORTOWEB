# Cybersecurity Portfolio Design Guidelines

## Design Approach

**Selected Framework:** Reference-Based Approach combining GitHub's developer-focused dark interface, Linear's clean minimalism, and terminal/code editor aesthetics

**Core Principle:** Professional cybersecurity aesthetic that balances technical credibility with modern design sophistication. Think developer tools meets portfolio excellence.

## Typography System

**Primary Font:** 'JetBrains Mono' or 'Fira Code' (monospace) for technical elements, headings, and code snippets - establishes immediate cybersecurity/developer credibility

**Secondary Font:** 'Inter' or 'system-ui' for body text and descriptions - maintains readability for longer content

**Type Scale:**
- Hero Title: text-5xl to text-7xl, font-bold
- Section Headings: text-3xl to text-4xl, font-bold
- Subsection Headings: text-xl to text-2xl, font-semibold
- Body Text: text-base to text-lg, font-normal
- Technical Labels/Tags: text-sm to text-base, font-medium, monospace
- Code Snippets: text-sm, monospace

## Layout System

**Spacing Primitives:** Use Tailwind units of 4, 6, 8, 12, 16, 20, 24 for consistent rhythm
- Component padding: p-6, p-8
- Section spacing: py-16, py-20, py-24
- Card gaps: gap-6, gap-8
- Grid spacing: space-y-8, space-y-12

**Container Strategy:**
- Max width: max-w-7xl for main content
- Blog content: max-w-4xl for optimal reading
- Side margins: px-6 md:px-8

**Grid Systems:**
- Skills grid: grid-cols-1 md:grid-cols-2 lg:grid-cols-4
- Projects showcase: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
- Blog posts: grid-cols-1 md:grid-cols-2

## Component Library

### Navigation
- Fixed top navigation with backdrop blur (backdrop-blur-lg)
- Logo/name on left using monospace font
- Nav links with terminal-style indicators (> prefix or underscore)
- Smooth scroll behavior
- Mobile: Hamburger menu with slide-in panel

### Hero Section
**Layout:** Full viewport height (min-h-screen) with centered content
**Structure:**
- Animated typing effect for role titles: "Cybersecurity Analyst | Security Researcher | Penetration Tester"
- Name in large monospace font (text-6xl lg:text-7xl)
- Short bio paragraph (max-w-2xl)
- CTA buttons: "View Projects" and "Read Blog" with subtle glow effects
- Terminal-style prompt indicator ($ or >) before name
- Background: Subtle grid pattern or code-like texture overlay

### Skills & Expertise Section
**Layout:** 4-column grid on desktop, stacked on mobile
**Card Design:**
- Category headers with icons (Computer Skills, Technical Skills, Communication, Languages)
- Each skill with proficiency indicator: terminal-style progress bars using dashes/equals (e.g., "Python [========--] 80%")
- Hover state: slight elevation and glow
- Border styling: border border-opacity-20 with rounded-lg

### Projects Showcase
**Filtering System:**
- Horizontal tab navigation: "All", "HackTheBox", "Pentesting", "Web Dev", "Community"
- Active tab has underline indicator

**Project Cards:**
- Difficulty badge (Easy/Medium/Hard/Advanced) with distinct styling
- Project title in monospace font (text-xl font-bold)
- Methodology/tools as tags (inline-flex gap-2)
- Screenshot thumbnail with hover zoom effect
- CVSS scores for security findings (large, prominent)
- Date stamp in terminal format (YYYY-MM-DD)
- Card structure: aspect-video thumbnail + content padding p-6

### Security Research Highlights
**Layout:** 2-column grid featuring Coffee Portal and PixAI findings
**Card Structure:**
- Large CVSS score display (text-4xl font-bold)
- Vulnerability title and CVE-style formatting
- Impact description in technical language
- Tools used as icon badges
- "Detailed Report" link with arrow indicator

### Blog/Writeup Section
**Grid Layout:** 2-column masonry-style grid
**Blog Card:**
- Featured image or code snippet preview
- Title (text-2xl font-bold, monospace)
- Excerpt (2-3 lines, text-base)
- Tags: HackTheBox, Web Security, Mobile, etc.
- Read time estimate and date
- "Read More >" link with terminal arrow

**Individual Blog Post Layout:**
- Full-width hero with machine/challenge name
- Breadcrumb navigation
- Content in centered column (max-w-4xl)
- Code blocks with syntax highlighting
- Headings with anchor links (#)
- Table of contents sidebar for long posts

### Contact Section
**Layout:** Centered content with max-w-2xl
**Elements:**
- Section title: "Get In Touch" with terminal prompt
- Email, LinkedIn, GitHub as large clickable cards
- Each contact card: icon + label + arrow indicator
- Testimonials in quote blocks with author attribution

## Micro-interactions & Effects

**Minimal Animation Strategy:**
- Hero typing animation (one-time on load)
- Smooth scroll to sections (scroll-behavior: smooth)
- Card hover: subtle translate-y and glow (transition-all duration-300)
- Button hover: slight brightness increase
- Tab switching: fade transition (transition-opacity duration-200)
- NO continuous animations, NO parallax, NO scroll-triggered effects

**Focus States:**
- All interactive elements: ring-2 ring-offset-2 on focus
- Terminal-style outline for inputs

## Images

**Hero Section:**
- Terminal/code editor background pattern (subtle, low opacity)
- OR abstract circuit board texture
- Position: absolute background with overlay

**Project Screenshots:**
- 16:9 aspect ratio thumbnails
- Actual screenshots from HackTheBox completions, web projects
- Position: Top of each project card, full-width within card
- Treatment: Subtle border, rounded corners (rounded-lg)

**Blog Featured Images:**
- Challenge/machine logos from HackTheBox
- Code snippet previews for technical posts
- Security tools screenshots
- Position: Top of blog cards and full-width in individual posts

## Accessibility & Best Practices

**Contrast:** All text meets WCAA AA standards against dark backgrounds
**Interactive Elements:** Minimum 44x44px touch targets
**Focus Management:** Clear focus indicators on all interactive elements
**Semantic HTML:** Proper heading hierarchy (h1→h2→h3)
**Screen Readers:** Descriptive aria-labels for icon-only buttons
**Keyboard Navigation:** Full keyboard accessibility with logical tab order

## Terminal/Cyber Aesthetic Elements

**Terminal Styling:**
- Section transitions with comment-style dividers (<!-- ======= -->)
- Command prompt indicators ($ or >) before key elements
- Monospace fonts for all technical content
- ASCII art or box-drawing characters for borders
- Line numbers for code blocks

**Cybersecurity Touches:**
- Tag styling resembles code syntax highlighting
- CVSS scores displayed like terminal output
- Project dates in ISO format (YYYY-MM-DD HH:MM)
- Skill proficiency as progress bars using characters (█░░░░)
- "Loading" states use terminal-style spinners

## Responsive Behavior

**Breakpoints:**
- Mobile: Single column, stacked cards, hamburger menu
- Tablet (md): 2-column grids, expanded navigation
- Desktop (lg): Full multi-column layouts, fixed navigation

**Mobile Optimizations:**
- Reduce hero height to 80vh
- Stack skill categories vertically
- Single column project grid
- Simplified navigation with drawer