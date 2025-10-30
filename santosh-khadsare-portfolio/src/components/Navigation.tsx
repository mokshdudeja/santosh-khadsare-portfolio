import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

interface NavigationProps {
  activeSection: string
  onNavigate: (sectionId: string) => void
}

export function Navigation({ activeSection, onNavigate }: NavigationProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'publications', label: 'Publications' },
    { id: 'impact', label: 'Impact' },
    { id: 'contact', label: 'Contact' }
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (sectionId: string) => {
    onNavigate(sectionId)
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      {/* Fixed Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isVisible
            ? 'translate-y-0 bg-zinc-950/90 backdrop-blur-md border-b border-white/10'
            : '-translate-y-full'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <button
              onClick={() => handleNavClick('hero')}
              className="text-lg font-semibold text-zinc-100 hover:text-blue-400 transition-colors"
            >
              Lt Col (Dr) Santosh Khadsare
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-sm font-medium transition-colors relative group ${
                    activeSection === item.id
                      ? 'text-blue-400'
                      : 'text-zinc-400 hover:text-zinc-100'
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-purple-600"></span>
                  )}
                  {activeSection !== item.id && (
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-600 transition-all duration-200 group-hover:w-full"></span>
                  )}
                </button>
              ))}
            </div>

            {/* Contact CTA */}
            <button
              onClick={() => handleNavClick('contact')}
              className="hidden sm:inline-flex px-4 py-2 text-sm font-semibold text-white bg-purple-600 hover:bg-purple-800 rounded-lg transition-all duration-300 hover:shadow-purple-600 hover:translate-y-[-2px]"
            >
              Get In Touch
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-zinc-400 hover:text-zinc-100 transition-colors"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-zinc-900 border-t border-white/10">
            <div className="px-4 py-2 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`block w-full text-left px-3 py-2 text-sm font-medium transition-colors rounded-lg ${
                    activeSection === item.id
                      ? 'text-blue-400 bg-purple-600/10'
                      : 'text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => handleNavClick('contact')}
                className="block w-full text-left px-3 py-2 mt-4 text-sm font-semibold text-white bg-purple-600 hover:bg-purple-800 rounded-lg transition-all duration-300"
              >
                Get In Touch
              </button>
            </div>
          </div>
        )}
      </nav>
    </>
  )
}