 
import { useState, useEffect } from 'react';
import { 
  Code, 
  User, 
  Briefcase, 
  GraduationCap, 
  Award, 
  ExternalLink, 
  Github, 
  Linkedin, 
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

  const skillGroups = {
    "Programming Languages": ['Python', 'Java', 'C Programming', 'JavaScript'],
    "Web & Full-Stack": ['React', 'Node.js', 'HTML/CSS'],
    "Databases & Querying": ['SQL', 'MySQL', 'PostgreSQL'],
    "Engineering & Automation": ['MATLAB', 'Industrial Automation', 'PLC Programming'],
    "Data & Analytics": ['Machine Learning', 'Data Science', 'Tableau'],
    "Tools & Utilities": ['Git/GitHub', 'Microsoft Excel', 'Problem Solving']
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Programming Languages':
        return '💻';
      case 'Web & Full-Stack':
        return '🌐';
      case 'Databases & Querying':
        return '🗄️';
      case 'Engineering & Automation':
        return '🤖';
      case 'Data & Analytics':
        return '📊';
      case 'Tools & Utilities':
        return '🛠️';
      default:
        return '✨';
    }
  };




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
    {
      title: "Calculations with Vectors and Matrices",
      issuer: "MathWorks",
      date: "Jun 2025",
      skills: ["Matrices", "Vectors", "MATLAB"],
    },
    {
      title: "Circuit Simulation Onramp",
      issuer: "MathWorks",
      date: "Jun 2025",
      skills: ["Circuit Simulation", "MATLAB", "Simulink"],
    },
    {
      title: "Data Science 101",
      issuer: "Cognitive Class",
      date: "Jun 2025",
      credentialId: "f1fafdff75b24c5a9b2f0529de5735d1",
    },
    {
      title: "Data Science Tools",
      issuer: "Cognitive Class",
      date: "Jun 2025",
      credentialId: "b052850b41ce41ffb1f27efd94a54462",
    },
    {
      title: "Graphic Design Essentials",
      issuer: "Canva",
      date: "Jun 2025",
      credentialId: "006a8a",
    },
    {
      title: "Industrial Automation Internship",
      issuer: "Bosch Rexroth",
      date: "Jun 2025",
      skills: [
        "Industrial Automation",
        "Pneumatics",
        "Sensorics",
        "Hydraulics",
        "PLC",
      ],
    },
    {
      title: "MATLAB Coder Onramp",
      issuer: "MathWorks",
      date: "Jun 2025",
      skills: ["C", "C++", "MATLAB Coder", "MATLAB"],
    },
    {
      title: "MATLAB Desktop Tools & Troubleshooting",
      issuer: "MathWorks",
      date: "Jun 2025",
      skills: [
        "Technical Problem Solving",
        "MATLAB Debugging",
        "Troubleshooting",
      ],
    },
    {
      title: "MATLAB Onramp",
      issuer: "MathWorks",
      date: "Jun 2025",
      skills: ["MATLAB"],
    },
    {
      title: "Python 101 for Data Science",
      issuer: "Cognitive Class",
      date: "Jun 2025",
      credentialId: "df761c712bfe4236a9e6dbbc5b8eb8a5",
    },
    {
      title: "R for Data Science",
      issuer: "Cognitive Class",
      date: "Jun 2025",
      credentialId: "6c4295335f954f95b42ab90fcaf94a90",
    },
    {
      title: "SQL and Relational Databases 101",
      issuer: "Cognitive Class",
      date: "Jun 2025",
      credentialId: "569f2e4f2b23462ea44daff3f5ceba5c",
    },
    {
      title: "Web Development 101",
      issuer: "Pupilfirst",
      date: "Apr 2025",
      credentialId: "250429-1ANV96",
    },
    {
      title: "Ansys Simulation Workshop",
      issuer: "ASME CET",
      date: "Mar 2025",
      skills: ["Ansys Workbench", "Mechanical Engineering"],
    },
    {
      title: "Business Analytics with Excel",
      issuer: "Simplilearn",
      date: "Mar 2025",
      credentialId: "8024620",
    },
    {
      title: "Introduction to MS Excel",
      issuer: "Simplilearn",
      date: "Mar 2025",
      credentialId: "8028215",
    },
    {
      title: "Deloitte Cyber Job Simulation",
      issuer: "Forage",
      date: "Mar 2025",
      credentialId: "cGGZzsvBXshDYbRyt",
    },
    {
      title: "Deloitte Data Analytics Simulation",
      issuer: "Forage",
      date: "Mar 2025",
      credentialId: "ysNwxXt3take4efTL",
    },
    {
      title: "Java (Basic)",
      issuer: "HackerRank",
      date: "Mar 2025",
      credentialId: "8934680A8BBD",
    },
    {
      title: "Python (Basic)",
      issuer: "HackerRank",
      date: "Mar 2025",
      credentialId: "DA8DA16101FF",
    },
    {
      title: "Problem Solving (Basic)",
      issuer: "HackerRank",
      date: "Mar 2025",
      credentialId: "34FE29D2BFB9",
    },
    {
      title: "SQL (Basic)",
      issuer: "HackerRank",
      date: "Mar 2025",
      credentialId: "D43EC23A8B9B",
    },
    {
      title: "SEBI Investor Certification Exam",
      issuer: "NISM",
      date: "Mar 2025",
      credentialId: "NISM20240000061501",
    },
    {
      title: "DRISHTI 24 Sponsorship Volunteer",
      issuer: "College of Engineering Trivandrum",
      date: "Apr 2024",
      skills: ["Sponsorship", "Strategy"],
    },
  ];


  const projects = [
    {
      title: "Smarter Tasks – Task & Project Management Platform",
      date: "May 2025 - Jun 2025",
      description:
        "Built a scalable, modern web application for task and project management using React + TypeScript, featuring advanced routing, protected views, and dynamic data context.",
      features: [
        {
          title: "🔐 Authentication System",
          detail: "Sign In, Sign Up, and Logout functionality with protected access",
        },
        {
          title: "🔄 Context + Reducers",
          detail: "Global state management for Projects, Tasks, Comments, Members, and Theme",
        },
        {
          title: "🧩 Modular Routing",
          detail: "Nested and protected routes using `react-router-dom` (v6) for account sections",
        },
        {
          title: "✨ Theme Toggle",
          detail: "Light/Dark mode support with React Context integration",
        },
        {
          title: "📦 Drag-and-Drop Task Boards",
          detail: "Project-based task organization with dynamic drag-and-drop functionality",
        },
        {
          title: "⚙️ Persistent State",
          detail: "Initial data storage and updates using a `useLocalStorage` hook",
        },
        {
          title: "🛠️ Modular Architecture",
          detail: "Well-structured folders with separation of concerns (components, context, routes)",
        },
      ],
      techStack: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "React Router v6",
        "Context API",
        "Vite",
        "Bun",
        "Netlify",
      ],
    },
    {
      title: "Full-Stack Learning Management System (LMS)",
      date: "May 2025",
      description:
        "Built a full-featured Learning Management System (LMS) using Node.js, focused on delivering a seamless educational experience for educators and students.",
      features: [
        {
          title: "🔐 Authentication",
          detail: "Secure sign-up/sign-in with role-based access (Educator & Student)",
        },
        {
          title: "📚 Educator Dashboard",
          detail: "Create, edit, and manage courses, chapters, and pages",
        },
        {
          title: "🎓 Student Dashboard",
          detail: "Enroll in courses, view lessons, and track progress",
        },
        {
          title: "🔍 Search & Metrics",
          detail: "Full-text course search and popularity tracking",
        },
        {
          title: "🌓 Dark Mode",
          detail: "Toggleable dark mode for better accessibility",
        },
        {
          title: "📱 Responsive UI",
          detail: "Built using Tailwind CSS for mobile-first design",
        },
        {
          title: "🗄️ Data Layer",
          detail: "PostgreSQL with Sequelize ORM for scalable data management",
        },
        {
          title: "🧪 Testing",
          detail: "Backend routes tested with Jest and Supertest",
        },
      ],
      techStack: [
        "Node.js",
        "Express.js",
        "Sequelize",
        "PostgreSQL",
        "Tailwind CSS",
        "EJS",
        "Jest",
        "Render",
      ],
    },
    {
      title: "To-do Manager – Task Management Web App",
      date: "Apr 2025",
      description:
        "Built a clean and responsive To-do Manager app using Node.js and EJS, enabling users to securely manage daily tasks and track their progress.",
      features: [
        {
          title: "🔐 User Authentication",
          detail: "Sign-up/sign-in system with session-based login",
        },
        {
          title: "✅ Task Management",
          detail: "Create, view, complete, and delete todos",
        },
        {
          title: "📅 Categorized Task View",
          detail: "Overdue, Due Today, Due Later, and Completed sections",
        },
        {
          title: "🧑‍💼 User-Based Storage",
          detail: "Todos linked to authenticated users only",
        },
        {
          title: "🎨 Modern UI",
          detail: "Responsive interface styled with Tailwind CSS",
        },
        {
          title: "📂 Modular Views",
          detail: "Structured EJS templates: Header, Footer, Notifications",
        },
        {
          title: "🧪 Automated Tests",
          detail: "Unit tested using Jest for core functionality",
        },
      ],
      techStack: [
        "Node.js",
        "Express.js",
        "PostgreSQL",
        "Sequelize",
        "EJS",
        "Tailwind CSS",
        "Jest",
        "Render",
      ],
    },
    {
      title: "User Registration Form with Validation and Local Storage",
      date: "Apr 2025",
      description:
        "Developed a responsive user registration form using HTML, CSS, and JavaScript, featuring real-time validations and persistent local storage.",
      features: [
        {
          title: "🎂 Age Validation",
          detail: "Real-time check for age range (18–55 years)",
        },
        {
          title: "📧 Email Validation",
          detail: "Regex-based email input check with custom error handling",
        },
        {
          title: "📜 Terms & Conditions",
          detail: "Form requires consent before submission",
        },
        {
          title: "💾 Local Storage Integration",
          detail: "Persist and render user data via `localStorage`",
        },
        {
          title: "🛡️ Secure Input Handling",
          detail: "Custom validity messages for better UX",
        },
      ],
      techStack: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "Web Storage API",
        "GitHub Pages",
      ],
    },
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
        <section id="home" className="pt-8 min-h-screen flex items-center relative overflow-hidden bg-gradient-to-br from-gray-950 via-black to-gray-900">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-300/10 via-transparent to-amber-500/10 pointer-events-none"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
            <div className="text-center">
              <div className="mb-10">
                <div className="w-40 h-40 mx-auto bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center mb-8 shadow-2xl shadow-amber-500/30 backdrop-blur-lg">
                  <User size={80} className="text-black" />
                </div>

                <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 leading-tight tracking-tight">
                  JIL VARGHESE
                  <span className="block bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                    PALLIYAN
                  </span>
                </h1>
                <p className="text-lg md:text-xl text-gray-400 mb-2">He / Him</p>

                <div className="flex items-center justify-center space-x-3 text-md md:text-lg text-amber-400 font-semibold mb-10">
                  <Star size={18} className="text-amber-400" />
                  <span>Computer Science Student at CET</span>
                  <span className="text-gray-600">|</span>
                  <span>Mentor at IVAEX</span>
                  <Star size={18} className="text-amber-400" />
                </div>
              </div>

              <div className="max-w-3xl mx-auto mb-12">
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                  Passionate about software, systems, and smart design. Thrives in high-performance, creative, and fast-paced environments.
                  Blending <span className="text-amber-400 font-medium">tech, logic, and elegance</span> to build better experiences.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-14">
                <a
                  href="https://www.linkedin.com/in/jil-varghese-palliyan/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center px-8 py-4 bg-amber-400 text-black font-semibold rounded-lg hover:bg-amber-300 transition-all duration-300 shadow-md hover:shadow-amber-500/40 hover:scale-[1.03]"
                >
                  <Linkedin className="mr-3 group-hover:scale-110 transition-transform" size={24} />
                  Connect on LinkedIn
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </a>

                <a
                  href="https://github.com/JVP555"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center px-8 py-4 border-2 border-amber-400 text-amber-400 font-semibold rounded-lg hover:bg-amber-400 hover:text-black transition-all duration-300 hover:scale-[1.03]"
                >
                  <Github className="mr-3 group-hover:scale-110 transition-transform" size={24} />
                  View GitHub
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </a>
              </div>

              <button
                onClick={() => scrollToSection('about')}
                className="animate-bounce text-amber-400 hover:text-amber-300 transition-colors"
              >
                <ChevronDown size={40} />
              </button>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-gray-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">About Me</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto"></div>
            </div>

            <div className="max-w-5xl mx-auto">
              <div className="bg-gradient-to-r from-amber-400/10 to-amber-600/10 rounded-2xl p-8 mb-12 border border-amber-400/20">
                <blockquote className="text-2xl md:text-3xl font-medium text-white text-center italic mb-6">
                  "It's okay to be known as the joker—it's the only card that can substitute any other."
                </blockquote>
                <p className="text-center text-amber-400 font-bold text-lg">— JIL</p>
              </div>

              <div className="grid md:grid-cols-2 gap-12 items-start mb-20">
                <div>
                  <h3 className="text-2xl font-bold text-amber-400 mb-6">My Philosophy</h3>
                  <p className="text-lg leading-relaxed text-gray-300 mb-6">
                    As a Computer Science Engineering student with a passion for automation, creativity, and adaptability, 
                    I see myself not just as a builder of solutions, but as a wildcard—ready to take on any role, 
                    connect unexpected dots, and thrive in dynamic environments.
                  </p>
                  <p className="text-lg leading-relaxed text-gray-400">
                    From programming PLCs to crafting pixel-perfect React interfaces, from debugging systems 
                    to designing clean visuals, I embrace versatility. I believe in staying curious, calm, and capable—
                    just like the joker in the deck.
                  </p>
                </div>

                <div className="bg-black/50 rounded-xl p-8 border border-amber-400/20 shadow-inner shadow-amber-300/5">
                  <h3 className="text-2xl font-bold text-amber-400 mb-6">Quick Facts</h3>
                  <ul className="space-y-4 text-gray-300">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-amber-400 rounded-full mr-3"></div>
                      <span>CGPA: 9.00/10 in Computer Science</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-amber-400 rounded-full mr-3"></div>
                      <span>Active Mentor at IVAEX</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-amber-400 rounded-full mr-3"></div>
                      <span>Industrial Automation Certified</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-amber-400 rounded-full mr-3"></div>
                      <span>Full-Stack Developer</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Skills */}
              <div>
                <h3 className="text-4xl font-extrabold text-center mb-14 text-white tracking-tight">
                  <span className="bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-400 bg-clip-text text-transparent">
                    ⚙️ Technical Arsenal
                  </span>
                </h3>

                <div className="space-y-12">
                  {Object.entries(skillGroups).map(([category, items], idx) => (
                    <div
                      key={idx}
                      className="relative bg-gray-900/60 backdrop-blur-md border border-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-amber-500/20 transition-shadow duration-300"
                    >
                      <div className="absolute top-0 left-0 w-full h-full rounded-2xl pointer-events-none border border-amber-500/10"></div>

                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 bg-amber-400/20 text-amber-300 flex items-center justify-center rounded-full text-xl">
                          {getCategoryIcon(category)}
                        </div>
                        <h4 className="text-xl md:text-2xl font-semibold text-amber-400 tracking-wide">
                          {category}
                        </h4>
                      </div>

                      <div className="flex flex-wrap gap-3">
                        {items.map((skill, index) => (
                          <span
                            key={index}
                            className="px-4 py-2 rounded-full bg-gray-800/70 border border-gray-700 text-gray-200 text-sm font-medium shadow-sm hover:bg-amber-400/10 hover:text-amber-300 hover:shadow-md hover:shadow-amber-400/20 transition-all duration-300"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
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

            <div className="max-w-5xl mx-auto space-y-16">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-900 to-black border border-yellow-400/30 rounded-2xl p-8 shadow-2xl shadow-yellow-400/10 hover:shadow-yellow-400/20 transition-all duration-300"
                >
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0">
                      <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-2xl flex items-center justify-center">
                        <Code className="text-black" size={40} />
                      </div>
                    </div>

                    <div className="flex-grow">
                      <h3 className="text-3xl font-bold text-white mb-3">{project.title}</h3>
                      <p className="text-yellow-400 font-semibold mb-1">{project.date}</p>
                      <p className="text-gray-300 leading-relaxed text-lg mb-8">{project.description}</p>

                      <div className="mb-8">
                        <h4 className="font-bold text-yellow-400 mb-4 text-xl">🚀 Key Features & Achievements:</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {project.features.map((feature, featureIndex) => (
                            <div
                              key={featureIndex}
                              className="bg-black/50 rounded-lg p-4 border border-gray-700"
                            >
                              <h5 className="text-white font-semibold mb-2">{feature.title}</h5>
                              <p className="text-gray-400 text-sm">{feature.detail}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-bold text-yellow-400 mb-4 text-lg">Technology Stack:</h4>
                        <div className="flex flex-wrap gap-3">
                          {project.techStack.map((tech, techIndex) => (
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
              ))}
            </div>
          </div>
        </section>


        {/* Certifications Section */}
        <section id="certifications" className="py-20 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Certifications & Achievements
              </h2>
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
                          {cert.title}
                        </h3>
                        <p className="text-xs mt-2 text-gray-400">{cert.issuer} • {cert.date}</p>
                        {cert.credentialId && (
                          <p className="text-xs text-yellow-600 mt-2">ID: {cert.credentialId}</p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-gradient-to-br from-gray-950 via-gray-900 to-black relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-300/5 via-transparent to-amber-600/5 pointer-events-none"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-14">
              <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Let's Connect</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto rounded"></div>
            </div>

            <div className="max-w-3xl mx-auto text-center">
              <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed">
                Whether you're exploring <span className="text-amber-400 font-semibold">collaborations</span>, 
                seeking <span className="text-amber-400 font-semibold">talent</span>, or just want to talk tech—
                <span className="text-amber-400 font-semibold"> let's connect and create together!</span>
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-14">
                <a
                  href="https://www.linkedin.com/in/jil-varghese-palliyan/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center px-8 py-4 bg-amber-400 text-black font-semibold rounded-xl hover:bg-amber-300 transition-all duration-300 shadow-xl hover:shadow-amber-400/40 hover:scale-[1.03]"
                >
                  <Linkedin className="mr-3 group-hover:scale-110 transition-transform" size={26} />
                  LinkedIn
                  <ExternalLink className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                </a>
                <a
                  href="https://github.com/JVP555"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center px-8 py-4 border-2 border-amber-400 text-amber-400 font-semibold rounded-xl hover:bg-amber-400 hover:text-black transition-all duration-300 hover:scale-[1.03]"
                >
                  <Github className="mr-3 group-hover:scale-110 transition-transform" size={26} />
                  GitHub
                  <ExternalLink className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                </a>
              </div>

              <div className="bg-gradient-to-r from-amber-400/10 to-amber-600/10 backdrop-blur-sm rounded-xl p-6 border border-amber-400/20">
                <div className="flex items-center justify-center space-x-3 text-white mb-4">
                  <MapPin size={22} className="text-amber-400" />
                  <span className="text-lg font-medium">Ernakulam, Kerala, India</span>
                </div>
                <p className="text-gray-300 text-base">
                  Open to roles in <span className="text-amber-400 font-medium">Software Development</span>, 
                  <span className="text-amber-400 font-medium"> Data Science</span>, and 
                  <span className="text-amber-400 font-medium"> Industrial Automation</span>
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