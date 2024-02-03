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
        "Aide apportée à diverses entreprises et individus pour résoudre leurs problèmes à l'aide de Python, par la création de jeux via Pygame, évoluant vers le développement d'applications de bureau avec PyQT. Réalisation de multiples projets d'automatisation, y compris du scraping. Projets dans les domaines de l'apprentissage automatique, du deep learning, du reinforcement learning (outils : Pandas, NumPy, Neat, Scikit-learn, TensorFlow et PyTorch).",
      keypoints: [
        "Plus de 50 projets réalisés pour des clients du monde entier.",
        "Des clients satisfaits : aucun avis en dessous de 5 étoiles sur Fiverr et Upwork.",
        "Des projets réalisés dans des domaines variés : sites, jeux, applications de bureau, automatisation, intelligence artificielle.",
      ],
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
      keypoints: [
        "Discussion avec l'équipe de Cilcare pour comprendre leurs besoins.",
        "Développement de l'application avec PyQt, mise en place d'un serveur MySQL.",
        "Echanges régulier avec l'équipe pour ajuster les fonctionnalités au fur et à mesure de l'avancement du projet.",
        "A aidé l'équipe à être plus organisée et efficace.",
        "L'application est toujours utilisée aujourd'hui.",
      ],
    },

    {
      company: "AirFrance-KLM",
      link: "https://wwws.airfrance.fr/",
      badges: ["stage"],
      title: "Stagiaire en cybersécurité",
      description: "",
      start: "juin 2023",
      end: "juillet 2023",
      keypoints: [
        "Création d'un outil qui automatise la récupération des données interressantes en rapport avec la sécurité informatique et création d'un Dashboard PowerBI pour les visualiser.",
        "Rédaction de rapports de sécurité.",
        "Analyse des nouvelles normes de sécurité. (Norme UIT-T X.1060)",
        "Participation à des réunions avec les équipes de développement.",
      ],
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
        "Un addon pour le logictiel Anki qui motive les utilisateurs à apprendre tous les jours en gamifiant leur expérience d'apprentissage.",
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
        "Un jeu d'échecs classique où on peut jouer en réseau ou contre une IA basée sur un réseau de neurones ou sur un minmax avec élagage alpha-bêta.",
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
        "Une application de bureau pour aider les 20 membres de l'équipe de Cilcare à organiser leurs tâches, projets et congés. Mise en place d'un serveur MySQL.",
    },
  ],
} as const;
