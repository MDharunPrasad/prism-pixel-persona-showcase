import { useEffect, useRef } from "react";

export const Skills = () => {
  const skillsRef = useRef<HTMLDivElement>(null);

  const technicalSkills = [
    { name: "Java", level: 90, color: "from-orange-500 to-red-500" },
    { name: "HTML5", level: 95, color: "from-orange-500 to-red-600" },
    { name: "CSS3", level: 90, color: "from-blue-500 to-blue-600" },
    { name: "JavaScript", level: 85, color: "from-yellow-400 to-yellow-500" },
    { name: "React.js", level: 80, color: "from-blue-400 to-cyan-400" },
    { name: "MongoDB", level: 75, color: "from-green-500 to-green-600" }
  ];

  const tools = ["Git", "GitHub", "Figma", "Canva"];
  const softSkills = ["Innovation", "Emotional Intelligence", "Leadership", "Perseverance"];
  const otherSkills = ["Typing", "Editing", "Digital Content Creation", "Photography & Videography"];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const progressBars = entry.target.querySelectorAll('.progress-bar');
            progressBars.forEach((bar, index) => {
              setTimeout(() => {
                bar.classList.add('animate-progress');
              }, index * 200);
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-6">
            Skills & Expertise
          </h2>
          <p className="text-xl text-white/60 max-w-3xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </div>

        <div ref={skillsRef} className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-white mb-6">Programming Skills</h3>
            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <div key={skill.name} className="group">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-white font-medium">{skill.name}</span>
                    <span className="text-white/60">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-3 overflow-hidden">
                    <div 
                      className={`progress-bar h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out transform scale-x-0 origin-left group-hover:scale-x-100`}
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Other Skills */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Tools</h3>
              <div className="grid grid-cols-2 gap-4">
                {tools.map((tool, index) => (
                  <div 
                    key={tool} 
                    className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 backdrop-blur-sm rounded-lg p-4 border border-white/10 hover:scale-105 transition-transform duration-300"
                  >
                    <div className="text-white font-medium text-center">{tool}</div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Soft Skills</h3>
              <div className="grid grid-cols-1 gap-3">
                {softSkills.map((skill, index) => (
                  <div 
                    key={skill}
                    className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-lg p-3 border border-white/10 hover:scale-105 transition-transform duration-300"
                  >
                    <div className="text-white font-medium">{skill}</div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Other Skills</h3>
              <div className="flex flex-wrap gap-3">
                {otherSkills.map((skill, index) => (
                  <span 
                    key={skill}
                    className="bg-gradient-to-r from-pink-500/20 to-purple-500/20 backdrop-blur-sm rounded-full px-4 py-2 border border-white/10 text-white/80 hover:text-white transition-colors duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
