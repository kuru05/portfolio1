
export const portfolioData = {


    theme: {
        primaryColor: "#22d3ee",
        accentColor: "#8b5cf6",
        backgroundColor: "#020617",
        surfaceColor: "#0f172a",
        textColor: "#f1f5f9",
        textMuted: "#94a3b8",
        borderColor: "#334155",
        fontFamily: "Inter",
        cardRadius: "2xl",
    },

    sections: [
        { id: "hero", enabled: true },
        { id: "skills", enabled: true },
        { id: "projects", enabled: true },
        { id: "contact", enabled: true },
    ],

    meta: {
        name: "Merlin COUDOL",
        title: "Coordinateur de Projets informatiques",
        tagline: "Je conçois des expériences web modernes, performantes et accessibles.",
        resumeUrl: "/cv-alex-dupont.pdf",       // Place ton CV dans /public
        profileImage: "/Photo.webp",
        // Suffixe du logo dans la navbar (ex: "Alex.dev")
        logoDomain: ".dev",
    },

    navLinks: [
        { label: "Accueil", href: "#hero" },
        { label: "Compétences", href: "#skills" },
        { label: "Projets", href: "#projects" },
        { label: "Contact", href: "#contact" },
    ],

    navCvLabel: "CV",
    navCvLabelMobile: "Télécharger CV",

    socials: [
        { name: "GitHub", url: "https://github.com/kuru05", icon: "Github" },
        { name: "LinkedIn", url: "https://www.linkedin.com/in/merlin-coudol-860705195", icon: "Linkedin" },
    ],

    hero: {
        greeting: "Bonjour, je suis",
        description:
            "Passionné par le développement web depuis plus de 5 ans, je crée des applications qui allient design soigné et code robuste. Toujours à la recherche de nouveaux défis techniques.",
        cta: {
            label: "Voir mes projets",
            href: "#projects",
        },
    },

    skillsSection: {
        title: "Compétences",
        subtitle: "Les technologies et outils que j'utilise au quotidien pour donner vie à vos projets.",
    },

    skills: [
        {
            category: "Frontend",
            icon: "Monitor",
            items: [
                { name: "React.js", level: 90 },
                { name: "TypeScript", level: 80 },
                { name: "Tailwind CSS", level: 70 },
                { name: "Next.js", level: 80 },
                { name: "Vue.js", level: 70 },
            ],
        },
        {
            category: "Backend",
            icon: "Server",
            items: [
                { name: "Node.js", level: 90 },
                { name: "Express", level: 80 },
                { name: "Python", level: 75 },
                { name: "MySQL", level: 90 },
                { name: "MongoDB", level: 80 },
            ],
        },
        {
            category: "Outils & DevOps",
            icon: "Wrench",
            items: [
                { name: "Git", level: 90 },
                { name: "Docker", level: 70 },
                { name: "CI/CD", level: 70 },
                { name: "Figma", level: 80 },
                { name: "Linux", level: 95 },
            ],
        },
    ],

    projectsSection: {
        title: "Projets",
        subtitle: "Une sélection de projets récents qui reflètent mes compétences et ma passion pour le développement.",
    },

    projects: [
        {
            title: "E-Commerce WebSite",
            description: "Site e-commerce avec gestion des commandes, dans le cadre de ma formation de BTS.",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
            tags: ["PHP", "MySQL", "CSS", "Bootstrap"],
            githubUrl: "https://github.com/kuru05/e6-leger",
            liveUrl: "https://merlin-e6.formationsio.fr/"
        },
        {
            title: "Ancien Portfolio",
            description: "Quelques anciens projets réalisés lors de ma formation de BTS.",
            image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
            tags: ["HTML", "CSS", "JavaScript"],
            liveUrl: "https://merlin.formationsio.fr/",
        },
        {
            title: "Beer Clicker",
            description: "Application web type 'Cookie Clicker' sur le thème de la bière.",
            image: "public/beer-clicker.png",
            tags: ["ReactJS", "LocalStorage", "CSS"],
            githubUrl: "https://github.com/kuru05/beer-clicker",
            liveUrl: "https://beer-clicker-three.vercel.app",
        },
        {
            title: "Admin Dashboard App for E-Commerce",
            description: "Tableau de bord pour la gestion des commandes, des produits et des utilisateurs, en lien avec le site e-commerce.",
            image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600&h=400&fit=crop",
            tags: ["C#", "", "MySQL", "CSS", "Bootstrap"],
            githubUrl: "https://github.com/kuru05/e6-lourd",
            liveUrl: "https://merlin-e6.formationsio.fr/",
        },
    ],


    contact: {
        heading: "Travaillons ensemble",
        subheading: "Vous avez un projet en tête ou une opportunité à proposer ? N'hésitez pas à me contacter, je vous répondrai dans les plus brefs délais.",
        email: "merlin.cdl@hotmail.com",
        // Labels du formulaire
        namePlaceholder: "Votre nom",
        emailPlaceholder: "Votre email",
        messagePlaceholder: "Votre message...",
        submitLabel: "Envoyer le message",
        successMessage: "✅ Message envoyé avec succès !",
        errorMessage: "❌ Une erreur est survenue. Réessayez.",
    },

    footer: {
        copyright: "Merlin Coudol",
        tagline: "Conçu avec beaucoup de ☕",
    },
}
