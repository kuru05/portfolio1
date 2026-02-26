import { Github, Linkedin, Twitter, Instagram, Youtube, Dribbble, Mail, Globe } from 'lucide-react'
import { portfolioData } from '../data/portfolioData'

const iconMap = { Github, Linkedin, Twitter, Instagram, Youtube, Dribbble, Mail, Globe }

const Footer = () => {
    const { socials, footer } = portfolioData
    const year = new Date().getFullYear()

    return (
        <footer className="py-10 border-t border-brd/20">
            <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">

                <p className="text-xs text-txt-muted/50">
                    © {year} {footer.copyright}
                </p>

                <div className="flex items-center gap-4">
                    {socials.map((social) => {
                        const Icon = iconMap[social.icon]
                        return (
                            <a
                                key={social.name}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-txt-muted/50 hover:text-txt-muted transition-colors"
                                aria-label={social.name}
                            >
                                {Icon && <Icon size={16} />}
                            </a>
                        )
                    })}
                </div>
            </div>
        </footer>
    )
}

export default Footer
