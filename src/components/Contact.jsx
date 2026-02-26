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
    const [status, setStatus] = useState(null) // 'success' | 'error' | null

    const handleChange = (e) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }

    // ─── Submit handler ────────────────────────────────────────
    // Branchez ici Formspree, EmailJS ou tout autre service.
    // Exemple Formspree : remplacez le fetch par
    //   fetch("https://formspree.io/f/VOTRE_ID", { method:"POST", body: formData })
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            console.log('Form submitted:', formData)
            // TODO: Remplacez par votre appel API ici
            setStatus('success')
            setFormData({ name: '', email: '', message: '' })
            setTimeout(() => setStatus(null), 4000)
        } catch {
            setStatus('error')
            setTimeout(() => setStatus(null), 4000)
        }
    }

    return (
        <section id="contact" className="py-24 lg:py-32 relative">
            {/* Background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent" />
            </div>

            <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true, margin: '-100px' }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                        <span className="gradient-text">{contact.heading}</span>
                    </h2>
                    <p className="text-txt-muted max-w-xl mx-auto text-lg">
                        {contact.subheading}
                    </p>
                </motion.div>

                {/* Form card */}
                <motion.form
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="p-6 sm:p-8 lg:p-10 rounded-2xl glass-card space-y-6"
                >
                    {/* Name */}
                    <div className="relative group">
                        <User size={18} className="absolute left-4 top-4 text-txt-muted group-focus-within:text-primary transition-colors" />
                        <input
                            type="text"
                            name="name"
                            placeholder={contact.namePlaceholder}
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3.5 pl-12 bg-bgbase/80 border border-brd/40 rounded-xl text-txt placeholder:text-txt-muted/50 focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/15 transition-all"
                        />
                    </div>

                    {/* Email */}
                    <div className="relative group">
                        <Mail size={18} className="absolute left-4 top-4 text-txt-muted group-focus-within:text-primary transition-colors" />
                        <input
                            type="email"
                            name="email"
                            placeholder={contact.emailPlaceholder}
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3.5 pl-12 bg-bgbase/80 border border-brd/40 rounded-xl text-txt placeholder:text-txt-muted/50 focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/15 transition-all"
                        />
                    </div>

                    {/* Message */}
                    <div className="relative group">
                        <MessageSquare size={18} className="absolute left-4 top-4 text-txt-muted group-focus-within:text-primary transition-colors" />
                        <textarea
                            name="message"
                            placeholder={contact.messagePlaceholder}
                            value={formData.message}
                            onChange={handleChange}
                            rows={5}
                            required
                            className="w-full px-4 py-3.5 pl-12 bg-bgbase/80 border border-brd/40 rounded-xl text-txt placeholder:text-txt-muted/50 focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/15 transition-all resize-none"
                        />
                    </div>

                    {/* Submit */}
                    <button
                        type="submit"
                        className="w-full flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl gradient-btn text-base"
                    >
                        <Send size={18} />
                        {contact.submitLabel}
                    </button>

                    {/* Status feedback */}
                    {status === 'success' && (
                        <motion.p
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-center text-sm text-emerald-400"
                        >
                            {contact.successMessage}
                        </motion.p>
                    )}
                    {status === 'error' && (
                        <motion.p
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-center text-sm text-red-400"
                        >
                            {contact.errorMessage}
                        </motion.p>
                    )}
                </motion.form>
            </div>
        </section>
    )
}

export default Contact
