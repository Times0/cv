import { ParabolLogo } from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";
export const RESUME_DATA = {
  name: "Dorian Chevalérias",
  initials: "DC",
  location: "Strasbourg, France",
  locationLink: "https://www.google.com/maps/place/Strasbourg/",
  about:
    "Passionate about computer science, I am a 20-year-old freelancer currently in the second year of the engineering cycle at Telecom Strasbourg, specializing in data science and machine learning. My solid academic background and professional experiences allow me to bring a unique perspective and technical expertise to every project.",
  summary:
    "With my experiences as a freelancer and a computer science student, I have successfully managed numerous complex projects for clients from several countries, as well as within the scope of my studies and personal initiatives. My commitment to excellence and attention to detail allow me to consistently deliver high-quality results. Passionate about innovation and continuous learning, I actively seek new challenges to refine my skills and expand my knowledge. Currently, I am looking for a stimulating 3-4 month internship in the fields of data science, machine learning, data engineering, or software engineering, starting from June 2024. I am confident that my technical expertise, creativity, and determination will be valuable assets for your company.",
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
      school: "Télécom Strasbourg",
      degree:
        "Engineering Diploma + Master's in Computer Science with a specialization in Data Science and Artificial Intelligence",
      start: "2022",
      end: "2025",
    },
    {
      school: "Lycée Faidherbe",
      degree:
        "Preparatory classes for entrance exams to French Grandes Écoles, MP option in computer science",
      start: "2021",
      end: "2022",
    },
  ],
  work: [
    {
      company: "Consultant",
      badges: ["Freelance"],
      link: "https://dorian-chevalerias.com/",
      title: "Python Consultant",
      start: "2021",
      end: "Present",
      description:
        "Assisting various companies and individuals in solving their problems using Python, starting with game creation using Pygame, evolving towards desktop application development with PyQT. Completing multiple automation projects, including web scraping. Projects in the fields of machine learning, deep learning, and reinforcement learning (tools: Pandas, NumPy, Neat, Scikit-learn, TensorFlow, and PyTorch).",
      keypoints: [
        "Over 50 projects completed for clients around the world.",
        "Satisfied clients: no ratings below 5 stars on Fiverr and Upwork.",
        "Projects completed in various domains: websites, games, desktop applications, automation, artificial intelligence.",
      ],
    },
    {
      company: "Cilcare",
      link: "https://www.cilcare.com/",
      badges: ["Junior-Company"],
      title: "Instructor",
      start: "September 2023",
      end: "January 2024",
      description:
        "Creation of a desktop application to help the 20 members of the team organize their tasks, projects, and days off.",
      keypoints: [
        "Discussion with the Cilcare team to understand their needs.",
        "Development of the application with PyQt, setting up a MySQL server.",
        "Regular exchanges with the team to adjust the features as the project progressed.",
        "Helped the team be more organized and efficient.",
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
        "Creation of a tool to automate the retrieval of data relevant to the company's IT security and creation of a PowerBI Dashboard to visualize it.",
        "Writing security reports.",
        "Analysis of a new security standard (ITU-T X.1060) and writing an actionable report for the teams in charge of strategy.",
      ],
    },
  ],
  languages: [
    "French: Native language",
    "English: C1 (TOEIC: 970/990)",
    "German: B2",
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
      techStack: ["Addon", "Pygame"],
      description:
        "Innovative addon for the Anki software that boosts user motivation by gamifying their daily learning experience, promoting consistent and sustainable progress.",
    },
    {
      title: "PygameUIKit",
      techStack: ["Python", "Pygame"],
      description:
        "Powerful and intuitive user interface kit for Pygame, allowing developers to quickly create attractive and functional graphical interfaces, optimizing the development process.",
      link: {
        href: "https://github.com/Times0/PygameUIKit",
      },
    },
    {
      title: "MultiChess",
      techStack: ["C++", "Python", "Pygame", "Sockets"],
      description:
        "Chess game offering the possibility to play online or against AIs using the minimax alpha-beta algorithm OR an artificial neural network. Not very original",
      link: {
        label: "github.com",
        href: "https://github.com/Times0/MultiChess",
      },
    },
    {
      title: "Futuristic City Simulation",
      techStack: ["Python", "SeaBorn", "Pygame", "Data"],
      description:
        "Simulation of a complex futuristic city incorporating autonomous cars, drones, and robots. Daily data generation and optimization of the city's shape using machine learning and predictive analysis algorithms.",
    },
    {
      title: "Cilpink",
      techStack: ["PyQt", "MySQL", "GCP"],
      description:
        "Custom desktop application developed to optimize task, project, and time-off management for the 20 members of the Cilcare team. Successful deployment of a MySQL server on Google Cloud Platform for a complete and scalable solution.",
    },
  ],
} as const;
