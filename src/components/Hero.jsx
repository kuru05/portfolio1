import { motion } from 'framer-motion'
import { ArrowRight, Github, Linkedin, Twitter, Instagram, Youtube, Dribbble, Mail, Globe } from 'lucide-react'
import { portfolioData } from '../data/portfolioData'

const iconMap = { Github, Linkedin, Twitter, Instagram, Youtube, Dribbble, Mail, Globe }

const Hero = () => {
    const { meta, hero, socials } = portfolioData

    return (
        <section
            id="hero"
            className="min-h-screen flex items-center"
        >
            <div className="max-w-5xl mx-auto px-6 py-32">
                <div className="flex flex-col-reverse lg:flex-row items-center gap-16 lg:gap-20">

                    {/* Text */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="flex-1 text-center lg:text-left"
                    >
                        <p className="text-primary text-sm font-medium tracking-widest uppercase mb-6">
                            {hero.greeting}
                        </p>

                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-txt leading-tight mb-4">
                            {meta.name}
                        </h1>

                        <h2 className="text-xl sm:text-2xl text-txt-muted font-normal mb-8">
                            {meta.title}
                        </h2>

                        <p className="text-txt-muted leading-relaxed max-w-lg mx-auto lg:mx-0 mb-10">
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
                                        className="p-2.5 rounded-lg text-txt-muted hover:text-primary border border-brd/40 hover:border-primary/40 transition-colors"
                                        aria-label={social.name}
                                    >
                                        {Icon && <Icon size={18} />}
                                    </a>
                                )
                            })}
                        </div>

                        {/* CTA */}
                        <a
                            href={hero.cta.href}
                            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium rounded-lg bg-primary text-bgbase hover:bg-primary/90 transition-colors"
                        >
                            {hero.cta.label}
                            <ArrowRight size={16} />
                        </a>
                    </motion.div>

                    {/* Photo */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex-shrink-0"
                    >
                        <div className="w-52 h-52 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-2xl overflow-hidden border border-brd/40">
                            <img
                                src={meta.profileImage}
                                alt={meta.name}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Hero
