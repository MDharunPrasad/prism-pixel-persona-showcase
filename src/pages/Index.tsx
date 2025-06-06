
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Services } from "@/components/Services";
import { Game } from "@/components/Game";
import { Contact } from "@/components/Contact";
import { Navigation } from "@/components/Navigation";
import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

const Index = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [cursorHover, setCursorHover] = useState(false);
  const [cursorClick, setCursorClick] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    // Add smooth scrolling behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Advanced cursor effect
    const handleMouseMove = (e: MouseEvent) => {
      // Small delay for smoother effect
      setTimeout(() => {
        setCursorPosition({ x: e.clientX, y: e.clientY });
      }, 10);
    };
    
    const handleMouseDown = () => {
      setCursorClick(true);
      setTimeout(() => setCursorClick(false), 300);
    };
    
    // Track cursor hover over interactive elements
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = 
        target.tagName === 'BUTTON' || 
        target.tagName === 'A' || 
        target.closest('button') || 
        target.closest('a') ||
        target.classList.contains('interactive');
      
      setCursorHover(isInteractive);
    };
    
    // Handle scroll for scroll-to-top button
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > window.innerHeight);
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('scroll', handleScroll);
    
    // Check for mobile/touch devices and disable custom cursor
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (!isTouchDevice) {
      document.body.style.cursor = 'none';
    }
    
    // Create parallax effect for elements with parallax class
    const handleParallax = () => {
      const parallaxElements = document.querySelectorAll('.parallax');
      parallaxElements.forEach(element => {
        const el = element as HTMLElement;
        const speed = parseFloat(el.dataset.speed || '0.5');
        const scrollTop = window.scrollY;
        const translateY = scrollTop * speed * 0.05;
        el.style.transform = `translateY(${translateY}px)`;
      });
    };
    
    window.addEventListener('scroll', handleParallax);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', handleParallax);
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
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Services />
      <Game />
      <Contact />
      
      {/* Enhanced background elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] bg-gradient-to-r from-purple-500/5 to-blue-500/5 rounded-full blur-3xl animate-spin-slow"></div>
      </div>
      
      {/* Custom futuristic cursor (hidden on mobile) */}
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
      
      {/* Scroll to top button */}
      <button 
        onClick={scrollToTop} 
        className={`scroll-to-top ${showScrollTop ? 'visible' : ''} bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 p-3 rounded-full shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-110`}
        aria-label="Scroll to top"
      >
        <ChevronUp className="text-white" />
      </button>
    </div>
  );
};

export default Index;
