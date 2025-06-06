
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Detect active section
      const sections = ["home", "about", "skills", "experience", "projects", "services", "game", "contact"];
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#services", label: "Services" },
    { href: "#game", label: "Game" },
    { href: "#contact", label: "Contact" }
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      scrolled ? 'bg-black/70 backdrop-blur-2xl border-b border-white/10 shadow-2xl py-1' : 'bg-transparent py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div 
            onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}
            className="text-3xl font-black bg-gradient-to-r from-cyan-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent hover:scale-110 transition-transform duration-300 cursor-pointer"
          >
            DP
          </div>
          
          {/* Desktop Menu with enhanced active state */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`text-white/80 hover:text-white transition-all duration-300 relative group text-lg font-medium ${
                  activeSection === item.href.substring(1) ? 'text-cyan-400' : ''
                }`}
              >
                {item.label}
                <span className={`absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-cyan-400 to-violet-400 transition-all duration-500 rounded-full ${
                  activeSection === item.href.substring(1) ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-violet-400/10 scale-0 group-hover:scale-100 transition-transform duration-300 rounded-lg -z-10"></div>
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-3 rounded-xl bg-white/10 backdrop-blur-xl border border-white/20 hover:bg-white/20 transition-all duration-300"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Enhanced Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-2xl border-t border-white/10 shadow-2xl">
          <div className="px-6 py-8 space-y-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`block text-lg font-medium transition-all duration-300 hover:translate-x-2 py-1 px-4 rounded-lg ${
                  activeSection === item.href.substring(1) 
                    ? 'bg-gradient-to-r from-cyan-500/20 to-violet-500/20 text-cyan-400 border-l-2 border-cyan-400 pl-4' 
                    : 'text-white/80 hover:text-white'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};
