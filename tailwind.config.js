/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,jsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['var(--font-family)'],
            },
            colors: {
                primary: {
                    DEFAULT: 'rgb(var(--color-primary) / <alpha-value>)',
                    400: 'rgb(var(--color-primary) / <alpha-value>)',
                },
                accent: {
                    DEFAULT: 'rgb(var(--color-accent) / <alpha-value>)',
                    500: 'rgb(var(--color-accent) / <alpha-value>)',
                },
                surface: {
                    DEFAULT: 'rgb(var(--color-surface) / <alpha-value>)',
                },
                bgbase: {
                    DEFAULT: 'rgb(var(--color-bg) / <alpha-value>)',
                },
                txt: {
                    DEFAULT: 'rgb(var(--color-text) / <alpha-value>)',
                    muted: 'rgb(var(--color-text-muted) / <alpha-value>)',
                },
                brd: {
                    DEFAULT: 'rgb(var(--color-border) / <alpha-value>)',
                },
            },
        },
    },
    plugins: [],
}
