import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Twitter, Instagram, Youtube, Dribbble, Mail, Globe } from 'lucide-react'
import { portfolioData } from '../data/portfolioData'

// Mappage dynamique de TOUTES les icônes supportées
const iconMap = { Github, Linkedin, Twitter, Instagram, Youtube, Dribbble, Mail, Globe }

const Hero = () => {
    const { meta, hero, socials } = portfolioData

    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
        >
            {/* Background effects */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Floating orbs */}
                <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-primary/8 rounded-full blur-[100px] animate-float" />
                <div className="absolute bottom-1/4 -right-32 w-[500px] h-[500px] bg-accent/8 rounded-full blur-[100px] animate-float [animation-delay:3s]" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-primary/[0.03] rounded-full blur-[120px]" />

                {/* Dot grid */}
                <div className="absolute inset-0 dot-pattern opacity-40" />
            </div>

            <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">

                    {/* Text content */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        className="flex-1 text-center lg:text-left"
                    >
                        <motion.p
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-primary font-medium mb-4 text-lg tracking-wide"
                        >
                            {hero.greeting}
                        </motion.p>

                        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-[1.1] mb-4">
                            <span className="text-txt">{meta.name}</span>
                        </h1>

                        <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold gradient-text mb-6">
                            {meta.title}
                        </h2>

                        <p className="text-txt-muted text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 mb-10">
                            {hero.description}
                        </p>

                        {/* Social links */}
                        <div className="flex items-center justify-center lg:justify-start gap-3 mb-10">
                            {socials.map((social) => {
                                const Icon = iconMap[social.icon]
                                return (
                                    <a
                                        key={social.name}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-3 rounded-xl glass-card text-txt-muted hover:text-primary hover:scale-110 transition-all duration-300"
                                        aria-label={social.name}
                                    >
                                        {Icon && <Icon size={20} />}
                                    </a>
                                )
                            })}
                        </div>

                        {/* CTA */}
                        <a
                            href={hero.cta.href}
                            className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl gradient-btn text-base"
                        >
                            {hero.cta.label}
                            <ArrowDown size={18} className="animate-bounce" />
                        </a>
                    </motion.div>

                    {/* Profile photo */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
                        className="flex-shrink-0"
                    >
                        <div className="relative group">
                            {/* Glow ring */}
                            <div
                                className="absolute -inset-2 rounded-full blur-xl opacity-40 group-hover:opacity-60 transition-opacity duration-500 animate-glow"
                                style={{
                                    background: `linear-gradient(135deg, var(--color-primary-hex), var(--color-accent-hex))`,
                                }}
                            />
                            <div className="relative w-52 h-52 sm:w-64 sm:h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-2 border-brd/50 ring-1 ring-primary/10">
                                <img
                                    src={meta.profileImage}
                                    alt={meta.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
            >
                <div className="w-6 h-10 rounded-full border-2 border-brd flex justify-center pt-2">
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="w-1.5 h-1.5 rounded-full bg-primary"
                    />
                </div>
            </motion.div>
        </section>
    )
}

export default Hero
