import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Dorian Chevalérias",
  initials: "DC",
  location: "Strasbourg, France",
  locationLink: "https://www.google.com/maps/place/Strasbourg/",
  about:
    "I am a a 20 years old passionate freelancer and 2nd year student in Telecom Strasboug, studying computer science specializing in data science and machine learning.",
  summary:
    "As a Freelancer and a Computer Science student, I have been carefully managing multiple projects for clients all around the world, as well as for school and personal projects. I am dedicated to always delivering high-quality work with attention to detail. I am constantly seeking new challenges to improve my skills and knowledge. Currently, I am actively looking for a 3-4 month internship in the field of data science, machine learning, data engineering, or software engineering, starting in June 2024 :)",
  avatarUrl: "",
  personalWebsiteUrl: "https://dorian-chevalerias.com/",
  contact: {
    email: "dorian.chevalerias@gmail.com",
    tel: "",
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
        "Preparatory classes for the competitive entrance exams to the French Grandes Écoles (MP option informatique)",
      start: "2021",
      end: "2022",
    },
  ],
  work: [
    {
      company: "Consultant",
      badges: ["Freelance"],
      link: "https://dorian-chevalerias.com/",
      title: "Python consultant",
      start: "2021",
      end: "now",
      description:
        "Helped companies and people solve their issues using Python. I started with game creations with Pygame then moved to Desktop app creation with PyQT. I did many automation projects including webscraping ones in Selenium and BeautifulSoup. I now focus on data science and machine learning projects using Pandas, NumPy, Scikit-learn, TensorFlow and PyTorch.",
      keypoints: [
        "More than 50 projects done for clients all around the world.",
        "Satisfied clients: no review under 5 stars on Fiverr and Upwork.",
        "Projects done in various fields: websites, games, desktop apps, automation, AI.",
      ],
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
      keypoints: [
        "Discussion with the Cilcare team to understand their needs.",
        "Development of the application using PyQt, setting up a MySQL server.",
        "Regular exchanges with the team to adjust the features as the project progresses.",
        "Helped the team to be more organized and efficient.",
        "The application is still in use today.",
      ],
    },

    {
      company: "AirFrance-KLM",
      link: "https://wwws.airfrance.fr/",
      badges: ["internship"],
      title: "Cybersecurity Intern",
      description: "",
      start: "June 2023",
      end: "July 2023",
      keypoints: [
        "Creation of a tool that automates the retrieval of relevant data related to information system security and creation of a PowerBI Dashboard to visualize them.",
        "Writing security reports.",
        "Analysis of new security standards. (ITU-T X.1060 standard)",
        "Participation in meetings with development teams.",
      ],
    },
  ],

  languages: [
    "French: Native language",
    "English: C1 (TOEIC: 970/990)",
    "Deutsch: A2",
    "Russian",
  ],

  skills: [
    "Python",
    "C/C++",
    "Git",
    "SQL",
    "TypeScript",
    "Pandas",
    "R",
    "Scikit-learn",
    "PyTorch",
  ],
  projects: [
    {
      title: "AnkiStreak",
      techStack: ["Add-on", "Pygame"],
      description:
        "An anki add-on that motivates users to learn every day by gamifying their anki experience",
    },
    {
      title: "PygameUIKit",
      techStack: ["Python", "Pygame"],
      description:
        "A UI kit for Pygame to help people create beautiful UIs fast",
      link: {
        href: "https://github.com/Times0/PygameUIKit",
      },
    },
    {
      title: "MultiChess",
      techStack: ["C++", "Python", "Pygame", "Sockets"],
      description:
        "A classic chess game where you can play in a network or against an AI based on a neural network. Or on a minmax with alpha-beta pruning.",
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
