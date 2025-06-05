
import { ExternalLink, Github, Eye } from "lucide-react";

export const Projects = () => {
  const projects = [
    {
      title: "Neural Network Visualizer",
      description: "Interactive 3D visualization of neural networks with real-time training animation and performance metrics using cutting-edge WebGL technology",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop&crop=center",
      tech: ["React", "Three.js", "TypeScript", "WebGL"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      title: "AI Code Assistant", 
      description: "Intelligent code completion and suggestion system powered by machine learning algorithms with real-time code analysis",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=600&fit=crop&crop=center",
      tech: ["Python", "JavaScript", "OpenAI", "Node.js"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      title: "Quantum Portfolio",
      description: "Award-winning portfolio website with quantum-inspired animations, particle physics simulations, and immersive 3D experiences",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop&crop=center",
      tech: ["React", "WebGL", "GSAP", "Three.js"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    }
  ];

  return (
    <section id="projects" className="py-24 bg-gradient-to-br from-purple-950 via-indigo-950 to-slate-950 relative overflow-hidden">
      {/* Optimized background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-48 h-48 bg-purple-500/5 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-blue-500/5 rounded-full blur-2xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black bg-gradient-to-r from-violet-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent mb-6 tracking-wide">
            PROJECT UNIVERSE
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto font-light leading-relaxed">
            Showcasing innovative solutions that push the boundaries of technology
          </p>
        </div>

        {/* Featured Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/20 hover:border-cyan-400/50 transition-all duration-500 hover:scale-105 shadow-xl hover:shadow-cyan-500/20"
            >
              {/* Image container */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                
                {/* Featured badge */}
                <div className="absolute top-3 right-3">
                  <span className="bg-gradient-to-r from-cyan-500 to-violet-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
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
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-white/70 mb-4 leading-relaxed text-sm">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech}
                      className="bg-gradient-to-r from-violet-500/20 to-fuchsia-500/20 backdrop-blur-sm rounded-full px-2 py-1 text-xs text-white/80 border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <a 
                    href={project.liveUrl}
                    className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors duration-300 font-semibold text-sm"
                  >
                    <Eye size={14} className="mr-1" />
                    Live Demo
                  </a>
                  <a 
                    href={project.githubUrl}
                    className="flex items-center text-violet-400 hover:text-violet-300 transition-colors duration-300 font-semibold text-sm"
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
