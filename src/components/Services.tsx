
import { useEffect, useRef } from "react";
import { Lock, Sparkles } from "lucide-react";

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
              }, index * 200);
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
      title: "UI/UX Design",
      description: "Creating stunning user interfaces with cutting-edge design principles",
      icon: "🎨",
      color: "from-pink-500 to-rose-500"
    },
    {
      title: "Web Development",
      description: "Full-stack development with modern technologies and frameworks",
      icon: "💻",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Mobile Apps",
      description: "Native and cross-platform mobile application development",
      icon: "📱",
      color: "from-purple-500 to-violet-500"
    },
    {
      title: "3D Animation",
      description: "Creating immersive 3D experiences and interactive animations",
      icon: "🎬",
      color: "from-emerald-500 to-teal-500"
    }
  ];

  return (
    <section id="services" className="py-32 bg-gradient-to-br from-indigo-950 via-slate-950 to-purple-950 relative overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/10 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6" ref={sectionRef}>
        <div className="text-center mb-20">
          <h2 className="text-6xl font-black bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent mb-8 tracking-wide">
            MY SERVICES
          </h2>
          <p className="text-2xl text-white/70 max-w-4xl mx-auto font-light leading-relaxed">
            Transforming ideas into digital masterpieces
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => (
            <div 
              key={index}
              className="service-card opacity-0 group relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 transition-all duration-500 hover:scale-110 hover:rotate-2 shadow-2xl"
            >
              <div className="text-center space-y-6">
                <div className="text-6xl mb-4 group-hover:scale-125 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-white/70 leading-relaxed">
                  {service.description}
                </p>
              </div>
              <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-10 rounded-3xl transition-all duration-500`}></div>
            </div>
          ))}
        </div>

        {/* Coming Soon Section */}
        <div className="relative bg-gradient-to-br from-black/40 to-black/60 backdrop-blur-xl rounded-3xl border border-white/20 p-12 text-center overflow-hidden">
          {/* Animated lock icon */}
          <div className="relative mb-8">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full animate-pulse-glow">
              <Lock size={40} className="text-white animate-bounce" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 rounded-full blur-xl scale-150 animate-spin-slow"></div>
          </div>
          
          <h3 className="text-4xl font-black bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent mb-4 tracking-wide">
            PREMIUM SERVICES
          </h3>
          <p className="text-xl text-white/80 mb-8 font-light">
            Advanced consulting and enterprise solutions launching soon...
          </p>
          
          {/* Animated sparkles */}
          <div className="flex justify-center space-x-4">
            {[...Array(5)].map((_, i) => (
              <Sparkles 
                key={i}
                className="text-yellow-400 animate-pulse" 
                style={{ 
                  animationDelay: `${i * 0.2}s`,
                  animationDuration: '1.5s'
                }}
              />
            ))}
          </div>
          
          {/* Background animation */}
          <div className="absolute inset-0 overflow-hidden rounded-3xl">
            <div className="absolute -inset-10 bg-gradient-to-r from-yellow-400/5 via-orange-400/5 to-red-400/5 animate-gradient"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
