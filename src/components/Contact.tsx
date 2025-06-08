import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";
import { useRef } from "react";

export const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <section id="contact" className="py-12 md:py-24 bg-gradient-to-br from-slate-950 via-purple-950 to-indigo-950 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
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

      <div className="max-w-6xl mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-4xl md:text-6xl font-black bg-gradient-to-r from-cyan-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent mb-4 md:mb-6 tracking-wide animate-pulse-glow font-orbitron">
            CONNECT WITH ME
          </h2>
          <p className="text-lg md:text-2xl text-white/70 mb-6 md:mb-10 font-light">
            Let's create something amazing together
          </p>
        </div>

        <div className="glass rounded-2xl md:rounded-3xl p-6 md:p-8 max-w-2xl mx-auto">
          <div className="space-y-6 md:space-y-8">
            <div className="flex items-center space-x-4 group">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Mail className="text-white" size={20} />
              </div>
              <div>
                <p className="text-white/60 text-sm">Email</p>
                <a href="mailto:dharunprasad9494@gmail.com" className="text-white font-semibold hover:text-cyan-400 transition-colors">
                  dharunprasad9494@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-4 group">
              <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Phone className="text-white" size={20} />
              </div>
              <div>
                <p className="text-white/60 text-sm">Phone</p>
                <a href="tel:+919677689494" className="text-white font-semibold hover:text-emerald-400 transition-colors">
                  +91 9677689494
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-4 group">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <MapPin className="text-white" size={20} />
              </div>
              <div>
                <p className="text-white/60 text-sm">Location</p>
                <p className="text-white font-semibold">Dindigul, Tamilnadu</p>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex justify-center space-x-4 pt-6 mt-6 border-t border-white/10">
              <a 
                href="https://www.linkedin.com/in/dharunprasad-m-328974228/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
              >
                <Linkedin className="text-white" size={20} />
              </a>
              <a 
                href="https://github.com/MDharunPrasad" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-12 h-12 bg-gradient-to-r from-gray-700 to-gray-900 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
              >
                <Github className="text-white" size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
