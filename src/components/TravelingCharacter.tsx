
import { useEffect, useState } from "react";

export const TravelingCharacter = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
      setIsVisible(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed right-8 z-40 pointer-events-none">
      <div 
        className="transition-all duration-300 ease-out"
        style={{ 
          top: `${Math.min(scrollProgress * 6 + 20, 80)}vh`,
          transform: `translateY(-50%) ${scrollProgress > 50 ? 'scaleX(-1)' : 'scaleX(1)'}`
        }}
      >
        {/* Simple rocket character */}
        <div className="relative">
          <div className="text-4xl animate-bounce" style={{ animationDuration: '2s' }}>
            🚀
          </div>
          {/* Trail effect */}
          <div className="absolute -left-8 top-1/2 transform -translate-y-1/2">
            <div className="flex space-x-1">
              <div className="w-1 h-1 bg-cyan-400 rounded-full animate-pulse"></div>
              <div className="w-1 h-1 bg-violet-400 rounded-full animate-pulse delay-100"></div>
              <div className="w-1 h-1 bg-pink-400 rounded-full animate-pulse delay-200"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
