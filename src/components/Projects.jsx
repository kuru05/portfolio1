import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import { portfolioData } from '../data/portfolioData'

const Projects = () => {
    const { projects, projectsSection } = portfolioData

    return (
        <section id="projects" className="py-24 border-t border-brd/20">
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
                        {projectsSection.title}
                    </h2>
                    <p className="text-txt-muted max-w-xl">
                        {projectsSection.subtitle}
                    </p>
                </motion.div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {projects.map((project, index) => (
                        <motion.article
                            key={project.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.06 }}
                            viewport={{ once: true, margin: '-40px' }}
                            className="group rounded-xl bg-surface/50 border border-brd/30 overflow-hidden hover:border-brd/60 transition-colors"
                        >
                            {/* Image */}
                            <div className="relative overflow-hidden aspect-video">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    loading="lazy"
                                />

                                {/* Links overlay */}
                                <div className="absolute inset-0 bg-bgbase/70 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center gap-3">
                                    {project.githubUrl && (
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-2.5 rounded-lg bg-surface border border-brd/50 text-txt-muted hover:text-txt transition-colors"
                                            aria-label={`GitHub - ${project.title}`}
                                        >
                                            <Github size={16} />
                                        </a>
                                    )}
                                    {project.liveUrl && (
                                        <a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-2.5 rounded-lg bg-surface border border-brd/50 text-txt-muted hover:text-txt transition-colors"
                                            aria-label={`Demo - ${project.title}`}
                                        >
                                            <ExternalLink size={16} />
                                        </a>
                                    )}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-5">
                                <h3 className="font-semibold text-txt mb-2">
                                    {project.title}
                                </h3>
                                <p className="text-sm text-txt-muted leading-relaxed mb-4 line-clamp-2">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-1.5">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-2 py-0.5 text-xs text-txt-muted bg-brd/15 rounded"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects
