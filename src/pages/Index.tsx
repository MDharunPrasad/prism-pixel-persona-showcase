
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Services } from "@/components/Services";
import { Contact } from "@/components/Contact";
import { Navigation } from "@/components/Navigation";
import { TravelingCharacter } from "@/components/TravelingCharacter";
import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

const Index = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [cursorHover, setCursorHover] = useState(false);
  const [cursorClick, setCursorClick] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    // Add smooth scrolling behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Optimized cursor effect with throttling
    let lastUpdate = 0;
    const handleMouseMove = (e: MouseEvent) => {
      const now = Date.now();
      if (now - lastUpdate > 16) {
        setCursorPosition({ x: e.clientX, y: e.clientY });
        lastUpdate = now;
      }
    };
    
    const handleMouseDown = () => {
      setCursorClick(true);
      setTimeout(() => setCursorClick(false), 200);
    };
    
    // Fixed hover detection
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = 
        target.tagName === 'BUTTON' || 
        target.tagName === 'A' || 
        target.closest('button') !== null || 
        target.closest('a') !== null ||
        target.classList.contains('interactive');
      
      setCursorHover(Boolean(isInteractive));
    };
    
    // Throttled scroll handler with parallax
    let scrollTimeout: NodeJS.Timeout;
    const handleScroll = () => {
      if (scrollTimeout) clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        const currentScrollY = window.scrollY;
        setScrollY(currentScrollY);
        setShowScrollTop(currentScrollY > 400);
      }, 16);
    };
    
    // Detect mobile/touch devices and disable custom cursor
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    const isLowEndDevice = navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4;
    
    if (!isTouchDevice && !isLowEndDevice) {
      document.addEventListener('mousemove', handleMouseMove, { passive: true });
      document.addEventListener('mouseover', handleMouseOver, { passive: true });
      document.addEventListener('mousedown', handleMouseDown, { passive: true });
      document.body.style.cursor = 'none';
    }
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout) clearTimeout(scrollTimeout);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Detect if device is mobile or has reduced motion preference
  const isMobile = typeof window !== 'undefined' && (
    window.innerWidth < 768 || 
    'ontouchstart' in window || 
    navigator.maxTouchPoints > 0 ||
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-black via-slate-900 to-purple-900">
      <Navigation />
      
      {/* Parallax Hero */}
      <div 
        className="relative"
        style={{ 
          transform: `translateY(${scrollY * 0.1}px)` 
        }}
      >
        <Hero />
      </div>
      
      {/* Parallax About */}
      <div 
        className="relative"
        style={{ 
          transform: `translateY(${scrollY * 0.05}px)` 
        }}
      >
        <About />
      </div>
      
      {/* Parallax Skills */}
      <div 
        className="relative"
        style={{ 
          transform: `translateY(${scrollY * 0.08}px)` 
        }}
      >
        <Skills />
      </div>
      
      {/* Parallax Experience */}
      <div 
        className="relative"
        style={{ 
          transform: `translateY(${scrollY * 0.06}px)` 
        }}
      >
        <Experience />
      </div>
      
      {/* Parallax Projects */}
      <div 
        className="relative"
        style={{ 
          transform: `translateY(${scrollY * 0.04}px)` 
        }}
      >
        <Projects />
      </div>
      
      {/* Parallax Services */}
      <div 
        className="relative"
        style={{ 
          transform: `translateY(${scrollY * 0.07}px)` 
        }}
      >
        <Services />
      </div>
      
      {/* Parallax Contact */}
      <div 
        className="relative"
        style={{ 
          transform: `translateY(${scrollY * 0.03}px)` 
        }}
      >
        <Contact />
      </div>
      
      {/* Traveling Character */}
      <TravelingCharacter />
      
      {/* Enhanced parallax background elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div 
          className="absolute top-20 left-20 w-32 h-32 bg-purple-500/3 rounded-full blur-xl animate-pulse"
          style={{ 
            transform: `translateY(${scrollY * 0.15}px) rotate(${scrollY * 0.02}deg)` 
          }}
        ></div>
        <div 
          className="absolute bottom-20 right-20 w-40 h-40 bg-blue-500/3 rounded-full blur-xl animate-pulse delay-1000"
          style={{ 
            transform: `translateY(${scrollY * -0.12}px) rotate(${scrollY * -0.01}deg)` 
          }}
        ></div>
        <div 
          className="absolute top-1/2 left-1/4 w-24 h-24 bg-cyan-500/2 rounded-full blur-xl"
          style={{ 
            transform: `translateY(${scrollY * 0.08}px) translateX(${scrollY * 0.02}px)` 
          }}
        ></div>
        <div 
          className="absolute bottom-1/3 right-1/3 w-36 h-36 bg-fuchsia-500/2 rounded-full blur-xl"
          style={{ 
            transform: `translateY(${scrollY * -0.06}px) translateX(${scrollY * -0.01}px)` 
          }}
        ></div>
      </div>
      
      {/* Custom cursor (hidden on mobile/low-end devices) */}
      {!isMobile && (
        <div 
          className={`custom-cursor ${cursorHover ? 'cursor-hover' : ''} ${cursorClick ? 'cursor-click' : ''}`}
          style={{ 
            left: `${cursorPosition.x}px`, 
            top: `${cursorPosition.y}px` 
          }}
        >
          <div className="cursor-dot"></div>
          <div className="cursor-ring"></div>
        </div>
      )}
      
      {/* Scroll to top button with parallax */}
      <button 
        onClick={scrollToTop} 
        className={`scroll-to-top ${showScrollTop ? 'visible' : ''} bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 p-3 rounded-full shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-110`}
        style={{ 
          transform: `translateY(${scrollY * -0.02}px) ${showScrollTop ? 'translateY(0)' : 'translateY(20px)'}` 
        }}
        aria-label="Scroll to top"
      >
        <ChevronUp className="text-white" />
      </button>
    </div>
  );
};

export default Index;
