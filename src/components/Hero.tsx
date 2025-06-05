
import { useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";

export const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      const xRotation = ((clientY - innerHeight / 2) / innerHeight) * 10;
      const yRotation = ((clientX - innerWidth / 2) / innerWidth) * 10;
      
      heroRef.current.style.transform = `perspective(1000px) rotateX(${xRotation}deg) rotateY(${yRotation}deg)`;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const viewResume = () => {
    // You can replace this with actual resume URL
    window.open('/resume.pdf', '_blank');
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-black via-purple-950 to-indigo-950">
      {/* Enhanced animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white/20 rounded-full animate-pulse"
            style={{
              width: `${Math.random() * 4 + 1}px`,
              height: `${Math.random() * 4 + 1}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      {/* Floating geometric shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-cyan-400/20 to-violet-400/20 rounded-3xl backdrop-blur-sm animate-float border border-white/10 shadow-2xl transform rotate-12"></div>
        <div className="absolute top-60 right-32 w-24 h-24 bg-gradient-to-r from-fuchsia-400/20 to-emerald-400/20 rounded-full backdrop-blur-sm animate-float delay-1000 border border-white/10 shadow-2xl"></div>
        <div className="absolute bottom-60 left-32 w-40 h-40 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-2xl backdrop-blur-sm animate-float delay-500 border border-white/10 shadow-2xl transform rotate-45"></div>
        <div className="absolute bottom-32 right-20 w-28 h-28 bg-gradient-to-r from-pink-400/20 to-cyan-400/20 rounded-full backdrop-blur-sm animate-float delay-2000 border border-white/10 shadow-2xl"></div>
      </div>

      <div 
        ref={heroRef}
        className="text-center z-10 transition-transform duration-200 ease-out"
      >
        <div className="animate-fade-in">
          {/* Name with advanced typography */}
          <div className="mb-8 relative">
            <h1 className="text-8xl md:text-9xl font-black tracking-wider mb-4">
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-cyan-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent drop-shadow-2xl text-glow-strong">
                  DHARUN
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 via-violet-400/20 to-fuchsia-400/20 blur-3xl scale-110 animate-pulse"></div>
              </span>
            </h1>
            <h1 className="text-6xl md:text-7xl font-light tracking-[0.3em]">
              <span className="bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                PRASAD M
              </span>
            </h1>
          </div>
          
          {/* Enhanced animated role */}
          <div className="text-2xl md:text-3xl text-white/90 mb-12 font-light tracking-wide">
            <div className="typing-container overflow-hidden border-r-4 border-cyan-400 animate-pulse">
              <span className="typing-text bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
                Creative Software Engineer & Digital Artist
              </span>
            </div>
          </div>
          
          {/* Enhanced description */}
          <p className="text-xl text-white/70 max-w-3xl mx-auto mb-16 leading-relaxed font-light">
            Crafting immersive digital experiences through innovative code, stunning design, and cutting-edge technology
          </p>
          
          {/* Enhanced action buttons */}
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
            <button 
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="group relative px-12 py-5 bg-gradient-to-r from-cyan-500 via-violet-500 to-fuchsia-500 rounded-2xl text-white font-bold text-lg overflow-hidden transition-all duration-500 hover:scale-110 hover:rotate-2 shadow-2xl hover:shadow-cyan-500/25 will-change-transform"
            >
              <span className="relative z-10">Explore My Universe</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 via-violet-600 to-fuchsia-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
              <div className="absolute inset-0 bg-white/20 scale-0 group-hover:scale-100 transition-transform duration-300 rounded-2xl"></div>
            </button>
            
            <button 
              onClick={viewResume}
              className="group relative px-12 py-5 border-2 border-emerald-400 rounded-2xl text-emerald-400 font-bold text-lg backdrop-blur-xl bg-emerald-400/10 transition-all duration-500 hover:bg-emerald-400 hover:text-black hover:scale-110 hover:-rotate-2 shadow-xl hover:shadow-emerald-400/25 will-change-transform"
            >
              <span className="relative z-10">View Resume</span>
            </button>
          </div>
        </div>
      </div>

      {/* Fixed and enhanced scroll indicator */}
      <button 
        onClick={scrollToNext}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 group cursor-pointer animate-bounce hover:animate-none z-20"
      >
        <div className="flex flex-col items-center space-y-2">
          <span className="text-white/60 text-sm font-light tracking-wider uppercase">Scroll to Discover</span>
          <div className="w-12 h-12 rounded-full border-2 border-white/30 flex items-center justify-center group-hover:border-cyan-400 group-hover:bg-cyan-400/20 transition-all duration-300 backdrop-blur-sm">
            <ChevronDown className="text-white/60 group-hover:text-cyan-400 transition-colors duration-300 animate-bounce" size={24} />
          </div>
        </div>
      </button>
    </section>
  );
};
