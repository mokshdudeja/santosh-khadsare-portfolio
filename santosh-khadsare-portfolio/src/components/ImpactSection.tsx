import { TrendingUp, Users, Globe, BookOpen } from 'lucide-react'

export function ImpactSection() {
  const impactMetrics = [
    {
      icon: <Users className="w-8 h-8" />,
      value: "100+",
      label: "Professionals Mentored",
      description: "Hundreds of cyber enthusiasts guided from foundational concepts to advanced DFIR practice",
      color: "text-blue-400"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      value: "International",
      label: "LEA Training",
      description: "International law enforcement agencies trained with standardized methodologies",
      color: "text-green-400"
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      value: "Multiple",
      label: "FDPs Delivered",
      description: "Faculty Development Programs at prestigious institutes bridging theory and practice",
      color: "text-purple-400"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      value: "4+",
      label: "Years CHFI Committee",
      description: "Contribution to certification frameworks and workforce development standards",
      color: "text-yellow-400"
    }
  ]

  const trainingFocusAreas = [
    {
      area: "Operational Rigor",
      description: "Clear SOPs, chain-of-custody discipline, and repeatable processes",
      icon: "🎯"
    },
    {
      area: "Practical Scenarios",
      description: "Case-driven exercises preparing teams for complex investigations",
      icon: "🔍"
    },
    {
      area: "Ethical Frameworks",
      description: "Emphasis on privacy, legality, and responsible investigative practices",
      icon: "⚖️"
    }
  ]

  return (
    <section id="impact" className="py-20 lg:py-32 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-zinc-100">
            Professional Impact
          </h2>
          <div className="w-24 h-1 bg-purple-600 mx-auto"></div>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
            Building capability and developing talent pipelines across the global cybersecurity ecosystem
          </p>
        </div>

        {/* Impact Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {impactMetrics.map((metric, index) => (
            <div 
              key={index}
              className="group bg-zinc-900 border border-white/10 rounded-lg p-6 shadow-lg hover:shadow-xl hover:shadow-2xl transition-shadow transition-all duration-300 hover:-translate-y-1 text-center"
            >
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-purple-600/10 rounded-lg group-hover:bg-purple-600/20 transition-colors">
                  <div className={metric.color}>
                    {metric.icon}
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <div className={`text-3xl font-bold ${metric.color}`}>
                  {metric.value}
                </div>
                <div className="text-zinc-100 font-semibold">
                  {metric.label}
                </div>
                <p className="text-zinc-500 text-sm leading-relaxed">
                  {metric.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Training Philosophy */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl font-bold text-zinc-100">
                Training Philosophy
              </h3>
              <div className="w-16 h-1 bg-purple-600"></div>
            </div>

            <div className="space-y-6">
              <p className="text-lg text-zinc-400 leading-relaxed">
                Dr. Khadsare's mentorship philosophy emphasizes critical thinking, ethical grounding, 
                and documentation standards. His training ethos rests on three fundamental pillars that 
                ensure participants not only understand tools but how to collect, preserve, analyze, and 
                present evidence in a manner that withstands judicial scrutiny.
              </p>

              <div className="space-y-4">
                {trainingFocusAreas.map((area, index) => (
                  <div 
                    key={index}
                    className="flex items-start space-x-4 p-4 bg-zinc-800 rounded-lg border border-white/10"
                  >
                    <div className="text-2xl">{area.icon}</div>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-zinc-100">{area.area}</h4>
                      <p className="text-zinc-400 text-sm">{area.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative">
              <img 
                src="/images/IMG-20251012-WA0068.jpg" 
                alt="Professional meeting"
                className="w-full rounded-lg shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950/60 to-transparent rounded-lg"></div>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <p className="text-sm font-medium">Cross-functional collaboration and capability building</p>
              </div>
            </div>
          </div>
        </div>

        {/* Mentorship & Academic Contributions */}
        <div className="bg-zinc-900 border border-white/10 rounded-2xl p-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-4">
              <img 
                src="/images/IMG-20251012-WA0065.jpg" 
                alt="Conference networking"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
            
            <div className="lg:col-span-8 space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl md:text-3xl font-bold text-zinc-100">
                  Mentorship & Academic Excellence
                </h3>
                <div className="w-16 h-1 bg-purple-600"></div>
              </div>

              <div className="space-y-4 text-zinc-400">
                <p>
                  Through FDPs at prestigious institutes, Dr. Khadsare equips educators with curricula 
                  and tools that reflect current threats and technologies. He encourages academic-industry 
                  collaboration, ensuring students learn both theory and practice.
                </p>
                
                <p>
                  The result is a talent pipeline that is both deep and adaptable, prepared to meet the 
                  demands of modern investigations and incident response. This systematic approach to 
                  capability development has created exponential increases in investigative readiness 
                  across jurisdictions.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
                <div className="text-center space-y-2">
                  <div className="text-2xl font-bold text-blue-400">100+</div>
                  <div className="text-sm text-zinc-500">Professionals Mentored</div>
                </div>
                <div className="text-center space-y-2">
                  <div className="text-2xl font-bold text-blue-400">Multiple</div>
                  <div className="text-sm text-zinc-500">FDPs Delivered</div>
                </div>
                <div className="text-center space-y-2">
                  <div className="text-2xl font-bold text-blue-400">Global</div>
                  <div className="text-sm text-zinc-500">Training Reach</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}