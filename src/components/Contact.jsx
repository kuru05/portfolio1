import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Mail, User, MessageSquare } from 'lucide-react'
import { portfolioData } from '../data/portfolioData'

const Contact = () => {
    const { contact } = portfolioData

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    })
    const [status, setStatus] = useState(null)

    const handleChange = (e) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            console.log('Form submitted:', formData)
            // TODO: Branchez Formspree, EmailJS etc. ici
            setStatus('success')
            setFormData({ name: '', email: '', message: '' })
            setTimeout(() => setStatus(null), 4000)
        } catch {
            setStatus('error')
            setTimeout(() => setStatus(null), 4000)
        }
    }

    const inputBase =
        'w-full px-4 py-3 pl-11 bg-bgbase border border-brd/30 rounded-lg text-txt text-sm placeholder:text-txt-muted/40 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-colors'

    return (
        <section id="contact" className="py-24 border-t border-brd/20">
            <div className="max-w-xl mx-auto px-6">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true, margin: '-80px' }}
                    className="mb-10"
                >
                    <h2 className="text-2xl sm:text-3xl font-bold text-txt mb-3">
                        {contact.heading}
                    </h2>
                    <p className="text-txt-muted">
                        {contact.subheading}
                    </p>
                </motion.div>

                {/* Form */}
                <motion.form
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="space-y-5"
                >
                    <div className="relative">
                        <User size={16} className="absolute left-3.5 top-3.5 text-txt-muted/50" />
                        <input
                            type="text"
                            name="name"
                            placeholder={contact.namePlaceholder}
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className={inputBase}
                        />
                    </div>

                    <div className="relative">
                        <Mail size={16} className="absolute left-3.5 top-3.5 text-txt-muted/50" />
                        <input
                            type="email"
                            name="email"
                            placeholder={contact.emailPlaceholder}
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className={inputBase}
                        />
                    </div>

                    <div className="relative">
                        <MessageSquare size={16} className="absolute left-3.5 top-3.5 text-txt-muted/50" />
                        <textarea
                            name="message"
                            placeholder={contact.messagePlaceholder}
                            value={formData.message}
                            onChange={handleChange}
                            rows={5}
                            required
                            className={`${inputBase} resize-none`}
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium rounded-lg bg-primary text-bgbase hover:bg-primary/90 transition-colors"
                    >
                        <Send size={16} />
                        {contact.submitLabel}
                    </button>

                    {status === 'success' && (
                        <p className="text-center text-sm text-emerald-400">{contact.successMessage}</p>
                    )}
                    {status === 'error' && (
                        <p className="text-center text-sm text-red-400">{contact.errorMessage}</p>
                    )}
                </motion.form>
            </div>
        </section>
    )
}

export default Contact
