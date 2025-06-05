
import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

export const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [typingText, setTypingText] = useState("");
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);
  const fullText = "Creative Software Engineer & Digital Artist";

  useEffect(() => {
    // Typing animation
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypingText(fullText.substring(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    // Scroll indicator visibility
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const heroHeight = window.innerHeight;
      setShowScrollIndicator(scrollPosition < heroHeight * 0.8);
    };

    window.addEventListener('scroll', handleScroll);

    // Optimized canvas animation
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    canvas.width = Math.min(window.innerWidth, 1920);
    canvas.height = Math.min(window.innerHeight, 1080);
    
    const particles: Array<{
      x: number;
      y: number;
      z: number;
      vx: number;
      vy: number;
      vz: number;
      size: number;
      color: string;
    }> = [];
    
    // Reduced particles for performance
    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        z: Math.random() * 1000,
        vx: (Math.random() - 0.5) * 1,
        vy: (Math.random() - 0.5) * 1,
        vz: Math.random() * 3 + 1,
        size: Math.random() * 2 + 1,
        color: `hsl(${180 + Math.random() * 60}, 70%, 60%)`
      });
    }
    
    let frameCount = 0;
    function animateUniverse() {
      frameCount++;
      
      // Reduce render frequency for performance
      if (frameCount % 2 === 0) {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        particles.forEach((particle) => {
          // Update position
          particle.x += particle.vx;
          particle.y += particle.vy;
          particle.z -= particle.vz;
          
          // Reset if particle goes off screen
          if (particle.z <= 0) {
            particle.z = 1000;
            particle.x = Math.random() * canvas.width;
            particle.y = Math.random() * canvas.height;
          }
          
          if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
          if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;
          
          // 3D projection
          const scale = 300 / particle.z;
          const projectedX = particle.x * scale;
          const projectedY = particle.y * scale;
          const projectedSize = particle.size * scale;
          
          // Draw particle
          ctx.fillStyle = particle.color;
          ctx.beginPath();
          ctx.arc(projectedX, projectedY, Math.max(0.5, projectedSize), 0, Math.PI * 2);
          ctx.fill();
        });
      }
      
      requestAnimationFrame(animateUniverse);
    }
    
    animateUniverse();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(typingInterval);
    };
  }, []);

  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const viewResume = () => {
    window.open('/resume.pdf', '_blank');
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Optimized Universe Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0"
        style={{ background: 'radial-gradient(ellipse at center, #1a1a2e 0%, #16213e 50%, #0f1419 100%)' }}
      />

      {/* Floating geometric shapes */}
      <div className="absolute inset-0 pointer-events-none z-10">
        <div className="absolute top-20 left-20 w-24 h-24 bg-gradient-to-r from-cyan-400/20 to-violet-400/20 rounded-2xl backdrop-blur-sm animate-float border border-white/10 shadow-xl transform rotate-12"></div>
        <div className="absolute top-60 right-32 w-16 h-16 bg-gradient-to-r from-fuchsia-400/20 to-emerald-400/20 rounded-full backdrop-blur-sm animate-float delay-1000 border border-white/10 shadow-xl"></div>
        <div className="absolute bottom-60 left-32 w-28 h-28 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-xl backdrop-blur-sm animate-float delay-500 border border-white/10 shadow-xl transform rotate-45"></div>
        <div className="absolute bottom-32 right-20 w-20 h-20 bg-gradient-to-r from-pink-400/20 to-cyan-400/20 rounded-full backdrop-blur-sm animate-float delay-2000 border border-white/10 shadow-xl"></div>
      </div>

      <div 
        ref={heroRef}
        className="text-center z-20 relative"
      >
        <div className="animate-fade-in">
          {/* Enhanced name with 3D laptop typing effect */}
          <div className="mb-8 relative">
            <div className="relative mb-8">
              {/* 3D Laptop Frame */}
              <div className="mx-auto w-80 h-52 perspective-1000">
                <div className="relative w-full h-full transform rotateX-15 rotateY-5 transition-transform duration-1000 hover:rotateX-10 hover:rotateY-10">
                  {/* Laptop Screen */}
                  <div className="w-full h-40 bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-t-xl border-2 border-gray-700 shadow-xl relative overflow-hidden">
                    <div className="absolute inset-1 bg-black rounded-lg">
                      {/* Terminal Window */}
                      <div className="p-3 font-mono text-green-400 text-xs">
                        <div className="flex items-center mb-2">
                          <div className="flex space-x-1">
                            <div className="w-2 h-2 rounded-full bg-red-500"></div>
                            <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                            <div className="w-2 h-2 rounded-full bg-green-500"></div>
                          </div>
                          <span className="ml-3 text-gray-400 text-xs">terminal</span>
                        </div>
                        <div className="space-y-1">
                          <div>$ cd portfolio/</div>
                          <div>$ echo "Creating magic..."</div>
                          <div className="text-cyan-400">Creating magic...</div>
                          <div>$ whoami</div>
                          <div className="text-white font-bold text-sm">
                            {typingText}<span className="animate-pulse">|</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Laptop Base */}
                  <div className="w-full h-3 bg-gradient-to-br from-gray-800 to-gray-900 rounded-b-xl border-2 border-t-0 border-gray-700 shadow-lg"></div>
                </div>
              </div>
            </div>

            <h1 className="text-6xl md:text-8xl font-black tracking-wider mb-4">
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-cyan-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent drop-shadow-2xl animate-pulse-glow">
                  DHARUN
                </span>
              </span>
            </h1>
            <h1 className="text-4xl md:text-6xl font-light tracking-[0.3em]">
              <span className="bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                PRASAD M
              </span>
            </h1>
          </div>
          
          {/* Enhanced description */}
          <p className="text-lg text-white/70 max-w-2xl mx-auto mb-12 leading-relaxed font-light">
            Crafting immersive digital experiences through innovative code, stunning design, and cutting-edge technology
          </p>
          
          {/* Enhanced action buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button 
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="group relative px-10 py-4 bg-gradient-to-r from-cyan-500 via-violet-500 to-fuchsia-500 rounded-xl text-white font-bold text-lg overflow-hidden transition-all duration-500 hover:scale-105 hover:rotate-1 shadow-xl hover:shadow-cyan-500/25"
            >
              <span className="relative z-10">Explore My Universe</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 via-violet-600 to-fuchsia-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
            </button>
            
            <button 
              onClick={viewResume}
              className="group relative px-10 py-4 border-2 border-emerald-400 rounded-xl text-emerald-400 font-bold text-lg backdrop-blur-xl bg-emerald-400/10 transition-all duration-500 hover:bg-emerald-400 hover:text-black hover:scale-105 hover:-rotate-1 shadow-lg hover:shadow-emerald-400/25"
            >
              <span className="relative z-10">View Resume</span>
            </button>
          </div>
        </div>
      </div>

      {/* Improved scroll indicator */}
      {showScrollIndicator && (
        <button 
          onClick={scrollToNext}
          className="fixed bottom-8 left-1/2 transform -translate-x-1/2 group cursor-pointer z-30 transition-all duration-500"
        >
          <div className="flex flex-col items-center space-y-2">
            <span className="text-white/60 text-xs font-light tracking-wider uppercase">Scroll to Discover</span>
            <div className="w-10 h-10 rounded-full border-2 border-white/30 flex items-center justify-center group-hover:border-cyan-400 group-hover:bg-cyan-400/20 transition-all duration-300 backdrop-blur-sm animate-bounce">
              <ChevronDown className="text-white/60 group-hover:text-cyan-400 transition-colors duration-300" size={20} />
            </div>
          </div>
        </button>
      )}
    </section>
  );
};
