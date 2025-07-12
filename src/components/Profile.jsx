import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  Code, 
  Database, 
  Server, 
  Award, 
  GraduationCap,
  Briefcase,
  Globe,
  ExternalLink
} from 'lucide-react'

// Import images
import bannerImage from '/img/banner.png'
import avatarImage from '/img/avatar.jpg'

const Profile = () => {
  const personalInfo = {
    name: "Trần Ngọc Chương",
    title: "Backend Web Developer",
    location: "Long Thành Mỹ, Thủ Đức, HCM, Vietnam",
    email: "tranngocchuongkt@gmail.com",
    phone: "0397812503",
    linkedin: "https://linkedin.com/in/tranngocchuong",
    github: "https://github.com/chuong2610"
  }

  const skills = {
    "Languages": ["Java", "C#", "JavaScript", "HTML", "CSS"],
    "Frameworks": ["Spring Boot", ".NET Core"],
    "Databases": ["MySQL", "SQL Server", "Redis"],
    "Messaging & APIs": ["Kafka", "RabbitMQ", "RESTful API", "Postman", "Swagger"],
    "Tools": ["Docker", "Git", "Maven", "WebSocket", "Nginx", "GitHub Actions", "VPS"],
    "IDEs": ["IntelliJ", "VS", "VS Code"]
  }

  const projects = [
    {
      name: "🏥 School Health Management",
      timeframe: "May 2025 - Jun 2025",
      techStack: "ReactJS, .NET, C#, JavaScript, Redis, WebSocket, RESTful API, Swagger",
      teamSize: 5,
      role: "Leader, Backend Developer",
      features: [
        "Led a 5-member team",
        "Designed backend architecture",
        "Implemented real-time systems with WebSocket",
        "Deployed on VPS using Docker and Nginx"
      ],
      demoLink: "https://school-health-nine.vercel.app",
      bgColor: "from-pink-50 to-rose-50"
    },
    {
      name: "🏨 Online Hotel Booking",
      timeframe: "Apr 2025 - Present",
      techStack: ".NET Core, JavaScript, HTML, CSS, SQL Server, Swagger",
      teamSize: 1,
      role: "Fullstack Developer",
      features: [
        "Real-time room status updates",
        "Microservices architecture",
        "Applied repository pattern and dependency injection",
        "Docker containerization"
      ],
      bgColor: "from-blue-50 to-cyan-50"
    },
    {
      name: "🎬 Online Movie Booking System",
      timeframe: "Mar 2025 - Present",
      techStack: "Java, Spring Boot, JavaScript, HTML, CSS, MySQL, RESTful API",
      teamSize: 1,
      role: "Fullstack Developer",
      features: [
        "Spring Security implementation",
        "Real-time seat reservation with Kafka + WebSocket",
        "Dockerized application",
        "Complex database relationships management"
      ],
      bgColor: "from-purple-50 to-indigo-50"
    }
  ]

  const education = [
    {
      institution: "FPT University",
      degree: "Bachelor of Software Development",
      period: "2021 - 2026",
      icon: <GraduationCap className="w-5 h-5" />
    },
    {
      institution: "Cybersoft Academy",
      degree: "Java & .NET Web Developer Bootcamp",
      period: "2023 - 2025",
      icon: <Code className="w-5 h-5" />
    }
  ]

  const languages = [
    { name: "English", level: "Intermediate", note: "can read technical documents" },
    { name: "Japanese", level: "Basic", note: "JLPT N4" }
  ]

  const getSkillColor = (category) => {
    const colors = {
      "Languages": "bg-pink-100 text-pink-800",
      "Frameworks": "bg-blue-100 text-blue-800",
      "Databases": "bg-green-100 text-green-800",
      "Messaging & APIs": "bg-purple-100 text-purple-800",
      "Tools": "bg-yellow-100 text-yellow-800",
      "IDEs": "bg-indigo-100 text-indigo-800"
    }
    return colors[category] || "bg-gray-100 text-gray-800"
  }

  const getSkillIcon = (category) => {
    const icons = {
      "Languages": <Code className="w-4 h-4" />,
      "Frameworks": <Server className="w-4 h-4" />,
      "Databases": <Database className="w-4 h-4" />,
      "Messaging & APIs": <Globe className="w-4 h-4" />,
      "Tools": <Briefcase className="w-4 h-4" />,
      "IDEs": <Code className="w-4 h-4" />
    }
    return icons[category] || <Code className="w-4 h-4" />
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-4 -left-4 w-72 h-72 bg-gradient-to-r from-blue-300 to-cyan-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float"></div>
        <div className="absolute top-1/4 -right-4 w-72 h-72 bg-gradient-to-r from-purple-300 to-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float-slow" style={{animationDelay: '2s'}}></div>
        <div className="absolute -bottom-8 left-1/4 w-72 h-72 bg-gradient-to-r from-pink-300 to-rose-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float" style={{animationDelay: '4s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-indigo-200 to-blue-200 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-pulse-slow"></div>
        <div className="absolute top-0 right-1/4 w-64 h-64 bg-gradient-to-r from-yellow-200 to-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-25 animate-float-slow" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-gradient-to-r from-green-200 to-emerald-200 rounded-full mix-blend-multiply filter blur-xl opacity-25 animate-float" style={{animationDelay: '3s'}}></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header với Banner */}
        <div className="relative overflow-hidden">
          {/* Banner Background */}
          <div className="h-80 relative">
            <img 
              src={bannerImage} 
              alt="Banner" 
              className="w-full h-full object-cover"
            />
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50"></div>
          </div>
          
          {/* Profile Section */}
          <div className="relative bg-white/95 backdrop-blur-sm mx-4 -mt-20 rounded-3xl shadow-2xl p-8 border border-white/30">
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
              
              {/* Avatar */}
              <div className="relative">
                <div className="w-40 h-40 rounded-full overflow-hidden ring-6 ring-white shadow-xl">
                  <img 
                    src={avatarImage} 
                    alt="Trần Ngọc Chương" 
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Online indicator */}
                <div className="absolute bottom-2 right-2 w-6 h-6 bg-green-500 rounded-full border-4 border-white"></div>
              </div>
              
              {/* Profile Info */}
              <div className="flex-1 text-center lg:text-left">
                <h1 className="text-5xl font-bold text-gray-800 mb-3">{personalInfo.name}</h1>
                <p className="text-2xl text-blue-600 font-semibold mb-4">{personalInfo.title}</p>
                <div className="flex items-center justify-center lg:justify-start text-gray-600 mb-6">
                  <MapPin className="w-5 h-5 mr-2 text-blue-500" />
                  <span className="text-lg">{personalInfo.location}</span>
                </div>
                
                {/* Contact Info - Sắp xếp lại với responsive tốt hơn */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {/* Email */}
                  <a 
                    href={`mailto:${personalInfo.email}`} 
                    className="flex items-center gap-2 bg-blue-50 hover:bg-blue-100 text-blue-700 p-3 rounded-xl transition-all duration-300 hover:scale-105 shadow-sm group"
                  >
                    <Mail className="w-4 h-4 flex-shrink-0" />
                    <div className="text-left min-w-0 flex-1">
                      <div className="text-xs text-blue-500 uppercase tracking-wide font-medium">Email</div>
                      <div className="font-medium text-xs break-all group-hover:text-blue-800">{personalInfo.email}</div>
                    </div>
                  </a>
                  
                  {/* Phone */}
                  <div className="flex items-center gap-2 bg-green-50 text-green-700 p-3 rounded-xl shadow-sm">
                    <Phone className="w-4 h-4 flex-shrink-0" />
                    <div className="text-left">
                      <div className="text-xs text-green-500 uppercase tracking-wide font-medium">Phone</div>
                      <div className="font-medium text-xs">{personalInfo.phone}</div>
                    </div>
                  </div>
                  
                  {/* LinkedIn */}
                  <a 
                    href={personalInfo.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center gap-2 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 p-3 rounded-xl transition-all duration-300 hover:scale-105 shadow-sm"
                  >
                    <Linkedin className="w-4 h-4 flex-shrink-0" />
                    <div className="text-left">
                      <div className="text-xs text-indigo-500 uppercase tracking-wide font-medium">LinkedIn</div>
                      <div className="font-medium text-xs">Connect with me</div>
                    </div>
                  </a>
                  
                  {/* GitHub */}
                  <a 
                    href={personalInfo.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center gap-2 bg-gray-50 hover:bg-gray-100 text-gray-700 p-3 rounded-xl transition-all duration-300 hover:scale-105 shadow-sm"
                  >
                    <Github className="w-4 h-4 flex-shrink-0" />
                    <div className="text-left">
                      <div className="text-xs text-gray-500 uppercase tracking-wide font-medium">GitHub</div>
                      <div className="font-medium text-xs">Follow me</div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Sections với background liên kết */}
        <div className="px-4 py-8 space-y-8">
        
        {/* About Me */}
        <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-xl p-8 border border-white/30 hover:shadow-2xl transition-all duration-300">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
              <Award className="w-6 h-6 text-white" />
            </div>
            About Me
          </h2>
          <p className="text-gray-600 leading-relaxed text-lg">
            I'm a final-year Software Engineering student at FPT University with a solid foundation in Java, C#, Spring Boot, and .NET. 
            I have hands-on experience in fullstack development and software architecture, and I'm passionate about backend development 
            and continuous learning. I'm currently seeking opportunities to join a dynamic team where I can contribute to real-world 
            projects and grow as a fullstack developer.
          </p>
        </div>

        {/* Skills với layout cải thiện */}
        <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-xl p-8 border border-white/30 hover:shadow-2xl transition-all duration-300 relative overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 left-0 w-full h-full" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%236366f1' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}></div>
          </div>
          
          <h2 className="text-3xl font-bold text-gray-800 mb-8 flex items-center gap-3 relative z-10">
            <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-teal-600 rounded-xl flex items-center justify-center">
              <Code className="w-6 h-6 text-white" />
            </div>
            Technical Skills
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 relative z-10">
            {Object.entries(skills).map(([category, skillList]) => (
              <div key={category} className="space-y-4 bg-gradient-to-br from-gray-50/80 to-blue-50/80 p-6 rounded-2xl border border-gray-200/50 hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
                <h3 className="font-bold text-lg text-gray-700 flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                    {getSkillIcon(category)}
                  </div>
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillList.map((skill, index) => (
                    <span 
                      key={index} 
                      className={`px-3 py-2 rounded-full text-xs font-semibold transition-all duration-300 hover:scale-110 hover:shadow-md ${getSkillColor(category)}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Projects */}
        <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-xl p-8 border border-white/30 hover:shadow-2xl transition-all duration-300">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center">
              <Briefcase className="w-6 h-6 text-white" />
            </div>
            Projects
          </h2>
          <div className="space-y-8">
            {projects.map((project, index) => (
              <div key={index} className={`bg-gradient-to-r ${project.bgColor} rounded-2xl p-8 border border-white/40 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]`}>
                <div className="flex flex-col xl:flex-row xl:items-start xl:justify-between mb-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-800 mb-3">{project.name}</h3>
                    <div className="flex flex-wrap gap-4 mb-4">
                      <span className="bg-white/70 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                        📅 {project.timeframe}
                      </span>
                      <span className="bg-white/70 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                        👥 Team: {project.teamSize}
                      </span>
                      <span className="bg-white/70 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                        🎯 {project.role}
                      </span>
                    </div>
                  </div>
                  {project.demoLink && (
                    <a 
                      href={project.demoLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg mt-4 xl:mt-0"
                    >
                      <ExternalLink className="w-5 h-5" />
                      Live Demo
                    </a>
                  )}
                </div>
                
                <div className="bg-white/60 rounded-xl p-4 mb-4">
                  <p className="text-gray-700 font-semibold">
                    <span className="text-blue-600">💻 Tech Stack:</span> {project.techStack}
                  </p>
                </div>
                
                <ul className="space-y-2">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="text-gray-700 flex items-start gap-3">
                      <span className="text-blue-600 mt-1 text-lg">✨</span>
                      <span className="font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-xl p-8 border border-white/30 hover:shadow-2xl transition-all duration-300">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-xl flex items-center justify-center">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            Education
          </h2>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div key={index} className="flex items-start gap-6 p-6 rounded-2xl bg-gradient-to-r from-gray-50 to-blue-50 border border-gray-200 hover:shadow-lg transition-all duration-300">
                <div className="text-blue-600 bg-white p-3 rounded-xl shadow-md">
                  {edu.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">{edu.degree}</h3>
                  <p className="text-blue-600 font-semibold text-lg">{edu.institution}</p>
                  <p className="text-gray-600">{edu.period}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Languages */}
        <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-xl p-8 border border-white/30 hover:shadow-2xl transition-all duration-300">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-r from-red-500 to-pink-600 rounded-xl flex items-center justify-center">
              <Globe className="w-6 h-6 text-white" />
            </div>
            Languages
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {languages.map((lang, index) => (
              <div key={index} className="flex items-center justify-between p-6 rounded-2xl bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 hover:shadow-lg transition-all duration-300">
                <div>
                  <span className="text-xl font-bold text-gray-800">{lang.name}</span>
                  <span className="text-gray-600 ml-3 text-lg">- {lang.level}</span>
                </div>
                <span className="text-sm text-gray-500 bg-white px-3 py-1 rounded-full">({lang.note})</span>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="text-center py-12">
          <div className="flex justify-center gap-8 mb-6">
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="w-14 h-14 bg-gray-800 hover:bg-gray-700 text-white rounded-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg">
              <Github className="w-7 h-7" />
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="w-14 h-14 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg">
              <Linkedin className="w-7 h-7" />
            </a>
          </div>
          <p className="text-gray-500 text-lg">
            ✨ Designed with ❤️ by Trần Ngọc Chương
          </p>
        </div>

        </div>
      </div>
    </div>
  )
}

export default Profile
