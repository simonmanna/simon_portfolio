'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Code, 
  Brain, 
  Rocket,
  ChevronDown,
  Menu,
  X,
  Database,
  Globe,
  Zap,
  Shield,
  Cpu,
  Eye
} from 'lucide-react'

import Image from 'next/image';
import profilePic from '../images/profile.png';

export default function EnhancedPortfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'projects', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('mousemove', handleMouseMove)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
    setIsMenuOpen(false)
  }

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      {/* Animated Cursor Effect */}
      <div 
        className="fixed w-6 h-6 border-2 border-electric-blue rounded-full pointer-events-none z-50 mix-blend-difference transition-transform duration-150"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
          transform: 'translate(0, 0)'
        }}
      />

      {/* Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="bg-orb-large top-20 left-20" style={{ animationDelay: '0s' }} />
        <div className="bg-orb-large bottom-20 right-20" style={{ animationDelay: '2s' }} />
        <div className="bg-orb-medium top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" style={{ animationDelay: '4s' }} />
        <div className="bg-orb-small top-1/4 right-1/4" style={{ animationDelay: '1s' }} />
        <div className="bg-orb-small bottom-1/4 left-1/4" style={{ animationDelay: '3s' }} />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-40 nav-glass">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold gradient-text metal-shine flex items-center gap-2"
            >
              <Shield className="w-8 h-8 text-electric-blue" />
              SIMON DEV
            </motion.div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-2">
              {['hero', 'about', 'skills', 'projects', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`nav-link capitalize ${
                    activeSection === section ? 'active' : ''
                  }`}
                >
                  {section === 'hero' ? 'Home' : section}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-blue-500/20 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} className="text-electric-blue" /> : <Menu size={24} className="text-electric-blue" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-slate-900/95 backdrop-blur-xl border-t border-blue-500/20"
            >
              <div className="px-4 py-2 space-y-2">
                {['hero', 'about', 'skills', 'projects', 'contact'].map((section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className="block w-full text-left py-3 px-4 capitalize hover:bg-blue-500/20 hover:text-electric-blue rounded-lg transition-all duration-300 text-slate-300"
                  >
                    {section === 'hero' ? 'Home' : section}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
// Replace the Hero section in your EnhancedPortfolio component
<section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
  <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-2 gap-12 items-center">
    {/* Left Column - Text Content */}
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="order-2 md:order-1"
    >
      <h1 className="text-5xl md:text-7xl font-bold mb-6">
        <span className="gradient-text metal-shine block">Simon Manna</span>
        <span className="text-slate-300 block text-3xl md:text-4xl mt-4">
         Software Developer and AI Engineer
        </span>
      </h1>
      
      <p className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed">
        I'm a passionate software developer specializing in fullstack systems development and AI Engineering.
		<br/>
        Let's build something amazing together!
      </p>
      
      <div className="flex flex-wrap gap-4">
        <button
          onClick={() => scrollToSection('projects')}
          className="btn-optimus"
        >
          <span className="flex items-center justify-center gap-3">
            <Rocket className="w-5 h-5" />
            View Projects
          </span>
        </button>
        <button
          onClick={() => scrollToSection('contact')}
          className="btn-electric"
        >
          <span className="flex items-center justify-center gap-3">
            <Mail className="w-5 h-5" />
            Contact Me
          </span>
        </button>
      </div>

      {/* Social Links */}
      <div className="mt-8 flex gap-4">
        {[
          { icon: Github, href: "https://github.com/yourusername" },
          { icon: Linkedin, href: "https://linkedin.com/in/yourprofile" },
          { icon: Mail, href: "mailto:your.email@example.com" }
        ].map((social, index) => (
          <motion.a
            key={index}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -5 }}
            className="social-link"
          >
            <social.icon size={24} className="text-slate-400 hover:text-electric-blue transition-colors" />
          </motion.a>
        ))}
      </div>
    </motion.div>

    {/* Right Column - Image */}
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="order-1 md:order-2 relative"
    >
      {/* Image Container with Decorative Elements */}
      <div className="relative">
        {/* Your Profile Image */}
        <div className="relative z-10 w-full max-w-md mx-auto">
          <div className="aspect-square rounded-2xl overflow-hidden border-4 border-electric-blue/50 shadow-xl shadow-electric-blue/20">
            <Image
      src={profilePic}
      alt="Profile picture"
      // width and height are automatically provided
      placeholder="blur" // Automatically uses blurDataURL
	  width={500}
  height={300}
    />
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute -top-6 -left-6 w-32 h-32 rounded-full bg-electric-blue/10 blur-xl animate-float" />
        <div className="absolute -bottom-6 -right-6 w-40 h-40 rounded-full bg-blue-500/10 blur-xl animate-float animation-delay-2000" />
        <div className="absolute top-1/2 left-1/4 w-24 h-24 rounded-full bg-blue-400/10 blur-xl animate-float animation-delay-4000" />
      </div>
    </motion.div>
  </div>

  {/* Scroll Indicator */}
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 1.5 }}
    className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
  >
    <ChevronDown className="w-8 h-8 animate-bounce text-electric-blue" />
  </motion.div>
</section>

      {/* About Section */}
      <section id="about" className="py-20 relative">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-8">
              <span className="gradient-text metal-shine">About Me</span>
            </h2>
            <div className="section-divider" />
            <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
Experienced AI & Machine Learning Engineer, Data Scientist, and Full Stack Developer with a passion for leveraging data-driven insights to solve complex problems and designing comprehensive AI systems.<br/>
Expert in developing and deploying ML models, analyzing large datasets, and translating insights into actionable business strategies.<br/>
Skilled in building end-to-end web and mobile applications using modern full stack technologies, integrating backend systems, APIs, and intuitive user interfaces.<br/>
Capable of delivering robust, scalable, and production-ready solutions that bridge AI and software engineering for real-world impact.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Code className="w-10 h-10" />,
                title: "Quantum Development",
                description: "Master of quantum algorithms, neural architectures, and next-gen computing paradigms that revolutionize software engineering.",
                color: "electric-blue",
                delay: 0
              },
              {
                icon: <Brain className="w-10 h-10" />,
                title: "AI Consciousness",
                description: "Deep learning systems, cognitive computing, and artificial general intelligence research for tomorrow's solutions.",
                color: "blue-400",
                delay: 0.2
              },
              {
                icon: <Rocket className="w-10 h-10" />,
                title: "System Leadership",
                description: "Commanding technical teams and architecting solutions for the digital transformation era with precision and innovation.",
                color: "blue-500",
                delay: 0.4
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: item.delay }}
                className="glass-card-hover p-8 group"
              >
                <div className={`text-${item.color} mb-6 group-hover:animate-glow transition-all duration-300`}>
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-slate-200 group-hover:text-electric-blue transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-400 group-hover:text-slate-300 transition-colors leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-slate-900/30 border-y border-blue-500/20">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-8">
              <span className="gradient-text metal-shine">Skills and Expertise</span>
            </h2>
            <div className="section-divider" />
            <p className="text-slate-400 text-lg">Advanced technological arsenal for building the future</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                category: "Programming Languages",
                icon: <Code className="w-7 h-7" />,
                skills: ["JavaScript", "TypeScript","Python", "PHP", "C", "C++"],
                color: "blue-400"
              },
              {
                category: "Frameworks/Technologies",
                icon: <Globe className="w-7 h-7" />,
                skills: ["Node.js", "Express.js", "React", "NestJS", "Laravel", "Flask", "React Native", "Deno"],
                color: "electric-blue"
              },
              {
                category: "Frontend Skills",
                icon: <Globe className="w-7 h-7" />,
                skills: ["React.js", "Next.js", "Vue.js", "Javascript",
				"HTML5 & CSS3", "Tailwind CSS/Bootstrap"],
                color: "electric-blue"
              },
              {
                category: "DevOps & CI/CD",
                icon: <Database className="w-7 h-7" />,
                skills: ["Git (GitHub, GitLab)", "Docker", "AWS", "Google Cloud", "Vercel", "Serverless"],
                color: "blue-400"
              },
              {
                category: "Database Skills",
                icon: <Database className="w-7 h-7" />,
                skills: ["PostgreSQL", "MySQL", "SQLite", "Supbase", "GraphQL"],
                color: "blue-400"
              },
              {
                category: "AI/ML Skills",
                icon: <Brain className="w-7 h-7" />,
                skills: ["GPTs", "Prompt Engineering", "Automation", "AI Agents", "TensorFlow", "PyTorch", "LLMs"],
                color: "blue-500"
              },
              {
                category: "Soft Skills",
                icon: <Zap className="w-7 h-7" />,
                skills: ["Leadership", "Entrepreneurship", "Product Management", "Communication", "Edge Computing"],
                color: "electric-blue"
              },
              {
                category: "Security & Testing",
                icon: <Cpu className="w-7 h-7" />,
                skills: ["JWT", "Jest"],
                color: "blue-500"
              }
            ].map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="glass-card-hover p-6"
              >
                <div className="flex items-center mb-6">
                  <div className={`text-${category.color} mr-4`}>{category.icon}</div>
                  <h3 className="text-xl font-bold text-slate-200">{category.category}</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="skill-tag"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-8">
              <span className="gradient-text metal-shine">Featured Projects</span>
            </h2>
            <div className="section-divider" />
            <p className="text-slate-400 text-lg">Cutting-edge solutions that define the future</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "AI-Powered Analytics Dashboard",
                description: "A comprehensive analytics platform using machine learning for predictive insights, real-time data visualization, and automated decision-making systems.",
                tech: ["React Quantum", "Python AI", "TensorFlow Pro", "AWS Neural"],
                icon: "🤖",
                github: "#",
                demo: "#"
              },
              {
                title: "Neural Chat Application",
                description: "Advanced real-time communication platform with AI-powered message suggestions, sentiment analysis, and quantum-encrypted messaging protocols.",
                tech: ["Next.js 14", "Socket.io++", "Neural DB", "OpenAI GPT"],
                icon: "💬",
                github: "#",
                demo: "#"
              },
              {
                title: "Quantum Vision System",
                description: "Revolutionary computer vision project with object detection, classification, and predictive analysis for automated quality control in manufacturing.",
                tech: ["Python AI", "OpenCV++", "PyTorch Neural", "Docker Quantum"],
                icon: "👁️",
                github: "#",
                demo: "#"
              },
              {
                title: "Smart Commerce Platform",
                description: "Next-generation e-commerce solution with AI-powered recommendations, quantum search algorithms, and neural payment processing systems.",
                tech: ["Next.js Pro", "Stripe Neural", "PostgreSQL+", "Redis Quantum"],
                icon: "🛒",
                github: "#",
                demo: "#"
              }
            ].map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="text-slate-400 group-hover:text-electric-blue project-card"
              >
                <div className="text-6xl mb-6">{project.icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-slate-200 group-hover:text-electric-blue transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 mb-6 group-hover:text-slate-300 transition-colors leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-3 mb-8">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="skill-tag-electric"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-6">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 text-slate-400 hover:text-electric-blue transition-colors group/link"
                  >
                    <Github size={20} className="group-hover/link:animate-spin" />
                    <span className="font-semibold">Code</span>
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center gap-2 text-slate-400 hover:text-electric-blue transition-colors group/link"
                  >
                    <ExternalLink size={20} className="group-hover/link:animate-pulse" />
                    <span className="font-semibold">Demo</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-900/40 border-t border-blue-500/20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-8">
              <span className="gradient-text metal-shine">Let's Work Together</span>
            </h2>
            <div className="section-divider" />
            <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Ready to bring your ideas to life? Let's discuss how we can create something 
              <span className="text-electric-blue font-semibold"> extraordinary</span> together with 
              <span className="text-blue-400 font-semibold"> cutting-edge technology</span>.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <a
                href="mailto:your.email@example.com"
                className="btn-optimus"
              >
                <span className="flex items-center justify-center gap-3">
                  <Mail size={20} />
                  Email Me
                </span>
              </a>
              <a
                href="https://linkedin.com/in/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-electric"
              >
                <span className="flex items-center justify-center gap-3">
                  <Linkedin size={20} />
                  LinkedIn
                </span>
              </a>
            </div>

            <div className="flex justify-center gap-6">
              {[
                { icon: Github, href: "https://github.com/yourusername", label: "GitHub" },
                { icon: Linkedin, href: "https://linkedin.com/in/yourprofile", label: "LinkedIn" },
                { icon: Mail, href: "mailto:your.email@example.com", label: "Email" }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target={social.href.startsWith('http') ? "_blank" : undefined}
                  rel={social.href.startsWith('http') ? "noopener noreferrer" : undefined}
                  className="social-link group"
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon size={24} className="text-slate-400 group-hover:text-electric-blue transition-colors" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center border-t border-blue-500/20 bg-slate-900/60">
        <p className="text-slate-500">
          © 2024 <span className="text-electric-blue font-semibold">Simon DEV</span>. 
        </p>
      </footer>
    </div>
  )
}