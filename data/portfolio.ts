export interface ProjectSystem {
  id: string;
  code: string; // e.g. "SYS-01"
  name: string;
  description: string;
  category: string;
  stack: string[];
  year: string;
  status: "PRODUCTION" | "ACTIVE" | "PROTOTYPE" | "RESEARCH";
  repoUrl?: string | null; // Leave as null or config placeholder if unverified
  liveUrl?: string | null;
  architectureDetails: {
    overview: string;
    highlights: string[];
    technicalRole?: string;
  };
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  location?: string;
  type: "INDUSTRY" | "LEADERSHIP";
  description: string[];
  tags: string[];
}

export interface SkillCategory {
  title: string;
  code: string;
  skills: string[];
}

export interface CurrentlyItem {
  track: "LEARNING" | "BUILDING" | "EXPLORING";
  label: string;
  items: string[];
}

export interface PortfolioData {
  identity: {
    name: string;
    handle: string;
    titles: string[];
    headlineRole: string;
    subRole: string;
    statement: string;
    location: string;
    statusIndicator: string;
  };
  contact: {
    /* User configuration needed: replace placeholders with your confirmed URLs/email */
    email: string;
    github: string;
    linkedin: string;
    resumePath: string; // Place your resume in /public/resume.pdf or update with external URL
    availability: string;
  };
  systems: ProjectSystem[];
  engineeringSkills: SkillCategory[];
  experience: ExperienceItem[];
  currently: CurrentlyItem[];
}

export const portfolioData: PortfolioData = {
  identity: {
    name: "REHAN SAIFI",
    handle: "rehansaifi",
    titles: [
      "Cloud / DevOps Engineer",
      "SDET / Automation Engineer",
      "AI / Systems Developer",
    ],
    headlineRole: "Cloud / DevOps Engineer",
    subRole: "SDET · Automation · AI Systems",
    statement:
      "I build reliable software systems, automation infrastructure, and developer tools.",
    location: "India",
    statusIndicator: "OPERATIONAL // OPEN TO ENGINEERING ROLES",
  },
  contact: {
    // ---------------------------------------------------------------------------
    // USER CONFIGURATION PLACEHOLDERS
    // Replace these placeholder strings with your verified profile information.
    // ---------------------------------------------------------------------------
    email: "rsaify90@gmail.com", // [CONFIG NEEDED]: Update with your direct contact email if preferred
    github: "https://github.com/rehansaify", // [CONFIG NEEDED]: Update if your GitHub handle differs
    linkedin: "https://linkedin.com/in/rehansaify", // [CONFIG NEEDED]: Update with your exact LinkedIn profile URL
    resumePath: "https://drive.google.com/file/d/1mbMyXlmkP-DpmyAqioSlvT7Sz6MbfkjL/view?usp=sharing", // [CONFIG NEEDED]: Place resume.pdf in the public/ folder or provide full link
    availability:
      "Open to software engineering, SDET, DevOps, cloud, and device-quality engineering opportunities.",
  },
  systems: [
    {
      id: "android-device-harness",
      code: "SYS-01",
      name: "Android Device Harness",
      category: "Test Infrastructure · Device Quality",
      description:
        "Automated Android device testing and health-recovery framework built for continuous verification of target testbeds.",
      stack: ["Python", "ADB", "Pytest", "Docker", "GitHub Actions"],
      year: "2026",
      status: "ACTIVE",
      repoUrl: "https://github.com/rehansaify/android-device-harness", // [CONFIG NEEDED]: Add GitHub repo URL when public
      liveUrl: null,
      architectureDetails: {
        overview:
          "Engineered an automated device management harness utilizing Android Debug Bridge (ADB) protocols to monitor physical/virtual device states, detect deadlocks, and autonomously trigger health-recovery routines.",
        highlights: [
          "Automated device discovery and connection pooling across ADB server instances",
          "Self-healing recovery routines for hung emulators and unresponsive daemon processes",
          "Pytest test-runner integration containerized via Docker for reproducible CI/CD execution in GitHub Actions",
        ],
        technicalRole: "Device Quality & Test Infrastructure",
      },
    },
    {
      id: "wireguard-mesh-vpn",
      code: "SYS-02",
      name: "WireGuard: Quantum-Protected Mesh VPN",
      category: "Systems & Network Security",
      description:
        "Secure mesh networking system exploring post-quantum cryptographic key exchange to harden WireGuard kernel tunnels.",
      stack: ["WireGuard", "Linux", "Networking", "Cryptography"],
      year: "2025",
      status: "RESEARCH",
      repoUrl: null, // [CONFIG NEEDED]: Add GitHub repo URL when public
      liveUrl: null,
      architectureDetails: {
        overview:
          "Engineered a resilient zero-trust mesh network layer atop Linux WireGuard kernel interfaces, investigating post-quantum key encapsulation mechanisms (KEM) to safeguard encrypted channels against harvest-now-decrypt-later adversaries.",
        highlights: [
          "Decentralized mesh topology with dynamic peer route propagation",
          "Post-quantum hybrid handshake abstraction integrating experimental quantum-resistant algorithms",
          "Kernel-level interface scripting with strict Linux iptables/nftables security filtering",
        ],
        technicalRole: "Systems & Network Engineering",
      },
    },
    {
      id: "finvantage",
      code: "SYS-03",
      name: "FinVantage",
      category: "Applied AI · Cloud Architecture",
      description:
        "AI-powered financial intelligence platform providing synthesized market analysis and document understanding.",
      stack: ["React", "Node.js", "Gemini API", "Cloudflare"],
      year: "2025",
      status: "PRODUCTION",
      repoUrl: null, // [CONFIG NEEDED]: Add GitHub repo URL if desired
      liveUrl: "https://finvantage.rehansaifi.qzz.io/",
      architectureDetails: {
        overview:
          "Production-deployed financial intelligence platform leveraging the Google Gemini API for structured semantic extraction, financial report parsing, and real-time market data contextualization.",
        highlights: [
          "Edge-cached serverless deployment orchestrating Node.js runtimes on Cloudflare",
          "Prompt architecture engineered for structured JSON output and low-latency financial query resolution",
          "Responsive, high-density analytics interface built with React",
        ],
        technicalRole: "Cloud Architecture & AI Integration",
      },
    },
    {
      id: "biobuddy",
      code: "SYS-04",
      name: "BioBuddy",
      category: "AI Systems · Educational Tech",
      description:
        "AI-powered biology learning and tutoring platform designed for interactive concept breakdown and student guidance.",
      stack: ["React", "Python", "Gemini API", "Machine Learning"],
      year: "2024",
      status: "ACTIVE",
      repoUrl: null, // [CONFIG NEEDED]: Add GitHub repo URL if desired
      liveUrl: null,
      architectureDetails: {
        overview:
          "Interactive AI tutoring engine utilizing multi-turn context awareness to deconstruct complex biological systems, cellular pathways, and anatomical concepts into structured pedagogical models.",
        highlights: [
          "Python backend implementing structured retrieval logic and Gemini API integration",
          "Interactive query interface designed for intuitive student exploration and visual diagram annotations",
          "Machine learning workflows for query classification and concept-difficulty calibration",
        ],
        technicalRole: "AI Systems & Full-Stack Development",
      },
    },
  ],
  engineeringSkills: [
    {
      title: "CLOUD",
      code: "ENG-01",
      skills: ["AWS", "Azure", "Cloudflare", "DigitalOcean"],
    },
    {
      title: "DEVOPS",
      code: "ENG-02",
      skills: ["Docker", "GitHub Actions", "CI/CD", "Linux", "Git"],
    },
    {
      title: "AUTOMATION / TESTING",
      code: "ENG-03",
      skills: ["Python", "Pytest", "ADB", "Test Automation"],
    },
    {
      title: "SYSTEMS / NETWORKING",
      code: "ENG-04",
      skills: ["Linux", "Networking", "WireGuard", "REST APIs"],
    },
    {
      title: "PROGRAMMING",
      code: "ENG-05",
      skills: ["Python", "C++", "JavaScript", "SQL"],
    },
    {
      title: "AI / ML",
      code: "ENG-06",
      skills: ["Machine Learning", "Gemini API", "AI Applications"],
    },
  ],
  experience: [
 {
  id: "exp-devops-intern",
  role: "DevOps Engineer Intern",
  organization: "Noor Realty Solutions LLP",
  period: "01 Jun 2026 – 01 Aug 2026",
  type: "INDUSTRY",
  description: [
    "Assisted in deployment and release management for the in-house Real Estate & Interior Management Platform.",
    "Supported development and testing environments, cloud infrastructure, and server administration.",
    "Implemented and supported CI/CD pipelines, application performance monitoring, and uptime practices.",
    "Assisted with database backup and recovery procedures while supporting security implementation and version control.",
    "Collaborated with development teams on infrastructure and deployment workflows.",
  ],
  tags: ["DevOps", "CI/CD", "Cloud Infrastructure", "Server Administration"],
},
    {
      id: "exp-arcadia",
      role: "Head — Arcadia Esports Society",
      organization: "Jaypee Institute of Information Technology",
      period: "Leadership",
      location: "Noida, India",
      type: "LEADERSHIP",
      description: [
        "Led operational execution, technical infrastructure, and competitive event organization for the student gaming community.",
        "Managed team members, tournament coordination, network setups, and community engagement initiatives.",
      ],
      tags: ["Leadership", "Operations", "Team Management", "Event Infrastructure"],
    },
  ],
  currently: [
    {
      track: "LEARNING",
      label: "ACTIVE EXPANSION",
      items: ["Kubernetes", "AWS", "Advanced CI/CD"],
    },
    {
      track: "BUILDING",
      label: "IN DEVELOPMENT",
      items: ["Android Device Quality Console"],
    },
    {
      track: "EXPLORING",
      label: "DOMAIN RESEARCH",
      items: [
        "SDET",
        "Cloud Infrastructure",
        "Platform Engineering",
      ],
    },
  ],
};
