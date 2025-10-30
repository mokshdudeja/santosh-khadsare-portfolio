import { ChevronDown, Mail, Download } from 'lucide-react'

interface HeroSectionProps {
  onNavigate: (sectionId: string) => void
}

export function HeroSection({ onNavigate }: HeroSectionProps) {
  return (
    <section 
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden"
    >
      {/* Background Glow Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-800/3 rounded-full blur-2xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          {/* Profile Image */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-2 border-white/10 shadow-purple-600">
                <img 
                  src="/images/IMG-20251012-WA0076.jpg" 
                  alt="Lt Col (Dr) Santosh Khadsare"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Ring Animation */}
              <div className="absolute inset-0 rounded-full border-2 border-purple-600/30 animate-ping"></div>
            </div>
          </div>

          {/* Name and Title */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-zinc-100 tracking-tight">
              Lt Col (Dr)
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Santosh Khadsare</span>
            </h1>
            
            <div className="space-y-2">
              <p className="text-xl md:text-2xl lg:text-3xl font-medium text-zinc-400 tracking-wide">
                25+ Years | Cyber Security & DFIR Expert
              </p>
              <p className="text-lg md:text-xl text-zinc-500">
                CBO/CTO at SysTools
              </p>
            </div>
          </div>

          {/* Tagline */}
          <div className="max-w-4xl mx-auto">
            <p className="text-lg md:text-xl lg:text-2xl text-zinc-100 leading-relaxed">
              Distinguished cybersecurity leader with military discipline, national DFIR expertise, 
              and corporate innovation. Building resilient digital ecosystems through operational 
              rigor and capability development.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <button
              onClick={() => onNavigate('experience')}
              className="group px-8 py-4 bg-purple-600 hover:bg-purple-800 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-purple-600 hover:translate-y-[-2px] flex items-center gap-2"
            >
              View Experience
              <ChevronDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </button>
            
            <button
              onClick={() => onNavigate('contact')}
              className="group px-8 py-4 border-2 border-purple-600 text-blue-400 hover:bg-purple-600 hover:text-white font-semibold rounded-lg transition-all duration-300 flex items-center gap-2"
            >
              <Mail className="w-4 h-4" />
              Contact
            </button>
          </div>

          {/* Credentials */}
          <div className="pt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto text-center">
            <div className="space-y-2">
              <div className="text-2xl font-bold text-blue-400">25+</div>
              <div className="text-sm text-zinc-500">Years Experience</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-blue-400">100+</div>
              <div className="text-sm text-zinc-500">Professionals Mentored</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-blue-400">Global</div>
              <div className="text-sm text-zinc-500">Training Impact</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <button
          onClick={() => onNavigate('about')}
          className="flex flex-col items-center space-y-2 text-zinc-500 hover:text-blue-400 transition-colors animate-bounce"
        >
          <span className="text-sm font-medium">Scroll to explore</span>
          <ChevronDown className="w-5 h-5" />
        </button>
      </div>
    </section>
  )
}