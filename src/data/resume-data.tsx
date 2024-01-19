import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Dorian Chevalérias",
  initials: "DC",
  location: "Strasbourg, France",
  locationLink: "https://www.google.com/maps/place/Strasbourg/",
  about:
    "I am a a 20 years old passionate freelancer and 4th year student in Telecom Strasboug, studying computer science specializing in data science and machine learning.",
  summary:
    "As a Freelancer and a Computer Science student, I have been carrefully managing multiple projects for clients all around the world, school and personal projects. I am dedicated to always making qualitative work and I am always looking for new challenges to improve my skills and knowledge. I am (also) looking for a 3-4 months internship in the field of data science, machine learning or software engineering where I can apply my skills and learn new ones.",
  // avatarUrl: "https://avatars.githubusercontent.com/u/1017620?v=4",
  personalWebsiteUrl: "https://dorian-chevalerias.com/",
  contact: {
    email: "dorian.chevalerias@gmail.com",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/Times0",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/dorian-chevalerias/",
        icon: LinkedInIcon,
      },
    ],
  },
  education: [
    {
      school: "Telecom Strasbourg",
      degree:
        "Engineering Degree + Master's Degree in Computer Science specialized in Data Science and artificial intelligence",
      start: "2022",
      end: "2025",
    },
    {
      school: "Lycée Faidherbe",
      degree:
        "Preparatory classes for the competitive entrance exams to the French Grandes Écoles",
      start: "2021",
      end: "2022",
    },
  ],
  work: [
    {
      company: "Consultant",
      badges: ["Freelance"],
      title: "Python consultant",
      logo: ParabolLogo,
      start: "2021",
      end: "now",
      description:
        "Helped companies and people solve their issues using Python. I started with game creations using Pygame and then I moved to Desktop app creation with PyQT. I did webscraping projects with Selenium and BeautifulSoup. I now focus on data science and machine learning projects using Pandas, NumPy, Scikit-learn, TensorFlow and PyTorch.",
    },

    {
      company: "Cilcare",
      link: "https://www.cilcare.com/",
      badges: [],
      title: "Intervenant",
      start: "September 2023",
      end: "January 2024",
      description:
        "Created a Desktop app to help the 20 team memebers organize their tasks, projects and days off.",
    },

    {
      company: "AirFrance-KLM",
      link: "https://wwws.airfrance.fr/",
      badges: [],
      title: "Cybersecurity Intern",
      start: "June 2023",
      end: "August 2023",
    },
  ],
  skills: [
    "Python (Pandas, NumPy, Scikit-learn, TensorFlow, PyTorch)",
    "R",
    "SQL",
    "C/C++",
  ],
  projects: [
    {
      title: "Consultly",
      techStack: [
        "Side Project",
        "TypeScript",
        "Next.js",
        "Vite",
        "GraphQL",
        "WebRTC",
      ],
      description: "A platform to build and grow your online business",
      logo: ConsultlyLogo,
      link: {
        label: "consultly.com",
        href: "https://consultly.com/",
      },
    },
    {
      title: "Monito",
      techStack: ["Side Project", "TypeScript", "Next.js", "Browser Extension"],
      description:
        "Browser extension that records everything happening in a web application",
      logo: MonitoLogo,
      link: {
        label: "monito.dev",
        href: "https://monito.dev/",
      },
    },
    {
      title: "Jarocki.me",
      techStack: ["Side Project", "Next.js", "MDX"],
      description:
        "My personal website and blog. Built with Next.js and Notion API",
      logo: JarockiMeLogo,
      link: {
        label: "github.com",
        href: "https://jarocki.me/",
      },
    },
    {
      title: "Minimal",
      techStack: ["Side Project", "Next.js", "Puppeteer"],
      description:
        "Minimalist calendars, habit trackers and planners generator",
      logo: Minimal,
      link: {
        label: "useminimal.com",
        href: "https://useminimal.com/",
      },
    },
    {
      title: "Barepapers",
      techStack: ["Side Project", "Next.js", "Puppeteer"],
      description:
        "Generates beautiful wallpapers using random shapes and gradients",
      logo: BarepapersLogo,
      link: {
        label: "barepapers.com",
        href: "https://barepapers.com/",
      },
    },
    {
      title: "Year progress",
      techStack: ["Side Project", "TypeScript", "Next.js"],
      description: "Tracks current year progress and displays a countdown",
      logo: YearProgressLogo,
      link: {
        label: "getyearprogress.com",
        href: "https://getyearprogress.com/",
      },
    },
    {
      title: "Parabol",
      techStack: [
        "Full Stack Developer",
        "TypeScript",
        "React",
        "Node.js",
        "GraphQL",
      ],
      description:
        "The Agile meeting co-pilot that delivers better meetings with less effort",
      logo: ParabolLogo,
      link: {
        label: "github.com",
        href: "https://parabol.co/",
      },
    },
    {
      title: "Evercast",
      techStack: [
        "Lead Frontend Developer",

        "TypeScript",
        "React",
        "Node.js",
        "GraphQL",
      ],
      description:
        "Creative collaboration platform that combines video conferencing and HD media streaming",
      logo: EvercastLogo,
      link: {
        label: "evercast.us",
        href: "https://www.evercast.us/",
      },
    },
  ],
} as const;
