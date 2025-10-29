import { useEffect, useState } from 'react'
import { Navigation } from './components/Navigation'
import { HeroSection } from './components/HeroSection'
import { AboutSection } from './components/AboutSection'
import { ExperienceSection } from './components/ExperienceSection'
import { AchievementsSection } from './components/AchievementsSection'
import { PublicationsSection } from './components/PublicationsSection'
import { ImpactSection } from './components/ImpactSection'
import { ContactSection } from './components/ContactSection'

function App() {
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'experience', 'achievements', 'publications', 'impact', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen bg-surface-near-black text-text-primary">
      <Navigation 
        activeSection={activeSection} 
        onNavigate={scrollToSection}
      />
      
      <main className="relative">
        <HeroSection onNavigate={scrollToSection} />
        <AboutSection />
        <ExperienceSection />
        <AchievementsSection />
        <PublicationsSection />
        <ImpactSection />
        <ContactSection />
      </main>
    </div>
  )
}

export default App
