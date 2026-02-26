// ============================================================
// ThemeProvider.jsx — Injecte les CSS custom properties
// depuis portfolioData.theme dans le DOM.
// ============================================================
// Chaque composant utilise des variables CSS (var(--color-primary), etc.)
// au lieu de couleurs en dur. Modifier portfolioData.theme suffit
// pour changer l'apparence globale.
// ============================================================

import { useEffect } from 'react'
import { portfolioData } from '../data/portfolioData'

// Convertit un hex (#aabbcc) en "r, g, b" pour pouvoir l'utiliser
// avec rgba() et opacités Tailwind (ex: bg-primary/20)
const hexToRgb = (hex) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
    if (!result) return '0, 0, 0'
    return `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}`
}

const ThemeProvider = ({ children }) => {
    const { theme } = portfolioData

    useEffect(() => {
        const root = document.documentElement

        // Couleurs en RGB (pour opacité Tailwind)
        root.style.setProperty('--color-primary', hexToRgb(theme.primaryColor))
        root.style.setProperty('--color-accent', hexToRgb(theme.accentColor))
        root.style.setProperty('--color-bg', hexToRgb(theme.backgroundColor))
        root.style.setProperty('--color-surface', hexToRgb(theme.surfaceColor))
        root.style.setProperty('--color-text', hexToRgb(theme.textColor))
        root.style.setProperty('--color-text-muted', hexToRgb(theme.textMuted))
        root.style.setProperty('--color-border', hexToRgb(theme.borderColor))

        // Couleurs en HEX (pour les endroits qui ne supportent pas RGB)
        root.style.setProperty('--color-primary-hex', theme.primaryColor)
        root.style.setProperty('--color-accent-hex', theme.accentColor)
        root.style.setProperty('--color-bg-hex', theme.backgroundColor)
        root.style.setProperty('--color-surface-hex', theme.surfaceColor)

        // Police
        root.style.setProperty('--font-family', `'${theme.fontFamily}', system-ui, sans-serif`)

        // Met à jour le lien Google Fonts dynamiquement
        const fontLink = document.getElementById('google-fonts-link')
        if (fontLink) {
            const fontName = theme.fontFamily.replace(/\s+/g, '+')
            fontLink.href = `https://fonts.googleapis.com/css2?family=${fontName}:wght@300;400;500;600;700;800;900&display=swap`
        }
    }, [theme])

    return children
}

export default ThemeProvider
