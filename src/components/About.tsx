
import { useEffect, useRef, useState } from "react";
import { Code, Palette, Camera, Lightbulb } from "lucide-react";

export const About = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.3 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  return (
    <section id="about" className="min-h-screen flex items-center py-32 bg-gradient-to-br from-black via-slate-900 to-purple-950 relative overflow-hidden">
      {/* Minimal background effects */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white/3 rounded-full animate-pulse"
            style={{
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-12 relative z-10">
        <div 
          ref={aboutRef}
          className="text-center space-y-16"
        >
          {/* Centered title */}
          <h2 className="text-7xl font-black bg-gradient-to-r from-cyan-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent tracking-wide">
            ABOUT ME
          </h2>
          
          {/* Centered content */}
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8 text-white/80 text-xl leading-relaxed text-center">
              <p className="text-2xl font-light">
                I'm a passionate <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent font-bold">Software Engineering student</span> with a keen eye for innovation and design. 
                My journey in technology is driven by curiosity and the desire to create meaningful digital experiences.
              </p>
              
              <p className="text-xl">
                Recently comppleted my B.E Computer Science degree while gaining hands-on experience through internships,projects 
                I specialize in <span className="text-emerald-400 font-semibold">front-end evelopment and UiUx Designing</span> with a focus on modern web technologies and user experience design.
              </p>
              
              <p className="text-xl">
                Beyond coding, I'm passionate about <span className="text-fuchsia-400 font-semibold">Editing, typing,  psychology and digital content creation</span>, 
                which enhances my ability to think creatively and approach problems from unique perspectives.
              </p>
            </div>

            {/* Simplified stats grid - centered */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto">
              <div className="group relative bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:scale-105 transition-all duration-300 text-center">
                <div className="text-4xl font-black text-white group-hover:text-cyan-400 transition-colors duration-300">8+</div>
                <div className="text-white/70 text-sm">Projects Completed</div>
                <Code className="mx-auto mt-2 text-cyan-400 opacity-50 group-hover:opacity-100 transition-opacity duration-300" size={20} />
              </div>
              
              <div className="group relative bg-gradient-to-br from-violet-500/10 to-purple-500/10 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:scale-105 transition-all duration-300 text-center">
                <div className="text-4xl font-black text-white group-hover:text-violet-400 transition-colors duration-300">5</div>
                <div className="text-white/70 text-sm">Months Experience</div>
                <Lightbulb className="mx-auto mt-2 text-violet-400 opacity-50 group-hover:opacity-100 transition-opacity duration-300" size={20} />
              </div>
              
              <div className="group relative bg-gradient-to-br from-emerald-500/10 to-green-500/10 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:scale-105 transition-all duration-300 text-center">
                <div className="text-4xl font-black text-white group-hover:text-emerald-400 transition-colors duration-300">∞</div>
                <div className="text-white/70 text-sm">Creative Ideas</div>
                <Palette className="mx-auto mt-2 text-emerald-400 opacity-50 group-hover:opacity-100 transition-opacity duration-300" size={20} />
              </div>
              
              <div className="group relative bg-gradient-to-br from-fuchsia-500/10 to-pink-500/10 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:scale-105 transition-all duration-300 text-center">
                <div className="text-4xl font-black text-white group-hover:text-fuchsia-400 transition-colors duration-300">24/7</div>
                <div className="text-white/70 text-sm">Passion Mode</div>
                <Camera className="mx-auto mt-2 text-fuchsia-400 opacity-50 group-hover:opacity-100 transition-opacity duration-300" size={20} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
