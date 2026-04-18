 
import { useState, useEffect } from 'react';
import { 
  Code, 
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
import logoImg from '../logo.png';

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
    "Languages": ['Python', 'Java', 'C', 'C++', 'JavaScript', 'TypeScript', 'SQL'],
    "Frameworks": ['Node.js', 'Express.js', 'React.js', 'NestJS', 'Tailwind CSS'],
    "Databases & Tools": ['PostgreSQL', 'MongoDB', 'Git', 'Docker', 'Linux', 'Postman'],
    "Concepts": ['Data Structures & Algorithms', 'OOP', 'DBMS', 'OS', 'System Design', 'REST APIs', 'CI/CD'],
    "Specializations": ['Machine Learning (RAG)', 'Vector Search', 'Backend Systems', 'AI-driven Applications']
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
      company: 'Phorena (Skyber Research)',
      role: 'Team Lead – RAG Systems',
      duration: 'Dec 2025 - Present',
      location: 'Remote',
      type: 'Full-time',
      skills: ['RAG Systems', 'Vector Search', 'Embeddings', 'AI/ML', 'Team Leadership'],
      description: 'Leading development of scalable RAG systems processing 300+ documents/min. Improved semantic search accuracy by 25% through embedding optimization and vector indexing. Architected modular pipelines for document ingestion, chunking, and retrieval.'
    },
    {
      company: 'Phorena (Skyber Research)',
      role: 'AI Engineer – RAG',
      duration: 'Aug 2025 - Dec 2025',
      location: 'Remote',
      type: 'Full-time',
      skills: ['RAG', 'Embeddings', 'Vector Databases', 'Semantic Search'],
      description: 'Built and optimized RAG pipelines for document understanding and semantic search. Worked on embeddings, vector databases, and retrieval optimization techniques.'
    },
    {
      company: 'PgBee',
      role: 'Backend Developer Intern – Phase 2',
      duration: 'Apr 2026 - Present',
      location: 'Trivandrum, Kerala (Hybrid)',
      type: 'Internship',
      skills: ['Node.js', 'Backend APIs', 'Database Optimization', 'System Architecture'],
      description: 'Developing scalable backend services and APIs with improved performance and reliability. Optimizing database queries and system architecture for production workloads.'
    },
    {
      company: 'PgBee',
      role: 'Backend Developer Intern – Phase 1',
      duration: 'Dec 2025 - Apr 2026',
      location: 'Trivandrum, Kerala (Hybrid)',
      type: 'Internship',
      skills: ['Node.js', 'REST APIs', 'Backend Development'],
      description: 'Built REST APIs using Node.js and contributed to backend feature development. Collaborated with teams to improve system stability and scalability.'
    },
    {
      company: 'Freshire',
      role: 'Project Lead & Full Stack Developer',
      duration: 'Nov 2025 - Present',
      location: 'Trivandrum, Kerala (On-site)',
      type: 'Full-time',
      skills: ['Supabase', 'Multi-tenant Architecture', 'Full-Stack', 'Authentication'],
      description: 'Built a role-based campus placement platform for students, recruiters, and administrators. Implemented multi-tenant architecture and secure authentication using Supabase.'
    },
    {
      company: 'College of Engineering Trivandrum',
      role: 'Placement Coordinator – CSE Batch 2027',
      duration: 'Oct 2025 - Present',
      location: 'Trivandrum, Kerala',
      type: 'Part-time',
      skills: ['Coordination', 'Communication', 'Documentation'],
      description: 'Facilitate communication between students and placement cell for recruitment processes. Assist peers with placement workflows, documentation, and coordination during drives.'
    },
    {
      company: 'Rehabilitation Plantations Limited',
      role: 'ERP Full-Stack Developer',
      duration: 'Aug 2025 - Present',
      location: 'Punalur, Kerala (Hybrid)',
      type: 'Full-time',
      skills: ['PostgreSQL', 'Backend APIs', 'ERP Systems', 'Inventory Management'],
      description: 'Digitized enterprise workflows including inventory, order, and supply chain systems. Designed PostgreSQL schemas and scalable backend APIs.'
    },
    {
      company: 'IVAEX',
      role: 'Digital Literacy Mentor',
      duration: 'Feb 2025 - Present',
      location: 'Kerala, India',
      type: 'Part-time',
      skills: ['Mentoring', 'Teaching'],
      description: 'Conduct training sessions and mentor participants in digital literacy programs.'
    },
    {
      company: 'IVAEX',
      role: 'Digital Literacy Promoter',
      duration: 'Apr 2025 - Present',
      location: 'Kerala, India',
      type: 'Part-time',
      skills: ['Marketing', 'Outreach'],
      description: 'Led outreach initiatives improving access to technology education.'
    },
    {
      company: 'Bosch Rexroth (CET CoE)',
      role: 'Industrial Automation Intern',
      duration: 'Jun 2025',
      location: 'Trivandrum, Kerala',
      type: 'Internship',
      skills: ['PLCs', 'Hydraulics', 'Sensors', 'Industrial Automation'],
      description: 'Worked with PLCs, hydraulics, sensors, and industrial automation systems.'
    }
  ];

  const education = [
    {
      institution: 'College of Engineering Trivandrum (CET)',
      degree: 'B.Tech in Computer Science and Engineering',
      duration: '2023 -- 2027',
      grade: 'CGPA: 8.81/10',
      skills: ['Problem Solving', 'Programming', 'Database Management', 'Software Engineering']
    },
    {
      institution: 'College of Engineering Trivandrum (CET)',
      degree: 'B.Tech Honours, Machine Learning',
      duration: '2024 -- 2027',
      grade: 'Ongoing',
      skills: ['Machine Learning', 'Mathematics', 'Data Analysis']
    },
    {
      institution: 'College of Engineering Trivandrum (CET)',
      degree: 'B.Tech Minor, Automobile Engineering',
      duration: '2024 -- 2027',
      grade: 'Ongoing',
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
      title: "Freshire – Campus Placement Portal",
      date: "Nov 2025 - Present",
      description:
        "A secure, multi-tenant placement portal connecting students, recruiters, and admins with tenant-aware access, audit-ready workflows, and customizable dashboards.",
      features: [
        
        {
          title: "👥 Role-Based Access",
          detail: "Granular permissions for Platform Admin, Tenant Admin, Recruiter, and Student",
        },
        {
          title: "📊 Interactive Dashboards",
          detail: "Real-time placement analytics with Recharts visualizations",
        },
        {
          title: "📝 Dynamic Forms Builder",
          detail: "Admin-configurable forms with JSONB field configurations",
        },
        {
          title: "🕵️ Audit Logging",
          detail: "Compliance-ready audit trail for all admin actions",
        },
        {
          title: "📧 Mail Management",
          detail: "IMAP email sync with read receipts and attachments",
        },
        {
          title: "🎨 Glassmorphism UI",
          detail: "Modern frosted glass aesthetic with animated wavy backgrounds",
        },
        {
          title: "📱 Responsive Design",
          detail: "Mobile-first with desktop-optimized table views",
        },
      ],
      techStack: [
        "React 18",
        "Vite",
        "Tailwind CSS",
        "Supabase",
        "PostgreSQL",
        "Recharts",
        "TanStack Table",
        "Vercel",
      ],
    },
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
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-md border-b border-#C5A028/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-#D4AF37 to-#8B7020 bg-clip-text text-transparent">
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
                        ? 'text-black bg-[#D4AF37] shadow-lg shadow-[#D4AF37]/25'
                        : 'text-gray-300 hover:text-[#D4AF37] hover:bg-gray-900'
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
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-[#D4AF37] hover:bg-gray-900 transition-colors"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/95 border-t border-#C5A028/20">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors ${
                    activeSection === item.id
                      ? 'text-black bg-[#D4AF37]'
                      : 'text-gray-300 hover:text-[#D4AF37] hover:bg-gray-900'
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
          <div className="absolute inset-0 bg-gradient-to-br from-#C5A028/10 via-transparent to-#8B7020/10 pointer-events-none"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
            <div className="text-center">
              <div className="mb-10">
                <div className="w-48 h-48 mx-auto rounded-2xl flex items-center justify-center mb-8 shadow-2xl shadow-[#D4AF37]/30 overflow-hidden border-2 border-[#D4AF37]/30">
                  <img src={logoImg} alt="JVP Logo" className="w-full h-full object-cover" />
                </div>

                <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 leading-tight tracking-tight">
                  JIL VARGHESE
                  <span className="block bg-gradient-to-r from-[#D4AF37] via-[#C5A028] to-[#8B7020] bg-clip-text text-transparent">
                    PALLIYAN
                  </span>
                </h1>

                <div className="flex items-center justify-center space-x-3 text-md md:text-lg text-[#D4AF37] font-semibold mb-10">
                  <Star size={18} className="text-[#D4AF37]" />
                  <span>Software Engineering Student at CET</span>
                  <span className="text-gray-600">|</span>
                  <span>Backend & AI Systems</span>
                  <Star size={18} className="text-[#D4AF37]" />
                </div>
              </div>

              <div className="max-w-3xl mx-auto mb-12">
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                  Software Engineering student with experience in building scalable backend systems, AI-driven applications, and distributed data pipelines.
                  Blending <span className="text-[#D4AF37] font-medium">tech, logic, and elegance</span> to build better experiences.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-14">
                <a
                  href="https://www.linkedin.com/in/jil-varghese-palliyan/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center px-8 py-4 bg-[#D4AF37] text-black font-semibold rounded-lg hover:bg-[#C5A028] transition-all duration-300 shadow-md hover:shadow-#8B7020/40 hover:scale-[1.03]"
                >
                  <Linkedin className="mr-3 group-hover:scale-110 transition-transform" size={24} />
                  Connect on LinkedIn
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </a>

                <a
                  href="https://github.com/JVP555"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center px-8 py-4 border-2 border-[#D4AF37] text-[#D4AF37] font-semibold rounded-lg hover:bg-[#D4AF37] hover:text-black transition-all duration-300 hover:scale-[1.03]"
                >
                  <Github className="mr-3 group-hover:scale-110 transition-transform" size={24} />
                  View GitHub
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </a>
              </div>

              <button
                onClick={() => scrollToSection('about')}
                className="animate-bounce text-[#D4AF37] hover:text-#C5A028 transition-colors"
              >
                <ChevronDown size={40} className="text-[#D4AF37]" />
              </button>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-gray-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">About Me</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-#D4AF37 to-#8B7020 mx-auto"></div>
            </div>

            <div className="max-w-5xl mx-auto">
              <div className="bg-gradient-to-r from-#D4AF37/10 to-#8B7020/10 rounded-2xl p-8 mb-12 border border-[#D4AF37]/20">
                <blockquote className="text-2xl md:text-3xl font-medium text-white text-center italic mb-6">
                  "They call me the Joker. Perfect. No other card can do what I can."
                </blockquote>
                <p className="text-center text-[#D4AF37] font-bold text-lg">— Jil Varghese Palliyan</p>
              </div>

              <div className="grid md:grid-cols-2 gap-12 items-start mb-20">
                <div>
                  <h3 className="text-2xl font-bold text-[#D4AF37] mb-6">My Philosophy</h3>
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

                <div className="bg-black/50 rounded-xl p-8 border border-[#D4AF37]/20 shadow-inner shadow-#C5A028/5">
                  <h3 className="text-2xl font-bold text-[#D4AF37] mb-6">Quick Facts</h3>
                  <ul className="space-y-4 text-gray-300">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-[#D4AF37] rounded-full mr-3"></div>
                      <span>CGPA: 8.81/10 in Computer Science</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-[#D4AF37] rounded-full mr-3"></div>
                      <span>Team Lead at Phorena (RAG Systems)</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-[#D4AF37] rounded-full mr-3"></div>
                      <span>Backend Developer at PgBee</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-[#D4AF37] rounded-full mr-3"></div>
                      <span>RAG & Vector Search Specialist</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Skills */}
              <div>
                <h3 className="text-4xl font-extrabold text-center mb-14 text-white tracking-tight">
                  <span className="bg-gradient-to-r from-#D4AF37 via-#C5A028 to-#D4AF37 bg-clip-text text-transparent">
                    ⚙️ Technical Arsenal
                  </span>
                </h3>

                <div className="space-y-12">
                  {Object.entries(skillGroups).map(([category, items], idx) => (
                    <div
                      key={idx}
                      className="relative bg-gray-900/60 backdrop-blur-md border border-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-#8B7020/20 transition-shadow duration-300"
                    >
                      <div className="absolute top-0 left-0 w-full h-full rounded-2xl pointer-events-none border border-#8B7020/10"></div>

                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 bg-[#D4AF37]/20 text-#C5A028 flex items-center justify-center rounded-full text-xl">
                          {getCategoryIcon(category)}
                        </div>
                        <h4 className="text-xl md:text-2xl font-semibold text-[#D4AF37] tracking-wide">
                          {category}
                        </h4>
                      </div>

                      <div className="flex flex-wrap gap-3">
                        {items.map((skill, index) => (
                          <span
                            key={index}
                            className="px-4 py-2 rounded-full bg-gray-800/70 border border-gray-700 text-gray-200 text-sm font-medium shadow-sm hover:bg-[#D4AF37]/10 hover:text-#C5A028 hover:shadow-md hover:shadow-#D4AF37/20 transition-all duration-300"
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
              <div className="w-24 h-1 bg-gradient-to-r from-#D4AF37 to-#8B7020 mx-auto"></div>
            </div>

            <div className="max-w-5xl mx-auto">
              {experiences.map((exp, index) => (
                <div key={index} className="mb-8 group">
                  <div className="bg-gray-900 border border-gray-700 rounded-xl p-8 hover:border-[#D4AF37]/50 hover:bg-gray-800/50 transition-all duration-300">
                    <div className="flex items-start space-x-6">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-gradient-to-br from-#D4AF37 to-#8B7020 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <Briefcase className="text-white" size={28} />
                        </div>
                      </div>
                      <div className="flex-grow">
                        <h3 className="text-2xl font-bold text-white mb-2">{exp.role}</h3>
                        <p className="text-xl font-semibold text-[#D4AF37] mb-3">{exp.company}</p>
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
                          <span className="px-3 py-1 bg-[#D4AF37]/20 text-[#D4AF37] rounded-full text-xs font-bold">
                            {exp.type}
                          </span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {exp.skills.map((skill, skillIndex) => (
                            <span
                              key={skillIndex}
                              className="px-3 py-1 bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/30 rounded-full text-sm font-medium"
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
              <div className="w-24 h-1 bg-gradient-to-r from-#D4AF37 to-#8B7020 mx-auto"></div>
            </div>

            <div className="max-w-5xl mx-auto">
              {education.map((edu, index) => (
                <div key={index} className="mb-8 group">
                  <div className="bg-black/50 border border-gray-700 rounded-xl p-8 hover:border-[#D4AF37]/50 hover:bg-black/70 transition-all duration-300">
                    <div className="flex items-start space-x-6">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-gradient-to-br from-#D4AF37 to-#8B7020 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <GraduationCap className="text-white" size={28} />
                        </div>
                      </div>
                      <div className="flex-grow">
                        <h3 className="text-2xl font-bold text-white mb-2">{edu.degree}</h3>
                        <p className="text-xl font-semibold text-[#D4AF37] mb-3">{edu.institution}</p>
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
                              className="px-3 py-1 bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/30 rounded-full text-sm font-medium"
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
              <div className="w-24 h-1 bg-gradient-to-r from-#D4AF37 to-#8B7020 mx-auto"></div>
            </div>

            <div className="max-w-5xl mx-auto space-y-16">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-900 to-black border border-[#D4AF37]/30 rounded-2xl p-8 shadow-2xl shadow-#D4AF37/10 hover:shadow-#D4AF37/20 transition-all duration-300"
                >
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0">
                      <div className="w-20 h-20 bg-gradient-to-br from-#D4AF37 to-#8B7020 rounded-2xl flex items-center justify-center">
                        <Code className="text-white" size={40} />
                      </div>
                    </div>

                    <div className="flex-grow">
                      <h3 className="text-3xl font-bold text-white mb-3">{project.title}</h3>
                      <p className="text-[#D4AF37] font-semibold mb-1">{project.date}</p>
                      <p className="text-gray-300 leading-relaxed text-lg mb-8">{project.description}</p>

                      <div className="mb-8">
                        <h4 className="font-bold text-[#D4AF37] mb-4 text-xl">🚀 Key Features & Achievements:</h4>
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
                        <h4 className="font-bold text-[#D4AF37] mb-4 text-lg">Technology Stack:</h4>
                        <div className="flex flex-wrap gap-3">
                          {project.techStack.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-4 py-2 bg-[#D4AF37]/20 text-[#D4AF37] border border-[#D4AF37]/40 rounded-full text-sm font-bold hover:bg-[#D4AF37]/30 transition-colors"
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
              <div className="w-24 h-1 bg-gradient-to-r from-#D4AF37 to-#8B7020 mx-auto"></div>
            </div>

            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="group bg-black/50 border border-gray-700 rounded-xl p-6 hover:border-[#D4AF37]/50 hover:bg-black/70 transition-all duration-300 hover:scale-105"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-gradient-to-br from-#D4AF37 to-#8B7020 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <Award className="text-white" size={24} />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-bold text-white text-sm leading-tight group-hover:text-[#D4AF37] transition-colors">
                          {cert.title}
                        </h3>
                        <p className="text-xs mt-2 text-gray-400">{cert.issuer} • {cert.date}</p>
                        {cert.credentialId && (
                          <p className="text-xs text-#8B7020 mt-2">ID: {cert.credentialId}</p>
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
          <div className="absolute inset-0 bg-gradient-to-br from-#C5A028/5 via-transparent to-#8B7020/5 pointer-events-none"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-14">
              <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Let's Connect</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-#D4AF37 to-#8B7020 mx-auto rounded"></div>
            </div>

            <div className="max-w-3xl mx-auto text-center">
              <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed">
                Whether you're exploring <span className="text-[#D4AF37] font-semibold">collaborations</span>, 
                seeking <span className="text-[#D4AF37] font-semibold">talent</span>, or just want to talk tech—
                <span className="text-[#D4AF37] font-semibold"> let's connect and create together!</span>
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-14">
                <a
                  href="https://www.linkedin.com/in/jil-varghese-palliyan/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center px-8 py-4 bg-[#D4AF37] text-black font-semibold rounded-xl hover:bg-[#C5A028] transition-all duration-300 shadow-xl hover:shadow-#D4AF37/40 hover:scale-[1.03]"
                >
                  <Linkedin className="mr-3 group-hover:scale-110 transition-transform" size={26} />
                  LinkedIn
                  <ExternalLink className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                </a>
                <a
                  href="https://github.com/JVP555"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center px-8 py-4 border-2 border-[#D4AF37] text-[#D4AF37] font-semibold rounded-xl hover:bg-[#D4AF37] hover:text-black transition-all duration-300 hover:scale-[1.03]"
                >
                  <Github className="mr-3 group-hover:scale-110 transition-transform" size={26} />
                  GitHub
                  <ExternalLink className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                </a>
              </div>

              <div className="bg-gradient-to-r from-#D4AF37/10 to-#8B7020/10 backdrop-blur-sm rounded-xl p-6 border border-[#D4AF37]/20">
                <div className="flex items-center justify-center space-x-3 text-white mb-4">
                  <MapPin size={22} className="text-[#D4AF37]" />
                  <span className="text-lg font-medium">Ernakulam, Kerala, India</span>
                </div>
                <p className="text-gray-300 text-base">
                  Open to roles in <span className="text-[#D4AF37] font-medium">Software Development</span>, 
                  <span className="text-[#D4AF37] font-medium"> Data Science</span>, and 
                  <span className="text-[#D4AF37] font-medium"> Industrial Automation</span>
                </p>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-black border-t border-[#D4AF37]/20 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-400">
              © 2025 <span className="text-[#D4AF37] font-semibold">JIL VARGHESE PALLIYAN</span>. 
              Designed with passion and precision.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;