export function ExperienceSection() {
  const experiences = [
    {
      year: "Current",
      role: "CBO/CTO",
      organization: "SysTools",
      isCurrent: true,
      description: "Strategic leadership and technology vision for digital forensics and incident response solutions. Directing DRONA product line under Make in India initiative to create indigenous cybersecurity capabilities.",
      achievements: [
        "Product leadership and technology strategy",
        "Ecosystem development and market expansion",
        "Integration of services with product innovation",
        "Quality assurance and solution architecture"
      ]
    },
    {
      year: "2019-2021",
      role: "Head, Digital Forensic Lab",
      organization: "CERT-In",
      isCurrent: false,
      description: "Led forensic operations and served as trusted interface between national cybersecurity functions and India's law enforcement ecosystem, strengthening investigative outcomes across the nation.",
      achievements: [
        "Directed national-level forensic operations",
        "Coordinated with law enforcement agencies",
        "Elevated lab capabilities and investigative standards",
        "Strengthened incident response preparedness"
      ]
    },
    {
      year: "23 Years",
      role: "Lieutenant Colonel",
      organization: "Indian Army",
      isCurrent: false,
      description: "Distinguished military service developing operational discipline, crisis-handling experience, and leadership skills. Established foundation in evidence handling and chain-of-custody protocols.",
      achievements: [
        "Operational leadership and team management",
        "Crisis-handling and decision-making under pressure",
        "Technology integration in military operations",
        "Mentoring and capability development"
      ]
    }
  ]

  return (
    <section id="experience" className="py-20 lg:py-32 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-zinc-100">
            Career Timeline
          </h2>
          <div className="w-24 h-1 bg-purple-600 mx-auto"></div>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
            25+ years of progressive leadership spanning military operations, 
            national cybersecurity response, and corporate innovation
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-700/10 transform md:-translate-x-px"></div>

          {/* Timeline Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className={`relative flex items-center ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}>
                {/* Timeline Node */}
                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 z-10">
                  <div className={`w-4 h-4 rounded-full border-2 ${
                    exp.isCurrent 
                      ? 'bg-purple-600 border-purple-600 shadow-purple-600 animate-pulse' 
                      : 'bg-zinc-800 border-white/20'
                  }`}></div>
                </div>

                {/* Content Card */}
                <div className={`w-full md:w-5/12 ml-12 md:ml-0 ${
                  index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                }`}>
                  <div className="bg-zinc-900 border border-white/10 rounded-lg p-6 shadow-lg hover:shadow-xl hover:shadow-2xl transition-shadow transition-all duration-300 group">
                    {/* Year Badge */}
                    <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium mb-4 ${
                      exp.isCurrent 
                        ? 'bg-purple-600/10 text-blue-400 border border-purple-600/20' 
                        : 'bg-zinc-800 text-zinc-400 border border-white/10'
                    }`}>
                      {exp.isCurrent && <div className="w-2 h-2 bg-purple-600 rounded-full mr-2 animate-pulse"></div>}
                      {exp.year}
                      {exp.isCurrent && <span className="ml-1">(Current)</span>}
                    </div>

                    {/* Role and Organization */}
                    <div className="space-y-2 mb-4">
                      <h3 className="text-xl font-semibold text-zinc-100 group-hover:text-blue-400 transition-colors">
                        {exp.role}
                      </h3>
                      <p className="text-blue-400 font-medium">{exp.organization}</p>
                    </div>

                    {/* Description */}
                    <p className="text-zinc-400 mb-6 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Achievements */}
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold text-zinc-500 uppercase tracking-wide">
                        Key Achievements
                      </h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start space-x-3">
                            <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-zinc-400 text-sm">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Career Stats */}
        <div className="mt-20 bg-zinc-900 border border-white/10 rounded-2xl p-8">
          <h3 className="text-2xl font-semibold text-zinc-100 text-center mb-8">
            Career Impact
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-blue-400">25+</div>
              <div className="text-zinc-500">Years Experience</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-blue-400">3</div>
              <div className="text-zinc-500">Career Phases</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-blue-400">100+</div>
              <div className="text-zinc-500">Professionals Trained</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-blue-400">Global</div>
              <div className="text-zinc-500">Impact Reach</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}