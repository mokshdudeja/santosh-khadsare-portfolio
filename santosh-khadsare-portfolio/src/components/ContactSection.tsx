import { Mail, ExternalLink, Phone, MapPin } from 'lucide-react'
import { useState } from 'react'

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    subject: '',
    message: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
    // You could integrate with a service like Netlify Forms, Formspree, etc.
  }

  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Professional Inquiries",
      description: "For collaboration and consulting",
      contact: "contact@systoolsgroup.com",
      action: "mailto:contact@systoolsgroup.com"
    },
    {
      icon: <ExternalLink className="w-6 h-6" />,
      title: "SysTools Official",
      description: "Company website and services",
      contact: "www.systoolsgroup.com",
      action: "https://www.systoolsgroup.com"
    },
    {
      icon: <ExternalLink className="w-6 h-6" />,
      title: "Digital4N6Journal",
      description: "Research and publications",
      contact: "www.digital4n6journal.com",
      action: "https://www.digital4n6journal.com"
    }
  ]

  const consultationAreas = [
    "Digital Forensics & Incident Response",
    "Cybersecurity Strategy & Governance",
    "Threat Intelligence & Analysis",
    "Incident Response Training",
    "Forensic Tool Development",
    "Policy & Standards Development"
  ]

  return (
    <section id="contact" className="py-20 lg:py-32 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-zinc-100">
            Let's Connect
          </h2>
          <div className="w-24 h-1 bg-purple-600 mx-auto"></div>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
            Ready to discuss cybersecurity challenges, training opportunities, or collaboration possibilities?
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-zinc-100">
                Professional Contact
              </h3>
              <p className="text-zinc-400 leading-relaxed">
                For professional inquiries, media engagements, or collaboration on DFIR initiatives, 
                please reach out through the following channels. Dr. Khadsare is always open to 
                discussing cybersecurity challenges and opportunities for knowledge sharing.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-4">
              {contactMethods.map((method, index) => (
                <a
                  key={index}
                  href={method.action}
                  target={method.action.startsWith('http') ? '_blank' : '_self'}
                  rel={method.action.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="group flex items-start space-x-4 p-4 bg-zinc-900 border border-white/10 rounded-lg hover:border-purple-600/50 transition-all duration-300 hover:shadow-xl hover:shadow-2xl transition-shadow"
                >
                  <div className="p-2 bg-purple-600/10 rounded-lg text-blue-400 group-hover:bg-purple-600/20 transition-colors">
                    {method.icon}
                  </div>
                  <div className="flex-1 space-y-1">
                    <h4 className="font-semibold text-zinc-100 group-hover:text-blue-400 transition-colors">
                      {method.title}
                    </h4>
                    <p className="text-sm text-zinc-500">{method.description}</p>
                    <p className="text-sm text-zinc-400 font-medium">{method.contact}</p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-zinc-500 group-hover:text-blue-400 transition-colors" />
                </a>
              ))}
            </div>

            {/* Current Role */}
            <div className="bg-zinc-900 border border-white/10 rounded-lg p-6">
              <h4 className="font-semibold text-zinc-100 mb-3">Current Role</h4>
              <div className="space-y-2">
                <p className="text-blue-400 font-medium">CBO/CTO at SysTools</p>
                <p className="text-zinc-400 text-sm">
                  Strategic leadership and technology vision for digital forensics and incident response solutions
                </p>
              </div>
            </div>

            {/* Consultation Areas */}
            <div className="space-y-4">
              <h4 className="font-semibold text-zinc-100">Areas of Expertise</h4>
              <div className="flex flex-wrap gap-2">
                {consultationAreas.map((area, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-purple-600/10 text-blue-400 text-sm rounded-full border border-purple-600/20"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-zinc-900 border border-white/10 rounded-lg p-8 shadow-lg">
              <h3 className="text-2xl font-semibold text-zinc-100 mb-6">
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-zinc-400 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-zinc-950 border border-white/10 rounded-lg text-zinc-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-colors"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-zinc-400 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-zinc-950 border border-white/10 rounded-lg text-zinc-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-colors"
                      placeholder="your.email@company.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="organization" className="block text-sm font-medium text-zinc-400 mb-2">
                      Organization
                    </label>
                    <input
                      type="text"
                      id="organization"
                      name="organization"
                      value={formData.organization}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-zinc-950 border border-white/10 rounded-lg text-zinc-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-colors"
                      placeholder="Company or institution"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-zinc-400 mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-zinc-950 border border-white/10 rounded-lg text-zinc-100 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-colors"
                    >
                      <option value="">Select a subject</option>
                      <option value="consultation">Consultation Request</option>
                      <option value="training">Training Opportunities</option>
                      <option value="collaboration">Collaboration</option>
                      <option value="speaking">Speaking Engagement</option>
                      <option value="media">Media Inquiry</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-zinc-400 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-zinc-950 border border-white/10 rounded-lg text-zinc-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-colors resize-vertical"
                    placeholder="Please describe your inquiry or how we can collaborate..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-purple-600 hover:bg-purple-800 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-purple-600 hover:translate-y-[-2px] flex items-center justify-center space-x-2"
                >
                  <Mail className="w-4 h-4" />
                  <span>Send Message</span>
                </button>
              </form>

              <div className="mt-6 pt-6 border-t border-white/10">
                <p className="text-sm text-zinc-500 text-center">
                  Response typically within 24-48 hours. For urgent matters, please use email directly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-20 pt-8 border-t border-white/10">
        <div className="text-center text-zinc-500">
          <p className="text-sm">
            © 2025 Lt Col (Dr) Santosh Khadsare. All rights reserved. | 
            <span className="mx-2">•</span>
            Cybersecurity & Digital Forensics Expert
          </p>
        </div>
      </div>
    </section>
  )
}