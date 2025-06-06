
import { useState } from "react";
import { Mail, Phone, MapPin, Send, ArrowUp } from "lucide-react";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    alert("Thank you for your message! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-slate-950 via-purple-950 to-indigo-950 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-cyan-400/5 to-violet-400/5 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-gradient-to-r from-fuchsia-400/5 to-emerald-400/5 rounded-full blur-xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black bg-gradient-to-r from-cyan-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent mb-6 tracking-wide font-orbitron">
            GET IN TOUCH
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto font-light leading-relaxed font-inter">
            Ready to bring your ideas to life? Let's create something amazing together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-white mb-6 font-rajdhani">Let's Connect</h3>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4 group">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-violet-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Mail className="text-white" size={20} />
                </div>
                <div>
                  <p className="text-white/60 text-sm font-inter">Email</p>
                  <a href="mailto:dharunprasad@example.com" className="text-white font-semibold hover:text-cyan-400 transition-colors duration-300 font-rajdhani">
                    dharunprasad@example.com
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4 group">
                <div className="w-12 h-12 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Phone className="text-white" size={20} />
                </div>
                <div>
                  <p className="text-white/60 text-sm font-inter">Phone</p>
                  <a href="tel:+1234567890" className="text-white font-semibold hover:text-violet-400 transition-colors duration-300 font-rajdhani">
                    +91 12345 67890
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4 group">
                <div className="w-12 h-12 bg-gradient-to-r from-fuchsia-500 to-emerald-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="text-white" size={20} />
                </div>
                <div>
                  <p className="text-white/60 text-sm font-inter">Location</p>
                  <p className="text-white font-semibold font-rajdhani">
                    Chennai, Tamil Nadu, India
                  </p>
                </div>
              </div>
            </div>

            {/* Professional Links */}
            <div className="pt-6 border-t border-white/10">
              <h4 className="text-lg font-semibold text-white mb-4 font-rajdhani">Professional Links</h4>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="px-4 py-2 bg-gradient-to-r from-blue-600/20 to-blue-400/20 backdrop-blur-xl rounded-lg text-white/80 hover:text-white hover:bg-blue-500/30 transition-all duration-300 text-sm border border-blue-400/20 font-inter"
                >
                  LinkedIn
                </a>
                <a
                  href="#"
                  className="px-4 py-2 bg-gradient-to-r from-gray-600/20 to-gray-400/20 backdrop-blur-xl rounded-lg text-white/80 hover:text-white hover:bg-gray-500/30 transition-all duration-300 text-sm border border-gray-400/20 font-inter"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-white/80 text-sm font-medium mb-2 font-inter">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 font-inter"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-white/80 text-sm font-medium mb-2 font-inter">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 font-inter"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-white/80 text-sm font-medium mb-2 font-inter">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 resize-none font-inter"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-cyan-500 to-violet-500 text-white font-semibold py-4 px-6 rounded-xl hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center space-x-2 font-rajdhani"
              >
                <Send size={18} />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>

        {/* Go to Top Button */}
        <div className="flex justify-center mt-16">
          <button
            onClick={scrollToTop}
            className="group bg-gradient-to-r from-violet-500 to-fuchsia-500 hover:from-violet-400 hover:to-fuchsia-400 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-violet-500/25 hover:scale-105 flex items-center space-x-2 font-rajdhani"
          >
            <ArrowUp size={18} />
            <span>Back to Top</span>
          </button>
        </div>
      </div>
    </section>
  );
};
