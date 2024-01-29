import { ParabolLogo } from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Dorian Chevalérias",
  initials: "DC",
  location: "Strasbourg, France",
  locationLink: "https://www.google.com/maps/place/Strasbourg/",
  about:
    "Je suis un freelance passionné de 20 ans et étudiant en deuxième année du cycle ingénieur à Telecom Strasboug, étudiant en informatique spécialisé dans la science des données et l'apprentissage automatique.",
  summary:
    "En tant que freelance et étudiant en informatique, j'ai géré avec soin de nombreux projets pour des clients du monde entier, pour des projets scolaires et personnels. Je m'engage à toujours faire un travail de qualité en prêtant attention aux détails et à relever de nouveaux défis pour améliorer mes compétences et mes connaissances. Je suis actuellement à la recherche d'un stage de 3-4 mois dans le domaine de la science des données, de l'apprentissage automatique, de l'ingénierie des données ou de l'ingénierie logicielle à partir de juin 2024 :).",
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
        "Diplôme d'ingénieur + Master en informatique spécialisé en science des données et intelligence artificielle",
      start: "2022",
      end: "2025",
    },
    {
      school: "Lycée Faidherbe",
      degree:
        "Classes préparatoires aux concours d'entrée aux Grandes Écoles françaises, MP option ",
      start: "2021",
      end: "2022",
    },
  ],
  work: [
    {
      company: "Consultant",
      badges: ["Freelance"],
      link: "https://dorian-chevalerias.com/",
      title: "Consultant Python",
      start: "2021",
      end: "à présent",
      description:
        "J'ai aidé des entreprises et des personnes à résoudre leurs problèmes en utilisant Python. Mon parcours a commencé avec de la création de jeux avec Pygame, puis je suis passé à la création d'applications de bureau avec PyQT. J'ai aussi réalisé de nombreux projets d'automatisation, dont du scraping. Je me concentre maintenant sur les projets d'apprentissage automatique, deeplearing, reinforcement learning, evolutionnary programming en utilisant Pandas, NumPy, Neat, Scikit-learn, TensorFlow et PyTorch.",
    },

    {
      company: "Cilcare",
      link: "https://www.cilcare.com/",
      badges: ["Junior-Entreprise"],
      title: "Intervenant",
      start: "septembre 2023",
      end: "janvier 2024",
      description:
        "Création d'une application de bureau pour aider les 20 membres de l'équipe à organiser leurs tâches, leurs projets et leurs jours de congé.",
    },

    {
      company: "AirFrance-KLM",
      link: "https://wwws.airfrance.fr/",
      badges: ["stage"],
      title: "Stagiaire en cybersécurité",
      description: "",
      start: "juin 2023",
      end: "août 2023",
    },
  ],

  languages: [
    "Français : Langue maternelle",
    "Anglais : C1 (TOEIC : 970/990)",
    "Allemand : B2",
    "Russe",
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
      techStack: ["Module complémentaire", "Python", "Pygame"],
      description:
        "Un addon anki qui motive les utilisateurs à apprendre tous les jours en gamifiant leur expérience anki.",
    },
    {
      title: "PygameUIKit",
      techStack: ["Python", "Pygame"],
      description:
        "Un kit d'interface utilisateur pour Pygame afin d'aider les gens à créer rapidement de belles interfaces utilisateur.",
      link: {
        href: "https://github.com/Times0/PygameUIKit",
      },
    },
    {
      title: "MultiChess",
      techStack: ["C++", "Python", "Pygame", "Sockets"],
      description:
        "Un jeu d'échecs classique où on peut jouer en réseau ou contre une IA basée sur un réseau de neurones. Ou sur un minmax avec élagage alpha-bêta.",
      link: {
        label: "github.com",
        href: "https://github.com/Times0/MultiChess",
      },
    },
    {
      title: "Futuristic City Simulation",
      techStack: ["Python", "SeaBorn", "Pygame"],
      description:
        "Simulation d'une ville futuriste complexe avec des voitures autonomes, des drones, des robots, etc. L'objectif est d'inférer la meilleure conception de la ville pour maximiser son efficacité et le bonheur des citoyens",
    },
    {
      title: "Cilpink",
      techStack: ["Python", "PyQt", "MySQL"],
      description:
        "Une application de bureau pour aider les 20 membres de l'équipe de Cilcare à organiser leurs tâches, projets et congés",
    },
  ],
} as const;
