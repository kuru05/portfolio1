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
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                    ? 'bg-surface/80 backdrop-blur-2xl shadow-2xl shadow-bgbase/50 border-b border-brd/40'
                    : 'bg-transparent'
                }`}
        >
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 md:h-20">

                    {/* Logo */}
                    <a
                        href="#hero"
                        className="text-xl font-bold gradient-text hover:opacity-80 transition-opacity"
                    >
                        {meta.name.split(' ')[0]}
                        <span className="text-txt-muted font-light">{meta.logoDomain}</span>
                    </a>

                    {/* Desktop links */}
                    <div className="hidden md:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="px-4 py-2 text-sm text-txt-muted hover:text-primary transition-colors rounded-lg hover:bg-surface/50"
                            >
                                {link.label}
                            </a>
                        ))}

                        <a
                            href={meta.resumeUrl}
                            download
                            className="ml-4 inline-flex items-center gap-2 px-5 py-2.5 text-sm rounded-xl gradient-btn"
                        >
                            <Download size={16} />
                            {navCvLabel}
                        </a>
                    </div>

                    {/* Mobile toggle */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden p-2 text-txt-muted hover:text-primary transition-colors"
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
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
                        transition={{ duration: 0.3 }}
                        className="md:hidden bg-surface/95 backdrop-blur-2xl border-b border-brd/40"
                    >
                        <div className="px-4 py-4 space-y-1">
                            {navLinks.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="block px-4 py-3 text-sm text-txt-muted hover:text-primary hover:bg-surface/50 rounded-lg transition-colors"
                                >
                                    {link.label}
                                </a>
                            ))}
                            <a
                                href={meta.resumeUrl}
                                download
                                className="mt-2 flex items-center justify-center gap-2 px-4 py-3 text-sm rounded-xl gradient-btn"
                            >
                                <Download size={16} />
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
