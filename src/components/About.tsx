
import { useEffect, useRef } from "react";

export const About = () => {
  const aboutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-in-left');
          }
        });
      },
      { threshold: 0.3 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="min-h-screen flex items-center py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={aboutRef}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <div className="space-y-8">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              About Me
            </h2>
            
            <div className="space-y-6 text-white/80 text-lg leading-relaxed">
              <p>
                I'm a passionate Software Engineering student with a keen eye for innovation and design. 
                My journey in technology is driven by curiosity and the desire to create meaningful digital experiences.
              </p>
              
              <p>
                Currently pursuing my degree while gaining hands-on experience through internships, 
                I specialize in full-stack development with a focus on modern web technologies and user experience design.
              </p>
              
              <p>
                Beyond coding, I'm passionate about photography, videography, and digital content creation, 
                which enhances my ability to think creatively and approach problems from unique perspectives.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <div className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                <div className="text-2xl font-bold text-white">50+</div>
                <div className="text-white/60">Projects Completed</div>
              </div>
              <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                <div className="text-2xl font-bold text-white">2+</div>
                <div className="text-white/60">Years Experience</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative w-80 h-80 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full blur-3xl opacity-30 animate-pulse"></div>
              <div className="relative w-full h-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full backdrop-blur-sm border border-white/20 flex items-center justify-center">
                <div className="text-6xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  DP
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
