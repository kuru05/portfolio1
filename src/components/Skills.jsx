import { motion } from 'framer-motion'
import { Monitor, Server, Wrench, Code2, Database, Cloud, Palette, Shield, Cpu } from 'lucide-react'
import { portfolioData } from '../data/portfolioData'

const categoryIconMap = { Monitor, Server, Wrench, Code2, Database, Cloud, Palette, Shield, Cpu }

const Skills = () => {
    const { skills, skillsSection } = portfolioData

    return (
        <section id="skills" className="py-24 border-t border-brd/20">
            <div className="max-w-5xl mx-auto px-6">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true, margin: '-80px' }}
                    className="mb-16"
                >
                    <h2 className="text-2xl sm:text-3xl font-bold text-txt mb-3">
                        {skillsSection.title}
                    </h2>
                    <p className="text-txt-muted max-w-xl">
                        {skillsSection.subtitle}
                    </p>
                </motion.div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skills.map((group, groupIndex) => {
                        const CategoryIcon = group.icon ? categoryIconMap[group.icon] : null
                        return (
                            <motion.div
                                key={group.category}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: groupIndex * 0.1 }}
                                viewport={{ once: true, margin: '-60px' }}
                                className="p-6 rounded-xl bg-surface/50 border border-brd/30"
                            >
                                <div className="flex items-center gap-3 mb-6">
                                    {CategoryIcon && (
                                        <CategoryIcon size={18} className="text-primary" />
                                    )}
                                    <h3 className="text-sm font-semibold text-txt uppercase tracking-wider">
                                        {group.category}
                                    </h3>
                                </div>

                                <div className="space-y-4">
                                    {group.items.map((skill) => (
                                        <div key={skill.name}>
                                            <div className="flex justify-between items-center mb-1.5">
                                                <span className="text-sm text-txt/80">
                                                    {skill.name}
                                                </span>
                                                <span className="text-xs text-txt-muted tabular-nums">
                                                    {skill.level}%
                                                </span>
                                            </div>
                                            <div className="h-1.5 w-full bg-brd/20 rounded-full overflow-hidden">
                                                <motion.div
                                                    initial={{ width: 0 }}
                                                    whileInView={{ width: `${skill.level}%` }}
                                                    transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
                                                    viewport={{ once: true }}
                                                    className="h-full rounded-full bg-primary/80"
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
