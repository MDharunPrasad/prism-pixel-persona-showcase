import { useEffect, useRef } from "react";
import { Lock, Palette, Code, Smartphone, Video, Globe } from "lucide-react";

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
              }, index * 100);
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

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const services = [
    {
      title: "Creative Design Bundle",
      description: "Logo, Banner & Thumbnail design package for complete brand identity",
      icon: <Palette className="w-6 h-6" />,
      price: "₹199",
      color: "from-purple-500 to-violet-500",
      services: ["Logo Design", "Banner Design", "Thumbnail Design"]
    },
    {
      title: "Website Solutions",
      description: "Complete website development and portfolio creation services",
      icon: <Globe className="w-6 h-6" />,
      price: "₹3,999",
      color: "from-blue-500 to-cyan-500",
      services: ["Portfolio Creation", "Complete Websites"]
    },
    {
      title: "Video Editing Pro",
      description: "Professional video editing for content creators and businesses",
      icon: <Video className="w-6 h-6" />,
      price: "₹599",
      color: "from-orange-500 to-red-500",
      services: ["Video Editing"]
    },
    {
      title: "UI/UX Design",
      description: "Modern and intuitive user interface and experience design",
      icon: <Smartphone className="w-6 h-6" />,
      price: "₹1999",
      color: "from-indigo-500 to-blue-500",
      services: ["UI Design", "UX Research", "Prototyping"]
    }
  ];

  return (
    <section id="services" className="py-16 bg-gradient-to-br from-indigo-950 via-slate-950 to-purple-950 relative overflow-hidden">
      {/* Minimal background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-cyan-400/5 to-violet-400/5 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-gradient-to-r from-fuchsia-400/5 to-emerald-400/5 rounded-full blur-xl"></div>
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
              className="service-card opacity-0 group relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-xl p-5 border border-white/20 transition-all duration-300 hover:scale-105 shadow-xl"
            >
              <div className="text-center space-y-3">
                <div className={`w-14 h-14 mx-auto bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-all duration-300 text-white shadow-lg`}>
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
                  <button 
                    onClick={scrollToContact}
                    className="mt-2 px-4 py-1.5 bg-gradient-to-r from-cyan-500 to-violet-500 rounded-lg text-white font-semibold text-xs hover:scale-105 transition-all duration-300 shadow-md"
                  >
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Simplified Premium Services Section */}
        <div className="relative bg-gradient-to-br from-black/40 to-purple-900/40 backdrop-blur-xl rounded-2xl border border-white/20 p-8 text-center">
          <div className="relative mb-6">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full shadow-xl">
              <Lock size={40} className="text-white" />
            </div>
          </div>
          
          <h3 className="text-3xl font-black bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent mb-4">
            PREMIUM ENTERPRISE SOLUTIONS
          </h3>
          <p className="text-lg text-white/80 mb-6 max-w-2xl mx-auto">
            Advanced consulting and enterprise applications launching soon...
          </p>
          
          <div className="flex justify-center space-x-4 mb-6">
            {[...Array(5)].map((_, i) => (
              <div 
                key={i}
                className="text-yellow-400"
              >
                ⭐
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
