import { useEffect, useRef } from "react";

export const Skills = () => {
  const skillsRef = useRef<HTMLDivElement>(null);

  const technicalSkills = [
    { name: "Java", icon: "☕", color: "from-orange-500 to-red-500" },
    { name: "HTML5", icon: "🌐", color: "from-orange-500 to-red-600" },
    { name: "CSS3", icon: "🎨", color: "from-blue-500 to-blue-600" },
    { name: "JavaScript", icon: "⚡", color: "from-yellow-400 to-yellow-500" },
    { name: "React.js", icon: "⚛️", color: "from-blue-400 to-cyan-400" },
    { name: "MongoDB", icon: "🍃", color: "from-green-500 to-green-600" }
  ];

  const tools = [
    { name: "Git", icon: "🔧" },
    { name: "GitHub", icon: "🐙" },
    { name: "Figma", icon: "🎯" },
    { name: "Canva", icon: "✨" }
  ];

  const softSkills = [
    { name: "Innovation", icon: "💡" },
    { name: "Emotional Intelligence", icon: "🧠" },
    { name: "Leadership", icon: "👑" },
    { name: "Perseverance", icon: "🚀" }
  ];

  const otherSkills = [
    { name: "Digital Content Creation", icon: "🎬" },
    { name: "Photography & Videography", icon: "📸" },
    { name: "Typing", icon: "⌨️" },
    { name: "Editing", icon: "✂️" }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.skill-card');
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add('animate-scale-in');
              }, index * 100);
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-32 bg-gradient-to-br from-slate-950 via-indigo-950 to-purple-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-6xl font-black bg-gradient-to-r from-cyan-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent mb-8 tracking-wide">
            SKILLS ARSENAL
          </h2>
          <p className="text-2xl text-white/70 max-w-4xl mx-auto font-light leading-relaxed">
            A comprehensive toolkit for building extraordinary digital experiences
          </p>
        </div>

        <div ref={skillsRef} className="space-y-20">
          {/* Technical Skills */}
          <div className="space-y-12">
            <h3 className="text-4xl font-bold text-center bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent tracking-wide">
              TECHNICAL MASTERY
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {technicalSkills.map((skill, index) => (
                <div 
                  key={skill.name} 
                  className="skill-card opacity-0 group relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 hover:border-cyan-400/50 transition-all duration-500 hover:scale-110 hover:rotate-2 shadow-2xl hover:shadow-cyan-500/25"
                >
                  <div className="text-center space-y-4">
                    <div className="text-6xl mb-4 group-hover:scale-125 transition-transform duration-300">
                      {skill.icon}
                    </div>
                    <h4 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                      {skill.name}
                    </h4>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/0 to-violet-400/0 group-hover:from-cyan-400/10 group-hover:to-violet-400/10 rounded-3xl transition-all duration-500"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div className="space-y-12">
            <h3 className="text-4xl font-bold text-center bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent tracking-wide">
              CREATIVE TOOLS
            </h3>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {tools.map((tool, index) => (
                <div 
                  key={tool.name}
                  className="skill-card opacity-0 group bg-gradient-to-br from-violet-500/10 to-fuchsia-500/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 hover:border-violet-400/50 transition-all duration-300 hover:scale-105 hover:-rotate-1 shadow-xl"
                >
                  <div className="text-center space-y-3">
                    <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                      {tool.icon}
                    </div>
                    <div className="text-lg font-semibold text-white group-hover:text-violet-400 transition-colors duration-300">
                      {tool.name}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div className="space-y-12">
            <h3 className="text-4xl font-bold text-center bg-gradient-to-r from-fuchsia-400 to-pink-400 bg-clip-text text-transparent tracking-wide">
              SOFT SKILLS
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {softSkills.map((skill, index) => (
                <div 
                  key={skill.name}
                  className="skill-card opacity-0 group bg-gradient-to-br from-fuchsia-500/10 to-pink-500/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 hover:border-fuchsia-400/50 transition-all duration-300 hover:scale-105 hover:rotate-1 shadow-xl"
                >
                  <div className="text-center space-y-3">
                    <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                      {skill.icon}
                    </div>
                    <div className="text-lg font-semibold text-white group-hover:text-fuchsia-400 transition-colors duration-300">
                      {skill.name}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Other Skills */}
          <div className="space-y-12">
            <h3 className="text-4xl font-bold text-center bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent tracking-wide">
              CREATIVE EXPERTISE
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {otherSkills.map((skill, index) => (
                <div 
                  key={skill.name}
                  className="skill-card opacity-0 group bg-gradient-to-br from-emerald-500/10 to-blue-500/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 hover:border-emerald-400/50 transition-all duration-300 hover:scale-105 hover:-rotate-1 shadow-xl"
                >
                  <div className="text-center space-y-3">
                    <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                      {skill.icon}
                    </div>
                    <div className="text-lg font-semibold text-white group-hover:text-emerald-400 transition-colors duration-300">
                      {skill.name}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
