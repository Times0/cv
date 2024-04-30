import { ParabolLogo } from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Dorian Chevalérias",
  initials: "DC",
  location: "Strasbourg, France",
  locationLink: "https://www.google.com/maps/place/Strasbourg/",
  about:
    "Passionné d'informatique, je suis un freelance de 20 ans actuellement en deuxième année du cycle ingénieur à Telecom Strasbourg, me spécialisant dans la science des données et l'apprentissage automatique. Mon parcours académique solide et mes expériences professionnelles me permettent d'apporter une perspective unique et des compétences techniques pointues à chaque projet.",
  summary:
    "Fort de mes expériences en tant que freelance et étudiant en informatique, j'ai géré avec succès de nombreux projets complexes pour des clients de plusieurs pays, ainsi que dans le cadre de mes études et de mes initiatives personnelles. Mon engagement envers l'excellence et mon souci du détail me permettent de livrer constamment des résultats de haute qualité. Passionné par l'innovation et l'apprentissage continu, je recherche activement de nouveaux défis pour perfectionner mes compétences et élargir mes connaissances. Actuellement, je suis à la recherche d'un stage stimulant de 3 à 4 mois dans les domaines de la science des données, de l'apprentissage automatique, de l'ingénierie des données ou de l'ingénierie logicielle, à partir de juin 2024. Je suis convaincu que mon expertise technique, ma créativité et ma détermination seront des atouts précieux pour votre entreprise.",
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
        "Addon innovant pour le logiciel Anki qui booste la motivation des utilisateurs en gamifiant leur expérience d'apprentissage quotidienne, favorisant ainsi une progression constante et durable.",
    },
    {
      title: "PygameUIKit",
      techStack: ["Python", "Pygame"],
      description:
        "Kit d'interface utilisateur puissant et intuitif pour Pygame, permettant aux développeurs de créer rapidement des interfaces graphiques attrayantes et fonctionnelles, optimisant ainsi le processus de développement.",
      link: {
        href: "https://github.com/Times0/PygameUIKit",
      },
    },
    {
      title: "MultiChess",
      techStack: ["C++", "Python", "Pygame", "Sockets"],
      description:
        "Jeu d'échecs offrant la possibilité de jouer en réseau ou contre des IA qui utilisent l'algorithme minmax alpha-beta OU un réseau de neurones artificiels. Pas très original",
      link: {
        label: "github.com",
        href: "https://github.com/Times0/MultiChess",
      },
    },
    {
      title: "Futuristic City Simulation",
      techStack: ["Python", "SeaBorn", "Pygame", "Data"],
      description:
        "Simulation d'une ville futuriste complexe intégrant des voitures autonomes, des drones et des robots. Génération quotidienne de données et optimisation de la forme de la ville grâce à des algorithmes d'apprentissage automatique et d'analyse prédictive.",
    },
    {
      title: "Cilpink",
      techStack: ["PyQt", "MySQL", "GCP"],
      description:
        "Application de bureau sur mesure développée pour optimiser la gestion des tâches, des projets et des congés des 20 membres de l'équipe Cilcare. Déploiement réussi d'un serveur MySQL sur Google Cloud Platform pour une solution complète et évolutive.",
    },
  ],
} as const;
