
import { useEffect, useRef } from "react";
import { Lock, Palette, Code, Smartphone, Video, Globe, Brush } from "lucide-react";

export const Services = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.service-card');
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add('animate-scale-in');
              }, index * 150);
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      title: "Creative Design Bundle",
      description: "Logo, Banner & Thumbnail design package for complete brand identity",
      icon: <Palette className="w-6 h-6" />,
      price: "₹1,299",
      color: "from-purple-500 to-violet-500",
      services: ["Logo Design", "Banner Design", "Thumbnail Design"]
    },
    {
      title: "Website Solutions",
      description: "Complete website development and portfolio creation services",
      icon: <Globe className="w-6 h-6" />,
      price: "₹4,999",
      color: "from-blue-500 to-cyan-500",
      services: ["Portfolio Creation", "Complete Websites", "Website Enhancement"]
    },
    {
      title: "Video Editing Pro",
      description: "Professional video editing for content creators and businesses",
      icon: <Video className="w-6 h-6" />,
      price: "₹1,499",
      color: "from-orange-500 to-red-500",
      services: ["Video Editing", "Motion Graphics", "Color Grading"]
    },
    {
      title: "UI/UX Design",
      description: "Modern and intuitive user interface and experience design",
      icon: <Smartphone className="w-6 h-6" />,
      price: "₹2,499",
      color: "from-indigo-500 to-blue-500",
      services: ["UI Design", "UX Research", "Prototyping"]
    }
  ];

  return (
    <section id="services" className="py-16 bg-gradient-to-br from-indigo-950 via-slate-950 to-purple-950 relative overflow-hidden">
      {/* Simplified background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-24 h-24 bg-gradient-to-r from-cyan-400/10 to-violet-400/10 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-r from-fuchsia-400/10 to-emerald-400/10 rounded-full blur-xl animate-float delay-1000"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6" ref={sectionRef}>
        <div className="text-center mb-12">
          <h2 className="text-5xl font-black bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent mb-6 tracking-wide">
            MY SERVICES
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto font-light leading-relaxed">
            Professional digital solutions for your creative needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {services.map((service, index) => (
            <div 
              key={index}
              className="service-card opacity-0 group relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-xl p-5 border border-white/20 transition-all duration-500 hover:scale-105 hover:rotate-1 shadow-xl hover:shadow-cyan-500/20"
            >
              <div className="text-center space-y-3">
                <div className={`w-14 h-14 mx-auto bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-all duration-300 text-white shadow-lg animate-rotating-glow`}>
                  {service.icon}
                </div>
                <h3 className="text-base font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-white/70 leading-relaxed text-xs">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-1 justify-center">
                  {service.services.map((item, i) => (
                    <div key={i} className="text-xs text-white/50 bg-white/5 rounded-lg py-1 px-2">
                      {item}
                    </div>
                  ))}
                </div>
                <div className="pt-2 border-t border-white/10">
                  <div className="text-xl font-black bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                    {service.price}
                  </div>
                  <button className="mt-2 px-4 py-1.5 bg-gradient-to-r from-cyan-500 to-violet-500 rounded-lg text-white font-semibold text-xs hover:scale-105 transition-all duration-300 shadow-md hover:shadow-cyan-500/20">
                    Get Started
                  </button>
                </div>
              </div>
              <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-5 rounded-xl transition-all duration-500`}></div>
            </div>
          ))}
        </div>

        {/* Premium Services Section */}
        <div className="relative bg-gradient-to-br from-black/40 to-purple-900/40 backdrop-blur-xl rounded-2xl border border-white/20 p-8 text-center overflow-hidden">
          {/* Enhanced glowing effects */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full"
                style={{
                  width: `${Math.random() * 200 + 50}px`,
                  height: `${Math.random() * 200 + 50}px`,
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  background: `radial-gradient(circle, rgba(255, 215, 0, 0.15) 0%, rgba(255, 215, 0, 0) 70%)`,
                  animation: `pulse-glow ${Math.random() * 5 + 3}s infinite ease-in-out`,
                  animationDelay: `${Math.random() * 5}s`
                }}
              />
            ))}
          </div>

          <div className="relative mb-6">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full animate-pulse shadow-xl">
              <Lock size={40} className="text-white" />
            </div>
          </div>
          
          <h3 className="text-3xl font-black bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent mb-4 animate-pulse-glow">
            PREMIUM ENTERPRISE SOLUTIONS
          </h3>
          <p className="text-lg text-white/80 mb-6 max-w-2xl mx-auto">
            Advanced consulting and enterprise applications launching soon...
          </p>
          
          {/* More dynamic sparkle effect */}
          <div className="flex justify-center space-x-4 mb-6">
            {[...Array(5)].map((_, i) => (
              <div 
                key={i}
                className="text-yellow-400 animate-pulse"
                style={{ 
                  animationDelay: `${i * 0.2}s`,
                  transform: `scale(${0.8 + Math.random() * 0.4})` 
                }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 3L14.5 8.5L20.5 9L16 13L17.5 19L12 16L6.5 19L8 13L3.5 9L9.5 8.5L12 3Z" fill="currentColor" />
                </svg>
              </div>
            ))}
          </div>
          
          <div className="text-sm text-white/60 font-mono">
            Expected Launch: Q2 2025
          </div>
        </div>
      </div>
    </section>
  );
};
