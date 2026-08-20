export interface NavLink {
  label: string
  href: string
}

export type IconName = 'linkedin' | 'github' | 'pinecone' | 'hertzcast'

export interface IconLink {
  label: string
  url: string
  icon: IconName
}

export interface ExperienceEntry {
  role: string
  company: string
  location: string
  period: string
  bullets: string[]
}

export interface Project {
  name: string
  platforms: string[]
  stack: string[]
  description: string
  links?: { label: string; url: string }[]
  isPrivate?: boolean
}

export interface StackCategory {
  category: string
  items: string[]
}

export const nav: { name: string; links: NavLink[] } = {
  name: 'Dan Butuc',
  links: [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Stack', href: '#stack' },
    { label: 'Contact', href: '#contact' },
  ],
}

export const hero = {
  name: 'Dan Butuc',
  title: 'Automation & Product Engineer',
  accent:
    'Built specifically for 3F Venture Studio / EasyBiz - because the role deserved more than a PDF.',
  paragraphs: [
    'I ship products end-to-end - scope, architecture, AI-directed implementation with Claude Code, review, production. Background in cloud and DevOps engineering combined with 13+ years of production automation.',
    'This app was built with Next.js, TypeScript, and Claude Code - directed, reviewed, and shipped the same way your role works.',
  ],
  links: [
    {
      label: 'LinkedIn',
      url: 'https://linkedin.com/in/danbutuc',
      icon: 'linkedin',
    },
    {
      label: 'GitHub',
      url: 'https://github.com/theDanButuc',
      icon: 'github',
    },
    {
      label: 'Pinecone Hub',
      url: 'https://pinecone.design',
      icon: 'pinecone',
    },
  ] satisfies IconLink[],
  photo: {
    src: '/dan-butuc.jpg',
    alt: 'Dan Butuc, Automation & Product Engineer',
  },
}

export const coverLetter = {
  title: 'Why 3F Venture Studio / EasyBiz',
  paragraphs: [
    "I'll be direct about where I fit and where I don't.",
    "The last project I delivered maps almost one-to-one onto this role. An accounting-sector client needed structure out of chaos - free-text turned into assigned, tracked project tasks. I ran discovery with them, designed the architecture - a locally hosted LLM connected to their project management platform over REST, inference kept on-premise for GDPR, not because it was the easy choice - then directed the build with Claude Code, reviewed everything that came out of it, and shipped it. Client relationship, architecture, quality gate, production: all mine, start to finish.",
    "That's also how I built two macOS applications, one of which is live on the App Store right now. AI did most of the typing. I decided what got built, caught what looked right but wasn't, and took responsibility for what shipped.",
    "I know your world from both sides. I operate in Luxembourg, I've delivered under the SME Packages programme, and I've personally dealt with enough incorporation paperwork to understand exactly what you're trying to eliminate. The people you're building for are my clients too.",
    "One thing I won't pretend: I haven't shipped Fastify in production. My backend work is Python, AWS and Azure, PostgreSQL in containerised services. TypeScript I read, review and direct comfortably - the framework is a ramp-up, not a rebuild. If that's a blocker, I'd rather we both know now than find out later.",
    "What I bring is someone who has already run the full loop alone - client to production - and who uses AI-directed development not as a methodology to talk about, but as how I actually work every day.",
  ],
}

export const experience: ExperienceEntry[] = [
  {
    role: 'Automation & Product Engineer',
    company: 'Pinecone Hub',
    location: 'Luxembourg',
    period: 'Jan 2026 – Present',
    bullets: [
      "Delivered a natural language task management system for an accounting-sector client: free-text input converted into structured, assigned project tasks via a locally hosted LLM (Ollama), integrated over REST with the client's project management platform (OpenProject). Local inference chosen for GDPR and data confidentiality.",
      'Designed and developed HertzCast, a native controller for Yamaha AV receivers - live on the Mac App Store. Built for macOS (Swift/SwiftUI) and Windows (C#/PowerShell). Features: Bonjour discovery, background scheduling via SMAppService, multi-zone control, Menu Bar Mini Player, third-party API integrations.',
      'Designed and developed Claude Usage Monitor, an open-source macOS menu bar application tracking Claude.ai usage, burn rate, and reset windows. Distributed via Homebrew tap. 50+ GitHub stars.',
      'Developed Pinvoice, a native macOS invoice generation app with full Peppol/UBL 2.1 e-invoicing support (Swift/SwiftUI).',
      'Designed and built websites and brand identities for SMEs in Luxembourg, Belgium, and the UK, delivered under the Luxembourg SME Packages Digital/AI programme.',
    ],
  },
  {
    role: 'DevOps / Automation Engineer',
    company: 'White Pixel',
    location: 'London (remote/part time)',
    period: 'Jan 2025 – Present',
    bullets: [
      'Designed and implemented Azure cloud infrastructure with Infrastructure-as-Code (Terraform), guaranteeing scalability, security, and compliance with organisational policies.',
      'Designed and deployed AI & automation workflows for multi-app integrations, including web monitoring pipelines with Telegram and Gmail notifications, and AI-powered automation using n8n-MCP with Docker.',
      'Managed and planned the migration of on-premise Windows servers to the cloud while maintaining business continuity, compliance, and operational efficiencies.',
      'Created and managed CI/CD pipelines and containerised environments (Docker), ensuring smooth deployment cycles and consistent performance across testing and production.',
      'Implemented automation (Ansible, Bash) for system updates, upgrades and maintenance, improving reliability and reducing manual workload.',
    ],
  },
  {
    role: 'DevOps Engineer',
    company: 'Governance.com',
    location: 'Luxembourg',
    period: 'Sep 2023 – Oct 2024',
    bullets: [
      'Infrastructure as Code with Terraform, CloudFormation, CDK and Ansible: provisioning and maintaining complex cloud infrastructure on AWS.',
      'Led cloud migration projects, transitioning on-premise to cloud infrastructure with minimal downtime.',
      'Developed an automated EC2 scheduling system integrated with Jira via API calls, reducing operational costs by limiting server runtime to specific daily hours.',
      'Linux Systems Administration (Ubuntu): performance, stability, security, monitoring.',
      'CI/CD Pipeline Automation with Jenkins: integrating Terraform with Jenkins to automate AWS infrastructure provisioning.',
    ],
  },
  {
    role: 'Automation Engineer / Post Production Coordinator',
    company: 'White Pixel',
    location: 'London',
    period: 'May 2020 – Sep 2023',
    bullets: [
      'Designed and managed on-demand AWS infrastructure (Virtual Machines) to support remote work environments.',
      'Post-Production Optimization - Photoshop automation for macOS and Windows using Python, JavaScript, and AppleScript.',
      'Coordinated Creative, Editorial and E-commerce Post-Production processes.',
    ],
  },
  {
    role: 'Automation Engineer / Senior Retoucher',
    company: 'Matchesfashion.com',
    location: 'London',
    period: 'Nov 2017 – May 2020',
    bullets: [
      'Responsible for Post-Production Training.',
      'Developed and implemented Post Production SOPs.',
      'Post Production Optimization via Photoshop Automation (JavaScript and AppleScript).',
    ],
  },
  {
    role: 'Imaging Specialist / Senior Retoucher',
    company: 'Amazon Development Centre Romania',
    location: '',
    period: 'May 2014 – Sep 2017',
    bullets: [
      'Subject Matter Expert on Continuous Improvement Projects.',
      'Post Production Optimization via Photoshop Automation (Javascript).',
      'Designed CAmeleon - a training platform for Color Authoring post-production process.',
      'End-to-End Process Design, Implementation and Reporting.',
      'Developed KPI Measurement Tools; conducted candidate interviews.',
    ],
  },
  {
    role: 'Imaging Associate / Retoucher',
    company: 'Amazon Development Centre Romania',
    location: '',
    period: 'Jul 2012 – May 2014',
    bullets: [
      'E-commerce Retoucher for the European Amazon Studios.',
      'Quality Check; Retouch Improvement Projects.',
    ],
  },
]

export const projects: Project[] = [
  {
    name: 'HertzCast',
    platforms: ['macOS', 'Windows'],
    stack: ['Swift', 'SwiftUI', 'AppKit', 'C#', 'PowerShell'],
    description:
      'Native controller for Yamaha AV receivers. Live on the Mac App Store. Features Bonjour discovery, background scheduling via SMAppService, multi-zone control, Menu Bar Mini Player, and third-party API integrations.',
    links: [
      { label: 'Mac App Store', url: 'https://apps.apple.com/app/id6779581253' },
      { label: 'GitHub', url: 'https://github.com/HertzCast' },
      { label: 'Website', url: 'https://hertzcast.github.io' },
    ],
  },
  {
    name: 'Claude Usage Monitor',
    platforms: ['macOS'],
    stack: ['Swift', 'SwiftUI', 'WKWebView'],
    description:
      'Open-source macOS menu bar app tracking Claude.ai usage, burn rate, and reset windows. Distributed via Homebrew tap. 50+ GitHub stars.',
    links: [
      {
        label: 'GitHub',
        url: 'https://github.com/theDanButuc/Claude-Usage-Monitor',
      },
    ],
  },
  {
    name: 'AMA Tasks Creator',
    platforms: ['Windows Server'],
    stack: ['Python', 'Ollama', 'REST', 'OpenProject'],
    description:
      'Natural language task management system for an accounting-sector client. Free-text input converted into structured, assigned project tasks via a locally hosted LLM. Local inference chosen for GDPR and data confidentiality.',
    isPrivate: true,
  },
  {
    name: 'Pinvoice',
    platforms: ['macOS'],
    stack: ['Swift', 'SwiftUI'],
    description:
      'Native macOS invoice generation app with full Peppol/UBL 2.1 e-invoicing support.',
    isPrivate: true,
  },
  {
    name: 'Water Reminder',
    platforms: ['Android'],
    stack: ['Kotlin', 'Jetpack Compose', 'Room', 'WorkManager'],
    description: 'Hydration tracker with smart notifications and streak tracking.',
    links: [
      {
        label: 'GitHub',
        url: 'https://github.com/theDanButuc/water-reminder-android',
      },
    ],
  },
]

export const stack: StackCategory[] = [
  {
    category: 'Backend & Infrastructure',
    items: [
      'Python',
      'Bash',
      'PostgreSQL',
      'AWS',
      'Azure',
      'Terraform',
      'CloudFormation',
      'Docker',
      'Kubernetes',
      'Linux',
    ],
  },
  {
    category: 'AI-Assisted Development',
    items: [
      'Claude Code',
      'Spec-Driven Development',
      'MCP',
      'Ollama',
      'n8n',
      'trigger.dev',
    ],
  },
  {
    category: 'CI/CD & DevOps',
    items: ['Jenkins', 'GitHub Actions', 'Azure DevOps', 'Ansible'],
  },
  {
    category: 'Web',
    items: ['TypeScript', 'Node.js', 'React', 'Next.js', 'HTML5', 'CSS'],
  },
  {
    category: 'Native',
    items: [
      'Swift',
      'SwiftUI',
      'AppKit',
      'Kotlin',
      'Jetpack Compose',
      'C#',
      'PowerShell',
    ],
  },
]

export const certifications: string[] = ['AWS Certified Cloud Practitioner']

export const contact = {
  name: 'Dan Butuc',
  title: 'Automation & Product Engineer · Luxembourg City',
  email: 'danbutuc@gmail.com',
  phone: '+352 661 539 062',
  links: [
    {
      label: 'LinkedIn',
      url: 'https://linkedin.com/in/danbutuc',
      icon: 'linkedin',
    },
    { label: 'GitHub', url: 'https://github.com/theDanButuc', icon: 'github' },
    { label: 'Pinecone Hub', url: 'https://pinecone.design', icon: 'pinecone' },
    {
      label: 'HertzCast',
      url: 'https://hertzcast.github.io',
      icon: 'hertzcast',
    },
  ] satisfies IconLink[],
  footer: [
    'Built with Next.js, TypeScript, and Claude Code.',
    'Deployed on Vercel.',
  ],
}
