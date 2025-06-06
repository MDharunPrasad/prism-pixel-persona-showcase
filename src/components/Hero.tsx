
import { useEffect, useRef, useState } from "react";
import { ChevronDown, Gift } from "lucide-react";

export const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [typingText, setTypingText] = useState("");
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [showSurprise, setShowSurprise] = useState(false);
  const [giftClicked, setGiftClicked] = useState(false);
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
    }, 80);

    // Minimal mouse parallax effect
    let lastMouseUpdate = 0;
    const handleMouseMove = (e: MouseEvent) => {
      const now = Date.now();
      if (now - lastMouseUpdate > 50) {
        setMousePosition({
          x: (e.clientX / window.innerWidth - 0.5) * 5,
          y: (e.clientY / window.innerHeight - 0.5) * 5
        });
        lastMouseUpdate = now;
      }
    };

    // Scroll indicator visibility
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setShowScrollIndicator(scrollPosition < 200);
    };

    const isMobile = window.innerWidth < 768;
    if (!isMobile) {
      window.addEventListener('mousemove', handleMouseMove, { passive: true });
    }
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
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

  const handleGiftClick = () => {
    setGiftClicked(true);
    setShowSurprise(true);
    setTimeout(() => {
      setShowSurprise(false);
    }, 4000);
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Simple background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-purple-950 to-indigo-950"></div>
      
      {/* Minimal animated stars */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Surprise Gift Box - Enhanced with better surprise text */}
      {!giftClicked && (
        <div className="absolute top-20 right-20 z-30">
          <button
            onClick={handleGiftClick}
            className="group relative p-4 rounded-full bg-gradient-to-r from-pink-500/20 to-yellow-500/20 backdrop-blur-sm border border-white/20 transition-all duration-300 hover:scale-110 animate-pulse"
          >
            <Gift className="w-8 h-8 text-yellow-400 transition-all duration-300 group-hover:rotate-12" />
            <div className="absolute -top-2 -right-2 w-4 h-4 bg-red-500 rounded-full animate-ping"></div>
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-white/60 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
              Click me! 🎁
            </div>
          </button>
        </div>
      )}

      {/* Enhanced Surprise Message */}
      {showSurprise && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center">
          <div className="bg-gradient-to-br from-purple-900/90 to-pink-900/90 backdrop-blur-xl p-8 rounded-3xl border border-white/20 text-center animate-scale-in shadow-2xl max-w-md">
            <div className="text-6xl mb-4 animate-bounce">🎉</div>
            <h3 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent mb-4 font-orbitron">
              Surprise! 🎁
            </h3>
            <p className="text-xl text-white/80 mb-2 font-rajdhani">
              Hey! I'm Dharun 👋
            </p>
            <p className="text-lg text-white/70 mb-4 font-rajdhani">
              Nice to meet you! Welcome to my digital universe! 🚀
            </p>
            <div className="mt-6 flex justify-center space-x-2">
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-pink-400 rounded-full animate-bounce delay-100"></div>
              <div className="w-2 h-2 bg-yellow-400 rounded-full animate-bounce delay-200"></div>
            </div>
          </div>
        </div>
      )}

      <div 
        ref={heroRef}
        className="text-center z-20 relative w-full max-w-6xl mx-auto px-6"
        style={{ 
          transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)` 
        }}
      >
        <div className="animate-fade-in">
          {/* Fixed terminal with better text visibility */}
          <div className="mb-8 relative">
            <div className="relative mb-12">
              {/* Optimized 3D Laptop Frame - Made larger */}
              <div className="mx-auto w-[450px] h-[280px] perspective-1000">
                <div className="relative w-full h-full transform rotateX-10 transition-transform duration-1000 hover:rotateX-5">
                  {/* Laptop Screen - Made much larger for better text visibility */}
                  <div className="w-full h-64 bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-t-xl border-2 border-gray-700 shadow-xl relative overflow-hidden">
                    <div className="absolute inset-1 bg-black rounded-lg">
                      {/* Terminal Window - Increased size and padding */}
                      <div className="p-6 font-mono text-green-400 text-base h-full flex flex-col">
                        <div className="flex items-center mb-4">
                          <div className="flex space-x-1">
                            <div className="w-3 h-3 rounded-full bg-red-500"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                          </div>
                          <span className="ml-4 text-gray-400 text-sm">terminal</span>
                        </div>
                        <div className="space-y-3 flex-1">
                          <div className="text-green-400">$ cd portfolio/</div>
                          <div className="text-green-400">$ echo "Creating magic..."</div>
                          <div className="text-cyan-400">Creating magic...</div>
                          <div className="text-green-400">$ whoami</div>
                          {/* Fixed terminal output with proper sizing and visibility */}
                          <div className="text-white font-bold text-base bg-gray-800/70 p-4 rounded border-l-4 border-cyan-400 mt-4">
                            <div className="text-cyan-400 font-bold leading-relaxed text-lg">
                              {typingText}<span className="animate-pulse text-cyan-400">|</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Laptop Base */}
                  <div className="w-full h-4 bg-gradient-to-br from-gray-800 to-gray-900 rounded-b-xl border-2 border-t-0 border-gray-700 shadow-lg"></div>
                </div>
              </div>
            </div>

            <h1 className="text-6xl md:text-8xl font-black tracking-wider mb-4 font-orbitron">
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-cyan-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent drop-shadow-2xl">
                  DHARUN
                </span>
              </span>
            </h1>
            <h1 className="text-4xl md:text-6xl font-light tracking-[0.3em] font-rajdhani">
              <span className="bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                PRASAD M
              </span>
            </h1>
          </div>
          
          {/* Enhanced description */}
          <p className="text-lg text-white/70 max-w-2xl mx-auto mb-12 leading-relaxed font-light font-inter">
            Crafting immersive digital experiences through innovative code, stunning design, and cutting-edge technology
          </p>
          
          {/* Enhanced action buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button 
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="group relative px-10 py-4 bg-gradient-to-r from-cyan-500 via-violet-500 to-fuchsia-500 rounded-xl text-white font-bold text-lg overflow-hidden transition-all duration-500 hover:scale-105 shadow-xl hover:shadow-cyan-500/25 font-rajdhani"
            >
              <span className="relative z-10">Explore My Universe</span>
            </button>
            
            <button 
              onClick={viewResume}
              className="group relative px-10 py-4 border-2 border-emerald-400 rounded-xl text-emerald-400 font-bold text-lg backdrop-blur-xl bg-emerald-400/10 transition-all duration-500 hover:bg-emerald-400 hover:text-black hover:scale-105 shadow-lg hover:shadow-emerald-400/25 font-rajdhani"
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
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 group cursor-pointer z-30 transition-all duration-500 animate-bounce"
        >
          <div className="flex flex-col items-center space-y-2">
            <span className="text-white/60 text-xs font-light tracking-wider uppercase font-inter">Scroll to Discover</span>
            <div className="w-10 h-10 rounded-full border-2 border-white/30 flex items-center justify-center group-hover:border-cyan-400 group-hover:bg-cyan-400/20 transition-all duration-300 backdrop-blur-sm">
              <ChevronDown className="text-white/60 group-hover:text-cyan-400 transition-colors duration-300" size={20} />
            </div>
          </div>
        </button>
      )}
    </section>
  );
};
