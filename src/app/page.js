"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  Eye,
} from "lucide-react";

import Image from "next/image";
import profilePic from "../images/profile.png";

export default function EnhancedPortfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      const sections = ["hero", "about", "skills", "projects", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      {/* Animated Cursor Effect */}
      <div
        className="fixed w-6 h-6 border-2 border-electric-blue rounded-full pointer-events-none z-50 mix-blend-difference transition-transform duration-150"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
          transform: "translate(0, 0)",
        }}
      />
      {/* Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div
          className="bg-orb-large top-20 left-20"
          style={{ animationDelay: "0s" }}
        />
        <div
          className="bg-orb-large bottom-20 right-20"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="bg-orb-medium top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          style={{ animationDelay: "4s" }}
        />
        <div
          className="bg-orb-small top-1/4 right-1/4"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="bg-orb-small bottom-1/4 left-1/4"
          style={{ animationDelay: "3s" }}
        />
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
              {["hero", "about", "skills", "projects", "contact"].map(
                (section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className={`nav-link capitalize ${
                      activeSection === section ? "active" : ""
                    }`}
                  >
                    {section === "hero" ? "Home" : section}
                  </button>
                )
              )}
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-blue-500/20 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X size={24} className="text-electric-blue" />
              ) : (
                <Menu size={24} className="text-electric-blue" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-slate-900/95 backdrop-blur-xl border-t border-blue-500/20"
            >
              <div className="px-4 py-2 space-y-2">
                {["hero", "about", "skills", "projects", "contact"].map(
                  (section) => (
                    <button
                      key={section}
                      onClick={() => scrollToSection(section)}
                      className="block w-full text-left py-3 px-4 capitalize hover:bg-blue-500/20 hover:text-electric-blue rounded-lg transition-all duration-300 text-slate-300"
                    >
                      {section === "hero" ? "Home" : section}
                    </button>
                  )
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
      {/* Hero Section */}
      // Replace the Hero section in your EnhancedPortfolio component
      <section
        id="hero"
        className="min-h-screen flex items-center justify-center relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 md:order-1"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="gradient-text metal-shine block">
                Simon Manna
              </span>
              <span className="text-slate-300 block text-3xl md:text-4xl mt-4">
                Software Developer and AI Engineer
              </span>
            </h1>

            <p className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed">
              I'm a passionate software developer specializing in fullstack
              systems development and AI Engineering.
              <br />
              Let's build something amazing together!
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => scrollToSection("projects")}
                className="btn-optimus"
              >
                <span className="flex items-center justify-center gap-3">
                  <Rocket className="w-5 h-5" />
                  View Projects
                </span>
              </button>
              <button
                onClick={() => scrollToSection("contact")}
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
                { icon: Mail, href: "mailto:your.email@example.com" },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5 }}
                  className="social-link"
                >
                  <social.icon
                    size={24}
                    className="text-slate-400 hover:text-electric-blue transition-colors"
                  />
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
              Experienced AI & Machine Learning Engineer, Data Scientist, and
              Full Stack Developer with a passion for leveraging data-driven
              insights to solve complex problems and designing comprehensive AI
              systems.
              <br />
              Expert in developing and deploying ML models, analyzing large
              datasets, and translating insights into actionable business
              strategies.
              <br />
              Skilled in building end-to-end web and mobile applications using
              modern full stack technologies, integrating backend systems, APIs,
              and intuitive user interfaces.
              <br />
              Capable of delivering robust, scalable, and production-ready
              solutions that bridge AI and software engineering for real-world
              impact.
            </p>
          </motion.div>
        </div>
      </section>
      {/* Skills Section */}
      <section
        id="skills"
        className="py-20 bg-slate-900/30 border-y border-blue-500/20"
      >
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-8">
              <span className="gradient-text metal-shine">
                Skills and Expertise
              </span>
            </h2>
            <div className="section-divider" />
            <p className="text-slate-400 text-lg">
              Advanced technological arsenal for building the future
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                category: "Programming Languages",
                icon: <Code className="w-7 h-7" />,
                skills: [
                  "JavaScript",
                  "TypeScript",
                  "Python",
                  "PHP",
                  "C",
                  "C++",
                ],
                color: "blue-400",
              },
              {
                category: "Frameworks/Technologies",
                icon: <Globe className="w-7 h-7" />,
                skills: [
                  "Node.js",
                  "Express.js",
                  "React",
                  "NestJS",
                  "Laravel",
                  "Flask",
                  "React Native",
                  "Deno",
                ],
                color: "electric-blue",
              },
              {
                category: "Frontend Skills",
                icon: <Globe className="w-7 h-7" />,
                skills: [
                  "React.js",
                  "Next.js",
                  "Vue.js",
                  "Javascript",
                  "HTML5 & CSS3",
                  "Tailwind CSS/Bootstrap",
                ],
                color: "electric-blue",
              },
              {
                category: "DevOps & CI/CD",
                icon: <Database className="w-7 h-7" />,
                skills: [
                  "Git (GitHub, GitLab)",
                  "Docker",
                  "AWS",
                  "Google Cloud",
                  "Vercel",
                  "Serverless",
                ],
                color: "blue-400",
              },
              {
                category: "Database Skills",
                icon: <Database className="w-7 h-7" />,
                skills: ["PostgreSQL", "MySQL", "SQLite", "Supbase", "GraphQL"],
                color: "blue-400",
              },
              {
                category: "AI/ML Skills",
                icon: <Brain className="w-7 h-7" />,
                skills: [
                  "GPTs",
                  "Prompt Engineering",
                  "Automation",
                  "AI Agents",
                  "TensorFlow",
                  "PyTorch",
                  "LLMs",
                ],
                color: "blue-500",
              },
              {
                category: "Soft Skills",
                icon: <Zap className="w-7 h-7" />,
                skills: [
                  "Leadership",
                  "Entrepreneurship",
                  "Product Management",
                  "Communication",
                  "Team Work",
                ],
                color: "electric-blue",
              },
              {
                category: "Security & Testing",
                icon: <Cpu className="w-7 h-7" />,
                skills: ["JWT", "Jest"],
                color: "blue-500",
              },
            ].map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="glass-card-hover p-6"
              >
                <div className="flex items-center mb-6">
                  <div className={`text-${category.color} mr-4`}>
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-200">
                    {category.category}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="skill-tag">
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
              <span className="gradient-text metal-shine">
                Featured Projects
              </span>
            </h2>
            <div className="section-divider" />
            <p className="text-slate-400 text-lg">
              Real-world solutions that drive business transformation
            </p>
          </motion.div>

          {/* Mobile & Web Applications Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16"
          >
            <h3 className="text-3xl font-bold text-electric-blue mb-8 flex items-center gap-3">
              <Code className="w-8 h-8" />
              Mobile & Web Applications
            </h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Hotels Productivity Management",
                  description:
                    "A comprehensive mobile application designed to revolutionize hotel operations by improving staff efficiency and streamlining task management across all departments.",
                  tech: [
                    "React Native",
                    "Node.js",
                    "Real-time Updates",
                    "Mobile Development",
                  ],
                  icon: "🏨",
                  status: "Active",
                  features: [
                    "Real-time task coordination between managers and staff",
                    "Performance monitoring and analytics dashboard",
                    "Operational optimization with automated workflows",
                    "Mobile-first design for on-the-go management",
                  ],
                },
                {
                  title: "Food Delivery App",
                  description:
                    "Complete food delivery ecosystem including customer mobile app with real-time tracking and secure payment processing for seamless food ordering experience.",
                  tech: [
                    "React Native",
                    "Real-time Tracking",
                    "Payment Integration",
                    "Mobile UI/UX",
                  ],
                  icon: "🍽️",
                  status: "Active",
                  features: [
                    "Intuitive food ordering interface",
                    "Real-time delivery tracking and notifications",
                    "Secure payment processing and wallet integration",
                    "Restaurant discovery and menu browsing",
                  ],
                },
                {
                  title: "Church Management System",
                  description:
                    "A robust web-based system designed to streamline the administration of church activities, including member registration, sacraments, monthly contributions, and document management.",
                  tech: [
                    "Laravel",
                    "MySQL",
                    "AdminLTE",
                    "Role-Based Access",
                    "Web Development",
                  ],
                  icon: "⛪",
                  status: "Active",
                  features: [
                    "Member registration and profile management",
                    "Baptism, marriage, and death record tracking",
                    "Monthly contributions and payment tracking",
                    "Role-based access for admins, pastors, and members",
                    "Document and certificate generation and storage",
                  ],
                },
                {
                  title: "National Drug and Medicine Administration System",
                  description:
                    "A regulatory platform for managing medicine registration workflows, helping national authorities and pharmaceutical companies collaborate in a transparent and efficient approval process.",
                  tech: [
                    "Laravel",
                    "Vue.js",
                    "Workflow Automation",
                    "API Integration",
                    "Secure Authentication",
                  ],
                  icon: "💊",
                  status: "In Development",
                  features: [
                    "Medicine registration and approval workflows",
                    "Pharmaceutical company account management",
                    "Admin dashboard for reviewing and approving submissions",
                    "Notifications and status tracking for applications",
                    "Regulatory compliance and audit trail support",
                  ],
                },
                {
                  title: "Pharmacy Management System",
                  description:
                    "A full-featured system designed to manage pharmacy operations including inventory, sales, prescriptions, and supplier management. It streamlines daily workflows and enhances customer service in retail pharmacies.",
                  tech: ["Laravel", "Vue.js", "MySQL", "REST API", "Bootstrap"],
                  icon: "🧾",
                  status: "Completed",
                  features: [
                    "Inventory management with stock level alerts",
                    "Sales and billing with printable receipts",
                    "Prescription management and customer profiles",
                    "Supplier and purchase order tracking",
                    "Daily/Monthly reports on sales and stock",
                    "User roles for pharmacists, assistants, and admins",
                  ],
                },
                {
                  title: "Hospital Management System",
                  description:
                    "An end-to-end digital solution for managing hospital operations, including patient records, appointments, billing, laboratory, pharmacy, and staff roles. Designed to improve efficiency and data accuracy across departments.",
                  tech: [
                    "Laravel",
                    "Vue.js",
                    "MySQL",
                    "RESTful API",
                    "Bootstrap",
                    "Role-Based Access Control",
                  ],
                  icon: "🏥",
                  status: "Completed",
                  features: [
                    "Patient registration and medical records",
                    "Doctor appointment scheduling and calendar",
                    "Billing and payment management",
                    "Integrated pharmacy and laboratory modules",
                    "In-patient and out-patient workflow tracking",
                    "Admin dashboard with analytics and reports",
                    "Role-based access for doctors, nurses, staff, and admins",
                  ],
                },

                // {
                //   title: "Food Delivery Dashboard",
                //   description:
                //     "Comprehensive admin panel for managing restaurant operations, order processing, delivery coordination, and business analytics with advanced reporting capabilities.",
                //   tech: ["React.js", "Node.js", "Analytics", "Admin Dashboard"],
                //   icon: "📊",
                //   status: "Active",
                //   features: [
                //     "Restaurant and menu management system",
                //     "Order processing and delivery coordination",
                //     "Advanced analytics and business intelligence",
                //     "Customer and driver management tools",
                //   ],
                // },
                {
                  title: "Truck Dispatch Management",
                  description:
                    "Advanced logistics management solution providing real-time truck dispatching, intelligent route optimization, and comprehensive fleet management capabilities.",
                  tech: [
                    "React Native",
                    "GPS Integration",
                    "Route Optimization",
                    "Fleet Management",
                  ],
                  icon: "🚚",
                  status: "Active",
                  features: [
                    "Real-time truck tracking and GPS integration",
                    "Intelligent route planning and optimization",
                    "Driver assignment and task management",
                    "Delivery status monitoring and fleet analytics",
                  ],
                },
                {
                  title: "ERP and POS System",
                  description:
                    "Comprehensive Point of Sale and inventory management system with advanced reporting capabilities, designed for retail businesses and inventory optimization.",
                  tech: ["Laravel", "MySQL", "AngularJS", "PHP", "JavaScript"],
                  icon: "💰",
                  status: "Completed",
                  github: "https://github.com/saimenogm/simple-pos",
                  duration: "Jan 2019 - Jun 2023",
                  features: [
                    "Complete sales registration and receipt generation",
                    "Advanced inventory management with real-time tracking",
                    "Business analytics and performance insights",
                    "Multi-user support with role-based permissions",
                  ],
                },
                {
                  title: "Travel & Tourism ERP",
                  description:
                    "Specialized ERP system designed for travel agencies to manage finances, automate ticketing processes, and streamline tourism operations with API integrations.",
                  tech: [
                    "PHP",
                    "APIs",
                    "Financial Management",
                    "Booking Systems",
                  ],
                  icon: "✈️",
                  status: "Completed",
                  github: "https://github.com/saimenogm/Agency-Book",
                  duration: "Apr 2017 - Jul 2022",
                  features: [
                    "Comprehensive financial management for travel agencies",
                    "Automated ticketing and booking systems",
                    "Customer relationship management integration",
                    "Travel booking API integrations and processing",
                  ],
                },
              ].map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="project-card group"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-4xl">{project.icon}</div>
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        project.status === "Active"
                          ? "bg-green-500/20 text-green-400 border border-green-500/30"
                          : "bg-blue-500/20 text-blue-400 border border-blue-500/30"
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold mb-3 text-slate-200 group-hover:text-electric-blue transition-colors">
                    {project.title}
                  </h3>

                  {project.duration && (
                    <p className="text-sm text-slate-500 mb-3">
                      {project.duration}
                    </p>
                  )}

                  <p className="text-slate-400 mb-4 group-hover:text-slate-300 transition-colors leading-relaxed text-sm">
                    {project.description}
                  </p>

                  <div className="mb-4">
                    <h4 className="text-xs font-semibold text-slate-300 mb-2">
                      Key Features:
                    </h4>
                    <ul className="text-xs text-slate-400 space-y-1">
                      {project.features
                        .slice(0, 3)
                        .map((feature, featureIndex) => (
                          <li
                            key={featureIndex}
                            className="flex items-start gap-2"
                          >
                            <span className="text-electric-blue mt-0.5">•</span>
                            {feature}
                          </li>
                        ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="skill-tag text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {project.github && (
                    <div className="flex gap-4">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-slate-400 hover:text-electric-blue transition-colors group/link"
                      >
                        <Github
                          size={16}
                          className="group-hover/link:animate-spin"
                        />
                        <span className="font-semibold text-sm">View Code</span>
                      </a>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* AI/ML Projects Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h3 className="text-3xl font-bold text-electric-blue mb-8 flex items-center gap-3">
              <Brain className="w-8 h-8" />
              AI & Machine Learning Projects
            </h3>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {[
                {
                  title: "AI Assistant for Visually Impaired People",
                  description:
                    "A comprehensive machine learning project that assists visually impaired individuals through AI-powered voice and vision technologies, featuring object recognition, scene summarization, and voice interaction capabilities.",
                  tech: [
                    "Computer Vision",
                    "NLP",
                    "Speech-to-Text",
                    "AI Agents",
                    "LLMs",
                  ],
                  icon: <Eye className="w-8 h-8" />,
                  status: "Active",
                  github:
                    "https://github.com/saimenogm/AI-Assistant-for-Visually-Impaired-People",
                  features: [
                    "Real-time object recognition and description",
                    "Scene analysis and intelligent summarization",
                    "Voice-controlled AI assistant interface",
                    "Speech-to-text conversion capabilities",
                  ],
                },
                {
                  title: "AI Enhanced Patient Safety Monitoring",
                  description:
                    "Advanced healthcare monitoring system leveraging AI to enhance patient safety through intelligent data analysis and predictive health monitoring for medical products and patient care.",
                  tech: [
                    "Machine Learning",
                    "React.js",
                    "Python",
                    "Next.js",
                    "TypeScript",
                  ],
                  icon: <Shield className="w-8 h-8" />,
                  status: "Active",
                  features: [
                    "Predictive patient safety analytics",
                    "Real-time health monitoring dashboards",
                    "AI-powered risk assessment algorithms",
                    "Integration with medical device data",
                  ],
                },
                {
                  title: "Medical Data Analyzer",
                  description:
                    "Intelligent healthcare analytics platform that processes medical information using advanced NLP techniques, extracting key entities and providing diagnostic summaries for hospitals and pharmacies.",
                  tech: ["NLP", "Machine Learning", "SpaCy", "NER", "Python"],
                  icon: <Database className="w-8 h-8" />,
                  status: "Active",
                  github: "https://github.com/saimenogm/Medical-AI",
                  features: [
                    "Medical information extraction and analysis",
                    "Named Entity Recognition for healthcare data",
                    "Automated diagnosis and medication summaries",
                    "Clinical decision support systems",
                  ],
                },
                {
                  title: "Restaurant Profit & Sentiment Analysis",
                  description:
                    "Data-driven business intelligence platform analyzing restaurant performance through financial metrics and customer sentiment, providing actionable insights for restaurant optimization.",
                  tech: ["Machine Learning", "NLP", "Python", "ETL", "APIs"],
                  icon: <Brain className="w-8 h-8" />,
                  status: "Completed",
                  github:
                    "https://github.com/saimenogm/Restaurant-Sentiment-Analysis",
                  features: [
                    "Financial health analysis and profit optimization",
                    "Multi-platform sentiment analysis (Yelp, Google, social media)",
                    "Revenue correlation with customer satisfaction",
                    "Predictive analytics for business growth",
                  ],
                },
              ].map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="project-card group"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-electric-blue group-hover:animate-glow transition-all duration-300">
                      {project.icon}
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        project.status === "Active"
                          ? "bg-green-500/20 text-green-400 border border-green-500/30"
                          : "bg-blue-500/20 text-blue-400 border border-blue-500/30"
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold mb-4 text-slate-200 group-hover:text-electric-blue transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-slate-400 mb-6 group-hover:text-slate-300 transition-colors leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-slate-300 mb-3">
                      Key Features:
                    </h4>
                    <ul className="text-sm text-slate-400 space-y-1">
                      {project.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-start gap-2"
                        >
                          <span className="text-electric-blue mt-1">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="skill-tag-electric text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-slate-400 hover:text-electric-blue transition-colors group/link"
                      >
                        <Github
                          size={18}
                          className="group-hover/link:animate-spin"
                        />
                        <span className="font-semibold text-sm">View Code</span>
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Additional Projects Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-3xl font-bold text-electric-blue mb-8 flex items-center gap-3">
              <Zap className="w-8 h-8" />
              Other Notable Projects
            </h3>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Energy Prediction and Optimizer",
                  description:
                    "Machine learning project that analyzes solar energy input and usage patterns, providing intelligent recommendations for optimal energy consumption and cost savings.",
                  tech: [
                    "Machine Learning",
                    "Energy Analytics",
                    "Optimization Algorithms",
                    "Python",
                  ],
                  icon: "⚡",
                  status: "Completed",
                  github:
                    "https://github.com/saimenogm/Power-Plant-Energy-Prediction",
                  duration: "Sep 2023 - Feb 2024",
                  features: [
                    "Solar energy input analysis and forecasting",
                    "Energy usage pattern recognition and optimization",
                    "Cost-effective energy consumption recommendations",
                    "Predictive analytics for energy planning",
                  ],
                },
                {
                  title: "College Search Engine",
                  description:
                    "Advanced search engine developed for educational institutions, featuring ElasticSearch integration, OCR capabilities, and comprehensive academic information retrieval.",
                  tech: [
                    "ElasticSearch",
                    "OCR",
                    "Search Algorithms",
                    "Text Processing",
                  ],
                  icon: "🔍",
                  status: "Completed",
                  duration: "Jun 2017 - Feb 2018",
                  features: [
                    "Advanced search system using ElasticSearch",
                    "OCR integration for document processing",
                    "Optimized text search and content indexing",
                    "Educational institution database management",
                  ],
                },
              ].map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="project-card group"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-4xl">{project.icon}</div>
                    <span className="px-3 py-1 rounded-full text-sm font-semibold bg-blue-500/20 text-blue-400 border border-blue-500/30">
                      {project.status}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold mb-3 text-slate-200 group-hover:text-electric-blue transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-sm text-slate-500 mb-4">
                    {project.duration}
                  </p>

                  <p className="text-slate-400 mb-6 group-hover:text-slate-300 transition-colors leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-slate-300 mb-3">
                      Key Features:
                    </h4>
                    <ul className="text-sm text-slate-400 space-y-1">
                      {project.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-start gap-2"
                        >
                          <span className="text-electric-blue mt-1">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="skill-tag-electric text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {project.github && (
                    <div className="flex gap-4">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-slate-400 hover:text-electric-blue transition-colors group/link"
                      >
                        <Github
                          size={18}
                          className="group-hover/link:animate-spin"
                        />
                        <span className="font-semibold text-sm">View Code</span>
                      </a>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 bg-slate-900/40 border-t border-blue-500/20"
      >
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-8">
              <span className="gradient-text metal-shine">
                Let's Work Together
              </span>
            </h2>
            <div className="section-divider" />
            <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Ready to bring your ideas to life? Let's discuss how we can create
              something
              <span className="text-electric-blue font-semibold">
                {" "}
                extraordinary
              </span>{" "}
              together with
              <span className="text-blue-400 font-semibold">
                {" "}
                cutting-edge technology
              </span>
              .
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <a href="mailto:your.email@example.com" className="btn-optimus">
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
                {
                  icon: Github,
                  href: "https://github.com/saimenogm",
                  label: "GitHub",
                },
                {
                  icon: Linkedin,
                  href: "https://www.linkedin.com/in/simon-manna/",
                  label: "LinkedIn",
                },
                {
                  icon: Mail,
                  href: "mailto:simonmannait@gmail.com",
                  label: "Email",
                },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    social.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="social-link group"
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon
                    size={24}
                    className="text-slate-400 group-hover:text-electric-blue transition-colors"
                  />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
      {/* Footer */}
      <footer className="py-8 text-center border-t border-blue-500/20 bg-slate-900/60">
        <p className="text-slate-500">
          © 2025{" "}
          <span className="text-electric-blue font-semibold">Simon DEV</span>.
        </p>
      </footer>
    </div>
  );
}
