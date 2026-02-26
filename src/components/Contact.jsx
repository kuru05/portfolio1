import { motion } from 'framer-motion'
import { Mail, ArrowUpRight } from 'lucide-react'
import { portfolioData } from '../data/portfolioData'

const Contact = () => {
    const { contact } = portfolioData

    return (
        <section id="contact" className="py-24 border-t border-brd/20">
            <div className="max-w-xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true, margin: '-80px' }}
                >
                    <h2 className="text-2xl sm:text-3xl font-bold text-txt mb-3">
                        {contact.heading}
                    </h2>
                    <p className="text-txt-muted mb-8">
                        {contact.subheading}
                    </p>

                    <a
                        href={`mailto:${contact.email}`}
                        className="inline-flex items-center gap-2.5 px-6 py-3 text-sm font-medium rounded-lg bg-primary text-bgbase hover:bg-primary/90 transition-colors"
                    >
                        <Mail size={16} />
                        {contact.email}
                        <ArrowUpRight size={14} />
                    </a>
                </motion.div>
            </div>
        </section>
    )
}

export default Contact
