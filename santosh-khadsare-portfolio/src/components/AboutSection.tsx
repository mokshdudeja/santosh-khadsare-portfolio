export function AboutSection() {
  return (
    <section id="about" className="py-20 lg:py-32 bg-surface-near-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Content */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary">
                About Dr. Khadsare
              </h2>
              <div className="w-24 h-1 bg-accent-primary"></div>
            </div>

            <div className="space-y-6 text-lg text-text-secondary leading-relaxed">
              <p>
                Dr. Khadsare's career reflects a deep, sustained focus on cyber security and DFIR—disciplines 
                where operational precision, chain-of-custody discipline, and reproducible methodologies are 
                non-negotiable. After 23 years in the Indian Army, where he developed operational discipline 
                and crisis-handling experience, he transitioned into national cybersecurity infrastructure by 
                heading the Digital Forensic Lab at CERT-In from 2019 to 2021.
              </p>
              
              <p>
                In his current capacity at SysTools as CBO/CTO, Dr. Khadsare sets the strategic and technical 
                direction for the company's digital forensics and incident response offerings. He is responsible 
                for technology vision, solution architecture, quality assurance, and the integration of services 
                with product innovation, driving the DRONA product line under the Make in India initiative.
              </p>

              <p>
                His international training engagements with LEAs reflect a belief in standardized processes, 
                ethical frameworks, and practical, scenario-based learning. Throughout his career, Dr. Khadsare's 
                achievements have been recognized by the Army, NIA, and CERT-In—an endorsement of his operational 
                excellence, investigative rigor, and innovation.
              </p>
            </div>

            {/* Core Themes */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-text-primary">Core Themes</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-3">
                  <div className="w-12 h-12 bg-accent-primary/10 rounded-lg flex items-center justify-center">
                    <div className="w-6 h-6 bg-accent-primary rounded"></div>
                  </div>
                  <h4 className="font-semibold text-text-primary">Operational Rigor</h4>
                  <p className="text-text-tertiary text-sm">
                    Military-grade discipline in operations, evidence handling, and crisis management
                  </p>
                </div>
                
                <div className="space-y-3">
                  <div className="w-12 h-12 bg-accent-primary/10 rounded-lg flex items-center justify-center">
                    <div className="w-6 h-6 bg-accent-primary rounded-full"></div>
                  </div>
                  <h4 className="font-semibold text-text-primary">Capability Building</h4>
                  <p className="text-text-tertiary text-sm">
                    Developing talent pipelines through mentorship, training, and institutional frameworks
                  </p>
                </div>
                
                <div className="space-y-3">
                  <div className="w-12 h-12 bg-accent-primary/10 rounded-lg flex items-center justify-center">
                    <div className="w-6 h-6 border-2 border-accent-primary"></div>
                  </div>
                  <h4 className="font-semibold text-text-primary">Ecosystem Development</h4>
                  <p className="text-text-tertiary text-sm">
                    Creating sustainable indigenous capabilities and standard operating procedures
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="lg:col-span-5">
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden border border-border-subtle shadow-card-hover">
                <img 
                  src="/images/IMG-20251012-WA0067.jpg" 
                  alt="Dr. Khadsare at CERT-In office"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-6 bg-surface-dark border border-border-moderate rounded-lg p-4 shadow-card-hover">
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent-primary">23</div>
                  <div className="text-xs text-text-tertiary">Years Military</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}