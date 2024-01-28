import { ParabolLogo } from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Dorian Chevalérias",
  initials: "DC",
  location: "Strasbourg, France",
  locationLink: "https://www.google.com/maps/place/Strasbourg/",
  about:
    "I am a a 20 years old passionate freelancer and 4th year student in Telecom Strasboug, studying computer science specializing in data science and machine learning.",
  summary:
    "As a Freelancer and a Computer Science student, I have been carefully managing multiple projects for clients all around the world, for school and personal projects. I am dedicated to always making qualitative work and I am always looking for new challenges to improve my skills and knowledge. I am also looking for a 3-4 months internship in the field of data science, machine learning or software engineering where I can apply my skills and learn new ones.",
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
        "Helped companies and people solve their issues using Python. I started with game creations with Pygame then moved to Desktop app creation with PyQT. I did many automation projects including webscraping ones in Selenium and BeautifulSoup. I now focus on data science and machine learning projects using Pandas, NumPy, Scikit-learn, TensorFlow and PyTorch.",
    },

    {
      company: "Cilcare",
      link: "https://www.cilcare.com/",
      badges: ["Junior-Entreprise"],
      title: "Intervenant",
      start: "September 2023",
      end: "January 2024",
      description:
        "Created a Desktop app to help the 20 team memebers organize their tasks, projects and days off.",
    },

    {
      company: "AirFrance-KLM",
      link: "https://wwws.airfrance.fr/",
      badges: ["internship"],
      title: "Cybersecurity Intern",
      start: "June 2023",
      end: "August 2023",
    },
  ],

  languages: [
    "French: Native language",
    "English: C1 (TOEIC: 970/990)",
    "Russian: A2",
  ],

  skills: [
    "Python",
    "Pandas",
    "NumPy",
    "Scikit-learn",
    "TensorFlow",
    "PyTorch",
    "R",
    "SQL",
    "C/C++",
  ],
  projects: [
    {
      title: "AnkiStreak",
      techStack: ["Add-on", "Python", "Pygame"],
      description:
        "An anki add-on to motivate you to study everyday by gamifying your anki experience",
    },
    {
      title: "PygameUIKit",
      techStack: ["Python", "Pygame"],
      description: "A UI kit for Pygame to help you create beautiful UIs fast",
      link: {
        label: "monito.dev",
        href: "https://github.com/Times0/PygameUIKit",
      },
    },
    {
      title: "MultiChess",
      techStack: ["C++", "Python", "Pygame", "Sockets"],
      description:
        "The chess game but you can play with friends online or against a computer",
      link: {
        label: "github.com",
        href: "https://github.com/Times0/MultiChess",
      },
    },
    {
      title: "Futuristic City Simulation",
      techStack: ["Python", "SeaBorn", "Pygame"],
      description:
        "Simulation of a complex futuristic city with autonomous cars, drones, robots and more. The goal is to infer the best city design to maximize the city's efficiency and the citizens' happiness",
    },
    {
      title: "Cilpink",
      techStack: ["Python", "PyQt", "MySQL"],
      description:
        "A desktop app to help the 20 team memebers of Cilcare organize their tasks, projects and days off",
    },
  ],
} as const;
