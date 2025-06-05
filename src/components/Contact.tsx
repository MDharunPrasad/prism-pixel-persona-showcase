
import { useState } from "react";
import { Mail, Phone, Github, ExternalLink, Send, CheckCircle } from "lucide-react";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  return (
    <section id="contact" className="py-32 bg-gradient-to-br from-slate-950 via-purple-950 to-indigo-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-6xl font-black bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent mb-8 tracking-wide">
            LET'S CONNECT
          </h2>
          <p className="text-2xl text-white/70 max-w-4xl mx-auto font-light leading-relaxed">
            Ready to collaborate on extraordinary projects? Let's create something amazing together
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <h3 className="text-4xl font-bold text-white mb-8 tracking-wide">Get In Touch</h3>
            
            <div className="space-y-6">
              <a 
                href="mailto:dharunprasad9494@gmail.com"
                className="flex items-center group p-6 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 backdrop-blur-xl rounded-2xl border border-white/20 hover:border-emerald-400/50 hover:scale-105 transition-all duration-300 shadow-xl"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-xl flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300">
                  <Mail className="text-white" size={24} />
                </div>
                <div>
                  <div className="text-white font-bold text-xl mb-1">Email</div>
                  <div className="text-emerald-400 text-lg group-hover:text-emerald-300 transition-colors">
                    dharunprasad9494@gmail.com
                  </div>
                </div>
              </a>

              <a 
                href="tel:9677689494"
                className="flex items-center group p-6 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-xl rounded-2xl border border-white/20 hover:border-cyan-400/50 hover:scale-105 transition-all duration-300 shadow-xl"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300">
                  <Phone className="text-white" size={24} />
                </div>
                <div>
                  <div className="text-white font-bold text-xl mb-1">Phone</div>
                  <div className="text-cyan-400 text-lg group-hover:text-cyan-300 transition-colors">
                    +91 9677689494
                  </div>
                </div>
              </a>

              <a 
                href="https://github.com/MDharunPrasad"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center group p-6 bg-gradient-to-r from-violet-500/10 to-purple-500/10 backdrop-blur-xl rounded-2xl border border-white/20 hover:border-violet-400/50 hover:scale-105 transition-all duration-300 shadow-xl"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-violet-500 to-purple-500 rounded-xl flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300">
                  <Github className="text-white" size={24} />
                </div>
                <div className="flex-1">
                  <div className="text-white font-bold text-xl mb-1">GitHub</div>
                  <div className="text-violet-400 text-lg group-hover:text-violet-300 transition-colors">
                    MDharunPrasad
                  </div>
                </div>
                <ExternalLink className="text-white/40 group-hover:text-violet-400 transition-colors duration-300" size={20} />
              </a>

              <a 
                href="https://www.linkedin.com/in/dharun-prasad-m-328974228/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center group p-6 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 backdrop-blur-xl rounded-2xl border border-white/20 hover:border-blue-400/50 hover:scale-105 transition-all duration-300 shadow-xl"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-white text-2xl font-bold">in</div>
                </div>
                <div className="flex-1">
                  <div className="text-white font-bold text-xl mb-1">LinkedIn</div>
                  <div className="text-blue-400 text-lg group-hover:text-blue-300 transition-colors">
                    Dharun Prasad M
                  </div>
                </div>
                <ExternalLink className="text-white/40 group-hover:text-blue-400 transition-colors duration-300" size={20} />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl">
            <h3 className="text-4xl font-bold text-white mb-8 tracking-wide">Send Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-white/90 mb-3 font-semibold">Name</label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-cyan-400 focus:bg-white/15 transition-all duration-300"
                  placeholder="Your Name"
                />
              </div>
              
              <div>
                <label className="block text-white/90 mb-3 font-semibold">Email</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-cyan-400 focus:bg-white/15 transition-all duration-300"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label className="block text-white/90 mb-3 font-semibold">Subject</label>
                <input 
                  type="text" 
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-cyan-400 focus:bg-white/15 transition-all duration-300"
                  placeholder="Project Discussion"
                />
              </div>
              
              <div>
                <label className="block text-white/90 mb-3 font-semibold">Message</label>
                <textarea 
                  rows={5}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-cyan-400 focus:bg-white/15 transition-all duration-300 resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>
              
              <button 
                type="submit"
                disabled={isSubmitting || isSubmitted}
                className={`w-full px-8 py-5 rounded-2xl font-bold text-lg transition-all duration-500 ${
                  isSubmitted 
                    ? 'bg-green-500 text-white' 
                    : 'bg-gradient-to-r from-cyan-500 via-violet-500 to-fuchsia-500 text-white hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25'
                } ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {isSubmitted ? (
                  <span className="flex items-center justify-center">
                    <CheckCircle className="mr-2" size={20} />
                    Message Sent!
                  </span>
                ) : isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center justify-center">
                    <Send className="mr-2" size={20} />
                    Send Message
                  </span>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
