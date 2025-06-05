
import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

export const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [typingText, setTypingText] = useState("");
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

    // 3D Canvas Animation
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const particles: Array<{
      x: number;
      y: number;
      z: number;
      vx: number;
      vy: number;
      vz: number;
      size: number;
      color: string;
      rotation: number;
      rotationSpeed: number;
    }> = [];
    
    // Create universe particles
    for (let i = 0; i < 150; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        z: Math.random() * 1000,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        vz: Math.random() * 5 + 1,
        size: Math.random() * 3 + 1,
        color: `hsl(${Math.random() * 360}, 70%, 60%)`,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.1
      });
    }
    
    function animateUniverse() {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach((particle, index) => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.z -= particle.vz;
        particle.rotation += particle.rotationSpeed;
        
        // Reset if particle goes off screen
        if (particle.z <= 0) {
          particle.z = 1000;
          particle.x = Math.random() * canvas.width;
          particle.y = Math.random() * canvas.height;
        }
        
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;
        
        // 3D projection
        const scale = 500 / particle.z;
        const projectedX = particle.x * scale;
        const projectedY = particle.y * scale;
        const projectedSize = particle.size * scale;
        
        // Draw particle with 3D effect
        ctx.save();
        ctx.translate(projectedX, projectedY);
        ctx.rotate(particle.rotation);
        
        // Glow effect
        const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, projectedSize * 2);
        gradient.addColorStop(0, particle.color);
        gradient.addColorStop(1, 'transparent');
        
        ctx.fillStyle = gradient;
        ctx.fillRect(-projectedSize, -projectedSize, projectedSize * 2, projectedSize * 2);
        
        // Core particle
        ctx.fillStyle = particle.color;
        ctx.beginPath();
        ctx.arc(0, 0, projectedSize, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.restore();
        
        // Connect nearby particles
        particles.slice(index + 1).forEach(otherParticle => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
            ctx.strokeStyle = `rgba(100, 200, 255, ${1 - distance / 100})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(projectedX, projectedY);
            const otherScale = 500 / otherParticle.z;
            ctx.lineTo(otherParticle.x * otherScale, otherParticle.y * otherScale);
            ctx.stroke();
          }
        });
      });
      
      requestAnimationFrame(animateUniverse);
    }
    
    animateUniverse();

    // Mouse interaction
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      const xRotation = ((clientY - innerHeight / 2) / innerHeight) * 15;
      const yRotation = ((clientX - innerWidth / 2) / innerWidth) * 15;
      
      heroRef.current.style.transform = `perspective(1000px) rotateX(${xRotation}deg) rotateY(${yRotation}deg)`;
      
      // Attract particles to mouse
      particles.forEach(particle => {
        const dx = e.clientX - particle.x;
        const dy = e.clientY - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 200) {
          particle.vx += dx * 0.00001;
          particle.vy += dy * 0.00001;
        }
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
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
      {/* 3D Universe Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0"
        style={{ background: 'radial-gradient(ellipse at center, #1a1a2e 0%, #16213e 50%, #0f1419 100%)' }}
      />

      {/* Floating geometric shapes with enhanced 3D */}
      <div className="absolute inset-0 pointer-events-none z-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-cyan-400/30 to-violet-400/30 rounded-3xl backdrop-blur-sm animate-float border border-white/20 shadow-2xl transform rotate-12 hover:scale-110 transition-all duration-1000"></div>
        <div className="absolute top-60 right-32 w-24 h-24 bg-gradient-to-r from-fuchsia-400/30 to-emerald-400/30 rounded-full backdrop-blur-sm animate-float delay-1000 border border-white/20 shadow-2xl hover:scale-110 transition-all duration-1000"></div>
        <div className="absolute bottom-60 left-32 w-40 h-40 bg-gradient-to-r from-blue-400/30 to-purple-400/30 rounded-2xl backdrop-blur-sm animate-float delay-500 border border-white/20 shadow-2xl transform rotate-45 hover:scale-110 transition-all duration-1000"></div>
        <div className="absolute bottom-32 right-20 w-28 h-28 bg-gradient-to-r from-pink-400/30 to-cyan-400/30 rounded-full backdrop-blur-sm animate-float delay-2000 border border-white/20 shadow-2xl hover:scale-110 transition-all duration-1000"></div>
      </div>

      <div 
        ref={heroRef}
        className="text-center z-20 transition-transform duration-200 ease-out relative"
      >
        <div className="animate-fade-in">
          {/* Enhanced name with 3D laptop typing effect */}
          <div className="mb-8 relative">
            <div className="relative mb-8">
              {/* 3D Laptop Frame */}
              <div className="mx-auto w-96 h-64 perspective-1000 transform-gpu">
                <div className="relative w-full h-full transform rotateX-15 rotateY-5 transition-transform duration-1000 hover:rotateX-10 hover:rotateY-10">
                  {/* Laptop Screen */}
                  <div className="w-full h-48 bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-t-2xl border-4 border-gray-700 shadow-2xl relative overflow-hidden">
                    <div className="absolute inset-2 bg-black rounded-xl">
                      {/* Terminal Window */}
                      <div className="p-4 font-mono text-green-400 text-sm">
                        <div className="flex items-center mb-2">
                          <div className="flex space-x-2">
                            <div className="w-3 h-3 rounded-full bg-red-500"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                          </div>
                          <span className="ml-4 text-gray-400">terminal</span>
                        </div>
                        <div className="space-y-1">
                          <div>$ cd portfolio/</div>
                          <div>$ echo "Creating magic..."</div>
                          <div className="text-cyan-400">Creating magic...</div>
                          <div>$ whoami</div>
                          <div className="text-white font-bold text-lg typing-effect">
                            {typingText}<span className="animate-pulse">|</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Laptop Base */}
                  <div className="w-full h-4 bg-gradient-to-br from-gray-800 to-gray-900 rounded-b-2xl border-4 border-t-0 border-gray-700 shadow-xl"></div>
                  {/* Laptop Shadow */}
                  <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-80 h-8 bg-black/20 rounded-full blur-xl"></div>
                </div>
              </div>
            </div>

            <h1 className="text-8xl md:text-9xl font-black tracking-wider mb-4 transform-gpu">
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-cyan-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent drop-shadow-2xl text-glow-strong animate-pulse-glow">
                  DHARUN
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 via-violet-400/20 to-fuchsia-400/20 blur-3xl scale-110 animate-pulse"></div>
              </span>
            </h1>
            <h1 className="text-6xl md:text-7xl font-light tracking-[0.3em] transform-gpu">
              <span className="bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                PRASAD M
              </span>
            </h1>
          </div>
          
          {/* Enhanced description */}
          <p className="text-xl text-white/70 max-w-3xl mx-auto mb-16 leading-relaxed font-light">
            Crafting immersive digital experiences through innovative code, stunning design, and cutting-edge technology
          </p>
          
          {/* Enhanced action buttons */}
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
            <button 
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="group relative px-12 py-5 bg-gradient-to-r from-cyan-500 via-violet-500 to-fuchsia-500 rounded-2xl text-white font-bold text-lg overflow-hidden transition-all duration-500 hover:scale-110 hover:rotate-2 shadow-2xl hover:shadow-cyan-500/25 will-change-transform transform-gpu"
            >
              <span className="relative z-10">Explore My Universe</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 via-violet-600 to-fuchsia-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
              <div className="absolute inset-0 bg-white/20 scale-0 group-hover:scale-100 transition-transform duration-300 rounded-2xl"></div>
            </button>
            
            <button 
              onClick={viewResume}
              className="group relative px-12 py-5 border-2 border-emerald-400 rounded-2xl text-emerald-400 font-bold text-lg backdrop-blur-xl bg-emerald-400/10 transition-all duration-500 hover:bg-emerald-400 hover:text-black hover:scale-110 hover:-rotate-2 shadow-xl hover:shadow-emerald-400/25 will-change-transform transform-gpu"
            >
              <span className="relative z-10">View Resume</span>
            </button>
          </div>
        </div>
      </div>

      {/* Fixed scroll indicator */}
      <button 
        onClick={scrollToNext}
        className="fixed bottom-12 left-1/2 transform -translate-x-1/2 group cursor-pointer z-30"
      >
        <div className="flex flex-col items-center space-y-2">
          <span className="text-white/60 text-sm font-light tracking-wider uppercase">Scroll to Discover</span>
          <div className="w-12 h-12 rounded-full border-2 border-white/30 flex items-center justify-center group-hover:border-cyan-400 group-hover:bg-cyan-400/20 transition-all duration-300 backdrop-blur-sm animate-bounce">
            <ChevronDown className="text-white/60 group-hover:text-cyan-400 transition-colors duration-300" size={24} />
          </div>
        </div>
      </button>
    </section>
  );
};
