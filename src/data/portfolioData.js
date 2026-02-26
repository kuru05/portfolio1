// ============================================================
// portfolioData.js — Fichier de configuration centralisé
// ============================================================
// 🎯 MODIFIE UNIQUEMENT CE FICHIER pour personnaliser tout le site.
//
// GUIDE RAPIDE :
//   1. Change tes infos dans "meta"
//   2. Change les couleurs dans "theme"
//   3. Active/désactive des sections dans "sections"
//   4. Ajoute tes projets dans "projects"
//   5. C'est tout ! Le site s'adapte automatiquement.
// ============================================================

export const portfolioData = {

    // ╔══════════════════════════════════════════════════════════╗
    // ║  THÈME — Change les couleurs et la police ici           ║
    // ╚══════════════════════════════════════════════════════════╝
    theme: {
        // Couleurs principales (formats HEX)
        primaryColor: "#22d3ee",       // Cyan — boutons, accents, liens hover
        accentColor: "#8b5cf6",        // Violet — dégradés, tags, décorations
        backgroundColor: "#020617",    // Fond global (slate-950)
        surfaceColor: "#0f172a",       // Fond des cartes/navbar (slate-900)
        textColor: "#f1f5f9",          // Texte principal (slate-100)
        textMuted: "#94a3b8",          // Texte secondaire (slate-400)
        borderColor: "#334155",        // Bordures (slate-700)

        // Police Google Fonts (le nom exact tel qu'il apparaît sur fonts.google.com)
        fontFamily: "Inter",

        // Bordure arrondie des cartes ("xl" | "2xl" | "3xl" | "full")
        cardRadius: "2xl",
    },

    // ╔══════════════════════════════════════════════════════════╗
    // ║  SECTIONS — Active/désactive et réordonne les sections  ║
    // ╚══════════════════════════════════════════════════════════╝
    // Change "enabled" à false pour masquer une section.
    // Change l'ordre ici pour réordonner les sections.
    sections: [
        { id: "hero", enabled: true },
        { id: "skills", enabled: true },
        { id: "projects", enabled: true },
        { id: "contact", enabled: true },
    ],

    // ╔══════════════════════════════════════════════════════════╗
    // ║  INFORMATIONS GÉNÉRALES                                 ║
    // ╚══════════════════════════════════════════════════════════╝
    meta: {
        name: "Alex Dupont",
        title: "Développeur Full-Stack",
        tagline: "Je conçois des expériences web modernes, performantes et accessibles.",
        resumeUrl: "/cv-alex-dupont.pdf",       // Place ton CV dans /public
        profileImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
        // Suffixe du logo dans la navbar (ex: "Alex.dev")
        logoDomain: ".dev",
    },

    // ╔══════════════════════════════════════════════════════════╗
    // ║  NAVIGATION                                             ║
    // ╚══════════════════════════════════════════════════════════╝
    navLinks: [
        { label: "Accueil", href: "#hero" },
        { label: "Compétences", href: "#skills" },
        { label: "Projets", href: "#projects" },
        { label: "Contact", href: "#contact" },
    ],

    // Texte du bouton CV dans la navbar
    navCvLabel: "CV",
    navCvLabelMobile: "Télécharger CV",

    // ╔══════════════════════════════════════════════════════════╗
    // ║  RÉSEAUX SOCIAUX                                        ║
    // ╚══════════════════════════════════════════════════════════╝
    // Icônes disponibles : "Github", "Linkedin", "Twitter", "Instagram",
    //   "Youtube", "Dribbble", "Mail", "Globe"
    socials: [
        { name: "GitHub", url: "https://github.com/alexdupont", icon: "Github" },
        { name: "LinkedIn", url: "https://linkedin.com/in/alexdupont", icon: "Linkedin" },
        { name: "Twitter", url: "https://twitter.com/alexdupont", icon: "Twitter" },
    ],

    // ╔══════════════════════════════════════════════════════════╗
    // ║  SECTION HERO                                           ║
    // ╚══════════════════════════════════════════════════════════╝
    hero: {
        greeting: "Bonjour, je suis",
        description:
            "Passionné par le développement web depuis plus de 5 ans, je crée des applications qui allient design soigné et code robuste. Toujours à la recherche de nouveaux défis techniques.",
        cta: {
            label: "Voir mes projets",
            href: "#projects",
        },
    },

    // ╔══════════════════════════════════════════════════════════╗
    // ║  SECTION COMPÉTENCES                                    ║
    // ╚══════════════════════════════════════════════════════════╝
    skillsSection: {
        title: "Compétences",
        subtitle: "Les technologies et outils que j'utilise au quotidien pour donner vie à vos projets.",
    },

    skills: [
        {
            category: "Frontend",
            icon: "Monitor",   // Icône Lucide pour la catégorie (optionnel)
            items: [
                { name: "React.js", level: 90 },
                { name: "TypeScript", level: 85 },
                { name: "Tailwind CSS", level: 95 },
                { name: "Next.js", level: 80 },
                { name: "Vue.js", level: 70 },
            ],
        },
        {
            category: "Backend",
            icon: "Server",
            items: [
                { name: "Node.js", level: 85 },
                { name: "Express", level: 80 },
                { name: "Python", level: 75 },
                { name: "PostgreSQL", level: 80 },
                { name: "MongoDB", level: 70 },
            ],
        },
        {
            category: "Outils & DevOps",
            icon: "Wrench",
            items: [
                { name: "Git", level: 90 },
                { name: "Docker", level: 75 },
                { name: "CI/CD", level: 70 },
                { name: "Figma", level: 80 },
                { name: "Linux", level: 85 },
            ],
        },
    ],

    // ╔══════════════════════════════════════════════════════════╗
    // ║  SECTION PROJETS                                        ║
    // ╚══════════════════════════════════════════════════════════╝
    projectsSection: {
        title: "Projets",
        subtitle: "Une sélection de projets récents qui reflètent mes compétences et ma passion pour le développement.",
    },

    projects: [
        {
            title: "E-Commerce Dashboard",
            description: "Tableau de bord interactif pour une plateforme e-commerce avec graphiques en temps réel, gestion des commandes et analytics avancées.",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
            tags: ["React", "TypeScript", "Chart.js", "Tailwind"],
            githubUrl: "https://github.com/alexdupont/ecommerce-dashboard",
            liveUrl: "https://ecommerce-dashboard.vercel.app",
        },
        {
            title: "Task Manager Pro",
            description: "Application de gestion de tâches avec drag-and-drop, filtres dynamiques et mode collaboratif en temps réel via WebSocket.",
            image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
            tags: ["Next.js", "Prisma", "PostgreSQL", "Socket.io"],
            githubUrl: "https://github.com/alexdupont/task-manager",
            liveUrl: "https://task-manager-pro.vercel.app",
        },
        {
            title: "Weather App",
            description: "Application météo élégante avec géolocalisation, prévisions sur 7 jours et animations dynamiques selon les conditions.",
            image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=600&h=400&fit=crop",
            tags: ["React", "OpenWeather API", "Framer Motion"],
            githubUrl: "https://github.com/alexdupont/weather-app",
            liveUrl: "https://weather-app-alex.vercel.app",
        },
        {
            title: "Blog Platform",
            description: "Plateforme de blog avec éditeur Markdown, système de commentaires, authentification et optimisation SEO automatique.",
            image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600&h=400&fit=crop",
            tags: ["Next.js", "MDX", "Supabase", "Tailwind"],
            githubUrl: "https://github.com/alexdupont/blog-platform",
            liveUrl: "https://blog-alex.vercel.app",
        },
        {
            title: "Fitness Tracker",
            description: "Application de suivi d'entraînement avec tableaux de progression, plans personnalisés et intégration des données de santé.",
            image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=600&h=400&fit=crop",
            tags: ["React Native", "Firebase", "Chart.js"],
            githubUrl: "https://github.com/alexdupont/fitness-tracker",
            liveUrl: "https://fitness-tracker-alex.vercel.app",
        },
        {
            title: "Portfolio Generator",
            description: "Outil SaaS permettant de générer un portfolio personnalisé en quelques clics, avec thèmes et export statique.",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
            tags: ["Vue.js", "Node.js", "MongoDB", "Stripe"],
            githubUrl: "https://github.com/alexdupont/portfolio-generator",
            liveUrl: "https://portfolio-gen.vercel.app",
        },
    ],

    // ╔══════════════════════════════════════════════════════════╗
    // ║  SECTION CONTACT                                        ║
    // ╚══════════════════════════════════════════════════════════╝
    contact: {
        heading: "Travaillons ensemble",
        subheading: "Vous avez un projet en tête ou une opportunité à proposer ? N'hésitez pas à me contacter, je vous répondrai dans les plus brefs délais.",
        email: "alex.dupont@email.com",
        // Labels du formulaire
        namePlaceholder: "Votre nom",
        emailPlaceholder: "Votre email",
        messagePlaceholder: "Votre message...",
        submitLabel: "Envoyer le message",
        successMessage: "✅ Message envoyé avec succès !",
        errorMessage: "❌ Une erreur est survenue. Réessayez.",
    },

    // ╔══════════════════════════════════════════════════════════╗
    // ║  FOOTER                                                 ║
    // ╚══════════════════════════════════════════════════════════╝
    footer: {
        copyright: "Alex Dupont",
        tagline: "Conçu avec ❤️ et beaucoup de ☕",
    },
}
