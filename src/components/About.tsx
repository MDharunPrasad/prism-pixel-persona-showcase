
import { useEffect, useRef, useState } from "react";
import { Code, Palette, Camera, Lightbulb } from "lucide-react";

export const About = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            entry.target.classList.add('animate-slide-in-left');
          }
        });
      },
      { threshold: 0.3 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    // 3D Particle Animation
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    canvas.width = 400;
    canvas.height = 400;
    
    const particles: Array<{
      x: number;
      y: number;
      z: number;
      vx: number;
      vy: number;
      vz: number;
      color: string;
      size: number;
      rotation: number;
      rotationSpeed: number;
    }> = [];
    
    // Initialize particles
    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        z: Math.random() * 1000 + 100,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        vz: Math.random() * 3 + 1,
        color: `hsl(${Math.random() * 360}, 80%, 60%)`,
        size: Math.random() * 4 + 2,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.1
      });
    }
    
    let animationFrame: number;
    
    function animate() {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach((particle, index) => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.z -= particle.vz;
        particle.rotation += particle.rotationSpeed;
        
        // Reset if particle goes too far
        if (particle.z <= 0) {
          particle.z = 1000;
          particle.x = Math.random() * canvas.width;
          particle.y = Math.random() * canvas.height;
        }
        
        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;
        
        // 3D projection
        const scale = 300 / particle.z;
        const projectedX = particle.x * scale + canvas.width / 2 * (1 - scale);
        const projectedY = particle.y * scale + canvas.height / 2 * (1 - scale);
        const projectedSize = particle.size * scale;
        
        // Draw particle with rotation
        ctx.save();
        ctx.translate(projectedX, projectedY);
        ctx.rotate(particle.rotation);
        
        // Glow effect
        const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, projectedSize * 2);
        gradient.addColorStop(0, particle.color);
        gradient.addColorStop(1, 'transparent');
        
        ctx.fillStyle = gradient;
        ctx.fillRect(-projectedSize * 2, -projectedSize * 2, projectedSize * 4, projectedSize * 4);
        
        // Core particle
        ctx.fillStyle = particle.color;
        ctx.fillRect(-projectedSize / 2, -projectedSize / 2, projectedSize, projectedSize);
        
        ctx.restore();
        
        // Connect nearby particles
        particles.slice(index + 1).forEach(otherParticle => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const dz = particle.z - otherParticle.z;
          const distance = Math.sqrt(dx * dx + dy * dy + dz * dz);
          
          if (distance < 200) {
            const otherScale = 300 / otherParticle.z;
            const otherProjectedX = otherParticle.x * otherScale + canvas.width / 2 * (1 - otherScale);
            const otherProjectedY = otherParticle.y * otherScale + canvas.height / 2 * (1 - otherScale);
            
            ctx.strokeStyle = `rgba(100, 200, 255, ${1 - distance / 200})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(projectedX, projectedY);
            ctx.lineTo(otherProjectedX, otherProjectedY);
            ctx.stroke();
          }
        });
      });
      
      animationFrame = requestAnimationFrame(animate);
    }
    
    if (isVisible) {
      animate();
    }
    
    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
      observer.disconnect();
    };
  }, [isVisible]);

  return (
    <section id="about" className="min-h-screen flex items-center py-32 bg-gradient-to-br from-black via-slate-900 to-purple-950 relative overflow-hidden">
      {/* Enhanced background effects */}
      <div className="absolute inset-0">
        {[...Array(60)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white/5 rounded-full animate-pulse"
            style={{
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-8xl mx-auto px-6 lg:px-12 relative z-10">
        <div 
          ref={aboutRef}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          <div className="space-y-10">
            <h2 className="text-7xl font-black bg-gradient-to-r from-cyan-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent tracking-wide">
              ABOUT ME
            </h2>
            
            <div className="space-y-8 text-white/80 text-xl leading-relaxed">
              <p className="text-2xl font-light">
                I'm a passionate <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent font-bold">Software Engineering student</span> with a keen eye for innovation and design. 
                My journey in technology is driven by curiosity and the desire to create meaningful digital experiences.
              </p>
              
              <p className="text-xl">
                Currently pursuing my degree while gaining hands-on experience through internships, 
                I specialize in <span className="text-emerald-400 font-semibold">full-stack development</span> with a focus on modern web technologies and user experience design.
              </p>
              
              <p className="text-xl">
                Beyond coding, I'm passionate about <span className="text-fuchsia-400 font-semibold">photography, videography, and digital content creation</span>, 
                which enhances my ability to think creatively and approach problems from unique perspectives.
              </p>
            </div>

            {/* Enhanced stats with 3D effects */}
            <div className="grid grid-cols-2 gap-6 mt-12">
              <div className="group relative bg-gradient-to-br from-cyan-500/20 to-blue-500/20 backdrop-blur-xl rounded-2xl p-6 border border-white/20 hover:scale-105 transition-all duration-500 shadow-2xl hover:shadow-cyan-500/25">
                <div className="text-4xl font-black text-white group-hover:text-cyan-400 transition-colors duration-300">50+</div>
                <div className="text-white/70 text-lg">Projects Completed</div>
                <Code className="absolute top-4 right-4 text-cyan-400 opacity-50 group-hover:opacity-100 transition-opacity duration-300" size={24} />
              </div>
              
              <div className="group relative bg-gradient-to-br from-violet-500/20 to-purple-500/20 backdrop-blur-xl rounded-2xl p-6 border border-white/20 hover:scale-105 transition-all duration-500 shadow-2xl hover:shadow-violet-500/25">
                <div className="text-4xl font-black text-white group-hover:text-violet-400 transition-colors duration-300">2+</div>
                <div className="text-white/70 text-lg">Years Experience</div>
                <Lightbulb className="absolute top-4 right-4 text-violet-400 opacity-50 group-hover:opacity-100 transition-opacity duration-300" size={24} />
              </div>
              
              <div className="group relative bg-gradient-to-br from-emerald-500/20 to-green-500/20 backdrop-blur-xl rounded-2xl p-6 border border-white/20 hover:scale-105 transition-all duration-500 shadow-2xl hover:shadow-emerald-500/25">
                <div className="text-4xl font-black text-white group-hover:text-emerald-400 transition-colors duration-300">∞</div>
                <div className="text-white/70 text-lg">Creative Ideas</div>
                <Palette className="absolute top-4 right-4 text-emerald-400 opacity-50 group-hover:opacity-100 transition-opacity duration-300" size={24} />
              </div>
              
              <div className="group relative bg-gradient-to-br from-fuchsia-500/20 to-pink-500/20 backdrop-blur-xl rounded-2xl p-6 border border-white/20 hover:scale-105 transition-all duration-500 shadow-2xl hover:shadow-fuchsia-500/25">
                <div className="text-4xl font-black text-white group-hover:text-fuchsia-400 transition-colors duration-300">24/7</div>
                <div className="text-white/70 text-lg">Passion Mode</div>
                <Camera className="absolute top-4 right-4 text-fuchsia-400 opacity-50 group-hover:opacity-100 transition-opacity duration-300" size={24} />
              </div>
            </div>
          </div>

          {/* Mind-blowing 3D visualization */}
          <div className="relative flex items-center justify-center">
            <div className="relative">
              {/* 3D Particle Canvas */}
              <canvas
                ref={canvasRef}
                className="w-96 h-96 rounded-full border-4 border-white/20 shadow-2xl backdrop-blur-xl"
                style={{ 
                  background: 'radial-gradient(circle, rgba(139, 92, 246, 0.1) 0%, rgba(6, 182, 212, 0.1) 50%, rgba(236, 72, 153, 0.1) 100%)',
                }}
              />
              
              {/* Orbiting elements */}
              <div className="absolute inset-0 animate-spin-slow">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-cyan-400 rounded-full shadow-lg animate-pulse"></div>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-violet-400 rounded-full shadow-lg animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-10 h-10 bg-fuchsia-400 rounded-full shadow-lg animate-pulse delay-500"></div>
                <div className="absolute top-1/2 right-0 transform -translate-y-1/2 w-7 h-7 bg-emerald-400 rounded-full shadow-lg animate-pulse delay-1500"></div>
              </div>
              
              {/* Central avatar */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 bg-gradient-to-r from-cyan-400 via-violet-400 to-fuchsia-400 rounded-full flex items-center justify-center text-4xl font-black text-white shadow-2xl animate-pulse-glow">
                  DP
                </div>
              </div>
              
              {/* Floating tech icons */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-10 left-10 text-2xl animate-bounce delay-300">⚛️</div>
                <div className="absolute top-20 right-20 text-2xl animate-bounce delay-700">🚀</div>
                <div className="absolute bottom-20 left-16 text-2xl animate-bounce delay-1100">💻</div>
                <div className="absolute bottom-16 right-12 text-2xl animate-bounce delay-1500">🎨</div>
              </div>
              
              {/* Glow effects */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 via-violet-400/20 to-fuchsia-400/20 rounded-full blur-3xl scale-150 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
