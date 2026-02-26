import ThemeProvider from './components/ThemeProvider'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { portfolioData } from './data/portfolioData'

const sectionComponents = {
    hero: Hero,
    skills: Skills,
    projects: Projects,
    contact: Contact,
}

const App = () => {
    const enabledSections = portfolioData.sections.filter((s) => s.enabled)

    return (
        <ThemeProvider>
            <div className="min-h-screen">
                <Navbar />
                <main>
                    {enabledSections.map((section) => {
                        const Component = sectionComponents[section.id]
                        return Component ? <Component key={section.id} /> : null
                    })}
                </main>
                <Footer />
            </div>
        </ThemeProvider>
    )
}

export default App
