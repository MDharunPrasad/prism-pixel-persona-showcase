
import { useEffect, useRef } from "react";
import { Lock, Sparkles, Palette, Code, Smartphone, Video, Brush, Globe } from "lucide-react";

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
      title: "Portfolio Creation",
      description: "Stunning personal and professional portfolios that showcase your work",
      icon: <Globe className="w-8 h-8" />,
      price: "₹2,999",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Website Enhancement",
      description: "Optimize and modernize existing websites for better performance",
      icon: <Code className="w-8 h-8" />,
      price: "₹1,999",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Logo Design",
      description: "Unique and memorable brand identities that stand out",
      icon: <Palette className="w-8 h-8" />,
      price: "₹999",
      color: "from-purple-500 to-violet-500"
    },
    {
      title: "Banner Design",
      description: "Eye-catching banners for social media and marketing campaigns",
      icon: <Brush className="w-8 h-8" />,
      price: "₹499",
      color: "from-pink-500 to-rose-500"
    },
    {
      title: "Video Editing",
      description: "Professional video editing for content creators and businesses",
      icon: <Video className="w-8 h-8" />,
      price: "₹1,499",
      color: "from-orange-500 to-red-500"
    },
    {
      title: "UI/UX Design",
      description: "Intuitive and beautiful user interfaces for web and mobile",
      icon: <Smartphone className="w-8 h-8" />,
      price: "₹2,499",
      color: "from-indigo-500 to-blue-500"
    },
    {
      title: "Thumbnail Design",
      description: "Compelling thumbnails that boost click-through rates",
      icon: <Sparkles className="w-8 h-8" />,
      price: "₹299",
      color: "from-yellow-500 to-orange-500"
    },
    {
      title: "Complete Websites",
      description: "Full-stack web development from concept to deployment",
      icon: <Globe className="w-8 h-8" />,
      price: "₹9,999",
      color: "from-cyan-500 to-teal-500"
    }
  ];

  return (
    <section id="services" className="py-32 bg-gradient-to-br from-indigo-950 via-slate-950 to-purple-950 relative overflow-hidden">
      {/* Enhanced animated background particles */}
      <div className="absolute inset-0">
        {[...Array(80)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      {/* Floating geometric shapes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-cyan-400/10 to-violet-400/10 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-gradient-to-r from-fuchsia-400/10 to-emerald-400/10 rounded-full blur-xl animate-float delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-r from-yellow-400/10 to-red-400/10 rounded-full blur-xl animate-float delay-500"></div>
      </div>

      <div className="max-w-8xl mx-auto px-6" ref={sectionRef}>
        <div className="text-center mb-20">
          <h2 className="text-7xl font-black bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent mb-8 tracking-wide">
            MY SERVICES
          </h2>
          <p className="text-3xl text-white/70 max-w-4xl mx-auto font-light leading-relaxed">
            Transforming ideas into digital masterpieces with cutting-edge design and development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {services.map((service, index) => (
            <div 
              key={index}
              className="service-card opacity-0 group relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-2xl rounded-3xl p-8 border border-white/20 transition-all duration-700 hover:scale-110 hover:rotate-2 shadow-2xl hover:shadow-cyan-500/25 transform-gpu"
            >
              <div className="text-center space-y-6">
                <div className={`w-20 h-20 mx-auto bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-125 transition-all duration-500 text-white shadow-2xl`}>
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-white/70 leading-relaxed text-sm">
                  {service.description}
                </p>
                <div className="pt-4 border-t border-white/10">
                  <div className="text-3xl font-black bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                    {service.price}
                  </div>
                  <button className="mt-4 px-6 py-3 bg-gradient-to-r from-cyan-500 to-violet-500 rounded-xl text-white font-semibold text-sm hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-cyan-500/30">
                    Get Started
                  </button>
                </div>
              </div>
              <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-5 rounded-3xl transition-all duration-700`}></div>
            </div>
          ))}
        </div>

        {/* Enhanced Premium Services Section */}
        <div className="relative bg-gradient-to-br from-black/60 to-purple-900/60 backdrop-blur-2xl rounded-3xl border-2 border-white/20 p-16 text-center overflow-hidden shadow-2xl">
          {/* Animated lock icon with 3D effect */}
          <div className="relative mb-12">
            <div className="inline-flex items-center justify-center w-32 h-32 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full animate-pulse-glow shadow-2xl transform-gpu">
              <Lock size={60} className="text-white animate-bounce" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/30 to-orange-400/30 rounded-full blur-3xl scale-150 animate-spin-slow"></div>
            
            {/* Orbiting particles */}
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute w-3 h-3 bg-yellow-400 rounded-full animate-pulse"
                style={{
                  top: '50%',
                  left: '50%',
                  transform: `translate(-50%, -50%) rotate(${i * 45}deg) translateY(-80px)`,
                  animationDelay: `${i * 0.2}s`
                }}
              />
            ))}
          </div>
          
          <h3 className="text-5xl font-black bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent mb-6 tracking-wide">
            PREMIUM ENTERPRISE SOLUTIONS
          </h3>
          <p className="text-2xl text-white/80 mb-12 font-light max-w-3xl mx-auto">
            Advanced consulting, enterprise applications, and custom software solutions launching soon...
          </p>
          
          {/* Enhanced animated sparkles */}
          <div className="flex justify-center space-x-6 mb-8">
            {[...Array(7)].map((_, i) => (
              <Sparkles 
                key={i}
                className="text-yellow-400 animate-pulse" 
                size={32}
                style={{ 
                  animationDelay: `${i * 0.3}s`,
                  animationDuration: '2s'
                }}
              />
            ))}
          </div>
          
          <div className="text-lg text-white/60 font-mono">
            Expected Launch: Q2 2025
          </div>
          
          {/* Background animation layers */}
          <div className="absolute inset-0 overflow-hidden rounded-3xl">
            <div className="absolute -inset-20 bg-gradient-to-r from-yellow-400/5 via-orange-400/5 to-red-400/5 animate-gradient"></div>
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-400 to-transparent animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
