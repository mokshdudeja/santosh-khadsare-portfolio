import { BookOpen, ExternalLink, Calendar, Users } from 'lucide-react'

export function PublicationsSection() {
  const publications = [
    {
      title: "Digital Forensics Journal (Digital4N6Journal)",
      type: "Founder & Editor",
      year: "Ongoing",
      description: "Founder of Digital4N6Journal, a dedicated platform for the advancement of evidence-based practice, emerging methodologies, and case insights in digital forensics.",
      impact: "Peer and practitioner exchange platform",
      featured: true
    },
    {
      title: "Evidence Collection and Chain of Custody",
      type: "Technical Article",
      year: "2023",
      description: "Comprehensive guide on maintaining evidentiary integrity in digital investigations, emphasizing reproducibility and courtroom admissibility standards.",
      impact: "Standardized investigative procedures"
    },
    {
      title: "Incident Response Orchestration",
      type: "Research Paper",
      year: "2022",
      description: "Framework for coordinating complex incident response scenarios across organizational boundaries and jurisdictions.",
      impact: "Cross-border collaboration protocols"
    },
    {
      title: "Reporting Standards in Digital Forensics",
      type: "Best Practices Guide",
      year: "2021",
      description: "Methodology for creating comprehensive, defensible forensic reports that meet judicial scrutiny requirements.",
      impact: "Courtroom-ready documentation standards"
    }
  ]

  const speakingEngagements = [
    {
      event: "C0C0N",
      topic: "DFIR Operations and Best Practices",
      year: "2023",
      type: "International Conference"
    },
    {
      event: "HAKON",
      topic: "Capacity Building and Cross-Border Collaboration",
      year: "2022",
      type: "International Conference"
    },
    {
      event: "InfoSec Summit Asia",
      topic: "Digital Forensics Evolution",
      year: "2016",
      type: "Regional Summit"
    }
  ]

  return (
    <section id="publications" className="py-20 lg:py-32 bg-surface-near-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary">
            Publications & Research
          </h2>
          <div className="w-24 h-1 bg-accent-primary mx-auto"></div>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Thought leadership through research, publications, and international speaking engagements
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Publications */}
          <div className="lg:col-span-8 space-y-8">
            {/* Featured Publication */}
            <div className="bg-gradient-to-r from-accent-primary/10 to-accent-hover/10 border border-accent-primary/20 rounded-2xl p-8">
              <div className="flex items-start space-x-4 mb-6">
                <div className="p-3 bg-accent-primary/20 rounded-lg">
                  <BookOpen className="w-8 h-8 text-accent-primary" />
                </div>
                <div>
                  <div className="inline-flex items-center px-3 py-1 bg-accent-primary text-white text-sm font-medium rounded-full mb-2">
                    Featured Publication
                  </div>
                  <h3 className="text-2xl font-bold text-text-primary mb-2">
                    Digital Forensics Journal (Digital4N6Journal)
                  </h3>
                  <p className="text-accent-primary font-medium">Founder & Editor • Ongoing</p>
                </div>
              </div>
              
              <p className="text-lg text-text-secondary leading-relaxed mb-6">
                As founder of Digital4N6Journal, Dr. Khadsare has created a venue for peer and practitioner 
                exchange. The journal elevates evidence-based practices, encourages rigorous reporting, and 
                highlights technology trends—such as cloud forensics, mobile device artifacts, and the evolving 
                landscape of live response.
              </p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2 text-text-tertiary">
                    <Users className="w-4 h-4" />
                    <span className="text-sm">Peer-reviewed platform</span>
                  </div>
                  <div className="flex items-center space-x-2 text-text-tertiary">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">Ongoing publication</span>
                  </div>
                </div>
                <button className="flex items-center space-x-2 text-accent-primary hover:text-accent-hover transition-colors">
                  <span className="text-sm font-medium">Read Journal</span>
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Other Publications */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-text-primary">Research Articles & Guides</h3>
              <div className="space-y-4">
                {publications.slice(1).map((pub, index) => (
                  <div 
                    key={index}
                    className="bg-surface-dark border border-border-subtle rounded-lg p-6 shadow-card hover:shadow-card-hover transition-all duration-standard group"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className="text-lg font-semibold text-text-primary group-hover:text-accent-primary transition-colors">
                          {pub.title}
                        </h4>
                        <p className="text-sm text-text-secondary">{pub.type} • {pub.year}</p>
                      </div>
                    </div>
                    <p className="text-text-secondary mb-4 leading-relaxed">
                      {pub.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-text-tertiary">
                        Impact: {pub.impact}
                      </div>
                      <button className="text-accent-primary hover:text-accent-hover transition-colors">
                        <ExternalLink className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Speaking Engagements */}
          <div className="lg:col-span-4">
            <div className="sticky top-8 space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-text-primary mb-4">Speaking Engagements</h3>
                <p className="text-text-secondary mb-6">
                  International conferences and platforms
                </p>
              </div>

              <div className="space-y-4">
                {speakingEngagements.map((engagement, index) => (
                  <div 
                    key={index}
                    className="bg-surface-dark border border-border-subtle rounded-lg p-4 shadow-card hover:shadow-card-hover transition-all duration-standard group"
                  >
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <h4 className="font-semibold text-text-primary group-hover:text-accent-primary transition-colors">
                          {engagement.event}
                        </h4>
                        <span className="text-xs text-text-tertiary">{engagement.year}</span>
                      </div>
                      <p className="text-sm text-text-secondary">{engagement.type}</p>
                      <p className="text-sm text-text-tertiary">{engagement.topic}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Image */}
              <div className="mt-8">
                <img 
                  src="/images/IMG-20251012-WA0079.jpg" 
                  alt="Office with DFIR poster"
                  className="w-full rounded-lg shadow-card"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Research Impact Stats */}
        <div className="mt-16 bg-surface-dark border border-border-subtle rounded-2xl p-8">
          <h3 className="text-2xl font-semibold text-text-primary text-center mb-8">
            Research Impact
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-accent-primary">1</div>
              <div className="text-text-tertiary">Journal Founded</div>
              <div className="text-sm text-text-secondary">Digital4N6Journal</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-accent-primary">Multiple</div>
              <div className="text-text-tertiary">Publications</div>
              <div className="text-sm text-text-secondary">Technical articles</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-accent-primary">5+</div>
              <div className="text-text-tertiary">Speaking Events</div>
              <div className="text-sm text-text-secondary">International platforms</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-accent-primary">Global</div>
              <div className="text-text-tertiary">Reach</div>
              <div className="text-sm text-text-secondary">International audience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}