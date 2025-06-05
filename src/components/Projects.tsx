import { ExternalLink, Github, Eye } from "lucide-react";

export const Projects = () => {
  const projects = [
    {
      title: "Neural Network Visualizer",
      description: "Interactive 3D visualization of neural networks with real-time training animation and performance metrics",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop",
      tech: ["React", "Three.js", "TypeScript"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      title: "AI Code Assistant", 
      description: "Intelligent code completion and suggestion system powered by machine learning algorithms",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=600&fit=crop",
      tech: ["Python", "JavaScript", "OpenAI"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      title: "Quantum Portfolio",
      description: "Cutting-edge portfolio website with quantum-inspired animations and particle physics simulations",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop",
      tech: ["React", "WebGL", "GSAP"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      title: "Blockchain Explorer",
      description: "Advanced blockchain transaction explorer with real-time data visualization and analytics",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=600&fit=crop",
      tech: ["React", "D3.js", "Web3"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      title: "AR Experience Platform",
      description: "Immersive augmented reality platform for creating and sharing interactive 3D experiences",
      image: "https://images.unsplash.com/photo-1592478411213-6153e4ebc696?w=800&h=600&fit=crop",
      tech: ["Three.js", "WebXR", "React"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      title: "Smart Dashboard",
      description: "AI-powered analytics dashboard with predictive modeling and real-time data streaming",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      tech: ["React", "Chart.js", "MongoDB"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    }
  ];

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-32 bg-gradient-to-br from-purple-950 via-indigo-950 to-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-6xl font-black bg-gradient-to-r from-violet-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent mb-8 tracking-wide">
            PROJECT UNIVERSE
          </h2>
          <p className="text-2xl text-white/70 max-w-4xl mx-auto font-light leading-relaxed">
            Showcasing innovative solutions that push the boundaries of technology
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-20">
          <h3 className="text-4xl font-bold text-center bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent mb-12 tracking-wide">
            FEATURED WORKS
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {featuredProjects.map((project, index) => (
              <div 
                key={index}
                className="group relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/20 hover:border-cyan-400/50 transition-all duration-500 hover:scale-105 hover:rotate-1 shadow-2xl hover:shadow-cyan-500/25"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-gradient-to-r from-cyan-500 to-violet-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      FEATURED
                    </span>
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
                        className="bg-gradient-to-r from-violet-500/20 to-fuchsia-500/20 backdrop-blur-sm rounded-full px-3 py-1 text-sm text-white/80 border border-white/10"
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
              </div>
            ))}
          </div>
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-4xl font-bold text-center bg-gradient-to-r from-fuchsia-400 to-pink-400 bg-clip-text text-transparent mb-12 tracking-wide">
            MORE CREATIONS
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherProjects.map((project, index) => (
              <div 
                key={index}
                className="group bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/20 hover:border-fuchsia-400/50 transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-fuchsia-500/25"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-fuchsia-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-white/70 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.tech.map((tech) => (
                      <span 
                        key={tech}
                        className="bg-fuchsia-500/20 rounded-full px-2 py-1 text-xs text-white/80"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-4 text-sm">
                    <a 
                      href={project.liveUrl}
                      className="flex items-center text-fuchsia-400 hover:text-fuchsia-300 transition-colors duration-300"
                    >
                      <ExternalLink size={14} className="mr-1" />
                      Demo
                    </a>
                    <a 
                      href={project.githubUrl}
                      className="flex items-center text-pink-400 hover:text-pink-300 transition-colors duration-300"
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
      </div>
    </section>
  );
};
