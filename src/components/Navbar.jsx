import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Download } from 'lucide-react'
import { portfolioData } from '../data/portfolioData'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const { navLinks, meta, navCvLabel, navCvLabelMobile } = portfolioData

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                    ? 'bg-surface/90 backdrop-blur-md border-b border-brd/30'
                    : 'bg-transparent'
                }`}
        >
            <div className="max-w-5xl mx-auto px-6">
                <div className="flex items-center justify-between h-16">

                    {/* Logo */}
                    <a href="#hero" className="text-lg font-semibold text-txt hover:text-primary transition-colors">
                        {meta.name.split(' ')[0]}
                        <span className="text-txt-muted font-normal">{meta.logoDomain}</span>
                    </a>

                    {/* Desktop links */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="text-sm text-txt-muted hover:text-txt transition-colors"
                            >
                                {link.label}
                            </a>
                        ))}

                        <a
                            href={meta.resumeUrl}
                            download
                            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg bg-primary text-bgbase hover:bg-primary/90 transition-colors"
                        >
                            <Download size={14} />
                            {navCvLabel}
                        </a>
                    </div>

                    {/* Mobile toggle */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden p-2 text-txt-muted hover:text-txt transition-colors"
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X size={22} /> : <Menu size={22} />}
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="md:hidden bg-surface border-b border-brd/30"
                    >
                        <div className="px-6 py-4 space-y-1">
                            {navLinks.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="block py-2.5 text-sm text-txt-muted hover:text-txt transition-colors"
                                >
                                    {link.label}
                                </a>
                            ))}
                            <a
                                href={meta.resumeUrl}
                                download
                                className="mt-3 flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium rounded-lg bg-primary text-bgbase"
                            >
                                <Download size={14} />
                                {navCvLabelMobile}
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    )
}

export default Navbar
