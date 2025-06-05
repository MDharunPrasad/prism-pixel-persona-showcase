
import { useEffect, useRef } from "react";

export const Skills = () => {
  const skillsRef = useRef<HTMLDivElement>(null);

  const technicalSkills = [
    "Java", "HTML5", "CSS3", "JavaScript", "React.js", "MongoDB", 
    "Git", "GitHub", "Figma", "Canva"
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.skill-item');
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
    <section id="skills" className="py-32 bg-gradient-to-br from-slate-950 via-indigo-950 to-purple-950 relative overflow-hidden">
      {/* Dynamic background particles */}
      <div className="absolute inset-0">
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white/5 rounded-full animate-pulse"
            style={{
              width: `${Math.random() * 4 + 1}px`,
              height: `${Math.random() * 4 + 1}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      {/* Floating geometric shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-r from-cyan-400/10 to-violet-400/10 rounded-full blur-2xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-56 h-56 bg-gradient-to-r from-fuchsia-400/10 to-emerald-400/10 rounded-full blur-2xl animate-float delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-gradient-to-r from-yellow-400/10 to-red-400/10 rounded-full blur-2xl animate-float delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-7xl font-black bg-gradient-to-r from-cyan-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent mb-8 tracking-wide">
            TECHNICAL ARSENAL
          </h2>
          <p className="text-3xl text-white/70 max-w-4xl mx-auto font-light leading-relaxed">
            Cutting-edge technologies and professional expertise
          </p>
        </div>

        <div ref={skillsRef} className="space-y-20">
          {/* Technical Skills with Amazing Typography */}
          <div className="space-y-16">
            <h3 className="text-5xl font-black text-center bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent tracking-wide mb-12">
              CORE TECHNOLOGIES & TOOLS
            </h3>
            
            {/* Flowing skill layout */}
            <div className="flex flex-wrap justify-center gap-8">
              {technicalSkills.map((skill, index) => (
                <div 
                  key={skill} 
                  className="skill-item opacity-0 group relative"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative px-8 py-6 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-2xl rounded-2xl border border-white/20 hover:border-cyan-400/50 transition-all duration-700 hover:scale-110 hover:rotate-3 shadow-2xl hover:shadow-cyan-500/25 transform-gpu">
                    {/* Skill name with advanced typography */}
                    <div className="text-center">
                      <h4 className={`text-2xl font-black text-white group-hover:text-cyan-400 transition-all duration-500 ${
                        skill.length > 8 ? 'text-xl' : 'text-2xl'
                      }`} style={{
                        fontFamily: 'Space Grotesk, monospace',
                        textShadow: '0 0 20px rgba(6, 182, 212, 0.3)',
                        letterSpacing: '0.05em'
                      }}>
                        {skill.toUpperCase()}
                      </h4>
                      
                      {/* Animated underline */}
                      <div className="mt-3 h-1 bg-gradient-to-r from-cyan-400 to-violet-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-full"></div>
                    </div>
                    
                    {/* Hover glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/0 to-violet-400/0 group-hover:from-cyan-400/10 group-hover:to-violet-400/10 rounded-2xl transition-all duration-700"></div>
                    
                    {/* Floating particles on hover */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      {[...Array(6)].map((_, i) => (
                        <div
                          key={i}
                          className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-ping"
                          style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${i * 0.2}s`
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Animated skill connections */}
            <div className="relative mt-16">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent animate-pulse"></div>
              </div>
              <div className="text-center">
                <div className="inline-block px-8 py-3 bg-gradient-to-r from-black/80 to-purple-900/80 backdrop-blur-xl rounded-full border border-white/20">
                  <span className="text-lg font-bold bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
                    CONTINUOUSLY EXPANDING SKILLSET
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
