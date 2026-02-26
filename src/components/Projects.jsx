import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import { portfolioData } from '../data/portfolioData'

const Projects = () => {
    const { projects, projectsSection } = portfolioData

    return (
        <section id="projects" className="py-24 lg:py-32 relative">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true, margin: '-100px' }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                        <span className="gradient-text">{projectsSection.title}</span>
                    </h2>
                    <p className="text-txt-muted max-w-2xl mx-auto text-lg">
                        {projectsSection.subtitle}
                    </p>
                </motion.div>

                {/* Projects grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
                    {projects.map((project, index) => (
                        <motion.article
                            key={project.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.08 }}
                            viewport={{ once: true, margin: '-60px' }}
                            className="group rounded-2xl glass-card overflow-hidden hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/5"
                        >
                            {/* Image */}
                            <div className="relative overflow-hidden aspect-video">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-bgbase/90 via-bgbase/20 to-transparent" />

                                {/* Overlay links */}
                                <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                                    {project.githubUrl && (
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-2.5 rounded-xl bg-surface/80 backdrop-blur-sm text-txt-muted hover:text-primary border border-brd/30 transition-colors"
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
                                            className="p-2.5 rounded-xl bg-surface/80 backdrop-blur-sm text-txt-muted hover:text-primary border border-brd/30 transition-colors"
                                            aria-label={`Live demo - ${project.title}`}
                                        >
                                            <ExternalLink size={16} />
                                        </a>
                                    )}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-5 lg:p-6">
                                <h3 className="text-lg font-semibold text-txt mb-2 group-hover:text-primary transition-colors duration-300">
                                    {project.title}
                                </h3>
                                <p className="text-sm text-txt-muted leading-relaxed mb-4 line-clamp-3">
                                    {project.description}
                                </p>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-2.5 py-1 text-xs font-medium rounded-lg bg-primary/10 text-primary border border-primary/15"
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
