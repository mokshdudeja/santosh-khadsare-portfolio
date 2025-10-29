import { Award, Shield, Users, Globe } from 'lucide-react'

export function AchievementsSection() {
  const achievements = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Military Excellence",
      organization: "Indian Army",
      description: "Excellence in service and leadership throughout 23 years of distinguished military service, developing operational discipline and crisis-handling expertise.",
      highlight: "23 Years"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "NIA Recognition",
      organization: "National Investigation Agency",
      description: "Awarded for investigative excellence and operational contributions to national security and law enforcement capabilities.",
      highlight: "Excellence Award"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "CERT-In Achievement",
      organization: "Indian Computer Emergency Response Team",
      description: "Outstanding contributions to DFIR operations during national cybersecurity response and incident management.",
      highlight: "Outstanding"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "DRONA Product Line",
      organization: "Make in India Initiative",
      description: "Product leadership in indigenous digital forensics capabilities, driving technology sovereignty and ecosystem development.",
      highlight: "Innovation Leader"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "CII Task Force",
      organization: "Confederation of Indian Industry",
      description: "Member of national policy dialogues shaping cyber resilience and industry standards from 2019-2021.",
      highlight: "Policy Maker"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "CHFI Committee",
      organization: "Certification Framework",
      description: "Over 4 years of contribution to certification pathways and workforce development standards in digital forensics.",
      highlight: "4+ Years"
    }
  ]

  return (
    <section id="achievements" className="py-20 lg:py-32 bg-surface-near-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary">
            Achievements & Recognition
          </h2>
          <div className="w-24 h-1 bg-accent-primary mx-auto"></div>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Consistent excellence across military service, government operations, 
            and private-sector innovation
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <div 
              key={index}
              className="group bg-surface-dark border border-border-subtle rounded-lg p-6 shadow-card hover:shadow-card-hover transition-all duration-standard hover:-translate-y-1"
            >
              {/* Icon and Highlight */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-accent-primary/10 rounded-lg text-accent-primary group-hover:bg-accent-primary/20 transition-colors">
                    {achievement.icon}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xs font-semibold text-accent-primary bg-accent-primary/10 px-2 py-1 rounded">
                    {achievement.highlight}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-text-primary group-hover:text-accent-primary transition-colors">
                  {achievement.title}
                </h3>
                <p className="text-sm font-medium text-text-secondary">
                  {achievement.organization}
                </p>
                <p className="text-text-tertiary leading-relaxed">
                  {achievement.description}
                </p>
              </div>

              {/* Hover Effect */}
              <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-full h-0.5 bg-gradient-to-r from-accent-primary to-accent-hover"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Achievement */}
        <div className="mt-16 bg-gradient-to-r from-accent-primary/10 to-accent-hover/10 border border-accent-primary/20 rounded-2xl p-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center px-3 py-1 bg-accent-primary text-white text-sm font-medium rounded-full">
                Featured Recognition
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-text-primary">
                Institutional Impact & Leadership
              </h3>
              <p className="text-lg text-text-secondary leading-relaxed">
                Beyond individual achievements, Dr. Khadsare's institutional contributions include building 
                and upgrading forensic capabilities at CERT-In, strengthening LEA readiness through standardized 
                processes, and influencing policy dialogues that shape national cybersecurity frameworks.
              </p>
            </div>
            <div className="lg:col-span-4 flex justify-center">
              <img 
                src="/images/IMG-20251012-WA0078.jpg" 
                alt="Dr. Khadsare presenting at conference"
                className="w-full max-w-sm rounded-lg shadow-card"
              />
            </div>
          </div>
        </div>

        {/* Achievement Summary */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center space-y-2">
            <div className="text-4xl font-bold text-accent-primary">3</div>
            <div className="text-text-tertiary">Major Awards</div>
            <div className="text-sm text-text-secondary">Army, NIA, CERT-In</div>
          </div>
          <div className="text-center space-y-2">
            <div className="text-4xl font-bold text-accent-primary">2</div>
            <div className="text-text-tertiary">Policy Committees</div>
            <div className="text-sm text-text-secondary">CII & CHFI</div>
          </div>
          <div className="text-center space-y-2">
            <div className="text-4xl font-bold text-accent-primary">1</div>
            <div className="text-text-tertiary">Product Line</div>
            <div className="text-sm text-text-secondary">DRONA Leadership</div>
          </div>
        </div>
      </div>
    </section>
  )
}