export const profile = {
  name: "Humoyunbek Tursunniyazov",
  shortName: "Humoyunbek",
  title: "Full-Stack Developer & Founder",
  location: "Tashkent, Uzbekistan",
  email: "humoyunbektursunniyazov@gmail.com",
  phone: "+998900112507",
  github: "https://github.com/humoyun-dev",
  linkedin: "https://linkedin.com/in/humoyun-dev",
  website: "https://www.humoyundev.uz",
  available: true,
  bio: "I'm a full-stack developer from Tashkent who builds modern, performant web applications. I founded SAVDOCHI — a SaaS product for retail businesses — and ship side projects across the stack: React/Next.js on the front, Node.js, Python, and Go on the back. Outside of code I'm into history, politics, and chess.",
  shortBio:
    "Full-stack developer & founder of SAVDOCHI. I build SaaS products and ship full-stack web apps with React, Next.js, and TypeScript.",
};

export const skills = {
  Frontend: [
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Zustand",
    "Redux",
  ],
  Backend: ["Node.js", "Python", "Django", "Go", "REST APIs"],
  Database: ["PostgreSQL", "MongoDB", "SQL"],
  Tools: ["Git", "Vercel", "Docker", "Linux"],
};

export type Experience = {
  company: string;
  role: string;
  period: string;
  current: boolean;
  description: string;
  highlights: string[];
  link?: string;
};

export const experience: Experience[] = [
  {
    company: "SAVDOCHI",
    role: "Founder & Full-Stack Developer",
    period: "2025 — Present",
    current: true,
    description:
      "Founded and built SAVDOCHI, a SaaS product for retail and trade businesses. Owning everything from product strategy and UX to architecture, deployment, and customer support.",
    highlights: [
      "Defined product vision and roadmap from zero",
      "Built the full stack — frontend, backend, infrastructure",
      "Shipped continuous releases on Vercel",
    ],
  },
];

export const education = [
  {
    school: "Self-taught & open-source projects",
    period: "2023 — Present",
    description:
      "Learning through building real products and contributing to the open-source ecosystem. 27+ public repositories on GitHub spanning frontend, backend, CV, and CLI tools.",
  },
];

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  longDescription: string;
  tech: string[];
  github: string;
  demo?: string;
  highlights: string[];
  featured: boolean;
};

export const projects: Project[] = [
  {
    slug: "x-blog",
    name: "X Blog",
    tagline: "Modern full-stack social media platform",
    description:
      "A modern social media platform for sharing thoughts, engaging with posts, and connecting with others in real-time.",
    longDescription:
      "X Blog combines an elegant UI with a scalable backend architecture and secure authentication. Users can sign up, create posts, follow others, and interact in real-time. Built as a full-stack TypeScript application with a focus on user experience and clean code.",
    tech: ["TypeScript", "Next.js", "React", "Tailwind CSS"],
    github: "https://github.com/humoyun-dev/x-blog",
    demo: "https://x-blog-drab.vercel.app",
    highlights: [
      "Real-time interactions and notifications",
      "Secure auth with session management",
      "Responsive, modern UI design",
    ],
    featured: true,
  },
  {
    slug: "anonim-chat",
    name: "Anonim Chat",
    tagline: "Telegram anonymous chat with admin dashboard",
    description:
      "Telegram bot for anonymous messaging with spam filtering, plus a real-time admin panel to manage users and sessions.",
    longDescription:
      "A two-part system: a Telegram bot that lets users exchange anonymous messages with built-in spam filtering, paired with an admin dashboard for moderating users, monitoring sessions, and managing the platform in real-time.",
    tech: ["JavaScript", "Node.js", "Telegram Bot API", "Real-time"],
    github: "https://github.com/humoyun-dev/anonim-chat",
    demo: "https://t.me/queastion_anonim_bot",
    highlights: [
      "Real-time admin dashboard",
      "Spam filtering and session control",
      "Anonymous user-to-user messaging",
    ],
    featured: true,
  },
  {
    slug: "notepad",
    name: "Notepad",
    tagline: "Local-first rich text notepad",
    description:
      "A clean, modular notepad app with rich text editing — 100% local, no backend, full CRUD via localStorage.",
    longDescription:
      "Built with React, Tiptap, and Zustand. A privacy-first take on Notion-style note taking — everything runs locally in the browser with no servers, no accounts, and no tracking. Demonstrates state management patterns and rich text editor integration.",
    tech: ["React", "TypeScript", "Tiptap", "Zustand", "Tailwind CSS"],
    github: "https://github.com/humoyun-dev/notepad",
    demo: "https://notepad.humoyundev.uz",
    highlights: [
      "Rich text editing with Tiptap",
      "Local-first — no backend required",
      "Clean state management with Zustand",
    ],
    featured: true,
  },
  {
    slug: "hand-draw",
    name: "Hand Draw",
    tagline: "Computer vision drawing controlled by hand gestures",
    description:
      "A computer vision drawing app you control with hand gestures via your webcam.",
    longDescription:
      "Built with Python, OpenCV, MediaPipe, and Tkinter. Tracks hand landmarks in real-time and translates gestures into drawing actions on a canvas. A fun exploration of computer vision and gesture-based UIs.",
    tech: ["Python", "OpenCV", "MediaPipe", "Tkinter"],
    github: "https://github.com/humoyun-dev/hand-draw",
    highlights: [
      "Real-time hand tracking with MediaPipe",
      "Gesture-driven drawing canvas",
      "Cross-platform desktop UI",
    ],
    featured: true,
  },
  {
    slug: "central-bank-hackathon",
    name: "Central Bank Hackathon",
    tagline: "Hackathon project for the Central Bank",
    description:
      "Hackathon project tackling a real-world fintech challenge for the Central Bank of Uzbekistan.",
    longDescription:
      "Built during a national hackathon. A TypeScript/Next.js application solving a problem in the financial sector, deployed on Vercel and presented to judges.",
    tech: ["TypeScript", "Next.js", "React"],
    github: "https://github.com/humoyun-dev/central-bank-hackathon",
    demo: "https://central-bank-hackathon.vercel.app",
    highlights: [
      "Built under hackathon time pressure",
      "Real-world fintech problem",
      "Live demo deployed on Vercel",
    ],
    featured: false,
  },
  {
    slug: "solar-system",
    name: "Solar System 3D",
    tagline: "Interactive 3D solar system",
    description:
      "An interactive 3D model of the solar system built with JavaScript and WebGL.",
    longDescription:
      "A web-based 3D visualization of our solar system. Planets orbit the sun in real-time with adjustable camera controls. A learning project exploring 3D rendering on the web.",
    tech: ["JavaScript", "Three.js", "WebGL"],
    github: "https://github.com/humoyun-dev/solar-system",
    demo: "https://solar-system-kappa-woad.vercel.app",
    highlights: [
      "Real-time 3D rendering in the browser",
      "Interactive camera controls",
      "Accurate orbital motion",
    ],
    featured: false,
  },
  {
    slug: "twitter-clone",
    name: "Twitter Clone",
    tagline: "Twitter-inspired social app",
    description:
      "A Twitter-inspired social application with posts, likes, and a familiar timeline UX.",
    longDescription:
      "Full-stack TypeScript clone of core Twitter features — posting, liking, following, and a timeline. Built to practice end-to-end product engineering.",
    tech: ["TypeScript", "Next.js", "React"],
    github: "https://github.com/humoyun-dev/twitter-clone",
    demo: "https://twitter-clone-tawny-omega.vercel.app",
    highlights: [
      "Familiar Twitter-style timeline",
      "Posts, likes, and follows",
      "Full TypeScript stack",
    ],
    featured: false,
  },
  {
    slug: "coby",
    name: "Coby",
    tagline: "TypeScript web application",
    description:
      "A TypeScript-based web application deployed on Vercel.",
    longDescription:
      "A side project exploring product ideas and TypeScript patterns. Deployed live on Vercel.",
    tech: ["TypeScript", "Next.js", "React"],
    github: "https://github.com/humoyun-dev/coby",
    demo: "https://coby.vercel.app",
    highlights: [
      "Live on Vercel",
      "Modern TypeScript stack",
    ],
    featured: false,
  },
];

export const navLinks = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];
