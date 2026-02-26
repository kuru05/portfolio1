import { Github, Linkedin, Twitter, Instagram, Youtube, Dribbble, Mail, Globe } from 'lucide-react'
import { portfolioData } from '../data/portfolioData'

const iconMap = { Github, Linkedin, Twitter, Instagram, Youtube, Dribbble, Mail, Globe }

const Footer = () => {
    const { socials, footer } = portfolioData
    const year = new Date().getFullYear()

    return (
        <footer className="py-12 border-t border-brd/30">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center gap-6">

                    {/* Social links */}
                    <div className="flex items-center gap-3">
                        {socials.map((social) => {
                            const Icon = iconMap[social.icon]
                            return (
                                <a
                                    key={social.name}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 rounded-xl glass-card text-txt-muted hover:text-primary hover:scale-110 transition-all duration-300"
                                    aria-label={social.name}
                                >
                                    {Icon && <Icon size={18} />}
                                </a>
                            )
                        })}
                    </div>

                    {/* Tagline */}
                    <p className="text-txt-muted/60 text-sm">
                        {footer.tagline}
                    </p>

                    {/* Copyright */}
                    <p className="text-txt-muted/40 text-xs">
                        © {year} {footer.copyright}. Tous droits réservés.
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
