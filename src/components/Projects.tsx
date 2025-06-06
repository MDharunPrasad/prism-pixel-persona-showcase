import { ExternalLink, Github, Eye } from "lucide-react";

export const Projects = () => {
  const projects = [
    {
      title: "Advertisement Banner",
      description: "A responsive and interactive advertisement banner built with React.js, featuring modern design principles and smooth animations for enhanced user engagement.",
      image: "/placeholder.svg", // You should add a proper screenshot
      tech: ["React", "JavaScript", "CSS3", "Responsive Design"],
      liveUrl: "https://ad-banner-chi.vercel.app/",
      githubUrl: "https://github.com/MDharunPrasad/ad-banner",
      featured: true
    },
    {
      title: "Weather App",
      description: "Real-time weather application built with React.js and Axios, providing accurate weather information with a clean and intuitive user interface.",
      image: "/placeholder.svg", // You should add a proper screenshot
      tech: ["React", "Axios", "Weather API", "JavaScript"],
      liveUrl: "https://weather-app-rosy-tau-92.vercel.app/",
      githubUrl: "https://github.com/MDharunPrasad/weather-app",
      featured: true
    },
    {
      title: "Coffee Estate - Figma Design",
      description: "A meticulously crafted UI/UX design for a coffee estate website, showcasing modern design trends and attention to user experience.",
      image: "/placeholder.svg", // You should add a proper screenshot
      tech: ["Figma", "UI/UX", "Prototyping", "Design Systems"],
      liveUrl: "https://www.figma.com/design/m9O9RUY7Y6HmO4mRbsm3Nd/Personal?node-id=168-20&t=p4HlPJyKUYIyPPxE-1",
      githubUrl: "#",
      featured: true
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-purple-950 via-indigo-950 to-slate-950 relative overflow-hidden">
      {/* Optimized background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-32 h-32 bg-purple-500/5 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-blue-500/5 rounded-full blur-xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black bg-gradient-to-r from-violet-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent mb-6 tracking-wide font-orbitron">
            PROJECT UNIVERSE
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto font-light leading-relaxed font-inter">
            Showcasing innovative solutions that push the boundaries of technology
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/20 hover:border-cyan-400/50 transition-all duration-500 hover:scale-105 shadow-xl hover:shadow-cyan-500/20"
            >
              {/* Image container */}
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900">
                <img 
                  src={project.image} 
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent) {
                      parent.innerHTML = `
                        <div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-cyan-500/20 to-violet-500/20">
                          <div class="text-center">
                            <div class="text-2xl font-bold text-white mb-2">${project.title}</div>
                            <div class="text-cyan-400">Coming Soon</div>
                          </div>
                        </div>
                      `;
                    }
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                
                {/* Featured badge */}
                <div className="absolute top-3 right-3">
                  <span className="bg-gradient-to-r from-cyan-500 to-violet-500 text-white px-2 py-1 rounded-full text-xs font-semibold animate-pulse">
                    FEATURED
                  </span>
                </div>

                {/* Overlay icons */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex space-x-3">
                    <a 
                      href={project.liveUrl}
                      className="w-10 h-10 bg-cyan-500/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-cyan-400 transition-colors duration-300"
                    >
                      <Eye size={16} className="text-white" />
                    </a>
                    <a 
                      href={project.githubUrl}
                      className="w-10 h-10 bg-violet-500/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-violet-400 transition-colors duration-300"
                    >
                      <Github size={16} className="text-white" />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300 font-rajdhani">
                  {project.title}
                </h3>
                <p className="text-white/70 mb-4 leading-relaxed text-sm font-inter">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech}
                      className="bg-gradient-to-r from-violet-500/20 to-fuchsia-500/20 backdrop-blur-sm rounded-full px-2 py-1 text-xs text-white/80 border border-white/10 font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <a 
                    href={project.liveUrl}
                    className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors duration-300 font-semibold text-sm font-rajdhani"
                  >
                    <Eye size={14} className="mr-1" />
                    Live Demo
                  </a>
                  <a 
                    href={project.githubUrl}
                    className="flex items-center text-violet-400 hover:text-violet-300 transition-colors duration-300 font-semibold text-sm font-rajdhani"
                  >
                    <Github size={14} className="mr-1" />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
