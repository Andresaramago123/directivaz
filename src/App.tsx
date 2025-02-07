import React, { useState } from 'react';
import { ArrowRight, BarChart2, Globe2, MessageCircle, Rocket, Users2, Target, TrendingUp, Zap, CheckCircle, Mail } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-white text-black">
      {/* Hero Section */}
      <header className="min-h-screen flex flex-col relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute top-0 -right-4 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>

        <nav className="p-6 flex justify-between items-center border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
          <h1 className="text-2xl font-bold tracking-tight flex items-center gap-2">
            <Zap className="text-blue-600" />
            Directiva Z
          </h1>
          <div className="hidden md:flex space-x-8">
            <a href="#services" className="hover:text-blue-600 transition-colors">Services</a>
            <a href="#about" className="hover:text-blue-600 transition-colors">About</a>
            <a href="#testimonials" className="hover:text-blue-600 transition-colors">Testimonials</a>
            <a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a>
          </div>
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </nav>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-20 inset-x-0 bg-white shadow-lg z-40">
            <div className="flex flex-col p-4 space-y-4">
              <a href="#services" className="hover:text-blue-600" onClick={() => setIsMenuOpen(false)}>Services</a>
              <a href="#about" className="hover:text-blue-600" onClick={() => setIsMenuOpen(false)}>About</a>
              <a href="#testimonials" className="hover:text-blue-600" onClick={() => setIsMenuOpen(false)}>Testimonials</a>
              <a href="#contact" className="hover:text-blue-600" onClick={() => setIsMenuOpen(false)}>Contact</a>
            </div>
          </div>
        )}

        <div className="flex-1 flex items-center justify-center px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-medium">
              Leading Digital Marketing Agency
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              Transform Your Digital Presence
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              We combine data-driven strategies with creative excellence to deliver exceptional results for forward-thinking businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full flex items-center gap-2 justify-center hover:opacity-90 transition-opacity">
                Get Started
                <ArrowRight size={20} />
              </button>
              <button className="border-2 border-gray-200 px-8 py-3 rounded-full flex items-center gap-2 justify-center hover:border-gray-300 transition-colors">
                View Our Work
              </button>
            </div>
            
            {/* Stats */}
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">500+</div>
                <div className="text-gray-600">Clients Served</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">98%</div>
                <div className="text-gray-600">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">10+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">24/7</div>
                <div className="text-gray-600">Support</div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive digital solutions tailored to your business needs
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard 
              icon={<Globe2 size={32} className="text-blue-600" />}
              title="Digital Marketing"
              description="Strategic campaigns that drive growth through SEO, PPC, and content marketing"
              features={[
                "Search Engine Optimization",
                "Pay-Per-Click Advertising",
                "Content Strategy",
                "Email Marketing"
              ]}
            />
            <ServiceCard 
              icon={<BarChart2 size={32} className="text-purple-600" />}
              title="Data Analytics"
              description="Transform data into actionable insights for informed decision-making"
              features={[
                "Performance Tracking",
                "Conversion Analysis",
                "User Behavior Insights",
                "ROI Measurement"
              ]}
            />
            <ServiceCard 
              icon={<Users2 size={32} className="text-pink-600" />}
              title="Social Media Management"
              description="Build and engage your community across all major platforms"
              features={[
                "Content Creation",
                "Community Management",
                "Paid Social Campaigns",
                "Influencer Partnerships"
              ]}
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">About Directiva Z</h2>
              <p className="text-gray-600 mb-6">
                Since 2014, we've been at the forefront of digital transformation, helping businesses adapt and thrive in the digital age. Our approach combines data-driven insights with creative excellence to deliver exceptional results.
              </p>
              <div className="space-y-4">
                <Feature text="Data-Driven Strategy Development" />
                <Feature text="Industry-Leading Expertise" />
                <Feature text="Proven Track Record of Success" />
                <Feature text="Dedicated Support Team" />
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1000"
                alt="Directiva Z Team"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
                <div className="text-2xl font-bold text-blue-600">10+</div>
                <div className="text-sm text-gray-600">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">What Our Clients Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <TestimonialCard
              quote="Directiva Z transformed our online presence. Our leads increased by 150% in just three months."
              author="Sarah Johnson"
              role="CEO, TechStart Inc."
              image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200"
            />
            <TestimonialCard
              quote="The team's expertise in digital marketing helped us achieve our annual goals in just 6 months."
              author="Michael Chen"
              role="Marketing Director, GrowthCo"
              image="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200"
            />
            <TestimonialCard
              quote="Professional, responsive, and results-driven. They're not just a service provider, but a true partner."
              author="Emma Williams"
              role="Founder, EcoStyle"
              image="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Get in Touch</h2>
              <p className="text-gray-600 mb-8">
                Ready to transform your digital presence? Let's discuss how we can help your business grow.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Mail className="text-blue-600" />
                  </div>
                  <div>
                    <div className="font-medium">Email Us</div>
                    <div className="text-gray-600">contact@directivaz.pro</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea 
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                    rows={4}
                    placeholder="How can we help you?"
                  />
                </div>
                <button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg hover:opacity-90 transition-opacity"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 py-12 px-4 border-t">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Zap className="text-blue-600" />
                Directiva Z
              </h3>
              <p className="text-gray-600">
                Transforming businesses through innovative digital marketing solutions.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-600">
                <li>Digital Marketing</li>
                <li>Data Analytics</li>
                <li>Social Media</li>
                <li>Content Strategy</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-600">
                <li>About Us</li>
                <li>Careers</li>
                <li>Blog</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                  <MessageCircle size={24} />
                </a>
                <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                  <Globe2 size={24} />
                </a>
                <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                  <Rocket size={24} />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t pt-8 text-center text-gray-600">
            <p>© 2024 Directiva Z. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function ServiceCard({ icon, title, description, features }) {
  return (
    <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2 text-sm text-gray-600">
            <CheckCircle size={16} className="text-green-500" />
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}

function TestimonialCard({ quote, author, role, image }) {
  return (
    <div className="p-6 bg-white rounded-xl shadow-lg border border-gray-100">
      <div className="mb-4 text-gray-600 italic">"{quote}"</div>
      <div className="flex items-center gap-4">
        <img src={image} alt={author} className="w-12 h-12 rounded-full object-cover" />
        <div>
          <div className="font-semibold">{author}</div>
          <div className="text-sm text-gray-600">{role}</div>
        </div>
      </div>
    </div>
  );
}

function Feature({ text }) {
  return (
    <div className="flex items-center gap-2">
      <CheckCircle size={20} className="text-green-500" />
      <span>{text}</span>
    </div>
  );
}

export default App;