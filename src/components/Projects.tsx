import { ExternalLink, Github, Eye } from "lucide-react";

export const Projects = () => {
  const projects = [
    {
      title: "Advertisement Banner",
      description: "A responsive and interactive advertisement banner built with React.js, featuring modern design principles and smooth animations for enhanced user engagement.",
      image: "/projects/ad-banner.webp",
      tech: ["React", "JavaScript", "CSS3", "Responsive Design"],
      liveUrl: "https://ad-banner-chi.vercel.app/",
      githubUrl: "https://github.com/MDharunPrasad/ad-banner",
      featured: true
    },
    {
      title: "Weather App",
      description: "Real-time weather application built with React.js and Axios, providing accurate weather information with a clean and intuitive user interface.",
      image: "/projects/weather-app.webp",
      tech: ["React", "Axios", "Weather API", "JavaScript"],
      liveUrl: "https://weather-app-rosy-tau-92.vercel.app/",
      githubUrl: "https://github.com/MDharunPrasad/weather-app",
      featured: true
    },
    {
      title: "Coffee Estate - Figma Design",
      description: "A meticulously crafted UI/UX design for a coffee estate website, showcasing modern design trends and attention to user experience.",
      image: "/projects/coffee-estate.webp",
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
              {/* Stylized gradient background instead of image */}
              <div className="relative aspect-[16/9] overflow-hidden">
                <div className={`absolute inset-0 ${
                  index === 0 ? "bg-gradient-to-br from-cyan-500 via-blue-600 to-purple-700" :
                  index === 1 ? "bg-gradient-to-br from-violet-500 via-fuchsia-600 to-pink-700" :
                  "bg-gradient-to-br from-emerald-500 via-teal-600 to-cyan-700"
                } transition-transform duration-500 group-hover:scale-110`}>
                  {/* Animated gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-50"></div>
                  {/* Decorative elements */}
                  <div className="absolute inset-0 opacity-20">
                    {index === 0 && <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full border-4 border-white/30 transform -rotate-45"></div>}
                    {index === 1 && <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-white/10 rounded-lg transform rotate-12"></div>}
                    {index === 2 && <div className="absolute bottom-1/4 left-1/3 w-40 h-20 border-2 border-white/20 transform -rotate-12"></div>}
                  </div>
                </div>

                {/* Featured badge */}
                {project.featured && (
                  <div className="absolute top-3 right-3 z-20">
                    <span className="bg-cyan-400/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-black">
                      Featured
                    </span>
                  </div>
                )}

                {/* Action buttons overlay */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                  <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-cyan-500/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-cyan-400 transition-colors duration-300 shadow-lg"
                  >
                    <Eye size={20} className="text-white" />
                  </a>
                  {project.githubUrl !== "#" && (
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-violet-500/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-violet-400 transition-colors duration-300 shadow-lg"
                    >
                      <Github size={20} className="text-white" />
                    </a>
                  )}
                </div>
              </div>

              {/* Project details */}
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
                      className="bg-gradient-to-r from-violet-500/20 to-fuchsia-500/20 backdrop-blur-sm rounded-full px-3 py-1 text-xs text-white/80 border border-white/10 font-mono hover:border-cyan-400/50 transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <a 
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors duration-300 font-semibold text-sm font-rajdhani"
                  >
                    <ExternalLink size={14} className="mr-1" />
                    View Project
                  </a>
                  {project.githubUrl !== "#" && (
                    <a 
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-violet-400 hover:text-violet-300 transition-colors duration-300 font-semibold text-sm font-rajdhani"
                    >
                      <Github size={14} className="mr-1" />
                      Source Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
