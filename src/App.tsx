import React, { useState, useEffect } from 'react';
import { 
  Code, 
  User, 
  Briefcase, 
  GraduationCap, 
  Award, 
  ExternalLink, 
  Github, 
  Linkedin, 
  Mail, 
  MapPin, 
  Calendar,
  ChevronDown,
  Menu,
  X,
  Star,
  ArrowRight
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'education', 'projects', 'certifications', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const navigation = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' },
    { id: 'projects', label: 'Projects' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'contact', label: 'Contact' }
  ];

  const skills = [
    'Python', 'Java', 'C Programming', 'JavaScript', 'React', 'Node.js',
    'HTML/CSS', 'SQL', 'MySQL', 'PostgreSQL', 'MATLAB',
    'Machine Learning', 'Data Science', 'Industrial Automation', 'PLC Programming',
    'Git/GitHub', 'Microsoft Excel', 'Tableau', 'Problem Solving'
  ];

  const experiences = [
    {
      company: 'IVAEX',
      role: 'Digital Literacy Camp - Promoter',
      duration: 'Apr 2025 - Present',
      location: 'Remote',
      type: 'Part-time',
      skills: ['Marketing', 'Sponsorship'],
      description: 'Leading promotional activities and securing sponsorships for digital literacy initiatives.'
    },
    {
      company: 'IVAEX',
      role: 'Digital Literacy Camp - Mentor',
      duration: 'Feb 2025 - Present',
      location: 'On-site',
      type: 'Part-time',
      skills: ['Mentoring', 'Teaching'],
      description: 'Mentoring students in digital literacy programs and facilitating learning sessions.'
    },
    {
      company: 'Bosch Rexroth',
      role: 'Industrial Automation Intern',
      duration: 'Jun 2025',
      location: 'On-site',
      type: 'Internship',
      skills: ['Hydraulics', 'Sensorics', 'PLC Programming', 'Pneumatics'],
      description: 'Gained hands-on experience in industrial automation systems and PLC programming.'
    }
  ];

  const education = [
    {
      institution: 'College of Engineering Trivandrum',
      degree: 'B.Tech Major, Computer Science and Engineering',
      duration: 'Sep 2023 - Sep 2027',
      grade: 'S CGPA: 9.00/10',
      skills: ['Problem Solving', 'Programming', 'Database Management', 'Software Engineering']
    },
    {
      institution: 'College of Engineering Trivandrum',
      degree: 'B.Tech Honours, Machine Learning',
      duration: 'Sep 2024 - Sep 2027',
      grade: 'Ongoing',
      skills: ['Machine Learning', 'Mathematics', 'Data Analysis']
    },
    {
      institution: 'College of Engineering Trivandrum',
      degree: 'B.Tech Minor, Automobile Engineering',
      duration: 'Jul 2024 - Sep 2027',
      grade: 'P CGPA: 5.5/10',
      skills: ['Automotive Engineering', 'Mechanical Systems']
    }
  ];

  const certifications = [
    'MathWorks - MATLAB Onramp',
    'Cognitive Class - Data Science 101',
    'Cognitive Class - Python 101 for Data Science',
    'HackerRank - Java (Basic)',
    'HackerRank - Python (Basic)',
    'HackerRank - SQL (Basic)',
    'Bosch Rexroth - Industrial Automation',
    'Pupilfirst - Web Development 101',
    'SEBI - Investor Certification',
    'Deloitte - Data Analytics Job Simulation'
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-md border-b border-yellow-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                JVP
              </h1>
            </div>
            
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navigation.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                      activeSection === item.id
                        ? 'text-black bg-yellow-400 shadow-lg shadow-yellow-400/25'
                        : 'text-gray-300 hover:text-yellow-400 hover:bg-gray-900'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-yellow-400 hover:bg-gray-900 transition-colors"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/95 border-t border-yellow-500/20">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors ${
                    activeSection === item.id
                      ? 'text-black bg-yellow-400'
                      : 'text-gray-300 hover:text-yellow-400 hover:bg-gray-900'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      <main>
        {/* Hero Section */}
        <section id="home" className="pt-16 min-h-screen flex items-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 via-transparent to-yellow-400/5"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
            <div className="text-center">
              <div className="mb-8">
                <div className="w-40 h-40 mx-auto bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mb-8 shadow-2xl shadow-yellow-400/25">
                  <User size={80} className="text-black" />
                </div>
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                  JIL VARGHESE
                  <span className="block bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                    PALLIYAN
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 mb-2">He/Him</p>
                <div className="flex items-center justify-center space-x-2 text-lg md:text-xl text-yellow-400 font-semibold mb-8">
                  <Star size={20} className="text-yellow-400" />
                  <span>Computer Science Student at CET</span>
                  <span className="text-gray-500">|</span>
                  <span>Mentor at IVAEX</span>
                  <Star size={20} className="text-yellow-400" />
                </div>
              </div>

              <div className="max-w-4xl mx-auto mb-12">
                <p className="text-xl text-gray-300 leading-relaxed">
                  A passionate Computer Science Engineering student with expertise in automation, 
                  creativity, and adaptability. Ready to take on any challenge and thrive in dynamic environments.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
                <a
                  href="https://www.linkedin.com/in/jil-varghese-palliyan/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center px-8 py-4 bg-yellow-400 text-black font-bold rounded-lg hover:bg-yellow-300 transition-all duration-300 shadow-lg shadow-yellow-400/25 hover:shadow-yellow-400/40 hover:scale-105"
                >
                  <Linkedin className="mr-3 group-hover:scale-110 transition-transform" size={24} />
                  Connect on LinkedIn
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </a>
                <a
                  href="https://github.com/JVP555"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center px-8 py-4 bg-transparent border-2 border-yellow-400 text-yellow-400 font-bold rounded-lg hover:bg-yellow-400 hover:text-black transition-all duration-300 hover:scale-105"
                >
                  <Github className="mr-3 group-hover:scale-110 transition-transform" size={24} />
                  View GitHub
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </a>
              </div>

              <button
                onClick={() => scrollToSection('about')}
                className="animate-bounce text-yellow-400 hover:text-yellow-300 transition-colors"
              >
                <ChevronDown size={40} />
              </button>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">About Me</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto"></div>
            </div>

            <div className="max-w-5xl mx-auto">
              <div className="bg-gradient-to-r from-yellow-400/10 to-yellow-600/10 rounded-2xl p-8 mb-12 border border-yellow-400/20">
                <blockquote className="text-2xl md:text-3xl font-medium text-white text-center italic mb-6">
                  "It's okay to be known as the joker—it's the only card that can substitute any other."
                </blockquote>
                <p className="text-center text-yellow-400 font-bold text-lg">— JIL</p>
              </div>

              <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                <div>
                  <h3 className="text-2xl font-bold text-yellow-400 mb-6">My Philosophy</h3>
                  <p className="text-lg leading-relaxed text-gray-300 mb-6">
                    As a Computer Science Engineering student with a passion for automation, creativity, and adaptability, 
                    I see myself not just as a builder of solutions, but as a wildcard—ready to take on any role, 
                    connect unexpected dots, and thrive in dynamic environments.
                  </p>
                  <p className="text-lg leading-relaxed text-gray-300">
                    From programming PLCs to crafting pixel-perfect React interfaces, from troubleshooting complex code 
                    to designing meaningful visuals, I embrace the challenge of versatility. I believe in staying curious, 
                    sharp, and quietly confident—just like the joker in the deck.
                  </p>
                </div>
                <div className="bg-black/50 rounded-xl p-8 border border-yellow-400/20">
                  <h3 className="text-2xl font-bold text-yellow-400 mb-6">Quick Facts</h3>
                  <ul className="space-y-4 text-gray-300">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                      <span>CGPA: 9.00/10 in Computer Science</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                      <span>Active Mentor at IVAEX</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                      <span>Industrial Automation Certified</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                      <span>Full-Stack Developer</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Skills */}
              <div>
                <h3 className="text-3xl font-bold text-white mb-8 text-center">Technical Arsenal</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {skills.map((skill, index) => (
                    <div
                      key={index}
                      className="group bg-black/50 border border-gray-700 rounded-lg p-4 text-center hover:border-yellow-400 hover:bg-yellow-400/10 transition-all duration-300 hover:scale-105"
                    >
                      <span className="text-gray-300 group-hover:text-yellow-400 font-medium transition-colors">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20 bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Professional Experience</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto"></div>
            </div>

            <div className="max-w-5xl mx-auto">
              {experiences.map((exp, index) => (
                <div key={index} className="mb-8 group">
                  <div className="bg-gray-900 border border-gray-700 rounded-xl p-8 hover:border-yellow-400/50 hover:bg-gray-800/50 transition-all duration-300">
                    <div className="flex items-start space-x-6">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <Briefcase className="text-black" size={28} />
                        </div>
                      </div>
                      <div className="flex-grow">
                        <h3 className="text-2xl font-bold text-white mb-2">{exp.role}</h3>
                        <p className="text-xl font-semibold text-yellow-400 mb-3">{exp.company}</p>
                        <p className="text-gray-300 mb-4 leading-relaxed">{exp.description}</p>
                        <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-4">
                          <span className="flex items-center bg-black/50 px-3 py-1 rounded-full">
                            <Calendar size={16} className="mr-2" />
                            {exp.duration}
                          </span>
                          <span className="flex items-center bg-black/50 px-3 py-1 rounded-full">
                            <MapPin size={16} className="mr-2" />
                            {exp.location}
                          </span>
                          <span className="px-3 py-1 bg-yellow-400/20 text-yellow-400 rounded-full text-xs font-bold">
                            {exp.type}
                          </span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {exp.skills.map((skill, skillIndex) => (
                            <span
                              key={skillIndex}
                              className="px-3 py-1 bg-yellow-400/10 text-yellow-400 border border-yellow-400/30 rounded-full text-sm font-medium"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-20 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Academic Journey</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto"></div>
            </div>

            <div className="max-w-5xl mx-auto">
              {education.map((edu, index) => (
                <div key={index} className="mb-8 group">
                  <div className="bg-black/50 border border-gray-700 rounded-xl p-8 hover:border-yellow-400/50 hover:bg-black/70 transition-all duration-300">
                    <div className="flex items-start space-x-6">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <GraduationCap className="text-black" size={28} />
                        </div>
                      </div>
                      <div className="flex-grow">
                        <h3 className="text-2xl font-bold text-white mb-2">{edu.degree}</h3>
                        <p className="text-xl font-semibold text-yellow-400 mb-3">{edu.institution}</p>
                        <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-4">
                          <span className="flex items-center bg-gray-800 px-3 py-1 rounded-full">
                            <Calendar size={16} className="mr-2" />
                            {edu.duration}
                          </span>
                          <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full font-bold">
                            {edu.grade}
                          </span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {edu.skills.map((skill, skillIndex) => (
                            <span
                              key={skillIndex}
                              className="px-3 py-1 bg-yellow-400/10 text-yellow-400 border border-yellow-400/30 rounded-full text-sm font-medium"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Featured Projects</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto"></div>
            </div>

            <div className="max-w-5xl mx-auto">
              <div className="bg-gradient-to-br from-gray-900 to-black border border-yellow-400/30 rounded-2xl p-8 shadow-2xl shadow-yellow-400/10 hover:shadow-yellow-400/20 transition-all duration-300">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-2xl flex items-center justify-center">
                      <Code className="text-black" size={40} />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-3xl font-bold text-white mb-3">Simple Learning Management System</h3>
                    <p className="text-yellow-400 font-semibold mb-1">May 2025</p>
                    <div className="prose prose-gray max-w-none mb-8">
                      <p className="text-gray-300 leading-relaxed text-lg">
                        Built a comprehensive full-stack Learning Management System using Node.js, designed to deliver 
                        a complete online education experience for both educators and students with modern UI/UX principles.
                      </p>
                    </div>

                    <div className="mb-8">
                      <h4 className="font-bold text-yellow-400 mb-4 text-xl">🚀 Key Features & Achievements:</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-black/50 rounded-lg p-4 border border-gray-700">
                          <h5 className="text-white font-semibold mb-2">🔐 Authentication System</h5>
                          <p className="text-gray-400 text-sm">Role-based access control with secure sign-up/sign-in</p>
                        </div>
                        <div className="bg-black/50 rounded-lg p-4 border border-gray-700">
                          <h5 className="text-white font-semibold mb-2">👨‍🏫 Educator Dashboard</h5>
                          <p className="text-gray-400 text-sm">Complete course, chapter & page management system</p>
                        </div>
                        <div className="bg-black/50 rounded-lg p-4 border border-gray-700">
                          <h5 className="text-white font-semibold mb-2">🎓 Student Portal</h5>
                          <p className="text-gray-400 text-sm">Course enrollment with progress tracking & completion</p>
                        </div>
                        <div className="bg-black/50 rounded-lg p-4 border border-gray-700">
                          <h5 className="text-white font-semibold mb-2">🔍 Smart Features</h5>
                          <p className="text-gray-400 text-sm">Search functionality & popularity tracking</p>
                        </div>
                        <div className="bg-black/50 rounded-lg p-4 border border-gray-700">
                          <h5 className="text-white font-semibold mb-2">🌙 Modern UI</h5>
                          <p className="text-gray-400 text-sm">Dark mode & fully responsive Tailwind CSS design</p>
                        </div>
                        <div className="bg-black/50 rounded-lg p-4 border border-gray-700">
                          <h5 className="text-white font-semibold mb-2">🧪 Quality Assurance</h5>
                          <p className="text-gray-400 text-sm">Comprehensive testing with Jest & Supertest</p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-bold text-yellow-400 mb-4 text-lg">Technology Stack:</h4>
                      <div className="flex flex-wrap gap-3">
                        {['Node.js', 'PostgreSQL', 'Sequelize', 'Tailwind CSS', 'Jest', 'Authentication', 'Full-Stack', 'REST API'].map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-4 py-2 bg-yellow-400/20 text-yellow-400 border border-yellow-400/40 rounded-full text-sm font-bold hover:bg-yellow-400/30 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section id="certifications" className="py-20 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Certifications & Achievements</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto"></div>
            </div>

            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="group bg-black/50 border border-gray-700 rounded-xl p-6 hover:border-yellow-400/50 hover:bg-black/70 transition-all duration-300 hover:scale-105"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <Award className="text-black" size={24} />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-bold text-white text-sm leading-tight group-hover:text-yellow-400 transition-colors">
                          {cert}
                        </h3>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 via-transparent to-yellow-600/5"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Let's Connect</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto"></div>
            </div>

            <div className="max-w-4xl mx-auto text-center">
              <p className="text-2xl text-gray-300 mb-12 leading-relaxed">
                Ready to collaborate, discuss opportunities, or just have a great conversation about technology? 
                <span className="text-yellow-400 font-semibold"> Let's make something amazing together!</span>
              </p>

              <div className="flex flex-col sm:flex-row gap-8 justify-center mb-16">
                <a
                  href="https://www.linkedin.com/in/jil-varghese-palliyan/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center px-10 py-5 bg-yellow-400 text-black font-bold rounded-xl hover:bg-yellow-300 transition-all duration-300 shadow-2xl shadow-yellow-400/25 hover:shadow-yellow-400/40 hover:scale-105"
                >
                  <Linkedin className="mr-4 group-hover:scale-110 transition-transform" size={28} />
                  LinkedIn Profile
                  <ExternalLink className="ml-3 group-hover:translate-x-1 transition-transform" size={20} />
                </a>
                <a
                  href="https://github.com/JVP555"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center px-10 py-5 bg-transparent border-2 border-yellow-400 text-yellow-400 font-bold rounded-xl hover:bg-yellow-400 hover:text-black transition-all duration-300 hover:scale-105"
                >
                  <Github className="mr-4 group-hover:scale-110 transition-transform" size={28} />
                  GitHub Profile
                  <ExternalLink className="ml-3 group-hover:translate-x-1 transition-transform" size={20} />
                </a>
              </div>

              <div className="bg-gradient-to-r from-yellow-400/10 to-yellow-600/10 backdrop-blur-sm rounded-2xl p-8 border border-yellow-400/20">
                <div className="flex items-center justify-center space-x-3 text-white mb-6">
                  <MapPin size={24} className="text-yellow-400" />
                  <span className="text-xl font-semibold">Ernakulam, Kerala, India</span>
                </div>
                <p className="text-gray-300 text-lg">
                  Open to opportunities in <span className="text-yellow-400 font-semibold">Software Development</span>, 
                  <span className="text-yellow-400 font-semibold"> Data Science</span>, and 
                  <span className="text-yellow-400 font-semibold"> Industrial Automation</span>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-black border-t border-yellow-400/20 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-400">
              © 2025 <span className="text-yellow-400 font-semibold">JIL VARGHESE PALLIYAN</span>. 
              Designed with passion and precision.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;