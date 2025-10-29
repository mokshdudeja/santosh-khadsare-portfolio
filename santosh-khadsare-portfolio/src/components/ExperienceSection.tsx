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
    <section id="experience" className="py-20 lg:py-32 bg-surface-near-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary">
            Career Timeline
          </h2>
          <div className="w-24 h-1 bg-accent-primary mx-auto"></div>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            25+ years of progressive leadership spanning military operations, 
            national cybersecurity response, and corporate innovation
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border-subtle transform md:-translate-x-px"></div>

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
                      ? 'bg-accent-primary border-accent-primary shadow-accent-glow animate-glow-pulse' 
                      : 'bg-surface-hover border-border-moderate'
                  }`}></div>
                </div>

                {/* Content Card */}
                <div className={`w-full md:w-5/12 ml-12 md:ml-0 ${
                  index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                }`}>
                  <div className="bg-surface-dark border border-border-subtle rounded-lg p-6 shadow-card hover:shadow-card-hover transition-all duration-standard group">
                    {/* Year Badge */}
                    <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium mb-4 ${
                      exp.isCurrent 
                        ? 'bg-accent-primary/10 text-accent-primary border border-accent-primary/20' 
                        : 'bg-surface-hover text-text-secondary border border-border-subtle'
                    }`}>
                      {exp.isCurrent && <div className="w-2 h-2 bg-accent-primary rounded-full mr-2 animate-pulse"></div>}
                      {exp.year}
                      {exp.isCurrent && <span className="ml-1">(Current)</span>}
                    </div>

                    {/* Role and Organization */}
                    <div className="space-y-2 mb-4">
                      <h3 className="text-xl font-semibold text-text-primary group-hover:text-accent-primary transition-colors">
                        {exp.role}
                      </h3>
                      <p className="text-accent-primary font-medium">{exp.organization}</p>
                    </div>

                    {/* Description */}
                    <p className="text-text-secondary mb-6 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Achievements */}
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold text-text-tertiary uppercase tracking-wide">
                        Key Achievements
                      </h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start space-x-3">
                            <div className="w-1.5 h-1.5 bg-accent-primary rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-text-secondary text-sm">{achievement}</span>
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
        <div className="mt-20 bg-surface-dark border border-border-subtle rounded-2xl p-8">
          <h3 className="text-2xl font-semibold text-text-primary text-center mb-8">
            Career Impact
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-accent-primary">25+</div>
              <div className="text-text-tertiary">Years Experience</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-accent-primary">3</div>
              <div className="text-text-tertiary">Career Phases</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-accent-primary">100+</div>
              <div className="text-text-tertiary">Professionals Trained</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-accent-primary">Global</div>
              <div className="text-text-tertiary">Impact Reach</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}