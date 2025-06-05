
import { Mail, Phone, Github, ExternalLink } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-6">
            Get In Touch
          </h2>
          <p className="text-xl text-white/60 max-w-3xl mx-auto">
            Ready to collaborate on your next project? Let's create something amazing together
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-white mb-6">Let's Connect</h3>
            
            <div className="space-y-6">
              <a 
                href="mailto:dharunprasad9494@gmail.com"
                className="flex items-center group p-4 bg-gradient-to-r from-purple-500/10 to-blue-500/10 backdrop-blur-sm rounded-lg border border-white/10 hover:scale-105 transition-all duration-300"
              >
                <Mail className="text-purple-400 mr-4" size={24} />
                <div>
                  <div className="text-white font-medium">Email</div>
                  <div className="text-white/60 group-hover:text-white transition-colors">dharunprasad9494@gmail.com</div>
                </div>
              </a>

              <a 
                href="tel:9677689494"
                className="flex items-center group p-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm rounded-lg border border-white/10 hover:scale-105 transition-all duration-300"
              >
                <Phone className="text-blue-400 mr-4" size={24} />
                <div>
                  <div className="text-white font-medium">Phone</div>
                  <div className="text-white/60 group-hover:text-white transition-colors">+91 9677689494</div>
                </div>
              </a>

              <a 
                href="https://github.com/MDharunPrasad"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center group p-4 bg-gradient-to-r from-purple-500/10 to-blue-500/10 backdrop-blur-sm rounded-lg border border-white/10 hover:scale-105 transition-all duration-300"
              >
                <Github className="text-purple-400 mr-4" size={24} />
                <div className="flex-1">
                  <div className="text-white font-medium">GitHub</div>
                  <div className="text-white/60 group-hover:text-white transition-colors">MDharunPrasad</div>
                </div>
                <ExternalLink className="text-white/40" size={18} />
              </a>

              <a 
                href="https://www.linkedin.com/in/dharun-prasad-m-328974228/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center group p-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm rounded-lg border border-white/10 hover:scale-105 transition-all duration-300"
              >
                <div className="text-blue-400 mr-4 text-2xl font-bold">in</div>
                <div className="flex-1">
                  <div className="text-white font-medium">LinkedIn</div>
                  <div className="text-white/60 group-hover:text-white transition-colors">Dharun Prasad M</div>
                </div>
                <ExternalLink className="text-white/40" size={18} />
              </a>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 backdrop-blur-sm rounded-xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
            
            <form className="space-y-6">
              <div>
                <label className="block text-white/80 mb-2">Name</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-purple-400 transition-colors"
                  placeholder="Your Name"
                />
              </div>
              
              <div>
                <label className="block text-white/80 mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-purple-400 transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label className="block text-white/80 mb-2">Message</label>
                <textarea 
                  rows={4}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-purple-400 transition-colors resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg text-white font-semibold hover:scale-105 transition-transform duration-300 hover:shadow-2xl hover:shadow-purple-500/25"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
