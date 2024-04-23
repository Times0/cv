import { ParabolLogo } from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Dorian Chevalérias",
  initials: "DC",
  location: "Strasbourg, France",
  locationLink: "https://www.google.com/maps/place/Strasbourg/",
  about:
    "Je suis un freelance de 20 ans et étudiant en deuxième année du cycle ingénieur à Telecom Strasboug, j'étudie l'informatique et je me suis spécialisé récemment en sciences des données et en intelligence artificielles.",
  summary:
    "En tant que freelance et étudiant en informatique, j'ai géré de nombreux projets pour des clients, pour mon cursus et pour moi même. Je porte une attention particulière à toujours rendre du travail le meilleur possible. Je suis actuellement à la recherche d'un stage de 3-4 mois dans le domaine de la science des données, l'apprentissage automatique, la vision par ordinateur, l'ingénierie des données ou l'ingénierie logicielle à partir de juin 2024 :).",
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
        "Classes préparatoires aux concours d'entrée aux Grandes Écoles françaises, MP option informatique",
      start: "2021",
      end: "2022",
    },
  ],
  work: [
    {
      company: "Consultant",
      badges: ["Freelance"],
      link: "https://dorian-chevalerias.com/",
      title: "Freelance",
      start: "2021",
      end: "à présent",
      description:
        "Aide apportée à des entreprises et individus pour résoudre leurs problèmes en Python, création de jeux vidéos, développement d'applications de bureau avec PyQT. Réalisation de multiples projets d'automatisation, de webscraping. Projets dans les domaines de l'apprentissage automatique, du deep learning, du reinforcement learning (outils : PyTorch, Pandas, NumPy, Neat, Scikit-learn, TensorFlow).",
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
        "Création d'une application de bureau pour aider les 30 membres de l'équipe à organiser leurs tâches, leurs projets et leurs jours de congé.",
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
        "Création d'un outil pour automatiser la récupération des données interressantes en rapport avec la sécurité informatique de l'entreprise et création d'un Dashboard PowerBI pour les visualiser.",
        "Rédaction de rapports de sécurité.",
        "Analyse d'une nouvelle norme de sécurité (Norme UIT-T X.1060) et rédaction d'un rapport actionnable pour les équipes en charge de la stratégie.",
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
        "Un addon pour le logictiel Anki qui motive les utilisateurs à apprendre tous les jours en gamifiant leur expérience.",
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
      techStack: ["Python", "SeaBorn", "Pygame", "Data"],
      description:
        "Mise en place de la simulation d'une ville futuriste complexe avec des voitures autonomes, des drones, des robots, etc. Génération de données tous les jours dans le but d'inférer la forme optimale de la ville",
    },
    {
      title: "Cilpink",
      techStack: ["PyQt", "MySQL"],
      description:
        "Une application de bureau pour aider les 20 membres de l'équipe de Cilcare à organiser leurs tâches, projets et congés. Développerment de tout le logiciel et mise en place d'un serveur MySQL sur Google Cloud PLatform.",
    },
  ],
} as const;
