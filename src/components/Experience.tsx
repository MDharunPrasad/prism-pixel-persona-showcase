
import { Calendar, MapPin, Briefcase } from "lucide-react";

export const Experience = () => {
  return (
    <section id="experience" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-6">
            Experience
          </h2>
          <p className="text-xl text-white/60 max-w-3xl mx-auto">
            Building expertise through hands-on experience and continuous learning
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-blue-500"></div>

          <div className="space-y-12">
            <div className="relative pl-20">
              {/* Timeline Dot */}
              <div className="absolute left-6 top-6 w-4 h-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full border-4 border-slate-900"></div>
              
              <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:scale-105 transition-transform duration-300">
                <div className="flex flex-wrap items-center gap-4 mb-4">
                  <div className="flex items-center text-purple-400">
                    <Briefcase size={20} className="mr-2" />
                    <span className="font-semibold">Software Engineering Intern</span>
                  </div>
                  <div className="flex items-center text-blue-400">
                    <Calendar size={20} className="mr-2" />
                    <span>Feb 2025 - May 2025</span>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-2">
                  Gigabyte Labs Private Limited
                </h3>
                
                <div className="space-y-3 text-white/80">
                  <p>• Worked as a Software Engineering Intern, focusing on UI/UX design and development tasks</p>
                  <p>• Contributed to software enhancements, improving user experience and system functionality</p>
                  <p>• Engaged in hands-on development, refining technical and problem-solving skills</p>
                </div>

                <div className="flex flex-wrap gap-2 mt-6">
                  {["UI/UX Design", "Software Development", "System Enhancement", "Problem Solving"].map((skill) => (
                    <span 
                      key={skill}
                      className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 backdrop-blur-sm rounded-full px-3 py-1 text-sm text-white/80 border border-white/10"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
