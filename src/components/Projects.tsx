
import { ExternalLink, Github, Eye } from "lucide-react";

export const Projects = () => {
  const projects = [
    {
      title: "Neural Network Visualizer",
      description: "Interactive 3D visualization of neural networks with real-time training animation and performance metrics using cutting-edge WebGL technology",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop",
      tech: ["React", "Three.js", "TypeScript", "WebGL"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      title: "AI Code Assistant", 
      description: "Intelligent code completion and suggestion system powered by machine learning algorithms with real-time code analysis",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=600&fit=crop",
      tech: ["Python", "JavaScript", "OpenAI", "Node.js"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      title: "Quantum Portfolio",
      description: "Award-winning portfolio website with quantum-inspired animations, particle physics simulations, and immersive 3D experiences",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop",
      tech: ["React", "WebGL", "GSAP", "Three.js"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    }
  ];

  return (
    <section id="projects" className="py-32 bg-gradient-to-br from-purple-950 via-indigo-950 to-slate-950 relative overflow-hidden">
      {/* Enhanced background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-purple-500/5 to-blue-500/5 rounded-full blur-3xl animate-spin-slow"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-6xl font-black bg-gradient-to-r from-violet-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent mb-8 tracking-wide text-glow">
            PROJECT UNIVERSE
          </h2>
          <p className="text-2xl text-white/70 max-w-4xl mx-auto font-light leading-relaxed">
            Showcasing innovative solutions that push the boundaries of technology
          </p>
        </div>

        {/* Featured Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/20 hover:border-cyan-400/50 transition-all duration-700 hover:scale-105 hover:rotate-1 shadow-2xl hover:shadow-cyan-500/25 will-change-transform"
            >
              {/* Image container with advanced effects */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-violet-500/0 to-fuchsia-500/0 group-hover:from-cyan-500/20 group-hover:via-violet-500/20 group-hover:to-fuchsia-500/20 transition-all duration-700"></div>
                
                {/* Featured badge */}
                <div className="absolute top-4 right-4">
                  <span className="bg-gradient-to-r from-cyan-500 to-violet-500 text-white px-3 py-1 rounded-full text-sm font-semibold backdrop-blur-sm">
                    FEATURED
                  </span>
                </div>

                {/* Overlay icons */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="flex space-x-4">
                    <a 
                      href={project.liveUrl}
                      className="w-12 h-12 bg-cyan-500/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-cyan-400 transition-colors duration-300 transform hover:scale-110"
                    >
                      <Eye size={20} className="text-white" />
                    </a>
                    <a 
                      href={project.githubUrl}
                      className="w-12 h-12 bg-violet-500/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-violet-400 transition-colors duration-300 transform hover:scale-110"
                    >
                      <Github size={20} className="text-white" />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-white/70 mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech}
                      className="bg-gradient-to-r from-violet-500/20 to-fuchsia-500/20 backdrop-blur-sm rounded-full px-3 py-1 text-sm text-white/80 border border-white/10 hover:border-violet-400/50 transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <a 
                    href={project.liveUrl}
                    className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors duration-300 font-semibold group/link"
                  >
                    <Eye size={18} className="mr-2 group-hover/link:scale-110 transition-transform duration-300" />
                    Live Demo
                  </a>
                  <a 
                    href={project.githubUrl}
                    className="flex items-center text-violet-400 hover:text-violet-300 transition-colors duration-300 font-semibold group/link"
                  >
                    <Github size={18} className="mr-2 group-hover/link:scale-110 transition-transform duration-300" />
                    Code
                  </a>
                </div>
              </div>

              {/* Advanced hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/0 via-violet-400/0 to-fuchsia-400/0 group-hover:from-cyan-400/5 group-hover:via-violet-400/5 group-hover:to-fuchsia-400/5 rounded-3xl transition-all duration-700 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
