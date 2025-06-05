
import { useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";

export const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      const xRotation = ((clientY - innerHeight / 2) / innerHeight) * 20;
      const yRotation = ((clientX - innerWidth / 2) / innerWidth) * 20;
      
      heroRef.current.style.transform = `perspective(1000px) rotateX(${xRotation}deg) rotateY(${yRotation}deg)`;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div 
        ref={heroRef}
        className="text-center z-10 transition-transform duration-100 ease-out"
      >
        <div className="animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-pulse">
              Dharun
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Prasad M
            </span>
          </h1>
          
          <div className="text-xl md:text-2xl text-white/80 mb-8 animate-slide-in-right delay-300">
            <div className="typing-effect">
              <span>Software Engineer</span>
              <span className="cursor">|</span>
            </div>
          </div>
          
          <p className="text-lg text-white/60 max-w-2xl mx-auto mb-12 animate-fade-in delay-500">
            Crafting innovative digital experiences with cutting-edge technology and creative design
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-scale-in delay-700">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full text-white font-semibold overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25">
              <span className="relative z-10">View My Work</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </button>
            
            <button className="group px-8 py-4 border-2 border-white/20 rounded-full text-white font-semibold backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:scale-105">
              <span>Get In Touch</span>
            </button>
          </div>
        </div>
      </div>

      {/* Floating 3D Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="floating-cube absolute top-20 left-10 w-16 h-16 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-lg backdrop-blur-sm animate-float"></div>
        <div className="floating-cube absolute top-40 right-20 w-12 h-12 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-lg backdrop-blur-sm animate-float delay-1000"></div>
        <div className="floating-cube absolute bottom-40 left-20 w-20 h-20 bg-gradient-to-r from-blue-500/20 to-pink-500/20 rounded-lg backdrop-blur-sm animate-float delay-500"></div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-white/60" size={32} />
      </div>
    </section>
  );
};
