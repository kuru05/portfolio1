import { motion } from 'framer-motion'
import { Monitor, Server, Wrench, Code2, Database, Cloud, Palette, Shield, Cpu } from 'lucide-react'
import { portfolioData } from '../data/portfolioData'

// Icônes disponibles pour les catégories de compétences
const categoryIconMap = { Monitor, Server, Wrench, Code2, Database, Cloud, Palette, Shield, Cpu }

const Skills = () => {
    const { skills, skillsSection } = portfolioData

    return (
        <section id="skills" className="py-24 lg:py-32 relative">
            {/* Background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-surface/40 to-transparent" />
                <div className="absolute inset-0 dot-pattern opacity-20" />
            </div>

            <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true, margin: '-100px' }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                        <span className="gradient-text">{skillsSection.title}</span>
                    </h2>
                    <p className="text-txt-muted max-w-2xl mx-auto text-lg">
                        {skillsSection.subtitle}
                    </p>
                </motion.div>

                {/* Skills grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {skills.map((group, groupIndex) => {
                        const CategoryIcon = group.icon ? categoryIconMap[group.icon] : null
                        return (
                            <motion.div
                                key={group.category}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: groupIndex * 0.15 }}
                                viewport={{ once: true, margin: '-80px' }}
                                className="p-6 lg:p-7 rounded-2xl glass-card"
                            >
                                {/* Category header */}
                                <div className="flex items-center gap-3 mb-7">
                                    {CategoryIcon && (
                                        <div className="p-2.5 rounded-xl bg-primary/10">
                                            <CategoryIcon size={20} className="text-primary" />
                                        </div>
                                    )}
                                    <h3 className="text-lg font-semibold text-txt">
                                        {group.category}
                                    </h3>
                                </div>

                                <div className="space-y-5">
                                    {group.items.map((skill, skillIndex) => (
                                        <div key={skill.name}>
                                            <div className="flex justify-between items-center mb-2.5">
                                                <span className="text-sm font-medium text-txt/80">
                                                    {skill.name}
                                                </span>
                                                <span className="text-xs font-mono text-txt-muted">
                                                    {skill.level}%
                                                </span>
                                            </div>

                                            {/* Progress bar */}
                                            <div className="h-2 w-full bg-brd/30 rounded-full overflow-hidden">
                                                <motion.div
                                                    initial={{ width: 0 }}
                                                    whileInView={{ width: `${skill.level}%` }}
                                                    transition={{
                                                        duration: 1.2,
                                                        delay: 0.2 + skillIndex * 0.1,
                                                        ease: [0.25, 0.46, 0.45, 0.94],
                                                    }}
                                                    viewport={{ once: true }}
                                                    className="h-full rounded-full"
                                                    style={{
                                                        background: `linear-gradient(90deg, var(--color-primary-hex), var(--color-accent-hex))`,
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Skills
