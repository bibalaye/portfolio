const Info = {
    name: "Abiboulaye Sy",
    email: "contact@abiboulaye.dev",
    stack: ["Étudiant en Master MIAGE", "Développeur Full Stack", "Gestionnaire", "Passionné d'Informatique"],
    bio: "Bienvenue dans mon univers numérique ! 🚀 Je suis ABIBOULAYE SY, étudiant passionné en Master MIAGE à l'UGB, alliant expertise technique et compétences en gestion. Spécialisé dans la création de solutions innovantes et évolutives, je relève avec enthousiasme les défis du développement et de la gestion de projets. Toujours en quête de nouvelles opportunités, je suis prêt à mettre mes compétences au service de projets ambitieux. Explorez mon portfolio pour découvrir mes réalisations et n'hésitez pas à me contacter pour des opportunités d'emploi ou de stage. Ensemble, créons l'exceptionnel et façonnons l'avenir numérique ! 💼🚀",
    github: "https://github.com/bibalaye",
    linkedin: "https://linkedin.com/in/abiboulaye-sy",
    location: "Saint-Louis, Sénégal",
    languages: ["Français", "Anglais", "Wolof"]
}

const ProjectInfo = [
    {
        title: "Portfolio Next.js",
        desc: "Mon portfolio personnel développé avec Next.js, TailwindCSS et Framer Motion. Une vitrine moderne et interactive de mes compétences et réalisations, avec des animations fluides et une expérience utilisateur optimisée. Le site est entièrement responsive et utilise les dernières fonctionnalités de Next.js 13.",
        image: "portfolio.png",
        images: ["portfolio.png", "portfolio2.png", "portfolio3.png"],
        live: true,
        technologies: ["Next.js", "React", "TailwindCSS", "TypeScript", "Framer Motion"],
        link: "https://abiboulaye.dev",
        github: "https://github.com/bibalaye/portfolio"
    },
    {
        title: "Gestionnaire de Projets",
        desc: "Une application complète de gestion de projets permettant aux équipes de suivre les tâches, les délais et les ressources. Développée avec JavaScript, cette solution offre une interface intuitive pour la planification de projets, l'attribution des tâches et le suivi de l'avancement en temps réel.",
        image: "gestionnaire.png",
        images: ["gestionnaire.png", "gestionnaire1.png", "gestionnaire2.png"],
        live: false,
        technologies: ["JavaScript", "React", "Node.js", "MongoDB", "Express"],
        github: "https://github.com/bibalaye/gestionnaire_projets"
    },
    {
        title: "Système de Gestion des Risques",
        desc: "Une plateforme d'analyse et de gestion des risques développée en Python. Ce système permet d'identifier, d'évaluer et de surveiller les risques potentiels dans divers contextes d'entreprise, offrant des tableaux de bord analytiques et des rapports détaillés pour la prise de décision.",
        image: "risk.png",
        images: ["risk.png", "risk1.png", "risk2.png"],
        live: false,
        technologies: ["Python", "Django", "PostgreSQL", "Pandas", "Data Visualization"],
        github: "https://github.com/bibalaye/risk_management_project"
    },
    {
        title: "Core Banking Service",
        desc: "Un système de transaction bancaire simplifié développé en Java qui permet d'effectuer des opérations de base comme les virements, les dépôts et les retraits. Cette solution légère offre une interface intuitive tout en maintenant un niveau de sécurité adéquat pour les transactions financières quotidiennes.",
        image: "banking.png",
        images: ["banking.png", "banking1.png", "banking2.png"],
        live: false,
        technologies: ["Java", "Spring Boot", "Hibernate", "MySQL", "RESTful API"],
        github: "https://github.com/bibalaye/Core-Banking-Service"
    },
    {
        title: "Générateur de CV",
        desc: "Une application web permettant aux utilisateurs de créer et personnaliser leurs CV professionnels. Développée avec TypeScript et React, elle offre différents modèles, options de mise en page et possibilité d'exporter en PDF.",
        image: "cv.png",
        images: ["cv.png", "cv1.png", "cv2.png"],
        live: false,
        technologies: ["TypeScript", "React", "PDF Generation", "Styled Components"],
        github: "https://github.com/bibalaye/generateur_CV"
    },
    {
        title: "site web BodyGuard",
        desc: "Un site web statique pour une entreprise de nettoyage et gardiennage, présentant ses services professionnels. Cette vitrine élégante met en valeur les différentes prestations offertes, les équipes qualifiées et permet aux clients potentiels de découvrir l'expertise de l'entreprise dans les domaines du nettoyage et de la sécurité.",
        image: "bodyguard.png",
        images: ["bodyguard.png", "bodyguard1.png", "bodyguard2.png"],
        live: false,
        technologies: ["TypeScript", "React", "Node.js", "PostgreSQL", "Express"],
        github: "https://github.com/bibalaye/bodyguard"
    },
    
    {
        title: "Application de Quiz",
        desc: "Une application interactive de quiz développée en HTML, CSS et JavaScript. Elle permet aux utilisateurs de créer, partager et participer à des quiz sur divers sujets, avec suivi des scores et classements.",
        image: "quiz.png",
        images: ["quiz.png", "quiz1.png", "quiz2.png"],
        live: false,
        technologies: ["HTML", "CSS", "JavaScript", "LocalStorage", "Responsive Design"],
        github: "https://github.com/bibalaye/quiz"
    },
    
    {
        title: "Plateforme Yonnu Tool",
        desc: "Version améliorée de la plateforme de gestion d'outils, développée avec TypeScript et React. Cette application offre une interface moderne et des fonctionnalités avancées pour la gestion des ressources et des équipements.",
        image: "yonnutool.png",
        images: ["yonnutool.png", "yonnutool1.png", "yonnutool2.png"],
        live: false,
        technologies: ["TypeScript", "React", "Node.js", "MongoDB", "Express"],
        github: "https://github.com/bibalaye/Plateforme_Yonnutool"
    },
    
    {
        title: "Boutique E-commerce Laravel",
        desc: "Une plateforme de e-commerce moderne et entièrement responsive construite avec Laravel, Bootstrap, et jQuery. Elle offre une expérience de shopping fluide sur tous les appareils avec des fonctionnalités telles que l'authentification sécurisée des utilisateurs, la gestion des paniers et la validation des formulaires pour les informations de paiement et d'adresse. Les utilisateurs peuvent ajouter des articles à leur liste de souhaits, les rechercher et les acheter facilement.",
        image: "laravel.png",
        images: ["laravel.png", "laravel2.png", "laravel3.png"],
        live: false,
        technologies: ["Laravel", "Bootstrap", "jQuery", "MySQL", "PHP"],
        github: "https://github.com/bibalaye/site_ecommerce_laravel"
    },
    {
        title: "E-commerce Django",
        desc: "Un projet e-commerce complet développé avec Django, offrant une expérience d'achat en ligne complète. Les fonctionnalités incluent la sélection de produits, la gestion des paniers, le traitement des commandes et un système d'administration robuste. Le projet met en valeur mes compétences en développement backend avec Django et en création d'interfaces utilisateur dynamiques.",
        image: "django.png",
        images: ["django.png", "django1.png", "django2.png", "django3.png", "django4.png", "django5.png", "django6.png", "django7.png", "django8.png"],
        live: false,
        technologies: ["Django", "Python", "HTML", "CSS", "JavaScript", "PostgreSQL"],
        github: "https://github.com/bibalaye/ecommerce_django"
    },
    {
        title: "Clone Facebook Login",
        desc: "Une réplique fidèle de la page de connexion de Facebook utilisant HTML, CSS, et JavaScript. Ce projet met en avant mes compétences en développement front-end en créant une interface utilisateur identique à l'originale, avec une attention particulière aux détails et à la réactivité. Le projet inclut également la validation des formulaires côté client.",
        image: "facebook.png",
        images: ["facebook.png"],
        live: true,
        technologies: ["HTML", "CSS", "JavaScript"],
        link: "https://bibalaye.github.io/facebook_odl_connexion_page_clone",
        github: "https://github.com/bibalaye/facebook_odl_connexion_page_clone"
    },
    {
        title: "Tirage Ligue des Champions",
        desc: "Une application web simulant le tirage au sort de la Ligue des Champions de l'UEFA. Développée avec JavaScript, elle respecte toutes les règles officielles du tirage et offre une visualisation interactive des résultats.",
        image: "ldc.png",
        images: ["ldc.png", "ldc1.png", "ldc2.png"],
        live: true,
        technologies: ["JavaScript", "HTML", "CSS", "Responsive Design"],
        link: "https://bibalaye.github.io/tirage_LDC",
        github: "https://github.com/bibalaye/tirage_LDC"
    },
    {
        title: "Réseau de Neurones - Prédiction de Solvabilité",
        desc: "Un projet de machine learning utilisant Python pour prédire la solvabilité des clients potentiels d'une banque. Le modèle utilise un réseau de neurones pour analyser les données historiques et déterminer si un client est éligible à un prêt. Le projet inclut le prétraitement des données, l'entraînement du modèle et l'évaluation des performances.",
        image: "code.png",
        images: ["code.png", "ml1.png", "ml2.png"],
        live: false,
        technologies: ["Python", "TensorFlow", "Scikit-learn", "Pandas", "NumPy"],
        github: "https://github.com/bibalaye/credit-scoring-ml"
    },
    {
        title: "Clone Portail UGB",
        desc: "Une reproduction du portail officiel de l'Université Gaston Berger, construite avec Bootstrap, HTML, et CSS. Ce projet démontre ma capacité à créer des interfaces web professionnelles et responsives, en respectant l'identité visuelle existante tout en optimisant l'expérience utilisateur.",
        image: "portail.png",
        images: ["portail.png", "portail1.png", "portail2.png", "portail3.png"],
        live: true,
        technologies: ["Bootstrap", "HTML", "CSS", "JavaScript"],
        link: "https://bibalaye.github.io/portail_ugb_clone",
        github: "https://github.com/bibalaye/portail_ugb_clone"
    },
    {
        title: "Gestion Transport Drones",
        desc: "Application de gestion logistique pour le transport par drones développée avec APEX-Oracle. Le système permet de gérer les itinéraires, suivre les livraisons en temps réel et optimiser les trajets. L'interface administrateur offre des tableaux de bord détaillés et des rapports d'analyse.",
        image: "drone.png",
        images: ["drone.png", "drone1.png", "drone2.png", "drone3.png"],
        live: false,
        technologies: ["APEX-Oracle", "PL/SQL", "JavaScript", "HTML", "CSS"],
        github: "https://github.com/bibalaye/drone-transport"
    },
    {
        title: "Vente de Pixels",
        desc: "Un projet innovant inspiré du 'Million Dollar Homepage', permettant aux utilisateurs d'acheter et personnaliser des pixels sur une page web. Les acheteurs peuvent choisir des couleurs ou télécharger des images pour leurs pixels. Le projet utilise React pour le front-end et Node.js pour le back-end, avec une base de données MySQL pour la persistance des données.",
        image: "pixel.png",
        images: ["pixel.png", "pixel1.png", "pixel2.png", "pixel3.png", "pixel4.png", "pixel5.png"],
        live: false,
        technologies: ["React", "Node.js", "MySQL", "Canvas API", "Express.js"],
        github: "https://github.com/bibalaye/vente_pixel"
    },
    {
        title: "Clone WhatsApp",
        desc: "Une application de messagerie instantanée inspirée de WhatsApp, développée en PHP. Les utilisateurs peuvent créer des comptes, ajouter des contacts et échanger des messages en temps réel. Le projet inclut également des fonctionnalités de statut en ligne, de confirmation de lecture et de partage de médias.",
        image: "message.png",
        images: ["message.png", "message1.png", "message2.png", "message3.png", "message4.png", "message5.png"],
        live: false,
        technologies: ["PHP", "MySQL", "WebSocket", "HTML", "CSS", "JavaScript"],
        github: "https://github.com/bibalaye/messagerie_php"
    },
    {
        title: "API TikTok",
        desc: "Un projet d'intégration de l'API TikTok permettant de récupérer et afficher les informations des profils utilisateurs. L'application web permet aux utilisateurs de rechercher des comptes TikTok et d'afficher leurs statistiques, vidéos populaires et autres informations publiques.",
        image: "tiktok.png",
        images: ["tiktok.png", "tiktok1.png", "tiktok2.png", "tiktok3.png"],
        live: false,
        technologies: ["PHP", "API TikTok", "HTML", "CSS", "JavaScript"],
        github: "https://github.com/bibalaye/tiktok_api_test"
    },
    {
        title: "Gestion CROUS",
        desc: "Une application web complète pour la gestion des chambres étudiantes du CROUS. Le système permet l'attribution des chambres, la gestion des paiements, le suivi des maintenances et la communication avec les résidents. Développée avec Laravel et Tailwind CSS, l'application offre une interface moderne et intuitive.",
        image: "crous.png",
        images: ["crous.png", "crous1.png", "crous2.png", "crous3.png", "crous4.png", "crous5.png", "crous6.png", "crous7.png"],
        live: false,
        technologies: ["Laravel", "MySQL", "Tailwind CSS", "PHP", "JavaScript", "Alpine.js"],
        github: "https://github.com/bibalaye/Crous_gestion_chambre"
    }
]

const SkillInfo = [
    {
        title: "Frontend",
        skills: ["React", "Next.js", "Vue.js", "Angular", "TypeScript", "JavaScript", "HTML", "CSS", "Tailwind CSS", "Bootstrap", "SASS", "Material UI"]
    },
    {
        title: "Backend",
        skills: ["Node.js", "Express.js", "Laravel", "Django", "Spring Boot", "FastAPI", "RESTful APIs", "GraphQL"]
    },
    {
        title: "Bases de données",
        skills: ["MySQL", "PostgreSQL", "MongoDB", "Oracle", "SQL Server", "Firebase", "Redis"]
    },
    {
        title: "DevOps & Cloud",
        skills: ["Docker", "AWS", "Azure", "Google Cloud", "Netlify", "Vercel", "CI/CD", "Git Actions"]
    },
    {
        title: "Langages de programmation",
        skills: ["JavaScript", "TypeScript", "Python", "Java", "PHP", "C++", "C", "Pascal"]
    },
    {
        title: "Outils & Environnements",
        skills: ["Git", "GitHub", "VS Code", "IntelliJ IDEA", "PyCharm", "Eclipse", "Android Studio", "Postman", "MongoDB Compass", "Docker Desktop", "Laragon", "XAMPP"]
    },
    {
        title: "Tests & Qualité",
        skills: ["Jest", "Cypress", "JUnit", "PHPUnit", "ESLint", "Prettier", "SonarQube"]
    },
    {
        title: "Méthodologies & Gestion",
        skills: ["Agile", "Scrum", "Kanban", "Trello", "Notion", "Jira", "UML", "Merise"]
    }
]

const ExperienceInfo = [
    {
        role: "Assistant de gestion",
        company: "BodyGuard",
        date: "2018 - 2021",
        desc: "En tant qu'assistant de gestion chez BodyGuard, une entreprise de gardiennage et nettoyage, j'ai développé des compétences essentielles en gestion d'entreprise. Mes responsabilités incluaient la gestion des factures, la planification des activités, et diverses tâches administratives. Cette expérience m'a permis de comprendre les aspects pratiques de la gestion d'entreprise tout en contribuant au développement d'une entreprise familiale.",
        skills: ["Gestion financière", "Planification", "Administration", "Soutien opérationnel", "Communication client"]
    },
    {
        role: "Développeur Full Stack Freelance",
        company: "Indépendant",
        date: "2020 - Présent",
        desc: "En tant que développeur freelance, je crée des solutions web personnalisées pour divers clients. Je développe des sites web, des applications e-commerce et des systèmes de gestion, en utilisant les technologies modernes du web. Cette expérience m'a permis de renforcer mes compétences techniques tout en développant ma capacité à gérer des projets de bout en bout.",
        skills: ["React", "Node.js", "Laravel", "MySQL", "Git", "Gestion de projet", "Communication client"]
    },
    {
        role: "Technicien Support IT",
        company: "CCOS (Centre de Calcul Ousmane Seck)",
        date: "Mars 2022 - Avril 2022",
        desc: "Durant mon stage au Centre de Calcul Ousmane Seck de l'UGB, j'ai participé à la maintenance des équipements informatiques et au support utilisateur. J'ai également contribué à l'amélioration de l'infrastructure réseau et à la mise en place de nouvelles solutions technologiques. Cette expérience m'a permis de développer mes compétences en support technique et en gestion d'infrastructure IT.",
        skills: ["Support technique", "Maintenance informatique", "Gestion de réseau", "Résolution de problèmes", "Communication"]
    }
]

export { Info, ProjectInfo, SkillInfo, ExperienceInfo };