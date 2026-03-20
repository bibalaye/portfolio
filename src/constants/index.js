const Info = {
  name: "Abiboulaye Sy",
  email: "sybibalaye@gmail.com",
  stack: ["Ingénieur Full Stack & DevOps", "Diplômé Master MIAGE", "Architecte Cloud", "Data Scientist"],
  bio: "Bienvenue dans mon univers numérique ! Je suis ABIBOULAYE SY, Ingénieur Full Stack & DevOps passionné, diplômé en Master MIAGE à l'UGB. J'allie expertise technique de haut niveau et solides compétences en gestion pour concevoir des solutions innovantes et évolutives.",
  bio2: "Je suis Abiboulaye Sy, Ingénieur Full Stack & DevOps avec un profil hybride alliant développement logiciel avancé, infrastructure cloud et gestion stratégique des organisations. Diplômé de la formation MIAGE, je conçois et déploie des systèmes numériques performants.",
  github: "https://github.com/bibalaye",
  linkedin: "https://linkedin.com/in/abiboulaye-sy",
  location: "Saint-Louis, Sénégal",
  languages: ["Français", "Anglais", "Wolof"]
};

// Images disponibles pour les projets:
// crous1.png - crous7.png (CROUS projects)
// django.png - django8.png (Django projects)
// drone.png, drone1.png, drone2.png (Drone projects)
// portail.png - portail3.png (Portail projects)
// restocampus.png - restocampus8.png (RestoCampus projects)
// yonnutool.png - yonnutool3.png (YonnuTool projects)
// message.png - message5.png (Message projects)
// BodyGuard.png (BodyGuard project)
// pixel.png - pixel5.png (Pixel projects)
// tiktok.png - tiktok3.png (TikTok projects)
// wave-mobile.png, wave-mobile2.png (Wave clone)

const myProjects = [
  {
    id: 1,
    title: "Système de Gestion du CROUS",
    description: "Application complète de gestion pour le CROUS universitaire, optimisant les processus administratifs et améliorant l'expérience des 10,000+ étudiants.",
    subDescription: [
      "Conception d'une architecture MVC robuste avec Django et PostgreSQL",
      "Système d'authentification multi-rôles (étudiants, administrateurs, agents)",
      "Tableau de bord analytique en temps réel avec visualisation des données",
      "Gestion automatisée des attributions de bourses et logements",
      "Interface responsive garantissant l'accessibilité sur tous les appareils"
    ],
    image: "assets/projects/crous.png",
    gallery: [
      "assets/projects/crous1.png",
      "assets/projects/crous2.png",
      "assets/projects/crous3.png",
      "assets/projects/crous4.png"
    ],
    href: "https://github.com/bibalaye",
    tags: [
      { id: 1, name: "Django", path: "assets/logos/django.svg" },
      { id: 2, name: "PostgreSQL", path: "assets/logos/microsoftsqlserver.svg" },
      { id: 3, name: "Python", path: "assets/logos/python.svg" },
      { id: 4, name: "Docker", path: "assets/logos/docker.svg" }
    ],
    impact: "Réduction de 60% du temps de traitement des dossiers étudiants",
    featured: true
  },
  {
    id: 2,
    title: "Plateforme Yonnu Tool",
    description: "E-commerce B2B innovant simplifiant la chaîne d'approvisionnement pour les professionnels du bâtiment avec système de commande sans compte.",
    subDescription: [
      "Architecture hybride Laravel API + Next.js frontend pour performance optimale",
      "Panier dynamique avec calcul automatique des taxes et frais de livraison",
      "Système de commande rapide sans création de compte (conversion +25%)",
      "Intégration sécurisée des paiements mobiles (Wave, Orange Money)",
      "Dashboard admin complet avec analytics et gestion des stocks"
    ],
    image: "assets/projects/yonnutool.png",
    gallery: [
      "assets/projects/yonnutool1.png",
      "assets/projects/yonnutool2.png",
      "assets/projects/yonnutool3.png"
    ],
    href: "https://github.com/bibalaye/ProjetFinal-laravel",
    tags: [
      { id: 1, name: "Laravel", path: "assets/logos/javascript.svg" },
      { id: 2, name: "Next.js", path: "assets/logos/react.svg" },
      { id: 3, name: "MySQL", path: "assets/logos/microsoftsqlserver.svg" },
      { id: 4, name: "Docker", path: "assets/logos/docker.svg" }
    ],
    impact: "Augmentation de 40% du taux de conversion grâce au checkout simplifié",
    featured: true
  },
  {
    id: 3,
    title: "RestoCampus - Gestion Restauration",
    description: "Solution digitale complète pour la gestion des restaurants universitaires avec système de réservation et paiement sans contact.",
    subDescription: [
      "Application web progressive (PWA) pour accès mobile natif",
      "Système de QR code pour paiement et validation des repas",
      "Gestion des menus en temps réel avec calcul nutritionnel",
      "Module de fidélité et notifications push aux étudiants",
      "Tableaux de bord pour les gestionnaires de restauration"
    ],
    image: "assets/projects/restocampus.png",
    gallery: [
      "assets/projects/restocampus1.png",
      "assets/projects/restocampus2.png",
      "assets/projects/restocampus3.png",
      "assets/projects/restocampus4.png"
    ],
    href: "https://github.com/bibalaye",
    tags: [
      { id: 1, name: "React", path: "assets/logos/react.svg" },
      { id: 2, name: "Node.js", path: "assets/logos/nodejs.svg" },
      { id: 3, name: "MongoDB", path: "assets/logos/git.svg" },
      { id: 4, name: "Socket.io", path: "assets/logos/javascript.svg" }
    ],
    impact: "Réduction des files d'attente de 70% aux heures de pointe",
    featured: true
  },
  {
    id: 4,
    title: "Wave Clone - Mobile App",
    description: "Reproduction fidèle de l'application Wave Money avec animations fluides et expérience utilisateur optimisée pour le marché africain.",
    subDescription: [
      "React Native avec Expo pour cross-platform (iOS/Android)",
      "Animations avancées avec Reanimated 2 et Gesture Handler",
      "Navigation intuitive avec React Navigation v6",
      "Composants réutilisables pour transactions et cartes QR",
      "Design System complet respectant les guidelines Wave"
    ],
    image: "assets/projects/wave-mobile.png",
    gallery: [
      "assets/projects/wave-mobile.png",
      "assets/projects/wave-mobile2.png"
    ],
    href: "https://github.com/bibalaye/wave_clone",
    tags: [
      { id: 1, name: "React Native", path: "assets/logos/react.svg" },
      { id: 2, name: "Expo", path: "assets/logos/react.svg" },
      { id: 3, name: "TypeScript", path: "assets/logos/javascript.svg" }
    ],
    impact: "App fonctionnelle avec UX comparable à l'application originale",
    featured: false
  },
  {
    id: 5,
    title: "Gestion de Livres - EDACY",
    description: "Application complète de gestion de bibliothèque développée dans le cadre du programme EDACY, avec fonctionnalités CRUD avancées.",
    subDescription: [
      "Architecture RESTful API avec Node.js et Express",
      "Frontend React avec gestion d'état moderne",
      "Système de recherche filtrée et pagination",
      "Authentification JWT sécurisée",
      "Tests unitaires et documentation API"
    ],
    image: "assets/projects/django.png",
    gallery: [
      "assets/projects/django2.png",
      "assets/projects/django3.png"
    ],
    href: "https://github.com/bibalaye/Mini_projet_gestion_des_livres_EDACY",
    tags: [
      { id: 1, name: "React", path: "assets/logos/react.svg" },
      { id: 2, name: "Node.js", path: "assets/logos/nodejs.svg" },
      { id: 3, name: "MongoDB", path: "assets/logos/git.svg" }
    ],
    impact: "Projet validé avec excellence par le jury EDACY",
    featured: false
  },
  {
    id: 6,
    title: "Portail Étudiant UGB",
    description: "Plateforme centralisée pour les étudiants de l'UGB offrant accès aux notes, emplois du temps et ressources pédagogiques.",
    subDescription: [
      "Intégration avec le système d'information existant de l'université",
      "Tableau de bord personnalisé par filière et niveau",
      "Système de messagerie interne entre étudiants et enseignants",
      "Accès aux ressources pédagogiques et bibliothèque numérique",
      "Notifications en temps réel des annonces importantes"
    ],
    image: "assets/projects/portail.png",
    gallery: [
      "assets/projects/portail1.png",
      "assets/projects/portail2.png",
      "assets/projects/portail3.png"
    ],
    href: "https://github.com/bibalaye",
    tags: [
      { id: 1, name: "PHP", path: "assets/logos/javascript.svg" },
      { id: 2, name: "Laravel", path: "assets/logos/javascript.svg" },
      { id: 3, name: "MySQL", path: "assets/logos/microsoftsqlserver.svg" }
    ],
    impact: "Utilisé par 8,000+ étudiants pour leurs démarches administratives",
    featured: true
  },
  {
    id: 7,
    title: "BodyGuard - Sécurité Numérique",
    description: "Application de cybersécurité pour la protection des données personnelles et la sensibilisation aux menaces numériques.",
    subDescription: [
      "Scanner de vulnérabilités pour les appareils connectés",
      "Générateur de mots de passe sécurisés avec analyse de force",
      "Centre d'alertes en temps réel sur les menaces",
      "Guides interactifs de bonnes pratiques sécurité",
      "Mode simulation d'attaques pour formation"
    ],
    image: "assets/projects/BodyGuard.png",
    gallery: ["assets/projects/BodyGuard.png"],
    href: "https://github.com/bibalaye",
    tags: [
      { id: 1, name: "Python", path: "assets/logos/python.svg" },
      { id: 2, name: "Flask", path: "assets/logos/python.svg" },
      { id: 3, name: "React", path: "assets/logos/react.svg" }
    ],
    impact: "Protection de 500+ utilisateurs contre les menaces digitales",
    featured: false
  },
  {
    id: 8,
    title: "Drone Mapping Interface",
    description: "Interface de contrôle et visualisation pour drones de cartographie, utilisée pour la photogrammétrie et l'agriculture de précision.",
    subDescription: [
      "Visualisation 3D des cartes et orthophotos générées",
      "Planification automatisée des missions de vol",
      "Analyse spectrale des cultures pour agriculture de précision",
      "Export des données vers SIG standards (QGIS, ArcGIS)",
      "Télémétrie en temps réel pendant les vols"
    ],
    image: "assets/projects/drone.png",
    gallery: [
      "assets/projects/drone1.png",
      "assets/projects/drone2.png"
    ],
    href: "https://github.com/bibalaye",
    tags: [
      { id: 1, name: "React", path: "assets/logos/react.svg" },
      { id: 2, name: "Three.js", path: "assets/logos/javascript.svg" },
      { id: 3, name: "Python", path: "assets/logos/python.svg" }
    ],
    impact: "Cartographie de 2,000+ hectares pour projets agricoles",
    featured: false
  }
];

const experiences = [
  {
    date: "Novembre 2025 - Février 2026",
    title: "BeyeTech",
    job: "Développeur Logiciel & DevOps",
    contents: [
      "Développement de solutions logicielles innovantes et gestion de l'infrastructure",
      "Mise en œuvre de pipelines CI/CD et gestion de conteneurs avec Docker",
      "Optimisation des processus de déploiement et de scaling",
      "Maintenance évolutive des applications en production"
    ],
    certificate: "assets/projects/certificate-00005-Abiboulaye-Sy.pdf"
  },
  {
    date: "Juillet 2025 - Octobre 2025",
    title: "Edacy",
    job: "Formation Ingénieur Full Stack",
    contents: [
      "Formation intensive de 3 mois axée sur les technologies Full Stack modernes",
      "Participation à des hackathons pour développer des applications pour des entreprises réelles",
      "Conception et réalisation de projets concrets en équipe agile",
      "Maîtrise de l'écosystème JavaScript/TypeScript de bout en bout"
    ],
    certificate: "assets/projects/Certificat_ABIBOULAYE sy (1).pdf"
  },
  {
    date: "2024 - 2025",
    title: "Challenge Hub",
    job: "Stagiaire Développeur Full Stack",
    contents: [
      "Développement de la plateforme Yonnu Tool (e-commerce) avec Laravel et Next.js",
      "Création d'APIs RESTful sécurisées pour la gestion des produits et commandes",
      "Intégration de systèmes de paiement et déploiement sur Vercel et Laravel Cloud",
      "Collaboration avec l'équipe dans un environnement Agile/Scrum"
    ]
  },
  {
    date: "2023 - Présent",
    title: "Freelance",
    job: "Data Scientist & Développeur",
    contents: [
      "Analyse de données complexes et création de modèles prédictifs",
      "Développement de solutions de machine learning et d'intelligence artificielle",
      "Visualisation de données et création de tableaux de bord analytiques",
      "Traitement de Big Data et mise en pratique des connaissances en science des données"
    ]
  },
  {
    date: "2020 - Présent",
    title: "Indépendant",
    job: "Développeur Full Stack Freelance",
    contents: [
      "Création de sites web et applications e-commerce personnalisés",
      "Développement de systèmes de gestion avec React, Node.js et Laravel",
      "Gestion de projets de bout en bout avec communication client directe",
      "Utilisation de MySQL, Git et des technologies modernes du web"
    ]
  },
  {
    date: "Mars 2022 - Avril 2022",
    title: "CCOS (Centre de Calcul Ousmane Seck)",
    job: "Technicien Support IT",
    contents: [
      "Maintenance des équipements informatiques et support utilisateur à l'UGB",
      "Contribution à l'amélioration de l'infrastructure réseau",
      "Mise en place de nouvelles solutions technologiques",
      "Développement de compétences en gestion d'infrastructure IT"
    ]
  }
];

const reviews = [
  {
    name: "Directeur Challenge Hub",
    username: "@challengehub_sn",
    body: "Abiboulaye a livré une plateforme e-commerce de qualité professionnelle. Sa maîtrise technique et sa capacité à comprendre nos besoins métiers ont été impressionnantes. Un vrai atout pour toute équipe.",
    img: "assets/projects/yonnutool.png"
  },
  {
    name: "Responsable CROUS Saint-Louis",
    username: "@crous_ugb",
    body: "Le système de gestion développé par Abiboulaye a révolutionné notre administration. Les processus qui prenaient des semaines se font maintenant en quelques clics. Excellence technique et grande réactivité.",
    img: "assets/projects/crous.png"
  },
  {
    name: "Startup AgriTech Dakar",
    username: "@agritech_sn",
    body: "Son interface de drone mapping est intuitive et puissante. Abiboulaye comprend parfaitement comment transformer des données complexes en outils utilisables sur le terrain. Hautement recommandé.",
    img: "assets/projects/drone.png"
  },
  {
    name: "Professeur MIAGE UGB",
    username: "@miage_ugb",
    body: "Un étudiant d'exception qui a su allier théorie et pratique. Ses projets démontrent une compréhension profonde des enjeux métiers et une capacité d'innovation remarquable.",
    img: "assets/projects/portail.png"
  },
  {
    name: "Client E-commerce",
    username: "@boutique_sn",
    body: "Professionalisme, créativité et respect des délais. Notre boutique en ligne développée par Abiboulaye a dépassé nos attentes. Les ventes ont augmenté significativement dès le premier mois.",
    img: "assets/projects/yonnutool2.png"
  }
];

const mySocials = [
  {
    name: "GitHub",
    href: "https://github.com/bibalaye",
    icon: "assets/socials/github.svg"
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/abiboulaye-sy",
    icon: "assets/socials/linkedIn.svg"
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/221778649872",
    icon: "assets/socials/whatsApp.svg"
  }
];

const SkillInfo = [
  {
    title: "Frontend",
    skills: ["React_JS", "Next_JS", "Vue.js", "Angular", "TypeScript", "JavaScript", "HTML", "CSS", "Tailwind_CSS", "Bootstrap"]
  },
  {
    title: "Backend",
    skills: ["Node_JS", "Express_JS", "Laravel", "Django", "Spring_Boot", "FastAPI", "RESTful_APIs"]
  },
  {
    title: "Bases_de_donnees",
    skills: ["MySQL", "PostgreSQL", "MongoDB", "Oracle", "Firebase"]
  },
  {
    title: "DevOps_Cloud",
    skills: ["Docker", "Kubernetes", "AWS", "CI/CD", "Git", "Linux", "Nginx"]
  },
  {
    title: "Langages",
    skills: ["JavaScript", "TypeScript", "Python", "Java", "PHP", "C++", "SQL"]
  }
];

export { Info, myProjects, experiences, reviews, mySocials, SkillInfo };
